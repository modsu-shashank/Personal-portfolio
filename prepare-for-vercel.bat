@echo off
echo Preparing portfolio for Vercel deployment...
echo.

echo Creating vercel-deploy folder...
mkdir vercel-deploy 2>nul
del /Q vercel-deploy\* 2>nul

echo Copying client files to root of deployment folder...
xcopy client\* vercel-deploy\ /E /I /Y

echo.
echo Deployment folder is ready: vercel-deploy
echo.
echo Next steps:
echo 1. Go to your Vercel dashboard
echo 2. Create new project
echo 3. Upload the 'vercel-deploy' folder
echo 4. Or push to GitHub and connect Vercel
echo.
echo Press any key to open Vercel dashboard...
pause
start https://vercel.com/dashboard
