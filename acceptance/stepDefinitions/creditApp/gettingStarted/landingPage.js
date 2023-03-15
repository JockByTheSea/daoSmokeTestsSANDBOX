const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");


// Scenario: Verify user is on the correct page and verify the layout of page

Given('the user is on the Wolseley Account Opening landing page', async function () {

    await page.goto('https://www.esite2a.wolseley.co.uk/open-account/');

});

When('they inspect the Wolseley Account Opening landing page', async function () {

    await page.getByText('Open an account').click();

});

Then('the breadcrumb will be Home>Open an account', async function () {

    await page.getByTestId('open-account-breadcrumb').locator('svg');

});

Then('they will see H1 Copy Open a trade account with Wolseley', async function () {

    await page.getByRole('heading', { name: 'Open a trade account with Wolseley' }).click();

});

Then('a Register your branch account online button', async function () {

    await page.getByRole('button', { name: 'Register your branch account online' });

});

Then('a Open a trade account button', async function () {

    await page.getByRole('button', { name: 'Open a trade account' });

});
