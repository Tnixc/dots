/usr/bin/env sh

sketchybar --set $NAME label="$(date '+%d' | sed s/^0//)"
