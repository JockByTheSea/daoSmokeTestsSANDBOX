const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");

const yourBusinessPage = 'http://www.esite2a.wolseley.co.uk/open-account/your-company?identityTokenSignature=-4242408658805749420'

// Scenario: Verify Ltd LLP PLC company details page functionality

Given('the applicant is on the Your Company page', async function () {

    await page.goto(yourBusinessPage);
    await page.getByRole('heading', { name: 'Let’s get to know your company' }).click();
    await page.getByTestId('mainTradeWrapper').locator('div').nth(2).click();
    await page.getByRole('heading', { name: 'My company is a...This field is required' }).click();

});

When('the applicant has selected Ltd LLP PLC as their company type', async function () {

    await page.getByLabel('LTD/PLC/LLP').check();
    await page.getByTestId('companyRegistrationNumber-input').fill('12345678');

});

Then('they will see input fields relevant to Ltd LLP PLC companies', async function () {

    await page.locator('form div').filter({ hasText: 'My Company registration number is...*' }).nth(3).click();
    await page.getByTestId('registrationSubmitButton').click();
    await page.locator('form div').filter({ hasText: 'Company website URL' }).nth(3).click();
    await page.getByTestId('companyWebsite-input').click();
    await page.getByTestId('toggle-company-detail-button').click();
    await page.getByTestId('fullCompanyName-input').click();

});

Then('they should not be able to proceed without completing the mandatory fields', async function () {

    await page.getByTestId('submitButton').click();
    await page.getByTestId('dropdown-error-message').click();
    await page.getByTestId('companyRegistrationNumber-input').click();
    await page.getByTestId('companyRegistrationNumber-input').fill('');
    await page.getByText('Please enter your 8 character company number.').click();
    await page.getByText('Please enter your registered Company name.').click();
    await page.getByText('Please enter the Company postcode.').click();

});