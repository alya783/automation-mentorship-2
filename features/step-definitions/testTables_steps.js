const { Given, When, Then } = require('@wdio/cucumber-framework');
const { addStep } = require('@wdio/allure-reporter').default;

const MainPage = require('../pageobjects/mainPO');

Given ('I go to the main page', async () => {
    await MainPage.open();
});

When('I click on dropdown menu', async () => {
    await MainPage.dropdownBtn.click();
    await MainPage.dropdownMenu.isDisplayed();
}); 

Then ('I see the items:', async function(table){
    const linksText = table.raw();
    addStep('links', Buffer(await browser.takeScreenshot()));
    for(let i = 0; i < linksText.length; i++){
        const elem = await MainPage.dropdownMenuItems[i];
        await expect(elem).toHaveText(linksText[i][0]);
    }
}); 

Then ('I check items:', async function(table){
    const rows = table.hashes();
    for (const row of rows) {
        await browser.newWindow(row.link);
        addStep('pages', Buffer(await browser.takeScreenshot()));
        await expect(browser).toHaveTitle(row.title);
    }
}); 
