Feature: Capture Sole Trader details
  As a Sole Trader applicant
  I want to be able to provide my company details
  So I can progress my application

    Scenario: Verify Sole Trader details page functionality
        Given the applicant is on the Your Company page
        When the applicant has selected Sole Trader as their company type
        Then they will see input fields relevant to a Sole Trader
        And they shouldnt be able to proceed without completing the mandatory fields