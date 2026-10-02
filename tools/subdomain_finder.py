#!/usr/bin/env python3
"""Simple subdomain finder using a wordlist - for authorized targets only."""
import socket, sys

if len(sys.argv) != 3:
    print("Usage: python3 subdomain_finder.py <domain> <wordlist>")
    sys.exit(1)

domain, wordlist = sys.argv[1], sys.argv[2]
with open(wordlist) as f:
    for word in f:
        sub = word.strip() + "." + domain
        try:
            ip = socket.gethostbyname(sub)
            print(f"[+] {sub} -> {ip}")
        except socket.gaierror:
            pass
