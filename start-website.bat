@echo off
echo Starting Portfolio Website...
echo.

echo Starting Backend Server (Port 5000)...
cd server
start "Backend Server" cmd /k "npm run dev"

echo.
echo Starting Frontend Server (Port 8080)...
cd ../client
start "Frontend Server" cmd /k "python -m http.server 8080"

echo.
echo Both servers are starting...
echo Frontend: http://localhost:8080
echo Backend:  http://localhost:5000
echo.
echo Press any key to exit...
pause
