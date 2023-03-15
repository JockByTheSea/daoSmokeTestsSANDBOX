Feature: Capture additional address information
  As the applicant
  I to be able to provide an additional address
  So that my application does not get held up

    Scenario: Verify find how long applicant has been at their address
        Given the applicant is on the About You Section
        When they confirm they have lived at the address for more than three years
        Then they will not need to complete additional information
        And if they confirm they have lived there for less than three years
        Then they will see have additional fields to complete