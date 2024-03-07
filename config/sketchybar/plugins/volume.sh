#!/usr/bin/env sh

# Get current volume level
volume=$(osascript -e 'output volume of (get volume settings)')
case $volume in
  9[0-9]|100) ICON="􀊩"
    PADDING_LEFT=3
    PADDING_RIGHT=6
  ;;
  [6-8][0-9]) ICON="􀊧"
    PADDING_LEFT=5
    PADDING_RIGHT=7
  ;;
  [3-5][0-9]) ICON="􀊥"
    PADDING_LEFT=6
    PADDING_RIGHT=10
  ;;
  [1-2][0-9]) ICON="􀊡"
    PADDING_LEFT=7
    PADDING_RIGHT=14
  ;;
  *) ICON="􀊣"
    PADDING_LEFT=7
    PADDING_RIGHT=8
esac

# icon.padding_right=7\
# icon.padding_left=8\

# Set label in sketchybar with volume value
sketchybar --set volume_icon icon="$ICON"
sketchybar --set volume_icon icon.padding_left="$PADDING_LEFT"
sketchybar --set volume_icon icon.padding_right="$PADDING_RIGHT"
sketchybar --set "$NAME" label="$volume%"
