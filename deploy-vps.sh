#!/bin/bash

# TingVote Creator Lab - VPS Deployment Script
# Domain: creator.tingnect.com

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Configuration
PROJECT_NAME="creator-tingnect"
DOMAIN="creator.tingnect.com"
DOCKER_IMAGE="tingvote/creator-lab"
CONTAINER_NAME="creator-tingnect"

echo -e "${BLUE}🚀 TingVote Creator Lab VPS Deployment${NC}"
echo -e "${BLUE}Domain: ${DOMAIN}${NC}"
echo "=================================================="

# Function to check prerequisites
check_prerequisites() {
    echo -e "${YELLOW}🔍 Checking prerequisites...${NC}"
    
    if ! command -v docker &> /dev/null; then
        echo -e "${RED}❌ Docker not installed${NC}"
        exit 1
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        echo -e "${RED}❌ Docker Compose not installed${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ Prerequisites check passed${NC}"
}

# Function to setup SSL certificates
setup_ssl() {
    echo -e "${YELLOW}🔒 Setting up SSL certificates...${NC}"
    
    # Create SSL directory
    mkdir -p ssl
    
    # Option 1: Self-signed certificate (for testing)
    if [ "$1" == "self-signed" ]; then
        echo -e "${YELLOW}📜 Creating self-signed certificate...${NC}"
        openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
            -keyout ssl/${DOMAIN}.key \
            -out ssl/${DOMAIN}.crt \
            -subj "/C=VN/ST=HoChiMinh/L=HoChiMinh/O=TingNect/CN=${DOMAIN}"
        echo -e "${GREEN}✅ Self-signed certificate created${NC}"
    fi
    
    # Option 2: Let's Encrypt (for production)
    if [ "$1" == "letsencrypt" ]; then
        echo -e "${YELLOW}🌐 Setting up Let's Encrypt...${NC}"
        # This will be handled by Traefik automatically
        echo -e "${GREEN}✅ Let's Encrypt will be configured automatically${NC}"
    fi
}

# Function to create environment file
create_env() {
    echo -e "${YELLOW}📝 Creating environment configuration...${NC}"
    
    cat > .env.production << EOF
# Production Environment
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
PORT=3000
HOSTNAME=0.0.0.0

# Domain Configuration
DOMAIN=${DOMAIN}
PROTOCOL=https

# Security (Change these in production!)
JWT_SECRET=your-super-secret-jwt-key-change-this
API_KEY=your-api-key-change-this

# Database (if needed)
# DATABASE_URL=your-database-url

# External Services (if needed)
# GOOGLE_ANALYTICS_ID=your-ga-id
# FACEBOOK_PIXEL_ID=your-fb-pixel-id
EOF
    
    echo -e "${GREEN}✅ Environment file created${NC}"
    echo -e "${YELLOW}⚠️  Please update .env.production with your actual values${NC}"
}

# Function to deploy with Traefik (recommended for production)
deploy_traefik() {
    echo -e "${YELLOW}🚀 Deploying with Traefik (SSL auto-renewal)...${NC}"
    
    # Create Let's Encrypt directory
    mkdir -p letsencrypt
    chmod 600 letsencrypt
    
    # Start services
    docker-compose -f docker-compose.prod.yml --profile traefik up -d
    
    echo -e "${GREEN}✅ Deployment with Traefik completed${NC}"
    echo -e "${BLUE}🌐 Your site will be available at: https://${DOMAIN}${NC}"
    echo -e "${BLUE}📊 Traefik dashboard: http://your-server-ip:8080${NC}"
}

# Function to deploy with Nginx
deploy_nginx() {
    echo -e "${YELLOW}🚀 Deploying with Nginx...${NC}"
    
    # Generate self-signed cert for testing
    setup_ssl "self-signed"
    
    # Start services
    docker-compose -f docker-compose.prod.yml --profile nginx up -d
    
    echo -e "${GREEN}✅ Deployment with Nginx completed${NC}"
    echo -e "${BLUE}🌐 Your site will be available at: https://${DOMAIN}${NC}"
    echo -e "${YELLOW}⚠️  Using self-signed certificate. For production, get a real SSL certificate${NC}"
}

# Function to deploy simple (app only)
deploy_simple() {
    echo -e "${YELLOW}🚀 Simple deployment (app only)...${NC}"
    
    # Build and start the app
    docker-compose -f docker-compose.prod.yml up -d tingvote-creator-lab
    
    echo -e "${GREEN}✅ Simple deployment completed${NC}"
    echo -e "${BLUE}🌐 Your app is running on: http://your-server-ip:3000${NC}"
    echo -e "${YELLOW}⚠️  No SSL configured. Set up a reverse proxy for production${NC}"
}

# Function to show status
show_status() {
    echo -e "${YELLOW}📊 Deployment Status:${NC}"
    docker-compose -f docker-compose.prod.yml ps
    echo ""
    
    echo -e "${YELLOW}🏥 Health Check:${NC}"
    sleep 5  # Wait for container to start
    if curl -f http://localhost:3000/api/health &>/dev/null; then
        echo -e "${GREEN}✅ Application is healthy${NC}"
    else
        echo -e "${RED}❌ Application health check failed${NC}"
    fi
    
    echo ""
    echo -e "${YELLOW}📋 Container Logs (last 20 lines):${NC}"
    docker logs --tail 20 creator-tingnect
}

# Function to setup firewall
setup_firewall() {
    echo -e "${YELLOW}🔥 Setting up firewall (UFW)...${NC}"
    
    if command -v ufw &> /dev/null; then
        # Allow SSH
        ufw allow ssh
        
        # Allow HTTP and HTTPS
        ufw allow 80
        ufw allow 443
        
        # Allow Traefik dashboard (optional)
        # ufw allow 8080
        
        echo -e "${GREEN}✅ Firewall rules added${NC}"
        echo -e "${YELLOW}⚠️  Enable firewall with: sudo ufw enable${NC}"
    else
        echo -e "${YELLOW}⚠️  UFW not installed, skipping firewall setup${NC}"
    fi
}

# Function to cleanup
cleanup() {
    echo -e "${YELLOW}🧹 Cleaning up...${NC}"
    docker-compose -f docker-compose.prod.yml down
    docker system prune -f
    echo -e "${GREEN}✅ Cleanup completed${NC}"
}

# Main menu
case "$1" in
    "check")
        check_prerequisites
        ;;
    "env")
        create_env
        ;;
    "ssl-self")
        setup_ssl "self-signed"
        ;;
    "traefik")
        check_prerequisites
        create_env
        deploy_traefik
        show_status
        ;;
    "nginx")
        check_prerequisites
        create_env
        deploy_nginx
        show_status
        ;;
    "simple")
        check_prerequisites
        deploy_simple
        show_status
        ;;
    "status")
        show_status
        ;;
    "firewall")
        setup_firewall
        ;;
    "cleanup")
        cleanup
        ;;
    "logs")
        docker logs -f creator-tingnect
        ;;
    *)
        echo -e "${BLUE}TingVote Creator Lab VPS Deployment${NC}"
        echo -e "${BLUE}Usage: $0 {command}${NC}"
        echo ""
        echo -e "${YELLOW}Available Commands:${NC}"
        echo "  check     - Check prerequisites (Docker, Docker Compose)"
        echo "  env       - Create environment configuration file"
        echo "  ssl-self  - Generate self-signed SSL certificate"
        echo ""
        echo -e "${YELLOW}Deployment Options:${NC}"
        echo "  traefik   - Deploy with Traefik (SSL auto-renewal) [RECOMMENDED]"
        echo "  nginx     - Deploy with Nginx reverse proxy"
        echo "  simple    - Simple deployment (app only, no SSL)"
        echo ""
        echo -e "${YELLOW}Management:${NC}"
        echo "  status    - Show deployment status and health"
        echo "  firewall  - Setup basic firewall rules"
        echo "  logs      - View application logs"
        echo "  cleanup   - Stop services and clean up"
        echo ""
        echo -e "${YELLOW}Quick Start (Recommended):${NC}"
        echo "  $0 traefik    # Full production deployment with SSL"
        echo ""
        echo -e "${YELLOW}Domain Configuration:${NC}"
        echo "  Make sure ${DOMAIN} points to this server's IP"
        exit 1
        ;;
esac