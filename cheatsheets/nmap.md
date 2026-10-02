# Nmap Cheat Sheet (Lab Use)

## Discovery
- `nmap -sn 10.10.x.0/24` — ping sweep, live hosts
- `nmap -Pn 10.10.x.x` — skip ping (if ICMP blocked)

## Scanning
- `nmap -sV -sC 10.10.x.x` — versions + default scripts
- `nmap -p- 10.10.x.x` — all 65535 ports
- `nmap -sU --top-ports 100 10.10.x.x` — top UDP ports
- `nmap -O 10.10.x.x` — OS detection

## Scripts
- `nmap --script vuln 10.10.x.x` — vulnerability scan
- `nmap --script ftp-anon -p 21 10.10.x.x` — example service script

## Output
- `-oN normal.txt` — normal, `-oX out.xml` — XML, `-oA all` — all formats
