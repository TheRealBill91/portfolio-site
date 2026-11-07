#!/usr/bin/env bash
# Renders the link-preview image and app icon from the HTML templates in this folder
# using a locally installed Chrome (or Edge) in headless mode.
set -euo pipefail
cd "$(dirname "$0")"

BROWSER="${BROWSER:-}"
for candidate in \
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge"; do
  [[ -z "$BROWSER" && -x "$candidate" ]] && BROWSER="$candidate"
done
[[ -n "$BROWSER" ]] || { echo "No Chrome or Edge found; set BROWSER=/path/to/browser" >&2; exit 1; }

render() { # template, output, width, height
  "$BROWSER" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --default-background-color=00000000 --virtual-time-budget=2000 \
    --window-size="$3,$4" --screenshot="$2" "file://$PWD/$1" >/dev/null 2>&1
  echo "Wrote $2"
}

render card.html ../../public/og.png 1200 630
render icon.html ../../public/apple-touch-icon.png 180 180
