#!/bin/bash

# 🚀 TingVote Creator Lab - VPS Quick Deploy Script
# Domain: creator.tingnect.com

echo "🚀 TingVote Creator Lab - VPS Deployment"
echo "========================================"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Project settings
DOMAIN="creator.tingnect.com"
PROJECT_NAME="creator-tingnect"
REPO_URL="https://github.com/PhuccNguyen/creator-tingnect.git"
DOCKER_IMAGE="tingvote/creator-lab"

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to install Docker
install_docker() {
    echo -e "${YELLOW}🐳 Installing Docker...${NC}"
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    systemctl enable docker
    systemctl start docker
    echo -e "${GREEN}✅ Docker installed successfully!${NC}"
}

# Function to install Docker Compose
install_docker_compose() {
    echo -e "${YELLOW}🔧 Installing Docker Compose...${NC}"
    curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
    echo -e "${GREEN}✅ Docker Compose installed successfully!${NC}"
}

# Function to install Nginx
install_nginx() {
    echo -e "${YELLOW}🌐 Installing Nginx...${NC}"
    apt update
    apt install nginx -y
    systemctl enable nginx
    systemctl start nginx
    echo -e "${GREEN}✅ Nginx installed successfully!${NC}"
}

# Function to setup SSL
setup_ssl() {
    echo -e "${YELLOW}🔒 Setting up SSL certificate...${NC}"
    apt install certbot python3-certbot-nginx -y
    
    echo -e "${BLUE}📋 Please ensure your domain $DOMAIN points to this server before continuing.${NC}"
    read -p "Press Enter to continue with SSL setup..."
    
    certbot --nginx -d $DOMAIN
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ SSL certificate installed successfully!${NC}"
    else
        echo -e "${RED}❌ SSL setup failed. You can retry later with: certbot --nginx -d $DOMAIN${NC}"
    fi
}

# Function to deploy application
deploy_app() {
    echo -e "${YELLOW}📦 Deploying TingVote Creator Lab...${NC}"
    
    # Create project directory
    mkdir -p /opt/$PROJECT_NAME
    cd /opt/$PROJECT_NAME
    
    # Clone or update repository
    if [ -d ".git" ]; then
        echo -e "${BLUE}📥 Updating existing repository...${NC}"
        git pull origin main
    else
        echo -e "${BLUE}📥 Cloning repository...${NC}"
        git clone $REPO_URL .
    fi
    
    # Stop existing containers
    echo -e "${BLUE}⏹️ Stopping existing containers...${NC}"
    docker-compose -f docker-compose.prod.yml down || true
    
    # Build and start new containers
    echo -e "${BLUE}🔨 Building and starting containers...${NC}"
    docker-compose -f docker-compose.prod.yml up -d --build
    
    # Wait for container to be ready
    echo -e "${BLUE}⏳ Waiting for application to start...${NC}"
    sleep 30
    
    # Check health
    if curl -f http://localhost:3000/api/health > /dev/null 2>&1; then
        echo -e "${GREEN}✅ Application is running successfully!${NC}"
    else
        echo -e "${RED}❌ Application health check failed!${NC}"
        docker-compose -f docker-compose.prod.yml logs
        return 1
    fi
}

# Function to configure Nginx
configure_nginx() {
    echo -e "${YELLOW}🌐 Configuring Nginx...${NC}"
    
    # Backup existing config
    if [ -f "/etc/nginx/sites-available/$DOMAIN" ]; then
        cp "/etc/nginx/sites-available/$DOMAIN" "/etc/nginx/sites-available/$DOMAIN.backup.$(date +%Y%m%d_%H%M%S)"
    fi
    
    # Create nginx config
    cat > "/etc/nginx/sites-available/$DOMAIN" << EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss;
    
    # Proxy to Next.js application
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        
        # Timeouts
        proxy_connect_timeout       60s;
        proxy_send_timeout          60s;
        proxy_read_timeout          60s;
    }
    
    # Health check endpoint
    location /api/health {
        proxy_pass http://localhost:3000/api/health;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
    
    # Static files caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)\$ {
        proxy_pass http://localhost:3000;
        proxy_set_header Host \$host;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF
    
    # Enable site
    ln -sf "/etc/nginx/sites-available/$DOMAIN" "/etc/nginx/sites-enabled/$DOMAIN"
    
    # Remove default site if exists
    rm -f /etc/nginx/sites-enabled/default
    
    # Test configuration
    nginx -t
    if [ $? -eq 0 ]; then
        systemctl reload nginx
        echo -e "${GREEN}✅ Nginx configured successfully!${NC}"
    else
        echo -e "${RED}❌ Nginx configuration test failed!${NC}"
        return 1
    fi
}

# Main deployment function
main() {
    echo -e "${BLUE}🔍 Checking system requirements...${NC}"
    
    # Update system
    apt update && apt upgrade -y
    
    # Install Git if not exists
    if ! command_exists git; then
        echo -e "${YELLOW}📦 Installing Git...${NC}"
        apt install git -y
    fi
    
    # Install Docker if not exists
    if ! command_exists docker; then
        install_docker
    else
        echo -e "${GREEN}✅ Docker already installed${NC}"
    fi
    
    # Install Docker Compose if not exists
    if ! command_exists docker-compose; then
        install_docker_compose
    else
        echo -e "${GREEN}✅ Docker Compose already installed${NC}"
    fi
    
    # Install Nginx if not exists
    if ! command_exists nginx; then
        install_nginx
    else
        echo -e "${GREEN}✅ Nginx already installed${NC}"
    fi
    
    # Deploy application
    deploy_app
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ Application deployment failed!${NC}"
        exit 1
    fi
    
    # Configure Nginx
    configure_nginx
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ Nginx configuration failed!${NC}"
        exit 1
    fi
    
    # Setup SSL
    echo -e "${YELLOW}🔒 Do you want to setup SSL certificate for $DOMAIN? (y/n)${NC}"
    read -p "Enter choice: " setup_ssl_choice
    
    if [[ $setup_ssl_choice == "y" || $setup_ssl_choice == "Y" ]]; then
        setup_ssl
    else
        echo -e "${BLUE}ℹ️ SSL setup skipped. You can setup later with: certbot --nginx -d $DOMAIN${NC}"
    fi
    
    # Final status
    echo ""
    echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
    echo -e "${BLUE}📋 Application Status:${NC}"
    echo -e "   🌐 Domain: http://$DOMAIN (or https if SSL configured)"
    echo -e "   🏥 Health Check: http://$DOMAIN/api/health"
    echo -e "   🐳 Docker Status: $(docker ps --filter name=creator-tingnect --format 'table {{.Names}}\t{{.Status}}')"
    echo ""
    echo -e "${YELLOW}📚 Useful Commands:${NC}"
    echo -e "   docker-compose -f /opt/$PROJECT_NAME/docker-compose.prod.yml logs -f"
    echo -e "   docker-compose -f /opt/$PROJECT_NAME/docker-compose.prod.yml restart"
    echo -e "   nginx -t && systemctl reload nginx"
    echo -e "   certbot renew --dry-run"
}

# Run main function
main "$@"