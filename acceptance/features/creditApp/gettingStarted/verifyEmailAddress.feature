Feature: Register & Verify Email Address
As an online applicant
I want to verify my email address
So that I can continue my application

Scenario: Verify Validate email address button progress application 
    Given the user is on the Lets get started page
    When they input their email address
    And they click on the Validate email address button
    Then they will be presented with success message