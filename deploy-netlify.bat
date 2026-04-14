@echo off
echo Preparing portfolio for Netlify deployment...
echo.

echo Creating deployment folder...
mkdir portfolio-deploy 2>nul
del /Q portfolio-deploy\* 2>nul

echo Copying files...
xcopy client\* portfolio-deploy\ /E /I /Y

echo.
echo Deployment folder is ready: portfolio-deploy
echo.
echo Next steps:
echo 1. Go to https://app.netlify.com/drop
echo 2. Drag the 'portfolio-deploy' folder into the drop zone
echo 3. Wait for deployment
echo 4. Your site will be live!
echo.
echo Press any key to open Netlify deploy page...
pause
start https://app.netlify.com/drop
