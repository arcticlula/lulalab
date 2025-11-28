#!/bin/bash
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

# Default scale (keep original if not specified)
SCALE="${1:-iw:ih}"
KEEP_AUDIO=false

# Parse flags
for arg in "$@"; do
    if [[ "$arg" == "--keep-audio" ]]; then
        KEEP_AUDIO=true
    fi
done

echo "Downscaling all MP4 files with scale: $SCALE"
echo "Audio: $([[ $KEEP_AUDIO == true ]] && echo 'kept' || echo 'removed')"
echo "Usage: ./batch_mp4.sh [scale] [--keep-audio]"
echo ""

for f in *.mp4; do
    base="${f%.mp4}"
    tmp="${base}_tmp.mp4"

    echo "Processing $f..."

    if [[ $KEEP_AUDIO == true ]]; then
        ffmpeg -y -i "$f" -vf "scale=$SCALE" -c:v libx264 -preset fast -crf 23 -c:a copy "$tmp"
    else
        ffmpeg -y -i "$f" -vf "scale=$SCALE" -an -c:v libx264 -preset fast -crf 23 "$tmp"
    fi

    mv "$tmp" "$f"
done

echo "Downscaling complete!"
