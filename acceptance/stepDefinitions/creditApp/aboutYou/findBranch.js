const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test")


// Scenario: Verify find branch functionality

When('they press the Find branch button', async function () {

    await page.getByRole('heading', { name: 'Which branch do you mainly intend to trade with?*' }).click();
    await page.getByRole('button', { name: 'Please select the main branch you intend to trade with.' }).click();
    await page.getByText('Please select the main branch you intend to trade with.').click();
    await page.getByRole('button', { name: 'Find branch' }).click();
    await page.getByTestId('input_helper_text').click();

});

Then('they will see a list ordered with the closest Wolseley branch', async function () {

    await page.getByTestId('townOrPostcodeSearch-input').fill('yo84bp');
    await page.getByRole('button', { name: 'Find branch' }).click();
    await page.locator('#mui-component-select-branch').click();
    await page.getByRole('option', { name: 'Selby (WJE),0.7 miles away' }).click();

});
