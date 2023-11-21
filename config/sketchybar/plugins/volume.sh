#!/usr/bin/env sh

# Get current volume level
volume=$(osascript -e 'output volume of (get volume settings)')
case $volume in
  9[0-9]|100) ICON="󱄡"
  ;;
  [6-8][0-9]) ICON=""
  ;;
  [3-5][0-9]) ICON="󰕾"
  ;;
  [1-2][0-9]) ICON=""
  ;;
  *) ICON="󰝟"
esac
# Set label in sketchybar with volume value
sketchybar --set volume_icon icon="$ICON"
sketchybar --set "$NAME" label="$volume%"
