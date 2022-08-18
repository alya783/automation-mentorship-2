require('dotenv').config();
const { Given, When, Then } = require('@wdio/cucumber-framework');
const { CucumberJsJsonReporter } = require('wdio-cucumberjs-json-reporter');
const MainPage = require('../pageobjects/mainPO');
const EditPage = require('../pageobjects/editPagePO');
const Upload = require('../pageobjects/internetPO');
const path = require('path');
const login = process.env.LOGIN; 
const password = process.env.PASSWORD; 

browser.addCommand("saveChanges", async function (s1, s2) {
    await s1.click();
    await s2.waitForDisplayed({ timeout: 3000 });
});

Given ('I open main page', async () => {
    await browser.deleteAllCookies();
    await MainPage.open();
});

When ('I login in my account', { wrapperOptions: { retry: 2 } }, async () => {
    await MainPage.login(`${login}`,`${password}`);
});

Then ('I upload the image', async () => {
    const filePath = './content/alya.jpg';
    const remoteFilePath = await browser.uploadFile(filePath);
    await EditPage.uploadBtn.addValue(remoteFilePath);
    await expect(await EditPage.avatar).toHaveAttribute('style', 'display:none;');
});

When('I save profile changes', async () => {
    await browser.saveChanges(EditPage.saveBtn, EditPage.alertSuccess);
    CucumberJsJsonReporter.attach("done!", 'text/plain'); // ?????
});

Given('I open the page {link}', async (link) => {
    await browser.url(link);
});

Then ('I upload the file', async () => {
    const internalPath = './content/mountain.jpg';
    const remoteFilePath = await browser.uploadFile(internalPath);
    await Upload.uploadButton.setValue(remoteFilePath);
    await Upload.submitButton.click();
});

When('I check the file was uploaded', async () => {
    await Upload.message.waitForDisplayed({ timeout: 3000 });
});