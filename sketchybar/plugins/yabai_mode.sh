#!/bin/bash
yabai_mode=$(yabai -m query --spaces --display | jq 'map(select(."has-focus" == true))[-1].type')
final="${yabai_mode:1:${#yabai_mode}-2}"
sketchybar -m --set yabai label="$final"