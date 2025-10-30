# 🐳 Docker Setup cho TingVote Creator Lab

## 📋 Yêu cầu hệ thống

- **Docker Desktop**: [Tải về tại đây](https://www.docker.com/products/docker-desktop/)
- **Git**: Để clone repository
- **Windows/macOS/Linux**: Hỗ trợ tất cả platform

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone <repository-url>
cd tingvote-creator-lab
```

### 2. Build và Run (Cách đơn giản nhất)

#### Trên Windows:
```cmd
docker.bat run
```

#### Trên Linux/macOS:
```bash
chmod +x docker.sh
./docker.sh run
```

### 3. Truy cập ứng dụng
- **Production**: http://localhost:3000
- **Health Check**: http://localhost:3000/api/health

## 📦 Các lệnh Docker có sẵn

### Sử dụng npm scripts:
```bash
# Build Docker image
npm run docker:build

# Run container
npm run docker:run

# View logs
npm run docker:logs

# Stop container
npm run docker:stop

# Development mode với docker-compose
npm run docker:dev

# Clean up
npm run docker:clean
```

### Sử dụng Docker script (Windows):
```cmd
docker.bat build      # Build image
docker.bat run        # Build và run
docker.bat stop       # Stop container
docker.bat restart    # Restart container
docker.bat logs       # Xem logs
docker.bat dev        # Development mode
docker.bat status     # Kiểm tra status
docker.bat clean      # Clean up resources
```

### Sử dụng Docker script (Linux/macOS):
```bash
./docker.sh build     # Build image
./docker.sh run       # Build và run
./docker.sh stop      # Stop container
./docker.sh restart   # Restart container
./docker.sh logs      # Xem logs
./docker.sh dev       # Development mode
./docker.sh status    # Kiểm tra status
./docker.sh clean     # Clean up resources
```

## 🔧 Development Mode

### Sử dụng Docker Compose:
```bash
# Start development server
docker-compose up --build

# Run in background
docker-compose up -d --build

# Stop development server
docker-compose down
```

### Development với live reload:
```bash
# Enable development mode trong docker-compose.yml
# Uncomment phần tingvote-dev service
docker-compose up tingvote-dev
```

## 📊 Monitoring & Health Check

### Kiểm tra container status:
```bash
docker ps -a --filter name=tingvote-creator-lab
```

### Health check endpoint:
```bash
curl http://localhost:3000/api/health
```

### View logs:
```bash
docker logs -f tingvote-creator-lab
```

## 🛠 Troubleshooting

### Port đã được sử dụng:
```bash
# Kiểm tra process sử dụng port 3000
netstat -ano | findstr :3000    # Windows
lsof -i :3000                   # macOS/Linux

# Thay đổi port trong docker-compose.yml
ports:
  - "3001:3000"  # Sử dụng port 3001 thay vì 3000
```

### Container không start:
```bash
# Check Docker logs
docker logs tingvote-creator-lab

# Rebuild container
docker.bat clean
docker.bat run
```

### Memory/Disk space issues:
```bash
# Clean up Docker resources
docker system prune -a

# Remove unused images
docker image prune -a

# Remove unused volumes
docker volume prune
```

## 📁 Cấu trúc File Docker

```
tingvote-creator-lab/
├── Dockerfile              # Production build
├── Dockerfile.dev          # Development build
├── docker-compose.yml      # Multi-service setup
├── .dockerignore           # Files to ignore in build
├── docker.sh               # Linux/macOS script
├── docker.bat              # Windows script
└── src/app/api/health/     # Health check endpoint
    └── route.ts
```

## ⚡ Performance Tips

### 1. Multi-stage Build:
- Dockerfile sử dụng multi-stage để tối ưu size
- Production image chỉ chứa files cần thiết

### 2. Layer Caching:
- Package.json được copy trước để cache npm install
- Source code copy sau để tận dụng cache

### 3. Resource Limits:
```yaml
# Thêm vào docker-compose.yml nếu cần
deploy:
  resources:
    limits:
      memory: 512M
      cpus: '0.5'
```

## 🔒 Security

### 1. Non-root User:
- Container chạy với user `nextjs` thay vì root

### 2. Health Check:
- Endpoint `/api/health` để monitor container

### 3. Environment Variables:
- `NEXT_TELEMETRY_DISABLED=1` để tắt telemetry
- `NODE_ENV=production` cho production build

## 📈 Production Deployment

### 1. Registry Push:
```bash
# Tag image
docker tag tingvote/creator-lab:latest your-registry/tingvote-creator-lab:latest

# Push to registry
docker push your-registry/tingvote-creator-lab:latest
```

### 2. Environment Variables:
```bash
# Production run with environment file
docker run -d \
  --name tingvote-creator-lab \
  --env-file .env.production \
  -p 80:3000 \
  tingvote/creator-lab:latest
```

## 🆘 Support

Nếu gặp vấn đề với Docker setup:

1. **Check Docker Desktop** đang chạy
2. **Check logs** với `docker logs tingvote-creator-lab`
3. **Clean và rebuild** với script clean
4. **Check port conflicts** với netstat/lsof
5. **Restart Docker Desktop** nếu cần thiết

---

## 📞 Contact

- **Project**: TingVote Creator Lab
- **Docker Setup**: Optimized for Next.js 16+ with Turbopack
- **Support**: Kiểm tra logs và documentation trước khi báo lỗi