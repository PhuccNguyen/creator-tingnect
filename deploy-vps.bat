@echo off
setlocal enabledelayedexpansion

:: TingVote Creator Lab - VPS Deployment Script for Windows
:: Domain: creator.tingnect.com

echo.
echo 🚀 TingVote Creator Lab VPS Deployment
echo Domain: creator.tingnect.com
echo ==================================================

set PROJECT_NAME=creator-tingnect
set DOMAIN=creator.tingnect.com
set DOCKER_IMAGE=tingvote/creator-lab
set CONTAINER_NAME=creator-tingnect

if "%1"=="build" goto build
if "%1"=="deploy" goto deploy
if "%1"=="traefik" goto traefik
if "%1"=="nginx" goto nginx
if "%1"=="simple" goto simple
if "%1"=="status" goto status
if "%1"=="logs" goto logs
if "%1"=="cleanup" goto cleanup
goto usage

:build
echo 📦 Building production Docker image...
docker build -t %DOCKER_IMAGE%:latest .
if %errorlevel% equ 0 (
    echo ✅ Build successful!
) else (
    echo ❌ Build failed!
    exit /b 1
)
goto end

:deploy
call :build
echo 🚀 Deploying to production...
docker-compose -f docker-compose.prod.yml up -d tingvote-creator-lab
call :status
goto end

:traefik
call :build
echo 🚀 Deploying with Traefik (SSL auto-renewal)...
mkdir letsencrypt 2>nul
docker-compose -f docker-compose.prod.yml --profile traefik up -d
echo ✅ Deployment with Traefik completed
echo 🌐 Your site will be available at: https://%DOMAIN%
call :status
goto end

:nginx
call :build
echo 🚀 Deploying with Nginx...
mkdir ssl 2>nul
docker-compose -f docker-compose.prod.yml --profile nginx up -d
echo ✅ Deployment with Nginx completed
echo 🌐 Your site will be available at: https://%DOMAIN%
call :status
goto end

:simple
call :build
echo 🚀 Simple deployment (app only)...
docker-compose -f docker-compose.prod.yml up -d tingvote-creator-lab
echo ✅ Simple deployment completed
echo 🌐 Your app is running on port 3000
call :status
goto end

:status
echo 📊 Deployment Status:
docker-compose -f docker-compose.prod.yml ps
echo.
echo 🏥 Health Check:
timeout /t 5 >nul
curl -f http://localhost:3000/api/health 2>nul
if %errorlevel% equ 0 (
    echo ✅ Application is healthy
) else (
    echo ❌ Application health check failed
)
echo.
echo 📋 Container Logs (last 10 lines):
docker logs --tail 10 %CONTAINER_NAME%
goto end

:logs
echo 📋 Viewing container logs...
docker logs -f %CONTAINER_NAME%
goto end

:cleanup
echo 🧹 Cleaning up...
docker-compose -f docker-compose.prod.yml down
docker system prune -f
echo ✅ Cleanup completed!
goto end

:usage
echo Usage: %0 {build^|deploy^|traefik^|nginx^|simple^|status^|logs^|cleanup}
echo.
echo Commands:
echo   build     - Build Docker image
echo   deploy    - Deploy app only
echo   traefik   - Deploy with Traefik (SSL auto-renewal) [RECOMMENDED]
echo   nginx     - Deploy with Nginx reverse proxy
echo   simple    - Simple deployment (app only)
echo   status    - Show deployment status and health
echo   logs      - View application logs
echo   cleanup   - Stop services and clean up
echo.
echo Quick Start:
echo   %0 traefik    # Full production deployment with SSL
echo.
echo Domain Setup:
echo   Make sure %DOMAIN% points to your VPS IP address
exit /b 1

:end
echo.
echo Done!