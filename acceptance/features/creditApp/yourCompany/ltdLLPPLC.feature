Feature: Capture Ltd LLP PLC company details
  As an Ltd LLP or PLC applicant
  I want to be able to provide my company details
  So I can progress my application

    Scenario: Verify Ltd LLP PLC company details page functionality
        Given the applicant is on the Your Company page
        When the applicant has selected Ltd LLP PLC as their company type
        Then they will see input fields relevant to Ltd LLP PLC companies
        And they should not be able to proceed without completing the mandatory fields