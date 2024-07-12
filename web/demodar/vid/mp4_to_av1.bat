@echo off
setlocal enabledelayedexpansion

rem Loop through all .mp4 and .webm files in the current directory
for %%f in (*.mp4) do (
    set "input_file=%%f"
    set "output_file=%%~nf_av1.webm"
    
    rem Check if the AV1-encoded version already exists
    if not exist "!output_file!" (
        echo Creating AV1-encoded version for %%f
        ffmpeg -i "%%f" -c:v libaom-av1 -crf 30 -b:v 0 "!output_file!"
    ) else (
        echo AV1-encoded version already exists for %%f
    )
    echo.
)

pause
