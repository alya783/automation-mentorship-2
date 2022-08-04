const { Given, When, Then } = require('@wdio/cucumber-framework');

const Materials = require('../pageobjects/angularPO');

When ('I go to examples page', async () => {
    await browser.setWindowSize(1920, 1080);
    await Materials.open();
});

Given ('I open the form page', async () => {
    await Materials.form.scrollIntoView();
    await Materials.form.click();
    await expect(browser).toHaveTitle('Form field | Angular Material');
});

When ('I move to the first dropdown box', async () => {
    await Materials.materialExample.scrollIntoView();
});

When ('I choose the first option', async () => {
   await Materials.firstDropWindow.click();
   await Materials.optionsList.waitForDisplayed({ timeout: 3000 });
   await Materials.firstOpt.click();
});

Then ('I see the {string} is displayed', async function (item){
    await expect(Materials.firstOptText).toHaveText(item);
});

Given ('I open the badge page', async () => {
    await Materials.badgePage.click();
    await expect(browser).toHaveTitle('Badge | Angular Material');
});

When ('I move to the copy button', async () => {
    await Materials.copyBtn.moveTo();
});

Then ('appears hover text {string}', async function (item){ 
    await Materials.tooltip.waitForExist();
    await expect(Materials.tooltip).toHaveText(item);
});

Given ('I open the drag and drop page', async () => {
    await Materials.linkCDK.click();
    await Materials.dragDrop.click();
    await expect(browser).toHaveTitle('Drag and Drop | Angular Material');
});

When ('I open examples', async function (){ 
    await Materials.examples.click();
});

Then ('I move to first ToDo list', async () => {
    await Materials.dragExWindow.scrollIntoView();
});

When ('drag and drop item', async function (){ 
    //const target = await $('#cdk-drop-list-1'); //container with DONE items 
    const target = await Materials.dragDropTarget;
    const item = await Materials.dragItem;
    await item.dragAndDrop(target);
    await expect(target).toHaveText('Get to work'); //doesn't move
});







