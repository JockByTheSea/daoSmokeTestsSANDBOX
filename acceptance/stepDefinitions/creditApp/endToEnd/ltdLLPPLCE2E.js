const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");


const yourBusinessPage = 'http://www.esite2a.wolseley.co.uk/open-account/your-company?identityTokenSignature=7926086034946433107'

// Scenario: execute an end to end journey for a limited LLP PLC company applicant

Given('I am applying from a limited LLP PLC company', async function () {

    await page.goto(yourBusinessPage);
    await page.locator('#mui-component-select-mainTrade').click();
    await page.getByRole('option', { name: 'Climate' }).click();
    await page.locator('#mui-component-select-businessClassifications').click();
    await page.getByRole('option', { name: 'Air Con Contractor' }).click();
    await page.getByTestId('fGasNumber-input').fill('12345678901');
    await page.getByLabel('LTD/PLC/LLP').check();

});

When('I complete all limited LLP PLC company details', async function () {

    await page.getByTestId('companyRegistrationNumber-input').fill('11111111111');
    await page.getByTestId('toggle-company-detail-button').click();
    await page.getByTestId('fullCompanyName-input').fill('Limited Company');
    await page.getByTestId('address1-postCodeSearch-input').fill('yo84bp');
    await page.getByTestId('postcode-search-button').click();
    await page.getByTestId('address1.postCodeSelectDropdown').getByRole('button', { name: '​' }).click();
    await page.getByRole('option', { name: '6 White Street,,SELBY,North Yorkshire,YO8 4BP' }).first().click();
    await page.getByTestId('submitButton').click();

});

Then('I complete all limited LLP PLC about you details', async function () {

    await page.getByLabel('Yes').check();
    await page.getByRole('button', { name: 'Please select' }).filter({ hasText: 'Please select' }).click();
    await page.getByRole('option', { name: 'Mr' }).first().click();
    await page.getByTestId('firstName-input').fill('Limited');
    await page.getByTestId('lastName-input').fill('Company');
    await page.getByRole('button', { name: 'Choose date' }).click();
    await page.getByRole('button', { name: 'calendar view is open, switch to year view' }).click();
    await page.getByRole('button', { name: '1939' }).click();
    await page.getByRole('gridcell', { name: '31' }).click();
    await page.getByTestId('address1-postCodeSearch-input').fill('yo84bp');
    await page.getByRole('button', { name: 'Find address' }).click();
    await page.getByTestId('address1.postCodeSelectDropdown').getByRole('button', { name: '​' }).click();
    await page.getByRole('option', { name: '6 White Street,,SELBY,North Yorkshire,YO8 4BP' }).first().click();
    await page.getByTestId('mobileNumber-input').fill('07123456789');
    await page.getByTestId('isBillingContact-section-panel').getByLabel('Yes').check();
    await page.getByTestId('postcode-search-button').click();
    await page.getByRole('button', { name: 'Please select' }).filter({ hasText: 'Please select' }).click();
    await page.getByRole('option', { name: 'York (K78),14.1 miles away' }).click();
    await page.getByLabel('I do not wish to be contacted for marketing').check();
    await page.getByTestId('submitButton').click();

});

Then('I complete all finance details', async function () {

    await page.getByRole('button', { name: 'Please select' }).click();
    await page.getByRole('option', { name: '£20,000 - £39,000' }).click();
    await page.getByTestId('bankName-input').fill('Banker');
    await page.getByTestId('sortCode-input').fill('112233');
    await page.getByTestId('accountNumber-input').fill('12345678');

});

Then('I can submit my application successfully', async function () {

    await page.getByTestId('policy-input').check();
    await page.getByTestId('terms-input').check();
    await page.getByTestId('consent-input').check();
    await page.getByTestId('apply').click();
    await page.getByText('Please don’t refresh the page as it may initiate another credit check.').click();

});