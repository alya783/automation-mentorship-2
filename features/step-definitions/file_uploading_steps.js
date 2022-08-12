require('dotenv').config();
const { Given, When, Then } = require('@wdio/cucumber-framework');

const MainPage = require('../pageobjects/mainPO');
const EditPage = require('../pageobjects/editPagePO');
const Upload = require('../pageobjects/internetPO');
const path = require('path');
const login = process.env.LOGIN; // ??? export LOGIN="astrashevichute@gmail.com" do in terminal
const password = process.env.PASSWORD; // ??? export PASSWORD="2022PolandAQA" do in terminal

Given ('I open main page', async () => {
    await browser.deleteAllCookies();
    await MainPage.open();
});

When ('I login in my account', async () => {
    await MainPage.login(`${login}`,`${password}`);
});

Then ('I upload the image', async () => {
    const filePath = '/home/alya/Desktop/alya.jpg';
    const remoteFilePath = await browser.uploadFile(filePath);
    await EditPage.uploadBtn.addValue(remoteFilePath);
    await expect(await EditPage.avatar).toHaveAttribute('style', 'display:none;');
});

When('I save profile changes', async () => {
    await EditPage.saveBtn.click();
    await EditPage.alertSuccess.waitForDisplayed({ timeout: 3000 });
});

Given('I open the page {link}', async (link) => {
    await browser.url(link);
});

Then ('I upload the file', async () => {
    const internalPath = '/home/alya/Desktop/mountain.jpg';
    const remoteFilePath = await browser.uploadFile(internalPath);
    await Upload.uploadButton.setValue(remoteFilePath);
    await Upload.submitButton.click();
});

When('I check the file was uploaded', async () => {
    await Upload.message.waitForDisplayed({ timeout: 3000 });
});