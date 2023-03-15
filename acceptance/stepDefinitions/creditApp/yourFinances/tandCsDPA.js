const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");

const page5Promise = 'https://www.esite2a.wolseley.co.uk/policies/'
const page6Promise = 'https://www.esite2a.wolseley.co.uk/terms-and-conditions/'


// Scenario: Verify Data protection policy and terms and conditions tick boxes and links

When('they click on the policy link', async function () {

    await page.getByTestId('policy-input').check();
  
});

Then('they will be redirected to the Privacy security and cookie policies page', async function () {

    const page5Promise = page.waitForEvent('popup');

});

When('they click on the terms and conditions link', async function () {

    const page6Promise = page.waitForEvent('popup');
  
});

Then('they will be redirected to the terms and conditions page', async function () {

    await page.locator('form').getByRole('link', { name: 'terms and conditions' }).click();

});
