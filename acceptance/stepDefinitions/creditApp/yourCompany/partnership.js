const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");


// Scenario: Verify Partnership details page functionality

When('the applicant has selected Partnership as their company type', async function () {

    await page.getByLabel('Partnership').check();

});

Then('they will see input fields relevant to a Partnership', async function () {

    await page.locator('form div').filter({ hasText: 'My Company name is...*' }).nth(3).click();
    await page.locator('form div').filter({ hasText: 'Company postcode*' }).nth(3).click();
    await page.getByTestId('toggle-company-detail-button').click();
    await page.locator('form div').filter({ hasText: 'Full company name*' }).nth(3).click();
    await page.locator('.MuiGrid-root > div > .MuiFormControl-root > .MuiBox-root').click();
    await page.locator('form div').filter({ hasText: 'Company website URL' }).nth(3).click();

});

Then('they wont be able to proceed without completing the mandatory fields', async function () {

    await page.getByTestId('submitButton').click();
    await page.getByText('Please enter your registered Company name.').click();
    await page.getByText('Please enter the Company postcode.').click();

});