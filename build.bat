@echo off
chcp 65001 > nul
cd /d "%~dp0"
set "PATH=%ProgramFiles%\nodejs;%ProgramFiles(x86)%\nodejs;%APPDATA%\npm;%PATH%"
echo [INFO] 슬라이드를 합쳐서 index.html로 빌드합니다...
node build.js
if %ERRORLEVEL% equ 0 (
    echo.
    echo ========================================================
    echo  [성공] 빌드가 완료되었습니다! 브라우저에서 F5를 누르세요.
    echo ========================================================
) else (
    echo.
    echo [오류] 빌드에 실패했습니다.
)
pause
