Feature: Ability to choose marketing preferences
  As the owner applying
  I want to be able to set my marketing preferences
  So I control how I will be contacted

    Scenario: Verify only the owner can apply for a credit account
        Given the applicant is on the About You Section
        When they view the marketing preferences section
        Then they will see prefences for Mobile SMS Email Landline or none