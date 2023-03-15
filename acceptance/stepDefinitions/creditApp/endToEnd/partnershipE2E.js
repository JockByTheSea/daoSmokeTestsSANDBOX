const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");


const yourBusinessPage = ''


// Scenario: execute an end to end journey for a partnership applicant

Given('I am applying from a partnership', async function () {

    await page.goto(yourBusinessPage);
    await page.locator('#mui-component-select-mainTrade').click();
    await page.getByRole('option', { name: 'Managed Services' }).click();
    await page.locator('#mui-component-select-businessClassifications').click();
    await page.getByRole('option', { name: 'Retail Service Provider' }).click();

});

When('I complete all partnership company details', async function () {

    await page.getByTestId('toggle-company-detail-button').click();
    await page.getByTestId('fullCompanyName-input').fill('Partnership');
    await page.getByTestId('address1-postCodeSearch-input').fill('yo84bp');
    await page.getByTestId('postcode-search-button').click();
    await page.getByTestId('address1.postCodeSelectDropdown').getByRole('button', { name: '​' }).click();
    await page.getByRole('option', { name: '6 White Street,,SELBY,North Yorkshire,YO8 4BP' }).first().click();
    await page.getByTestId('submitButton').click();

});

Then('I complete all partnership about you details', async function () {

    await page.getByLabel('Yes').check();
    await page.getByLabel('2').check();
    await page.locator('#mui-component-select-title').click();
    await page.getByRole('option', { name: 'Mx' }).click();
    await page.getByTestId('firstName-input').fill('First');
    await page.getByTestId('lastName-input').fill('Partner');
    await page.getByRole('button', { name: 'Choose date' }).first().click();
    await page.getByRole('button', { name: 'calendar view is open, switch to year view' }).click();
    await page.getByRole('button', { name: '1937' }).click();
    await page.getByRole('gridcell', { name: '26' }).click();
    await page.getByTestId('address1-postCodeSearch-input').fill('yo84bp');
    await page.getByTestId('postcode-search-button').first().click();
    await page.getByTestId('address1.postCodeSelectDropdown').getByRole('button', { name: '​' }).click();
    await page.getByRole('option', { name: '6 White Street,,SELBY,North Yorkshire,YO8 4BP' }).first().click();
    await page.getByTestId('howLongLived-section-panel').getByLabel('More than 3 years').check();
    await page.getByTestId('mobileNumber-input').fill('07123456789');
    await page.getByRole('button', { name: 'Please select' }).filter({ hasText: 'Please select' }).click();
    await page.getByRole('option', { name: 'Miss' }).click();
    await page.getByTestId('partners-0-firstName-input').fill('Second');
    await page.getByTestId('partners-0-lastName-input').fill('Partner');
    await page.getByRole('button', { name: 'Choose date' }).nth(1).click();
    await page.getByRole('button', { name: 'calendar view is open, switch to year view' }).click();
    await page.getByRole('button', { name: '1942' }).click();
    await page.getByRole('gridcell', { name: '29' }).click();
    await page.getByTestId('partners-0-address1-postCodeSearch-input').click();
    await page.getByTestId('partners-0-address1-postCodeSearch-input').fill('yo84bp');
    await page.getByRole('button', { name: 'Find address' }).click();
    await page.getByTestId('partners.0.address1.postCodeSelectDropdown').getByRole('button', { name: '​' }).click();
    await page.getByRole('option', { name: '6 White Street,,SELBY,North Yorkshire,YO8 4BP' }).first().click();
    await page.getByTestId('partners.0.howLongLived-section-panel').getByLabel('More than 3 years').check();
    await page.getByTestId('partners-0-mobileNumber-input').fill('07123456789');
    await page.getByTestId('partners-0-emailAddress-input').fill('james.newell@wolseley.co.uk');
    await page.getByTestId('isBillingContact-section-panel').getByLabel('Yes').check();
    await page.getByTestId('postcode-search-button').click();
    await page.getByRole('button', { name: 'Please select' }).filter({ hasText: 'Please select' }).click();
    await page.getByRole('option', { name: 'York (K78),14.1 miles away' }).click();
    await page.getByLabel('I do not wish to be contacted for marketing').check();
    await page.getByTestId('submitButton').click();

});
