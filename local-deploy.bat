@echo off
setlocal enabledelayedexpansion

:: 🚀 TingVote Creator Lab - Local Test & Deploy Script
:: For testing before VPS deployment

echo.
echo 🚀 TingVote Creator Lab - Local Test ^& Deploy
echo ==============================================

:: Project settings
set REPO_URL=https://github.com/PhuccNguyen/creator-tingnect.git
set IMAGE_NAME=tingvote/creator-lab
set CONTAINER_NAME=creator-tingnect-test
set DOMAIN=creator.tingnect.com

if "%1"=="test" goto test
if "%1"=="build" goto build
if "%1"=="deploy-vps" goto deploy_vps
if "%1"=="push" goto push
if "%1"=="clean" goto clean
goto usage

:test
echo 📦 Testing application locally...
echo.

echo ⏹️ Stopping existing containers...
docker stop %CONTAINER_NAME% 2>nul
docker rm %CONTAINER_NAME% 2>nul

echo 🔨 Building Docker image...
docker build -t %IMAGE_NAME%:latest .
if %errorlevel% neq 0 (
    echo ❌ Build failed!
    exit /b 1
)

echo 🚀 Starting test container...
docker run -d --name %CONTAINER_NAME% -p 3000:3000 %IMAGE_NAME%:latest
if %errorlevel% neq 0 (
    echo ❌ Failed to start container!
    exit /b 1
)

echo ⏳ Waiting for application to start...
timeout /t 10 /nobreak >nul

echo 🏥 Testing health check...
curl -f http://localhost:3000/api/health >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Application is running successfully!
    echo 🌐 Local URL: http://localhost:3000
    echo 🏥 Health Check: http://localhost:3000/api/health
    echo.
    echo 📋 Container Status:
    docker ps --filter name=%CONTAINER_NAME%
) else (
    echo ❌ Health check failed!
    echo 📋 Container logs:
    docker logs %CONTAINER_NAME%
    exit /b 1
)
goto end

:build
echo 🔨 Building production image...
docker build -t %IMAGE_NAME%:latest .
if %errorlevel% equ 0 (
    echo ✅ Build successful!
    echo 📦 Image: %IMAGE_NAME%:latest
) else (
    echo ❌ Build failed!
    exit /b 1
)
goto end

:push
echo 📤 Pushing changes to GitHub...

echo 📋 Git status:
git status

echo.
set /p commit_msg="Enter commit message: "
if "%commit_msg%"=="" set commit_msg="Update TingVote Creator Lab"

git add .
git commit -m "%commit_msg%"
if %errorlevel% equ 0 (
    git push
    if %errorlevel% equ 0 (
        echo ✅ Successfully pushed to GitHub!
        echo 🌐 Repository: %REPO_URL%
    ) else (
        echo ❌ Failed to push to GitHub!
        exit /b 1
    )
) else (
    echo ℹ️ No changes to commit or commit failed
)
goto end

:deploy_vps
echo 🌍 Deploying to VPS...
echo.
echo 📋 This will:
echo    1. Copy deployment script to VPS
echo    2. Run automated deployment
echo    3. Configure domain: %DOMAIN%
echo.

set /p vps_ip="Enter VPS IP address: "
if "%vps_ip%"=="" (
    echo ❌ VPS IP address is required!
    exit /b 1
)

set /p vps_user="Enter VPS username (default: root): "
if "%vps_user%"=="" set vps_user=root

echo 📤 Copying deployment script to VPS...
scp quick-deploy.sh %vps_user%@%vps_ip%:/root/
if %errorlevel% neq 0 (
    echo ❌ Failed to copy deployment script!
    exit /b 1
)

echo 🚀 Running deployment on VPS...
ssh %vps_user%@%vps_ip% "chmod +x /root/quick-deploy.sh && /root/quick-deploy.sh"
if %errorlevel% equ 0 (
    echo ✅ Deployment completed successfully!
    echo 🌐 Your site should be available at: http://%DOMAIN%
) else (
    echo ❌ Deployment failed! Check VPS logs.
    exit /b 1
)
goto end

:clean
echo 🧹 Cleaning up local Docker resources...
docker stop %CONTAINER_NAME% 2>nul
docker rm %CONTAINER_NAME% 2>nul
docker rmi %IMAGE_NAME%:latest 2>nul
docker system prune -f
echo ✅ Cleanup completed!
goto end

:usage
echo Usage: %0 {test^|build^|push^|deploy-vps^|clean}
echo.
echo Commands:
echo   test       - Build and test application locally
echo   build      - Build Docker image only
echo   push       - Commit and push changes to GitHub
echo   deploy-vps - Deploy to VPS (requires SSH access)
echo   clean      - Clean up local Docker resources
echo.
echo Examples:
echo   %0 test       - Test the application locally
echo   %0 push       - Push changes to GitHub
echo   %0 deploy-vps - Deploy to production VPS
echo.
echo 🚀 Quick Deployment Flow:
echo   1. %0 test        (test locally)
echo   2. %0 push        (push to GitHub)
echo   3. %0 deploy-vps  (deploy to VPS)
exit /b 1

:end
echo.
echo Done!
pause