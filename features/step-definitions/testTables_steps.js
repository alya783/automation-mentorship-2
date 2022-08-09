const { Given, When, Then } = require('@wdio/cucumber-framework');

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
    for(let i = 0; i < linksText.length; i++){
        const elem = await MainPage.dropdownMenuItems[i];
        await expect(elem).toHaveText(linksText[i][0]);
    }
}); 

Then ('I check items:', async function(table){
    const rows = table.hashes();
    for (const row of rows) {
        await browser.newWindow(row.link);
        await expect(browser).toHaveTitle(row.title);
    }
}); 
