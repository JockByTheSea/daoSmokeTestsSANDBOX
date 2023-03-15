const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");


const yourBusinessPage = 'http://www.esite2a.wolseley.co.uk/open-account/your-company?identityTokenSignature=4680851450308036034'

// Scenario: Verify F Gas registration input field

Given('I am on the Your Company page', async function () {

    await page.goto(yourBusinessPage);

});

When('I select Climate as the Wolseley business i am most likely to deal with', async function () {

    await page.locator('#mui-component-select-mainTrade').click();
    await page.getByRole('option', { name: 'Climate' }).click();
    await page.locator('#mui-component-select-businessClassifications').click();
    await page.getByRole('option', { name: 'Air Con Contractor' }).click();

});

Then('I will see an additional field to input my F Gas number', async function () {

    await page.getByTestId('fGasNumber-input').click();

});

When('I click the save and proceed button without inputting a number', async function () {

    await page.getByTestId('submitButton').click();

});

Then('I am presented with an Error message Please enter a valid F Gas number', async function () {

    await page.getByText('Please enter a valid F Gas number').click();

});

When('I click on the information icon', async function (){

}); 
    
Then('I will see a pop up informing me Your FGAS number will be 7-11 characters long. Please include any letters in your FGAS number.', async function (){

    await page.getByRole('button', { name: 'Your FGAS number will be 7-11 characters long. Please include any letters in your FGAS number.' }).click();

});

When('I input a number less than seven characters', async function () {

    await page.getByTestId('fGasNumber-input').fill('12345');
    await page.getByTestId('submitButton').click();

});

When('I input a number with seven or more capped at eleven', async function () {
    
    await page.getByTestId('fGasNumber-input').fill('1234567');

});

Then('I am able to click the save and proceed button without error messages', async function () {

    await page.getByTestId('submitButton').click();
    expect(await page.getByText('Please enter a valid F Gas number').count()).toEqual(0);

});