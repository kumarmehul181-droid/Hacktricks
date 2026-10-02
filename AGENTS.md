# Hacktricks — Base44 Dev Environment

## What this is
A minimal Vite (vanilla JS) static site serving a cybersecurity quick-reference page. The original repo only contained a README.md with no runnable application, which is why the initial commit failed to start in Base44.

## Running the app
```
docker compose -f docker-compose.base44.yml up -d --build
```
The Vite dev server runs on port 3000 with live reload. Dependencies are installed on container startup via `npm install` (no lockfile yet — Vite resolves latest compatible).

## Key details
- Vite `allowedHosts: true` and `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` env var handle the preview proxy hostname.
- Source is bind-mounted; edits hot-reload without rebuilding the image.
- `node_modules` is stored in a named volume to persist across container restarts.
