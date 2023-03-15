const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");


const yourBusinessPage = 'http://www.esite2a.wolseley.co.uk/open-account/your-company?identityTokenSignature=6735966605057779256'

// Scenario: Verify the different amounts of estimated monthly spend

Given('the applicant is on the Your Finances page', async function () {
    
    await page.goto(yourBusinessPage);
    await page.locator('#mui-component-select-mainTrade').click();
    await page.getByRole('option', { name: 'Plumb & Parts' }).click();
    await page.locator('#mui-component-select-businessClassifications').click();
    await page.getByRole('option', { name: 'Plumber' }).click();
    await page.getByLabel('Sole trader').check();
    await page.getByTestId('toggle-company-detail-button').click();
    await page.getByTestId('fullCompanyName-input').fill('Plumbman');
    await page.getByTestId('address1-postCodeSearch-input').fill('yo84bp');
    await page.getByTestId('postcode-search-button').click();
    await page.getByTestId('address1.postCodeSelectDropdown').getByRole('button', { name: '​' }).click();
    await page.getByRole('option', { name: '6 White Street,,SELBY,North Yorkshire,YO8 4BP' }).first().click();
    await page.getByTestId('submitButton').click();
    await page.getByLabel('Yes').check();
    await page.getByRole('button', { name: 'Please select' }).filter({ hasText: 'Please select' }).click();
    await page.getByRole('option', { name: 'Mr' }).first().click();
    await page.getByTestId('firstName-input').fill('Plumb');
    await page.getByTestId('lastName-input').fill('Plumber');
    await page.getByRole('button', { name: 'Choose date' }).click();
    await page.getByRole('button', { name: 'calendar view is open, switch to year view' }).click();
    await page.getByRole('button', { name: '1941' }).click();
    await page.getByRole('gridcell', { name: '28' }).click();
    await page.getByTestId('address1-postCodeSearch-input').fill('yo84bp');
    await page.getByRole('button', { name: 'Find address' }).click();
    await page.getByTestId('address1.postCodeSelectDropdown').getByRole('button', { name: '​' }).click();
    await page.getByRole('option', { name: '6 White Street,,SELBY,North Yorkshire,YO8 4BP' }).first().click();
    await page.getByLabel('More than 3 years').check();
    await page.getByTestId('mobileNumber-input').click();
    await page.getByTestId('mobileNumber-input').fill('07123456789');
    await page.getByTestId('isBillingContact-section-panel').getByLabel('Yes').check();
    await page.getByTestId('postcode-search-button').click();
    await page.getByRole('button', { name: 'Please select' }).filter({ hasText: 'Please select' }).click();
    await page.getByRole('option', { name: 'Selby (WJE),0.7 miles away' }).click();
    await page.getByLabel('I do not wish to be contacted for marketing').check();
    await page.getByTestId('submitButton').click();
    await page.getByRole('heading', { name: 'Now let\'s talk finances' }).click();

});

When('they interact with the estimated monthly spend field', async function () {

    await page.locator('.MuiFormControl-root > .MuiBox-root').first().click();

});

Then('they will see a drop down of varying spend brackets', async function () {

    await page.getByRole('button', { name: 'Please select' }).click();
    await page.getByRole('option', { name: '£0 - £4,999' });
    await page.getByRole('option', { name: '£5,000 - £9,999' });
    await page.getByRole('option', { name: '£10,000 - £19,999' });
    await page.getByRole('option', { name: '£20,000 - £39,000' });
    await page.getByRole('option', { name: '£40,000 - £59,000' });
    await page.getByRole('option', { name: '£60,000 - £89,999' });
    await page.getByRole('option', { name: '£90,000 - £274,999' });
    await page.getByRole('option', { name: '£250,000 - £999,999' });
    await page.getByRole('option', { name: '£1,000,000+' }).click();

});  
  