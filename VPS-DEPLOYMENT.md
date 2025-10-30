# 🚀 VPS Deployment Guide - creator.tingnect.com

## 📋 Yêu cầu VPS

### Minimum Requirements:
- **OS**: Ubuntu 20.04+ / CentOS 8+ / Debian 11+
- **RAM**: 2GB+ (Recommended: 4GB)
- **Storage**: 20GB+ SSD
- **CPU**: 2 vCPU+
- **Network**: 100Mbps+

### Software Requirements:
- **Docker**: 20.10+
- **Docker Compose**: v2.0+
- **Domain**: `creator.tingnect.com` pointed to VPS IP

## 🛠 VPS Initial Setup

### 1. Update System
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl wget git unzip
```

### 2. Install Docker
```bash
# Remove old versions
sudo apt remove docker docker-engine docker.io containerd runc

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add user to docker group
sudo usermod -aG docker $USER

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Verify installation
docker --version
docker-compose --version
```

### 3. Setup Firewall
```bash
sudo ufw allow ssh
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
```

## 📁 Upload Code to VPS

### Method 1: Git Clone (Recommended)
```bash
# Clone repository
git clone <your-repo-url> /opt/creator-tingnect
cd /opt/creator-tingnect

# Make scripts executable
chmod +x deploy-vps.sh
chmod +x docker.sh
```

### Method 2: Direct Upload
```bash
# Create directory
sudo mkdir -p /opt/creator-tingnect
sudo chown $USER:$USER /opt/creator-tingnect

# Upload files using SCP/SFTP
# Then navigate to directory
cd /opt/creator-tingnect
```

## 🚀 Deployment Options

### Option 1: Traefik with Auto SSL (RECOMMENDED)
```bash
# Quick deployment with SSL auto-renewal
./deploy-vps.sh traefik

# Or step by step:
./deploy-vps.sh check      # Check prerequisites
./deploy-vps.sh env        # Create environment file
./deploy-vps.sh traefik    # Deploy with Traefik
```

**Features:**
- ✅ Automatic SSL certificates from Let's Encrypt
- ✅ Auto-renewal of certificates
- ✅ HTTP to HTTPS redirect
- ✅ Load balancing ready
- ✅ Dashboard at `:8080`

### Option 2: Nginx Reverse Proxy
```bash
./deploy-vps.sh nginx
```

**Features:**
- ✅ High performance reverse proxy
- ✅ Manual SSL certificate setup
- ✅ Custom Nginx configuration
- ⚠️ Manual SSL renewal required

### Option 3: Simple Deployment
```bash
./deploy-vps.sh simple
```

**Features:**
- ✅ Direct app access on port 3000
- ❌ No SSL termination
- ❌ No reverse proxy
- 🔧 Requires external proxy setup

## 🔧 Configuration

### Environment Variables (.env.production)
```env
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
PORT=3000
HOSTNAME=0.0.0.0
DOMAIN=creator.tingnect.com
PROTOCOL=https
```

### Domain DNS Setup
Point your domain to VPS IP:
```
A     creator.tingnect.com    -> YOUR_VPS_IP
A     www.creator.tingnect.com -> YOUR_VPS_IP  (optional)
```

### SSL Certificate Options

#### Auto SSL (Traefik - Recommended)
```bash
# Traefik handles everything automatically
./deploy-vps.sh traefik
```

#### Manual SSL (Nginx)
```bash
# For production, get real SSL certificate:
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d creator.tingnect.com
```

## 📊 Monitoring & Management

### Check Status
```bash
./deploy-vps.sh status
```

### View Logs
```bash
./deploy-vps.sh logs

# Or directly with Docker
docker logs -f creator-tingnect
```

### Health Check
- **URL**: `https://creator.tingnect.com/api/health`
- **Expected Response**: `{"status":"OK","timestamp":"...","service":"TingVote Creator Lab"}`

### Docker Commands
```bash
# View containers
docker ps

# View images
docker images

# Container stats
docker stats creator-tingnect

# Restart container
docker restart creator-tingnect
```

## 🔄 Updates & Maintenance

### Update Application
```bash
# Pull latest code
git pull origin main

# Rebuild and deploy
./deploy-vps.sh traefik
```

### Backup Data
```bash
# Backup container volumes (if any)
docker run --rm -v creator_data:/data -v $(pwd):/backup alpine tar czf /backup/backup-$(date +%Y%m%d).tar.gz -C /data .
```

### System Updates
```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Update Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Restart services
./deploy-vps.sh traefik
```

## 🛡 Security Best Practices

### 1. Firewall Configuration
```bash
# Only allow necessary ports
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw deny 3000  # Block direct access to app
sudo ufw enable
```

### 2. SSH Security
```bash
# Disable root login
sudo nano /etc/ssh/sshd_config
# Set: PermitRootLogin no
# Set: PasswordAuthentication no (if using keys)
sudo systemctl restart sshd
```

### 3. Regular Updates
```bash
# Setup automatic security updates
sudo apt install unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades
```

## 🚨 Troubleshooting

### Container Won't Start
```bash
# Check logs
docker logs creator-tingnect

# Check resource usage
docker stats
df -h

# Rebuild image
docker build -t tingvote/creator-lab .
docker restart creator-tingnect
```

### SSL Certificate Issues
```bash
# Check certificate status
curl -I https://creator.tingnect.com

# Renew certificates manually (if using certbot)
sudo certbot renew

# Check Traefik logs
docker logs creator-traefik
```

### Domain Not Resolving
```bash
# Check DNS propagation
nslookup creator.tingnect.com
dig creator.tingnect.com

# Test local connection
curl -I http://localhost:3000/api/health
```

### Performance Issues
```bash
# Monitor resources
htop
docker stats

# Optimize Docker
docker system prune -a
docker volume prune
```

## 📞 Production Checklist

- [ ] VPS meets minimum requirements
- [ ] Docker and Docker Compose installed
- [ ] Domain DNS configured correctly
- [ ] Firewall configured properly
- [ ] SSL certificates working
- [ ] Application health check passing
- [ ] Backup strategy in place
- [ ] Monitoring setup
- [ ] Security updates configured

## 🌐 Access URLs

- **Main Site**: https://creator.tingnect.com
- **Health Check**: https://creator.tingnect.com/api/health
- **Traefik Dashboard**: http://YOUR_VPS_IP:8080 (if using Traefik)

## 📞 Support

If you encounter issues:

1. Check logs: `./deploy-vps.sh logs`
2. Verify status: `./deploy-vps.sh status`
3. Check Docker: `docker ps -a`
4. Verify domain DNS: `nslookup creator.tingnect.com`
5. Test health endpoint: `curl https://creator.tingnect.com/api/health`

---

**Deployment Target**: `creator.tingnect.com`
**Last Updated**: $(date)
**Version**: Production Ready 🚀