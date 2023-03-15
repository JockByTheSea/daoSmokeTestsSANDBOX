const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test")


// Scenario: Verify who will be the billing contact

When('they select Yes to Will you be the billing contact', async function () {

    await page.getByRole('heading', { name: 'Will you be the billing contact?' }).click();
    await page.getByTestId('isBillingContact-section-panel').getByTestId('tooltip').click();
    await page.getByText('This is so we know who to contact for any billing queries.').click();
    await page.getByTestId('isBillingContact-section-panel').getByLabel('Yes').check();
        
});

Then('they will not see additional fields', async function () {

    expect(page.locator(getByTestId('isBillingContact-section-panel'))).not.toBeVisible();

});

When('they select No to Will you be the billing contact', async function () {

    await page.getByTestId('isBillingContact-section-panel').getByLabel('No').check();
        
});

Then('they will see additional fields', async function () {
    
    await page.getByTestId('isBillingContact-section-panel').getByLabel('No').check();
    await page.getByText('Please enter the details for the billing contact').click();
    await page.getByTestId('billing-firstName-input').click();
    await page.getByTestId('billing-lastName-input').click();
    await page.getByTestId('billing-email-input').click();
    await page.getByTestId('billing-mobile-input').click();

});
    