Feature: Validate Landing Page
    As a potential customer
    I want a clean route to opening a Wolesley Trade account
    So I can make ordering from you online easy

    Scenario: Verify user is on the landing page and verify the layout of page
        Given the user is on the Wolseley Account Opening landing page
        When they inspect the Wolseley Account Opening landing page
        Then the breadcrumb will be Home>Open an account
        And they will see H1 Copy Open a trade account with Wolseley
        And a Register your branch account online button
        And a Open a trade account button
        