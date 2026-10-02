#!/usr/bin/env python3
"""Basic port scanner - for YOUR OWN lab machines only."""
import socket, sys

if len(sys.argv) != 2:
    print("Usage: python3 port_scanner.py <lab-ip>")
    sys.exit(1)

host = sys.argv[1]
print(f"[*] Scanning {host} ...")
for port in range(1, 1025):
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.settimeout(0.3)
    if s.connect_ex((host, port)) == 0:
        print(f"[+] Open: {port}")
    s.close()
