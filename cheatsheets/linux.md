# Linux Basics + PrivEsc Cheat Sheet

## Everyday
- `grep -rn "password" /var/log/` — search recursively
- `find / -type f -perm -4000 2>/dev/null` — SUID binaries
- `sudo -l` — what can I run as root?
- `crontab -l` and `cat /etc/crontab` — scheduled jobs
- `ss -tulpn` — listening ports

## PrivEsc quick checks
- SUID binaries (check GTFOBins)
- Writable files run by root
- Cron jobs with relative paths (PATH hijack)
- Stored creds: `.bash_history`, config files, `/etc/shadow` access
- LinPEAS automation

## Useful one-liner
- `python3 -c 'import pty;pty.spawn("/bin/bash")'` — proper shell
