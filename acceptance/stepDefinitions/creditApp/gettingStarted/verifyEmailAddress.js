const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");


// Scenario: Verify Validate email address button progress application

When('they input their email address', async function () {

    await page.getByLabel('Credit account').check();
    await page.getByTestId('email-input').fill('james.newell@wolseley.co.uk');

});
       
When('they click on the Validate email address button', async function () {

    await page.getByTestId('submitButton').click();

});

Then('they will be presented with success message', async function () {

    await page.getByText('Your email has successfully been sent! Please check your email to start the appl').click();

});
