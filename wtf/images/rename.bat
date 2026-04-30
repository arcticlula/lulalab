@echo off
setlocal enabledelayedexpansion

echo Searching for .jpeg files to rename...

:: /R starts from the current directory and loops through subdirectories
for /r %%f in (*.jpeg) do (
    echo Renaming: "%%f"
    ren "%%f" "%%~nf.jpg"
)

echo.
echo Process complete!
pause