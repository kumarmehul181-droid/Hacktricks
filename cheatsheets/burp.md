# Burp Suite Cheat Sheet

## Setup
- Proxy on, browser through FoxyProxy, install CA cert
- Scope: Target > Scope — add the lab domain only

## Tabs
- Proxy: intercept requests
- Repeater: modify and resend one request
- Intruder: automated attacks (positions + payloads)
- Decoder: encode/decode base64, URL
- Comparer: diff two responses

## Workflow
1. Walk the whole app with proxy on (build sitemap)
2. Interesting request? Send to Repeater, test payloads
3. Auth/IDOR tests: change user id, compare responses
