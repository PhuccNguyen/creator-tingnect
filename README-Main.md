# 🎬 Creator Labs - Landing Page

> **Modern, responsive landing page for Creator Labs program**  
> **Live Demo**: [creator.tingnect.com](https://creator.tingnect.com)  
> **Built with**: Next.js 16 + TypeScript + Docker + Mobile-First Design

![Creator Labs](https://img.shields.io/badge/Creator-Labs-E7C873?style=for-the-badge&logo=react)
![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker)

## 📋 Table of Contents

- [🚀 Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [🏃‍♂️ Quick Start](#️-quick-start)
- [🐳 Docker Deployment](#-docker-deployment)
- [🌍 VPS Deployment](#-vps-deployment)
- [📱 Mobile-First Design](#-mobile-first-design)
- [🎨 Components](#-components)
- [📖 Documentation](#-documentation)

## 🚀 Features

### 💎 **Core Features**
- ✅ **Mobile-First Responsive Design** (320px → 1440px+)
- ✅ **Modern UI/UX** with Glass Morphism effects
- ✅ **Smooth Animations** powered by Framer Motion
- ✅ **SEO Optimized** with Next.js App Router
- ✅ **TypeScript** for type safety
- ✅ **Docker Ready** for easy deployment

### 🎯 **Creator Labs Program**
- 🎁 **50,000đ Sign-up Bonus** for eligible participants
- 🎬 **Content Creation Training** with expert guidance
- 📊 **Real-time Analytics** tracking views, votes, revenue
- 💰 **20% Revenue Share** from paid vote features
- 🏆 **Weekly Prizes** for top-performing creators

### ⚡ **Performance & Animations**
- 🔥 **Floating Fireflies** background effects
- ✨ **Scroll-triggered animations** with Framer Motion
- 🎨 **Gradient animations** and hover effects
- 📱 **Optimized for all devices** and screen sizes

## 🛠 Tech Stack

### **Frontend**
- **Framework**: Next.js 16.0.1 (with Turbopack)
- **Language**: TypeScript 5.x
- **Styling**: CSS Modules + Mobile-First approach
- **Animations**: Framer Motion 12.23.24
- **Icons**: Lucide React 0.548.0
- **Image Optimization**: Next.js Image component

### **Development & Deployment**
- **Containerization**: Docker + Docker Compose
- **Web Server**: Nginx (for production)
- **Process Management**: PM2 (optional)
- **Version Control**: Git + GitHub

### **Architecture**
- **Design Pattern**: Mobile-First responsive
- **Component Structure**: Modular CSS Modules
- **API Routes**: Next.js App Router
- **Health Monitoring**: Built-in health check endpoint

## 🏃‍♂️ Quick Start

### **Prerequisites**
- Node.js 20+ (recommended)
- Docker Desktop (for containerization)
- Git

### **Development Setup**

```bash
# Clone repository
git clone https://github.com/PhuccNguyen/creator-tingnect.git
cd creator-tingnect

# Install dependencies
npm install

# Start development server
npm run dev
# or
npm run docker:dev  # with Docker
```

**Access**: http://localhost:3000

### **Available Scripts**

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server

# Docker Commands
npm run docker:build # Build Docker image
npm run docker:run   # Run Docker container
npm run docker:dev   # Development with Docker
npm run docker:logs  # View container logs
npm run docker:stop  # Stop container
```

## 🐳 Docker Deployment

### **Quick Deploy**

```bash
# Windows
docker.bat run

# Linux/macOS  
chmod +x docker.sh
./docker.sh run
```

### **Manual Docker Commands**

```bash
# Build image
docker build -t tingvote/creator-lab .

# Run container
docker run -d \
  --name creator-tingnect \
  -p 3000:3000 \
  --restart unless-stopped \
  tingvote/creator-lab:latest

# Check health
curl http://localhost:3000/api/health
```

### **Docker Compose (Recommended)**

```bash
# Production deployment
docker-compose -f docker-compose.prod.yml up -d

# Development with live reload
docker-compose up --build
```

## 🌍 VPS Deployment

### **Automated Deployment**

```bash
# Copy deployment script to VPS
scp deploy-vps.sh root@your-server:/root/
scp docker-compose.prod.yml root@your-server:/root/

# Run deployment on VPS
ssh root@your-server
chmod +x deploy-vps.sh
./deploy-vps.sh
```

### **Manual VPS Setup**

```bash
# 1. Update system
apt update && apt upgrade -y

# 2. Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# 3. Install Docker Compose
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# 4. Clone and deploy
git clone https://github.com/PhuccNguyen/creator-tingnect.git
cd creator-tingnect
docker-compose -f docker-compose.prod.yml up -d
```

### **Domain Setup (creator.tingnect.com)**

```bash
# 1. Install Nginx
apt install nginx -y

# 2. Copy nginx config
cp nginx.conf /etc/nginx/sites-available/creator.tingnect.com
ln -s /etc/nginx/sites-available/creator.tingnect.com /etc/nginx/sites-enabled/

# 3. Test and reload
nginx -t
systemctl reload nginx

# 4. Install SSL (Let's Encrypt)
apt install certbot python3-certbot-nginx -y
certbot --nginx -d creator.tingnect.com
```

## 📱 Mobile-First Design

### **Responsive Breakpoints**
```css
/* Mobile First (320px+) */
.component { /* Base styles */ }

/* Tablet (768px+) */
@media (min-width: 48rem) { /* Tablet styles */ }

/* Desktop (1024px+) */  
@media (min-width: 64rem) { /* Desktop styles */ }

/* Large Desktop (1440px+) */
@media (min-width: 90rem) { /* Large desktop styles */ }
```

### **Key Design Principles**
- 📱 **Mobile-first approach** for optimal performance
- 🎨 **Glass morphism effects** for modern aesthetics  
- ⚡ **Smooth animations** enhancing user experience
- 🔍 **SEO optimized** structure and meta tags
- ♿ **Accessibility focused** with proper ARIA labels

## 🎨 Components

### **Landing Page Sections**
- 🎯 **Header**: Logo, navigation, mobile-optimized menu
- 🚀 **Hero**: Eye-catching CTA with floating fireflies effect
- 📋 **Introduction**: Program overview with 5 key benefits
- ⭐ **Benefits**: Detailed feature cards with animations
- 📝 **Steps**: 6-step process guide with expandable content
- ❓ **FAQ**: Color-coded frequently asked questions
- 📝 **Registration**: Google Form integration with CTA
- 🔗 **Footer**: Links, social media, company information

### **Interactive Elements**
- 🔥 **Floating Fireflies**: Dynamic background animation
- 🎭 **Hover Effects**: Smooth transitions and scaling
- 📱 **Mobile Navigation**: Collapsible hamburger menu
- ✨ **Scroll Animations**: Framer Motion powered reveals
- 🎨 **Gradient Animations**: Color transitions and effects

## 📖 Documentation

### **Detailed Guides**
- 📚 [Docker Setup Guide](README-Docker.md)
- 🌐 [VPS Deployment Guide](VPS-DEPLOYMENT.md)
- 🛠 [Component Documentation](src/components/)
- 🎨 [Styling Guide](src/components/*/README.md)

### **API Endpoints**
- 🏥 **Health Check**: `/api/health`
- 📊 **Status**: Returns service health and version

### **Environment Variables**
```bash
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
PORT=3000
HOSTNAME=0.0.0.0
```

## 🚨 Troubleshooting

### **Common Issues**

**Port already in use:**
```bash
# Kill process on port 3000
npx kill-port 3000
# or use different port
docker run -p 3001:3000 tingvote/creator-lab
```

**Docker build fails:**
```bash
# Clean Docker resources
docker system prune -a
# Rebuild from scratch
docker build --no-cache -t tingvote/creator-lab .
```

**Container won't start:**
```bash
# Check logs
docker logs creator-tingnect
# Check health endpoint
curl http://localhost:3000/api/health
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support & Contact

- 🌐 **Live Demo**: [creator.tingnect.com](https://creator.tingnect.com)
- 📧 **Email**: support@tingnect.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/PhuccNguyen/creator-tingnect/issues)
- 📚 **Documentation**: [Wiki](https://github.com/PhuccNguyen/creator-tingnect/wiki)

---

<div align="center">

**Made with ❤️ by [PhuccNguyen](https://github.com/PhuccNguyen)**

**⭐ Star this repo if you like it!**

</div>