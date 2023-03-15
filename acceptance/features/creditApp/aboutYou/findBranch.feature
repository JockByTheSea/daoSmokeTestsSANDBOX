Feature: Locate closest branch to applicants address
  As the applicant
  I to find the closest branch to my address
  So that I can trade with my local branch

    Scenario: Verify find branch functionality
        Given the applicant is on the About You Section
        When they press the Find branch button
        Then they will see a list ordered with the closest Wolseley branch