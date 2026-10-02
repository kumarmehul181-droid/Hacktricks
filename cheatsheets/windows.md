# Windows PrivEsc Cheat Sheet

## Quick checks
- `whoami /priv` — token privileges (SeImpersonate etc.)
- `systeminfo` — missing patches hint
- Unquoted service paths: `wmic service get name,pathname,startmode`
- AlwaysInstallElevated registry key
- Stored creds: `cmdkey /list`, `runas /savecred`
- Scheduled tasks: `schtasks /query /fo LIST /v`

## Tools
- WinPEAS, PowerUp, Seatbelt
- LOLBAS (living-off-the-land binaries)
