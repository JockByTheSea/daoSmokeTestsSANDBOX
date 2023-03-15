const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");


// Scenario: Verify Government or Charity organisation details page functionality

When('the applicant has selected Government or Charity organisation as their company type', async function () {

    await page.getByLabel('Government authority/Charity').check();

});

Then('they will see input fields relevant to a Government or Charity organisation', async function () {

    await page.locator('form div').filter({ hasText: 'Full trading name*' }).nth(3).click();
    await page.locator('form div').filter({ hasText: 'Trading title (if different)' }).nth(3).click();
    await page.locator('.MuiGrid-root > div > .MuiFormControl-root > .MuiBox-root').click();
    await page.locator('form div').filter({ hasText: 'Charity registration or LTD number' }).nth(3).click();
    await page.getByRole('heading', { name: 'Is the registered trading address the invoice address?This field is required' }).click();
    await page.getByTestId('toggle-address-entry-button').click();

});

Then('they will not be able to proceed without completing the mandatory fields', async function () {

    await page.getByTestId('submitButton').click();
    await page.getByText('Please enter the full trading name of the Company or Charity').click();
    await page.getByText('Please enter the first line of your Company address.').click();
    await page.getByText('Please enter the Town/City of your Company address.').click();
    await page.getByText('Please enter the Company postcode.').click();

});