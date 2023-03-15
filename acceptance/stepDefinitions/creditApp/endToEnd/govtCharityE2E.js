const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");


const yourBusinessPage = 'http://www.esite2a.wolseley.co.uk/open-account/your-company?identityTokenSignature=676840066135177554'


// Scenario: execute an end to end journey for a government or charity organisation applicant

Given('I am applying from a government or charity organisation', async function () {

    await page.goto(yourBusinessPage);
    await page.locator('#mui-component-select-mainTrade').click();
    await page.getByRole('option', { name: 'Neville Lumb' }).click();
    await page.locator('#mui-component-select-businessClassifications').click();
    await page.getByRole('option', { name: 'Regional Developer' }).click();

});

When('I complete all government or charity organisation details', async function () {

    await page.getByLabel('Government authority/Charity').check();
    await page.getByTestId('fullTradingName-input').fill('Government Charity');
    await page.getByTestId('address2-postCodeSearch-input').fill('yo84bp');
    await page.getByTestId('postcode-search-button').click();
    await page.getByTestId('address2.postCodeSelectDropdown').getByRole('button', { name: '​' }).click();
    await page.getByRole('option', { name: '6 White Street,,SELBY,North Yorkshire,YO8 4BP' }).first().click();
    await page.getByTestId('charityRegistration-input').fill('12345678');
    await page.getByTestId('submitButton').click();

});

Then('I complete all government or charity organisation about you details', async function () {

    await page.getByLabel('Yes').check();
    await page.getByRole('button', { name: 'Please select' }).click();
    await page.getByRole('option', { name: 'Mx' }).click();
    await page.getByTestId('firstName-input').fill('Charity');
    await page.getByTestId('lastName-input').fill('Govenrment');
    await page.getByTestId('mobileNumber-input').fill('07123456789');
    await page.getByTestId('isBillingContact-section-panel').getByLabel('Yes').check();
    await page.getByLabel('I do not wish to be contacted for marketing').check();
    await page.getByTestId('submitButton').click();

});
