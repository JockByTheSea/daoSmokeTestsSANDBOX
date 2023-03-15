Feature: Capture Government or Charity organisation details
  As a Government or Charity organisation applicant
  I want to be able to provide my company details
  So I can progress my application

    Scenario: Verify Government or Charity organisation details page functionality
        Given the applicant is on the Your Company page
        When the applicant has selected Government or Charity organisation as their company type
        Then they will see input fields relevant to a Government or Charity organisation
        And they will not be able to proceed without completing the mandatory fields