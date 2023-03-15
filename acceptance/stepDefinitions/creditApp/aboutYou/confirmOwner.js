const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test")


const yourBusinessPage = 'http://www.esite2a.wolseley.co.uk/open-account/your-company?identityTokenSignature=6735966605057779256'

// Scenario: Verify only the owner can apply for a credit account

Given('the applicant is on the About You Section', async function () {

    await page.goto(yourBusinessPage);
    await page.locator('#mui-component-select-mainTrade').click();
    await page.getByRole('option', { name: 'Plumb & Parts' }).click();
    await page.locator('#mui-component-select-businessClassifications').click();
    await page.getByRole('option', { name: 'Plumber' }).click();
    await page.getByLabel('Sole trader').check();
    await page.getByTestId('toggle-company-detail-button').click();
    await page.getByTestId('fullCompanyName-input').fill('Plumbman');
    await page.getByTestId('address1-postCodeSearch-input').click();
    await page.getByTestId('address1-postCodeSearch-input').fill('yo84bp');
    await page.getByTestId('postcode-search-button').click();
    await page.getByTestId('address1.postCodeSelectDropdown').getByRole('button', { name: '​' }).click();
    await page.getByRole('option', { name: '6 White Street,,SELBY,North Yorkshire,YO8 4BP' }).first().click();
    await page.getByLabel('Yes').check();
    await page.getByTestId('submitButton').click();
    await page.getByRole('heading', { name: 'Let’s get to know each other' }).click();

});

When('they Confirm they are not the owner', async function () {

    
    await page.getByRole('heading', { name: 'I confirm I am the owner*' }).click();
    await page.getByLabel('No').check();

});

Then('they will not be able to proceed with the credit application', async function () {

    await page.getByText('The application must be completed by the owner of the company.').click();
    await page.getByRole('button', { name: 'Apply for cash account' });

});

Then('if they confirm they are the owner', async function () {

    await page.getByLabel('Yes').check();

});

Then('they will be able to continue the application', async function () {

    await page.getByRole('button', { name: 'Please select' }).filter({ hasText: 'Please select' }).click();

});
