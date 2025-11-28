#!/bin/bash
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

# Default scale (keep original if not specified)
SCALE="${1:-iw:ih}"

echo "Converting all MP4 files with scale: $SCALE"
echo "Usage: ./batch_convert.sh [scale]"
echo "Examples:"
echo "  ./batch_convert.sh           # Keep original resolution"
echo "  ./batch_convert.sh 1280:-1   # Scale to 1280px width, maintain aspect ratio"
echo "  ./batch_convert.sh 640:-1    # Scale to 640px width, maintain aspect ratio"
echo "  ./batch_convert.sh -1:720    # Scale to 720px height, maintain aspect ratio"
echo ""

for f in *.mp4; do
    base="${f%.mp4}"
    echo "Converting $f..."
    ffmpeg -i "$f" -vf "scale=$SCALE" -pix_fmt yuv420p -f yuv4mpegpipe "$base.y4m"
    avifenc "$base.y4m" "$base.avif"
    rm "$base.y4m"
done

echo "Conversion complete!"