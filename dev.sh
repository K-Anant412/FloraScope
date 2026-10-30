#!/usr/bin/env bash

# Kill background tasks when Ctrl+C is pressed
trap 'kill 0' SIGINT

# Start Backend
(cd Backend && source venv/Scripts/activate && python run.py) &

# Start Frontend
(cd Frontend && npm run dev) &

# Keep terminal attached to watch output
wait