const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");

// launch URL

const yourBusinessPage = 'http://www.esite2a.wolseley.co.uk/open-account/your-company?identityTokenSignature=-4242408658805749420'

// Scenario: Verify Ltd LLP PLC company type can apply

Given('I am from a Ltd LLP or Plc company', async function () {
    await page.goto(yourBusinessPage);
});

When('I select Ltd LLP or Plc from the company types list', async function () {
    await page.getByLabel('LTD/PLC/LLP').check();
});

Then('I am presented with the Ltd LLP or Plc details form', async function () {
    await page.locator('form div').filter({ hasText: 'My Company registration number is...*' }).nth(3).click();
    await page.getByTestId('companyRegistrationNumber-input').click();
    
});


// Scenario: Verify Sole Trader company type can apply

Given('I am from a Sole Trader company', async function () {
    await page.goto(yourBusinessPage);

});

When('I select Sole Trader from the company types list', async function () {
    await page.getByLabel('Sole trader').check();
    
});

Then('I am presented with the Sole Trader details form', async function () {
    await page.locator('form div').filter({ hasText: 'My Company name is...*' }).nth(3).click();
    await page.locator('form div').filter({ hasText: 'Company postcode*' }).nth(3).click();
    
});


// Scenario: Verify Partnership company type can apply

Given('I am from a Partnership company', async function () {
    await page.goto(yourBusinessPage);

});

When('I select Partnership from the company types list', async function () {
    await page.getByLabel('Partnership').check();

});

Then('I am presented with the Partnership details form', async function () {
    await page.locator('form div').filter({ hasText: 'My Company name is...*' }).nth(3).click();
    await page.locator('form div').filter({ hasText: 'Company postcode*' }).nth(3).click();

});


// Scenario: Verify Government or Charitable organisation can apply 

Given('I am from a Government or Charitable organisation', async function () {
    await page.goto(yourBusinessPage);

});

When('I select Government or Charitable organisation from the company types list', async function () {
    await page.getByLabel('Government authority/Charity').check()

});

Then('I am presented with the Government or Charitable organisation details form', async function () {
    await page.locator('form div').filter({ hasText: 'Full trading name*' }).nth(3).click();
    await page.getByTestId('fullTradingName-input').click();
    await page.locator('form div').filter({ hasText: 'Trading title (if different)' }).nth(3).click();
    await page.getByTestId('tradingTitle-input').click();
    await page.locator('.MuiGrid-root > div > .MuiFormControl-root > .MuiBox-root').click();
    await page.getByTestId('address2-postCodeSearch-input').click();
    await page.locator('form div').filter({ hasText: 'Charity registration or LTD number' }).nth(3).click();
    await page.getByRole('button', { name: 'We need this to find your company details' }).click();
    await page.getByRole('heading', { name: 'Is the registered trading address the invoice address?This field is required' }).click();
    await page.locator('label').filter({ hasText: 'Yes' }).click();
    await page.locator('label').filter({ hasText: 'No' }).click();
    
});