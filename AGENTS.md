# Base44 Dev Notes — CyberSphere / Ethical Hacking Roadmap

## What this app is
A **static single-page HTML/CSS site** (no JavaScript framework, no backend, no build step).
The entire app is `index.html` (plus `cheatsheets/*.md`, `tools/*.py`, `writeups/*.md` as
downloadable reference assets). It renders an ethical-hacking learning roadmap.

## Why it previously "failed to start"
The repo had no server or Base44 compose artifact, so there was nothing listening on port 3000.
`docker-compose.base44.yml` now serves the bind-mounted source via `nginx:alpine` on port 3000.

## Running it
```
docker compose -f docker-compose.base44.yml up -d --build
```
- nginx serves `/usr/share/nginx/html` (bind-mounted from the repo root, read-only).
- Edits to `index.html` are reflected on the next page load — no rebuild needed.
- Healthcheck: `wget http://localhost:80/` inside the container.

## Verification
- `curl -s http://localhost:3000/ | head` should return the `<!DOCTYPE html>` of `index.html`.
- The page title is "Ethical Hacking Roadmap — Tool-wise Guide (OS to Pro)".

## Notes
- External icons load from `cdn.simpleicons.org` in the browser; each has an `onerror` fallback.
- No secrets or environment variables are required.
