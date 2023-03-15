const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");


// Scenario: Verify user is on the Let's get started page and verify the layout of page

Given('the user is on the Lets get started page', async function () {

    await page.goto('https://www.esite2a.wolseley.co.uk/open-account/getting-started/');

});

When('they know they are on the Lets get started page', async function () {

    await page.getByRole('heading', { name: 'Let’s get started' }).click();

});

Then('the breadcrumb will be Home>Create an account', async function () {

    await page.getByTestId('clearance-page-breadcrumb').locator('svg').click();

});

Then('they will see H2 Copy I would like to apply for a', async function () {

    await page.getByRole('heading', { name: 'I would like to apply for a...*' }).click();

});

Then('a Credit account radio button', async function () {

    await page.getByLabel('Credit account').check();

});

Then('a Cash account radio button', async function () {

    await page.getByLabel('Cash account').check();

});

Then('a Email address input field', async function () {

    await page.getByTestId('email-input').click();

});

Then('a button to Validate their email address', async function () {

    await page.getByTestId('submitButton').click();
    await page.getByTestId('input_helper_text').click();

});
