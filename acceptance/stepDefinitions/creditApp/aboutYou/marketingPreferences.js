const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test")


When('they view the marketing preferences section', async function () {

    await page.getByRole('heading', { name: 'Keep me update with news, offers and promotions by...*' }).click();

});

Then('they will see prefences for Mobile SMS Email Landline or none', async function () {

    await page.getByTestId('contact-preferences').locator('label').filter({ hasText: 'Mobile' }).click();
    await page.locator('label').filter({ hasText: 'SMS' }).click();
    await page.getByTestId('contact-preferences').locator('label').filter({ hasText: 'Email' }).click();
    await page.getByTestId('contact-preferences').locator('label').filter({ hasText: 'Landline' }).click();
    await page.getByText('I do not wish to be contacted for marketing').click();

});    
    