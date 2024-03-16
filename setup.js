const { exec } = require('child_process');

const modules = [
    'gradient-string',
    'cluster',
    'crypto',
    'http2',
    'http',
    'net',
    'tls',
    'url',
    'fs',
    'axios',
    'path'
    'puppeteer'
    'hpack'
];

function installModules(modules) {
    modules.forEach(module => {
        exec(`npm install ${module}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error installing ${module}: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Error installing ${module}: ${stderr}`);
                return;
            }
            console.log(`${module} installed successfully.`);
            
    
            if (module === 'tls') {
                executeBrowser();
            }
        });
    });
}

function executeBrowser() {
    exec('node browser.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing browser.js: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error executing browser.js: ${stderr}`);
            return;
        }
        console.log(`browser.js executed successfully.`);
    });
}

installModules(modules);
