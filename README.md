# Ethical Hacking Learning Roadmap (Education Purpose Only)

> **Legal Warning:** Use everything in this repository ONLY on your own lab machines, CTF platforms (TryHackMe, HackTheBox), or programs with written permission (HackerOne, Bugcrowd). Testing systems without authorization is a criminal offence under India's IT Act 2000 (Sections 43 and 66) and similar laws worldwide.

## Level 1 — Beginner (0-3 months): Fundamentals

### Networking
- TCP/IP fundamentals, OSI model (7 layers)
- Common ports and protocols: 21 FTP, 22 SSH, 23 Telnet, 25 SMTP, 53 DNS, 80/443 HTTP/HTTPS, 445 SMB, 3389 RDP
- DNS resolution, DHCP, ARP basics
- How HTTP requests/responses work, status codes (200, 301, 403, 404, 500)

### Linux
- Install Kali Linux in VirtualBox or VMware (2 attacking VM recommended)
- Terminal: cd, ls, grep, find, chmod, chown, chattr, nano/vim, ps, kill
- Filesystem structure: /etc, /var, /home, /tmp, /opt
- Users, groups, sudo, permissions (rwx)
- Bash scripting: variables, loops, conditionals

### Lab Setup
- Attacking machine: Kali Linux
- Vulnerable machines: Metasploitable 2, DVWA, OWASP Juice Shop, VulnHub machines
- Keep host and lab on a Host-Only network

### Tools to Learn First
- Wireshark (traffic analysis, filters)
- Nmap basic scans (ping, port, version)
- Firefox with FoxyProxy

### Practice
- TryHackMe: "Pre Security" and "Complete Beginner" paths

## Level 2 — Intermediate (3-9 months): Core Hacking Skills

### Reconnaissance
- Nmap deep scan: version detection (-sV), OS detection (-O), NSE scripts (-sC, --script vuln)
- Whois, DNS enumeration (dnsenum, dig)
- theHarvester, Sublist3r for subdomains
- Google dorking (site:, inurl:, filetype:)

### Web Application Hacking (OWASP Top 10)
1. SQL Injection (manual + sqlmap)
2. Cross-Site Scripting (reflected, stored, DOM)
3. IDOR (Insecure Direct Object References)
4. SSRF (Server-Side Request Forgery)
5. File upload vulnerabilities
6. Broken authentication and session management
7. CSRF (Cross-Site Request Forgery)
8. Command injection
9. XXE
10. Security misconfiguration

### Tools
- Burp Suite: Proxy, Repeater, Intruder, Decoder
- sqlmap, Nikto, Gobuster/Dirsearch (directory brute forcing)

### Password Attacks (Concept + Lab Only)
- Dictionary vs brute force vs rule-based attacks
- John the Ripper, hashcat (hash types: MD5, SHA, NTLM)
- Hydra for network services (own lab only)

### Exploitation
- Metasploit Framework: msfconsole, exploits, payloads, meterpreter
- searchsploit, understanding public exploit code before running it

### Scripting
- Python: build a port scanner, subdomain finder, login brute-forcer (for labs)
- Improve your Bash automation

### Practice
- TryHackMe: "Jr Penetration Tester" path
- HackTheBox: easy machines (with writeups)
- VulnHub: boot2root machines

## Level 3 — Pro (9+ months): Professional Pentester

### Privilege Escalation
- Linux: SUID binaries, sudo misconfiguration, cron jobs, writable paths, PATH hijacking
- Windows: unquoted service paths, registry abuse, tokens, AlwaysInstallElevated
- Tools: LinPEAS, WinPEAS, GTFOBins, LOLBAS

### Active Directory Attacks
- AD structure: domains, forests, OUs, trust relationships
- Kerberos basics, authentication flow
- Common misconfigurations: AS-REP roasting, Kerberoasting, password spraying (lab only)
- BloodHound for attack path mapping

### Post-Exploitation Concepts
- Pivoting through compromised machines (lab networks)
- Persistence concepts, evidence handling

### Mobile and API Security
- Android APK analysis: apktool, jadx, MobSF
- REST API testing: auth flaws, IDOR in APIs, rate limiting

### Reporting (Most Underrated Skill)
- Executive summary, methodology, findings with CVSS severity, proof of concept, remediation steps
- A good report is what a client pays for

### Certifications Path
1. eJPT (INE Security) — practical entry level
2. CompTIA Security+ — theory foundation
3. CEH — recognized HR filter
4. OSCP — industry gold standard, fully practical

### Bug Bounty (Real-World Legal Practice)
- Platforms: HackerOne, Bugcrowd, Intigriti
- Always stay inside the program's scope
- Start with wide-scope programs, focus on one vulnerability class at a time

### Practice
- HackTheBox medium/hard machines, Proving Grounds
- CTF competitions (TryHackMe Advent of Cyber, picoCTF)

## Golden Rules

1. Hack only: your own lab, CTF platforms, or written-permission bug bounty scope
2. Write a writeup for every machine you solve — commit it to this repo
3. Learn by doing: machines over videos
4. Break-and-fix: learn to patch what you exploited
5. Never stop at the flag — understand WHY it worked

## Suggested Repo Structure

```
/learning-roadmap      -> this file and notes
/writeups/tryhackme    -> one folder per box
/writeups/hackthebox   -> one folder per box
/tools/                -> your own Python/Bash scripts
/cheatsheets/          -> nmap, burp, linux, windows
```
