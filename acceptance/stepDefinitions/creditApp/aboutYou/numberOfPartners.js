const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");


const yourBusinessPage = 'http://www.esite2a.wolseley.co.uk/open-account/your-company?identityTokenSignature=7926086034946433107'


// Scenario: Verify applicant can add up to three partners

Given('I am on the About you section of the partnership journey', async function () {

    await page.goto(yourBusinessPage);
    await page.locator('#mui-component-select-mainTrade').click();
    await page.getByRole('option', { name: 'Pipe' }).click();
    await page.locator('#mui-component-select-businessClassifications').click();
    await page.getByRole('option', { name: 'Commercial Facilities Management' }).click();
    await page.getByLabel('Partnership').check();
    await page.getByTestId('toggle-company-detail-button').click();
    await page.getByTestId('fullCompanyName-input').click();
    await page.getByTestId('fullCompanyName-input').fill('Partnership');
    await page.getByTestId('address1-postCodeSearch-input').click();
    await page.getByTestId('address1-postCodeSearch-input').fill('hg41sl');
    await page.getByTestId('postcode-search-button').click();
    await page.getByTestId('address1.postCodeSelectDropdown').getByRole('button', { name: '​' }).click();
    await page.getByTestId('option').click();
    await page.getByTestId('submitButton').click();

});

When('I choose two partners', async function () {

    await page.getByTestId('isApplicant-section-panel').getByLabel('Yes').check();
    await page.getByLabel('2').check();

});

Then('I will be able to input details of the second partner', async function () {

    await page.getByRole('heading', { name: 'How long have they lived at that address?This field is required' }).click();

});

When('I choose three partners', async function () {

    await page.getByTestId('numberOfPartners-section-panel').getByLabel('3').check();

});

Then('I will be able to input details of the third partner', async function () {

    await page.getByTestId('partners.1.howLongLived-section-panel').getByRole('heading', { name: 'How long have they lived at that address?This field is required' }).click();

});

When('I choose 4 or more partners', async function () {

    await page.getByLabel('4+').check();

});

Then('I will be able to input details for a fourth partner', async function () {

    await page.getByTestId('partners.2.howLongLived-section-panel').getByRole('heading', { name: 'How long have they lived at that address?This field is required' }).click();

});
