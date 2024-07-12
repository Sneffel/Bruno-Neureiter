@echo off
setlocal enabledelayedexpansion

for %%f in (*.mp4 *.mkv *.webm *.avi *.mov) do (
    echo Processing %%f
    ffmpeg -i "%%f"
    echo.
)

pause
