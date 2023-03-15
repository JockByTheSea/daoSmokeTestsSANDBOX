Feature: Capture Partnership details
  As a Partnership applicant
  I want to be able to provide my company details
  So I can progress my application

    Scenario: Verify Partnership details page functionality
        Given the applicant is on the Your Company page
        When the applicant has selected Partnership as their company type
        Then they will see input fields relevant to a Partnership
        And they wont be able to proceed without completing the mandatory fields