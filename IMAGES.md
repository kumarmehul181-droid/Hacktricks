# Image Credits and Sources

This repository uses real product photos from Wikimedia Commons for Raspberry Pi and Flipper Zero. The images are included (or should be added) in the assets/ directory as local files so the site works reliably on GitHub Pages.

Included/proposed local image filenames:
- assets/raspberry-pi-4.jpg — Raspberry Pi 4 product photo
- assets/flipper-zero.jpg — Flipper Zero product photo
- assets/flipper-zero-modules.jpg — Flipper Zero IR / iButton module photo

Image attributions (Wikimedia Commons):
- Raspberry Pi 4 product photo — File: Raspberry_Pi_4_Model_B_-_Side.jpg by Raspberry Pi Foundation (CC BY-SA 4.0)
  https://commons.wikimedia.org/wiki/File:Raspberry_Pi_4_Model_B_-_Side.jpg

- Flipper Zero product photo — File: Flipper_Zero.jpg (CC BY-SA 4.0)
  https://commons.wikimedia.org/wiki/File:Flipper_Zero.jpg

- Flipper Zero modules photo — File: Flipper_Zero_infrared_and_ibutton.jpg (CC0)
  https://commons.wikimedia.org/wiki/File:Flipper_Zero_infrared_and_ibutton.jpg

Instructions to add the actual photo files locally (run from your repo root):

mkdir -p assets
curl -L -o assets/raspberry-pi-4.jpg "https://upload.wikimedia.org/wikipedia/commons/8/8a/Raspberry_Pi_4_Model_B_-_Side.jpg"
curl -L -o assets/flipper-zero.jpg "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flipper_Zero.jpg"
curl -L -o assets/flipper-zero-modules.jpg "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flipper_Zero_infrared_and_ibutton.jpg"

After downloading, commit and push:

git add assets/raspberry-pi-4.jpg assets/flipper-zero.jpg assets/flipper-zero-modules.jpg
git commit -m "Add Raspberry Pi and Flipper Zero product photos"
git push origin main

I have also added placeholder SVG logos for six tools (nmap, Wireshark, Burp Suite, sqlmap, Metasploit, LinPEAS) in assets/ so they display immediately on the site. Replace them later with official logos if you prefer.
