const { Given, When, Then } = require('@wdio/cucumber-framework');
const path = require('path');
const fs = require('fs');
const { URL } = require('node:url');
const assert = require('assert');
const waitForFileExists = require('../support/file_assertion');



Given('I go the page {link}', async (link) => {
    await browser.url(link);
});

Then ('I download the file', async () => {
    const downloadLink = await $('//a[@href="download/some-file.txt"]');
    await downloadLink.click();
    const fileHref = await downloadLink.getAttribute('href');
    const fileURL = new URL(`https://the-internet.herokuapp.com/${fileHref}`);
    const fullPath = fileURL.pathname;
    const splitPath = fullPath.split('/');
    const fileName = splitPath[2];
    const filePath = path.join(global.downloadDir, fileName); 
    await browser.call(() => {
        return waitForFileExists(filePath, 60000);
    });
    const content = fs.readFileSync(filePath, 'utf-8');
    assert.ok(content.includes('Helvetica'));
});


