const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");


const yourBusinessPage = 'http://www.esite2a.wolseley.co.uk/open-account/your-company?identityTokenSignature=-4242408658805749420'

// Feature: Verify area of business and trade jobs dropdowns

// Scenario: Verify Plumb & Parts jobs dropdowns

Given('I have selected Plumb & Parts as the area I will most likely deal with', async function () {

    await page.goto(yourBusinessPage);
    await page.locator('#mui-component-select-mainTrade').click();
    await page.getByRole('option', { name: 'Plumb & Parts' }).click();

});

When('I interact with trade jobs drop dropdown', async function () {

    await page.locator('form div').filter({ hasText: 'The majority of my trade jobs fall under...*' }).nth(3).click();
    await page.locator('#mui-component-select-businessClassifications').click();

});

Then('I will see Heating engineer; Plumber; Bathroom Installer; Local Business Owner - Non Trade; New Build Developer; New Build Contractor; Social Housing & Public - Local Authority; Social Housing & Public - Contractor', async function () {

    await page.getByRole('option', { name: 'Heating engineer' });
    await page.getByRole('option', { name: 'Plumber' });
    await page.getByRole('option', { name: 'Bathroom Installer' });
    await page.getByRole('option', { name: 'Local Business Owner - Non Trade' });
    await page.getByRole('option', { name: 'New Build Developer' });
    await page.getByRole('option', { name: 'New Build Contractor' });
    await page.getByRole('option', { name: 'Social Housing &Public - Local Authority' });
    await page.getByRole('option', { name: 'Social Housing &Public - Contractor' }).click()

});

// Scenario: Verify Pipe jobs

When('I have selected Pipe as the area I will most likely deal with', async function () {

    await page.locator('#mui-component-select-mainTrade').click();
    await page.getByRole('option', { name: 'Pipe' }).click();

});

Then('I will see Drainage Contractor; Fabricator; Commercial Facilities Management; Regional M&E Contractor; National M&E Contractor; Pipe Fitter', async function () {

    await page.locator('#mui-component-select-businessClassifications').click();
    await page.getByRole('option', { name: 'Drainage Contractor' });
    await page.getByRole('option', { name: 'Fabricator' });
    await page.getByRole('option', { name: 'Commercial Facilities Management' });
    await page.getByRole('option', { name: 'Regional M&E Contractor' });
    await page.getByRole('option', { name: 'National M&E Contractor' });
    await page.getByRole('option', { name: 'Pipe Fitter' }).click();

});

// Scenario: Verify Climate Trade jobs

When('I have selected Climate as the area I will most likely deal with', async function () {

    await page.locator('#mui-component-select-mainTrade').click();
    await page.getByRole('option', { name: 'Climate' }).click();

});

Then('I will see Air Con Contractor; Air Con & Refrigeration; Refrigeratgion Contractor; Commercial Facilities Management; Industrial Services; Regional M&E Contractor; National M&E Contractor', async function () {
    
    await page.locator('#mui-component-select-businessClassifications').click();
    await page.getByRole('option', { name: 'Air Con Contractor' });
    await page.getByRole('option', { name: 'Air Con & Refrigeration (HVAC) Contractor' });
    await page.getByRole('option', { name: 'Refrigeratgion Contractor' });
    await page.getByRole('option', { name: 'Commercial Facilities Management' });
    await page.getByRole('option', { name: 'Industrial Services' });
    await page.getByRole('option', { name: 'Regional M&E Contractor' });
    await page.getByRole('option', { name: 'National M&E Contractor' }).click();

});

// Scenario: Verify Burdens Trade jobs

When('I have selected Burdens as the area I will most likely deal with', async function () {

    await page.locator('#mui-component-select-mainTrade').click();
    await page.getByRole('option', { name: 'Burdens' }).click();

});

Then('I will see Highways; Commercial & Industrial; Main Works; Housebuilder Ground Worker; Specialist Service', async function () {

    await page.locator('#mui-component-select-businessClassifications').click();
    await page.getByRole('option', { name: 'Highways' });
    await page.getByRole('option', { name: 'Commercial & Industrial' });
    await page.getByRole('option', { name: 'Main Works' });
    await page.getByRole('option', { name: 'Housebuilder Ground Worker' });
    await page.getByRole('option', { name: 'Specialist Service' }).click();

});

// Scenario: Verify Fusion Utilities Trade jobs

When('I have selected Fusion Utilities as the area I will most likely deal with', async function () {

    await page.locator('#mui-component-select-mainTrade').click();
    await page.getByRole('option', { name: 'Fusion Utilities' }).click();

});

Then('I will see Commercial & Industrial; Main Works; Residential Connections; Specialist Services', async function () {

    await page.locator('#mui-component-select-businessClassifications').click();
    await page.getByRole('option', { name: 'Commercial & Industrial' });
    await page.getByRole('option', { name: 'Main Works' });
    await page.getByRole('option', { name: 'Residential Connections' });
    await page.getByRole('option', { name: 'Specialist Services' }).click();

});

// Scenario: Verify Managed Services Trade jobs

When('I have selected Managed Services as the area I will most likely deal with', async function () {

    await page.locator('#mui-component-select-mainTrade').click();
    await page.getByRole('option', { name: 'Managed Services' }).click();

});

Then('I will see Social Housing Service Provider; Social Housing Contractor; Facilities Maintenance Service Provider; Facilities Maintenance Contractor; Retail Service Provider; Leisure Service Provider', async function () {

    await page.locator('#mui-component-select-businessClassifications').click();
    await page.getByRole('option', { name: 'Social Housing Service Provider' });
    await page.getByRole('option', { name: 'Social Housing Contractor' });
    await page.getByRole('option', { name: 'Facilities Maintenance Service Provider' });
    await page.getByRole('option', { name: 'Facilities Maintenance Contractor' });
    await page.getByRole('option', { name: 'Retail Service Provider' });
    await page.getByRole('option', { name: 'Retail Contractor' });
    await page.getByRole('option', { name: 'Leisure Service Provider' });
    await page.getByRole('option', { name: 'Leisure Contractor' }).click();

});

// Scenario: Verify Neville Lumb Trade jobs

When('I have selected Neville Lumb as the area I will most likely deal with', async function () {

    await page.locator('#mui-component-select-mainTrade').click();
    await page.getByRole('option', { name: 'Neville Lumb' }).click();

});

Then('I will see M&E Contractor; Main Contractor; Sub Contractor; Plumbing Contractor; Regional Developer; National Developer; Fit-OutFacilities Property Management; Specialist Contractor; Off-Site Manufacture', async function () {
    
    await page.locator('#mui-component-select-businessClassifications').click();
    await page.getByRole('option', { name: 'M&E Contractor' });
    await page.getByRole('option', { name: 'Main Contractor' });
    await page.getByRole('option', { name: 'Sub Contractor' });
    await page.getByRole('option', { name: 'Plumbing Contractor' });
    await page.getByRole('option', { name: 'Regional Developer' });
    await page.getByRole('option', { name: 'National Developer' });
    await page.getByRole('option', { name: 'Fit-OutFacilities/Property Management' });
    await page.getByRole('option', { name: 'Specialist Contractor' });
    await page.getByRole('option', { name: 'Off-Site Manufacture' }).click();

});
