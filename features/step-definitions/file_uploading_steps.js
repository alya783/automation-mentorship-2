const { Given, When, Then } = require('@wdio/cucumber-framework');

const MainPage = require('../pageobjects/mainPO');
const EditPage = require('../pageobjects/editPagePO');
const path = require('path');

Given ('I open main page', async () => {
    await browser.deleteAllCookies();
    await MainPage.open();
});

When ('I login in my account', async () => {
    await MainPage.login("astrashevichute@gmail.com", "2022PolandAQA");
});

Then ('I upload the image', async () => {
    const filePath = '/home/alya/Desktop/alya.jpg';
    const remoteFilePath = await browser.uploadFile(filePath);
    await EditPage.uploadBtn.addValue(remoteFilePath);
    await expect(await $('.fa.fa-user-circle.blank-pic')).toHaveAttribute('style', 'display:none;');
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
    await $('#file-upload').setValue(remoteFilePath);
    await $('#file-submit').click();
});

When('I check the file was uploaded', async () => {
    await $('#uploaded-files').waitForDisplayed({ timeout: 3000 });
})