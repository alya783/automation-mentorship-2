const { Given, When, Then } = require('@wdio/cucumber-framework');

const MainPage = require('../pageobjects/mainPO');

Given ('I am open the main page', async () => {
    await MainPage.open();
});

When (/^I check element "([^"]*)" has text "([^"]*)"$/, async function (ind, text) {
    expect(await MainPage.trendingLinks[ind]).toHaveText(text);
});

When (/^I check element "([^"]*)" has link "([^"]*)"$/, async function (ind, link) {
    expect(await MainPage.trendingLinks[ind]).toHaveLink(link);
});
