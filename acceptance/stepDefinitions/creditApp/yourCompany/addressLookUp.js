const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");

const yourBusinessPage = 'http://www.esite2a.wolseley.co.uk/open-account/your-company?identityTokenSignature=-4242408658805749420 '


// Scenario: Verify address look up call to action finds address

Given('the applicant has provided a valid UK postcode', async function () {

    await page.goto(yourBusinessPage);
    await page.getByLabel('Partnership').check();
    await page.getByTestId('toggle-company-detail-button').click();
    await page.getByTestId('address1-postCodeSearch-input').fill('yo8 4bp');

});

When('they interact with the call to action button', async function () {

    await page.getByTestId('postcode-search-button').click();

});

Then('they will see a drop down list of relevant addresses', async function () {

    await page.getByTestId('address1.postCodeSelectDropdown').getByRole('button', { name: '​' }).click();

});

Then('will be able to select their address', async function () {

    await page.getByRole('option', { name: '6 White Street,,SELBY,North Yorkshire,YO8 4BP' }).first().click();
    await page.getByTestId('address1-addressLine1-input').click();
    await page.getByTestId('address1-city-input').click();

});
