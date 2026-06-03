@echo off
title Estilo em Duas Rodas - Launcher
echo ===================================================
echo   Iniciando Estilo em Duas Rodas (Local)
echo ===================================================
echo.

:: 1. Verificar e iniciar o MongoDB Portátil
echo [1/3] Verificando banco de dados MongoDB...
tasklist /FI "IMAGENAME eq mongod.exe" 2>NUL | find /I /N "mongod.exe">NUL
if "%ERRORLEVEL%"=="0" (
    echo    - MongoDB ja esta em execucao.
) else (
    echo    - Iniciando MongoDB Portatil em segundo plano...
    start "MongoDB Database" /min "mongodb\MongoDB\Server\7.0\bin\mongod.exe" --dbpath "mongodb\data\db" --bind_ip 127.0.0.1 --port 27017
    timeout /t 2 >nul
)
echo.

:: 2. Iniciar o Backend (FastAPI)
echo [2/3] Iniciando o servidor de API (Backend)...
start "Backend - FastAPI" cmd /k "cd backend && .venv\Scripts\python.exe -m uvicorn server:app --reload --host 0.0.0.0 --port 8000"
timeout /t 2 >nul
echo.

:: 3. Iniciar o Frontend (React)
echo [3/3] Iniciando a interface (Frontend)...
start "Frontend - React" cmd /k "cd frontend && npm start"
echo.

echo ===================================================
echo   Aplicacao sendo carregada!
echo   - Frontend: http://localhost:3000
echo   - API: http://localhost:8000/api
echo   - Documentacao: http://localhost:8000/docs
echo ===================================================
echo.
echo Aguarde alguns segundos enquanto a pagina abre no navegador...
timeout /t 5 >nul
start "" "http://localhost:3000"
pause
