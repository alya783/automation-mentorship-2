const { Given, When, Then } = require('@wdio/cucumber-framework');

const MainPage = require('../pageobjects/mainPO');

When ('I am open the page', async () => {
    await MainPage.open();
});

When ('I go to the link {link}', async function (link){ 
    await browser.url(link);
});

When ('I check the title', async function (){ 
    await expect(browser).toHaveTitle('License - Stocksnap.io');
});
