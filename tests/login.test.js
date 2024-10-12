const { Given, When, Then } = require('cucumber');
const LoginPage = require('../page-objects/LoginPage');

Given('I am on the login page', async () => {
    await browser.url('https://kasirdemo.vercel.app/');
});

When('I enter {string} and {string}', async (username, password) => {
    await LoginPage.login(username, password);
});

Then('I should see the dashboard', async () => {
    const dashboardHeader = await $('h1=Dashboard');
    expect(await dashboardHeader.isDisplayed()).toBe(true);
});
