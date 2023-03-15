const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");


// Scenario: Verify all mandatory fields on the Your Finances page

When('they try to submit without completing any mandatory fields', async function () {

    await page.getByTestId('apply').click();

});

Then('they will see all the relevant error messages', async function () {

    await page.getByTestId('dropdown-error-message').click();
    await page.getByText('Please enter your bank name').click();
    await page.getByText('Please enter your 6 digit sort code').click();
    await page.getByText('Please enter your 8 digit account number').click();
    await page.getByText('Please confirm you have read and agree to the Data Protection policy').click();
    await page.getByText('Please confirm you have read and agree to the Terms and conditions').click();
    await page.getByText('Please confirm the information is true and you give your consent').click();

});
