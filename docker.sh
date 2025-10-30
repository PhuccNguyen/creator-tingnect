#!/bin/bash

# TingVote Creator Lab Docker Management Scripts

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Project settings
PROJECT_NAME="tingvote-creator-lab"
IMAGE_NAME="tingvote/creator-lab"
CONTAINER_NAME="tingvote-creator-lab"

echo -e "${BLUE}🐳 TingVote Creator Lab Docker Management${NC}"
echo "=================================================="

# Function to build Docker image
build() {
    echo -e "${YELLOW}📦 Building Docker image...${NC}"
    docker build -t $IMAGE_NAME:latest .
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Build successful!${NC}"
    else
        echo -e "${RED}❌ Build failed!${NC}"
        exit 1
    fi
}

# Function to run container
run() {
    echo -e "${YELLOW}🚀 Starting container...${NC}"
    docker run -d \
        --name $CONTAINER_NAME \
        -p 3000:3000 \
        --restart unless-stopped \
        $IMAGE_NAME:latest
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Container started successfully!${NC}"
        echo -e "${BLUE}🌐 Application available at: http://localhost:3000${NC}"
    else
        echo -e "${RED}❌ Failed to start container!${NC}"
        exit 1
    fi
}

# Function to stop container
stop() {
    echo -e "${YELLOW}⏹️  Stopping container...${NC}"
    docker stop $CONTAINER_NAME
    docker rm $CONTAINER_NAME
    echo -e "${GREEN}✅ Container stopped and removed!${NC}"
}

# Function to view logs
logs() {
    echo -e "${YELLOW}📋 Viewing container logs...${NC}"
    docker logs -f $CONTAINER_NAME
}

# Function to run development mode
dev() {
    echo -e "${YELLOW}🔧 Starting development container...${NC}"
    docker-compose -f docker-compose.yml up --build tingvote-dev
}

# Function to show status
status() {
    echo -e "${YELLOW}📊 Container status:${NC}"
    docker ps -a --filter name=$CONTAINER_NAME
    echo ""
    echo -e "${YELLOW}🏥 Health check:${NC}"
    curl -s http://localhost:3000/api/health | jq . 2>/dev/null || echo "Container not responding or jq not installed"
}

# Function to clean up
clean() {
    echo -e "${YELLOW}🧹 Cleaning up Docker resources...${NC}"
    docker stop $CONTAINER_NAME 2>/dev/null
    docker rm $CONTAINER_NAME 2>/dev/null
    docker rmi $IMAGE_NAME:latest 2>/dev/null
    docker system prune -f
    echo -e "${GREEN}✅ Cleanup completed!${NC}"
}

# Main menu
case "$1" in
    build)
        build
        ;;
    run)
        build
        run
        ;;
    stop)
        stop
        ;;
    restart)
        stop
        build
        run
        ;;
    logs)
        logs
        ;;
    dev)
        dev
        ;;
    status)
        status
        ;;
    clean)
        clean
        ;;
    *)
        echo -e "${BLUE}Usage: $0 {build|run|stop|restart|logs|dev|status|clean}${NC}"
        echo ""
        echo -e "${YELLOW}Commands:${NC}"
        echo "  build    - Build Docker image"
        echo "  run      - Build and run container"
        echo "  stop     - Stop and remove container"
        echo "  restart  - Stop, build, and run container"
        echo "  logs     - View container logs"
        echo "  dev      - Run in development mode"
        echo "  status   - Show container status and health"
        echo "  clean    - Clean up all Docker resources"
        exit 1
        ;;
esac