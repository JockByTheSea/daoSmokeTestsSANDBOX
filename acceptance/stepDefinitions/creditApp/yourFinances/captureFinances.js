const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");


// Scenario: Verify applicant can submit application after completing all fields

When('they have completed all the mandatory fields', async function () {

    await page.getByRole('button', { name: 'Please select' }).click();
    await page.getByRole('option', { name: '£5,000 - £9,999' }).click();
    await page.getByTestId('bankName-input').click();
    await page.getByTestId('bankName-input').fill('Banker');
    await page.getByTestId('sortCode-input').click();
    await page.getByTestId('sortCode-input').fill('112233');
    await page.getByTestId('accountNumber-input').click();
    await page.getByTestId('accountNumber-input').fill('12345678');
    await page.getByTestId('policy-input').check();
    await page.getByTestId('terms-input').check();
    await page.getByTestId('consent-input').check();

});

Then('they will be able to click the Apply button successfully', async function () {

    await page.getByTestId('apply').click();
    await page.getByText('We are processing your application, please wait.Please don’t refresh the page as').click();

});
