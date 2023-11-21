#!/usr/bin/env sh

# Get current brightness level
brightness=$(osascript -e 'output volume of (get volume settings)')

# Set label in sketchybar with brightness value
sketchybar --set "$NAME" label="$brightness"