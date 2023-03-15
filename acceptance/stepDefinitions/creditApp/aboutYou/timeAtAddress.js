const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test")


// Scenario: Verify find how long applicant has been at their address

When('they confirm they have lived at the address for more than three years', async function () {

    await page.getByRole('heading', { name: 'How long have you lived at that address?This field is required' }).click();
    await page.getByLabel('More than 3 years').check();

});

Then('they will not need to complete additional information', async function () {

    expect(page.locator(getByText('Please enter your previous address'))).not.toBeVisible();

});

When('if they confirm they have lived there for less than three years', async function () {

    await page.getByLabel('Less than 3 years').check();

});

Then('they will see have additional fields to complete', async function () {

    await page.getByText('Please enter your previous address').click();

});
