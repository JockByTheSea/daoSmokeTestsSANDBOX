const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");


const yourBusinessPage = 'http://www.esite2a.wolseley.co.uk/open-account/your-company?identityTokenSignature=7926086034946433107'


// Scenario: execute an end to end journey for a sole trader applicant

Given('I am applying from a sole trader', async function () {

    await page.goto(yourBusinessPage);
    await page.locator('#mui-component-select-mainTrade').click();
    await page.getByRole('option', { name: 'Fusion Utilities' }).click();
    await page.locator('#mui-component-select-businessClassifications').click();
    await page.getByRole('option', { name: 'Main Works' }).click();
    await page.getByText('LTD/PLC/LLP').click();
    await page.getByLabel('Sole trader').check();
    
});

When('I complete all sole trader company details', async function () {

    await page.getByTestId('toggle-company-detail-button').click();
    await page.getByTestId('fullCompanyName-input').fill('SoleTrader');
    await page.getByTestId('address1-postCodeSearch-input').fill('yo84bp');
    await page.getByTestId('postcode-search-button').click();
    await page.getByTestId('address1.postCodeSelectDropdown').getByRole('button', { name: '​' }).click();
    await page.getByRole('option', { name: '6 White Street,,SELBY,North Yorkshire,YO8 4BP' }).first().click();
    await page.getByTestId('submitButton').click();

 });

Then('I complete all sole trader about you details', async function () {

    await page.getByLabel('Yes').check();
    await page.getByRole('button', { name: 'Please select' }).click();
    await page.getByRole('option', { name: 'Mx' }).click();
    await page.getByTestId('firstName-input').fill('Sole');
    await page.getByTestId('lastName-input').fill('Trader');
    await page.getByRole('button', { name: 'Choose date' }).click();
    await page.getByRole('button', { name: 'calendar view is open, switch to year view' }).click();
    await page.getByRole('button', { name: '1939' }).click();
    await page.getByRole('gridcell', { name: '31' }).click();
    await page.getByTestId('address1-postCodeSearch-input').fill('yo84bp');
    await page.getByTestId('postcode-search-button').click();
    await page.getByTestId('address1.postCodeSelectDropdown').getByRole('button', { name: '​' }).click();
    await page.getByRole('option', { name: '6 White Street,,SELBY,North Yorkshire,YO8 4BP' }).first().click();
    await page.getByLabel('More than 3 years').check();
    await page.getByTestId('mobileNumber-input').fill('07123456789');
    await page.getByTestId('isBillingContact-section-panel').getByLabel('Yes').check();
    await page.getByLabel('I do not wish to be contacted for marketing').check();
    await page.getByTestId('submitButton').click();

});
