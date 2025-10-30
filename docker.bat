@echo off
setlocal enabledelayedexpansion

:: TingVote Creator Lab Docker Management Scripts for Windows

:: Project settings
set PROJECT_NAME=tingvote-creator-lab
set IMAGE_NAME=tingvote/creator-lab
set CONTAINER_NAME=tingvote-creator-lab

echo.
echo 🐳 TingVote Creator Lab Docker Management
echo ==================================================

if "%1"=="build" goto build
if "%1"=="run" goto run
if "%1"=="stop" goto stop
if "%1"=="restart" goto restart
if "%1"=="logs" goto logs
if "%1"=="dev" goto dev
if "%1"=="status" goto status
if "%1"=="clean" goto clean
goto usage

:build
echo 📦 Building Docker image...
docker build -t %IMAGE_NAME%:latest .
if %errorlevel% equ 0 (
    echo ✅ Build successful!
) else (
    echo ❌ Build failed!
    exit /b 1
)
goto end

:run
call :build
echo 🚀 Starting container...
docker run -d --name %CONTAINER_NAME% -p 3000:3000 --restart unless-stopped %IMAGE_NAME%:latest
if %errorlevel% equ 0 (
    echo ✅ Container started successfully!
    echo 🌐 Application available at: http://localhost:3000
) else (
    echo ❌ Failed to start container!
    exit /b 1
)
goto end

:stop
echo ⏹️ Stopping container...
docker stop %CONTAINER_NAME%
docker rm %CONTAINER_NAME%
echo ✅ Container stopped and removed!
goto end

:restart
call :stop
call :run
goto end

:logs
echo 📋 Viewing container logs...
docker logs -f %CONTAINER_NAME%
goto end

:dev
echo 🔧 Starting development container...
docker-compose up --build
goto end

:status
echo 📊 Container status:
docker ps -a --filter name=%CONTAINER_NAME%
echo.
echo 🏥 Health check:
curl -s http://localhost:3000/api/health 2>nul
goto end

:clean
echo 🧹 Cleaning up Docker resources...
docker stop %CONTAINER_NAME% 2>nul
docker rm %CONTAINER_NAME% 2>nul
docker rmi %IMAGE_NAME%:latest 2>nul
docker system prune -f
echo ✅ Cleanup completed!
goto end

:usage
echo Usage: %0 {build^|run^|stop^|restart^|logs^|dev^|status^|clean}
echo.
echo Commands:
echo   build    - Build Docker image
echo   run      - Build and run container
echo   stop     - Stop and remove container
echo   restart  - Stop, build, and run container
echo   logs     - View container logs
echo   dev      - Run in development mode
echo   status   - Show container status and health
echo   clean    - Clean up all Docker resources
echo.
echo Examples:
echo   %0 run      - Build and start the application
echo   %0 dev      - Run in development mode
echo   %0 logs     - View application logs
exit /b 1

:end
echo.
echo Done!
pause