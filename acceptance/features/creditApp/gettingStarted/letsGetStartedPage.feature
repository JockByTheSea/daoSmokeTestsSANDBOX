Feature: Validate create an account page
    As a customer who has clicked Open an account
    I want to able to apply for 
    So I can make ordering from you online easy

    Scenario: Verify user is on the Let's get started page and verify the layout of page
        Given the user is on the Lets get started page
        When they know they are on the Lets get started page
        Then the breadcrumb will be Home>Create an account
        And they will see H2 Copy I would like to apply for a
        And a Credit account radio button
        And a Cash account radio button
        And a Email address input field
        And a button to Validate their email address