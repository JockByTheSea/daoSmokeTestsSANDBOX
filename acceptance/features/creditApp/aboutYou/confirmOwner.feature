Feature: Confirm I am the owner
  As the owner applying
  I want a way to Confirm
  So I can set up a credit account

    Scenario: Verify only the owner can apply for a credit account
        Given the applicant is on the About You Section
        When they Confirm they are not the owner
        Then they will not be able to proceed with the credit application
        And if they confirm they are the owner
        Then they will be able to continue the application