# Ethical Hacking Learning Roadmap

![Hacktricks Logo](assets/logo.svg)

> Legal Warning: This repository is for educational purposes only. Use all content only in your own lab environment, on authorized CTF platforms, or in bug bounty programs with explicit written permission. Do not test systems without authorization.

Hacktricks is a structured cybersecurity learning repository designed to help beginners and intermediate learners understand ethical hacking in a safe, legal, and practical way. It combines a guided roadmap, notes, cheat sheets, writing exercises, and tooling references into a single learning hub.

## Why this repository exists

This project is meant to help students move from basic cybersecurity theory to hands-on practice. Instead of jumping straight into exploitation, the repository builds a clear path:

- Fundamentals first: networking, Linux, and security basics
- Lab setup second: virtual machines and isolated environments
- Practice third: recon, vulnerability testing, and exploitation concepts
- Professional skills last: reporting, documentation, and responsible security work

## Repository overview

| Area | Purpose | Examples |
|---|---|---|
| `README.md` | Main roadmap and learning guide | Beginner → intermediate → advanced path |
| `index.html` | Front-end landing page for browsing the repo | Static site overview |
| `cheatsheets/` | Quick references and command notes | Nmap, Linux, Burp, reconnaissance |
| `tools/` | Scripts and custom utilities | Python/Bash tools for lab tasks |
| `writeups/` | Writeups and case studies | CTFs, machines, lab notes |
| `assets/` | Visuals, diagrams, and branding | Logo, diagrams, illustrations |

## Learning path

![Learning Roadmap](assets/roadmap.svg)

### Level 1 — Beginner (0–3 months)

Focus on the foundations:

- Networking fundamentals: TCP/IP, OSI model, ports, protocols
- Linux basics: file system, permissions, shell usage, scripting
- Lab setup: Kali Linux, vulnerable VMs, isolated networks
- Essential tools: Wireshark, Nmap, Bash basics
- Practice: beginner CTFs and guided labs

### Level 2 — Intermediate (3–9 months)

Focus on technical offensive security skills:

- Reconnaissance: DNS, subdomain enumeration, OSINT, discovery
- Web application attacks: SQLi, XSS, IDOR, SSRF, CSRF
- Password and authentication attacks: concepts and safe lab testing
- Exploitation basics: Metasploit, payloads, payload delivery concepts
- Automation: Python and Bash scripting for tasks and scanners

### Level 3 — Professional (9+ months)

Focus on advanced pentesting and real-world security work:

- Privilege escalation: Linux/Windows techniques
- Active Directory: Kerberos, trusts, privilege chains
- Post-exploitation: pivoting, persistence, forensic awareness
- API and mobile security: application testing workflows
- Reporting: CVSS, evidence, remediation, executive summaries
- Bug bounty and professional practice: scope awareness and responsible disclosure

## Quick start

1. Start with this README and follow the roadmap in order.
2. Build a safe lab environment using isolated virtual machines.
3. Study the cheat sheets for commands and quick references.
4. Practice in controlled environments only.
5. Write a writeup for every machine or challenge you complete.

## Safe usage rules

1. Use only on your own machines, authorized labs, or permitted CTF platforms.
2. Never attack systems without explicit permission.
3. Keep your lab isolated from production networks.
4. Understand what you are doing before running any command or exploit.
5. Learn to document findings and explain root causes clearly.

## Recommended repository structure

```text
Hacktricks/
├── README.md
├── index.html
├── assets/
│   ├── logo.svg
│   └── roadmap.svg
├── cheatsheets/
│   └── cheatsheet.md
├── tools/
├── writeups/
└── LICENSE (if added later)
```

## Summary

This repository is best understood as a cybersecurity learning archive and structured roadmap. It is not just a collection of commands or tools; it is a full educational path for understanding ethical hacking responsibly, documenting lessons, and building hands-on skills in a controlled and safe environment.

---

© 2026 Hacktricks
