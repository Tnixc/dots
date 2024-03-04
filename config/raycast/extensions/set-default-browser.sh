#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Set default browser
# @raycast.mode silent

# Optional parameters:
# @raycast.icon ZZ
# @raycast.packageName default-browser

# Documentation:
# @raycast.author Tnixc
# @raycast.authorURL https://github.com/Tnixc
CURRENT=$(yabai -m query --windows --window | jq .app | tr -d '"')

if [[ $CURRENT == "Arc" ]]; then
  echo "Arc"
  defaultBrowser browser
elif [[ $CURRENT == "Orion" ]]; then
  echo "Orion"
  defaultBrowser kagimacos
fi
# echo $CURRENT

