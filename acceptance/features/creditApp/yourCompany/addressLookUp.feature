Feature: Find my address call to action button
  As an applicant
  I want to provide my postcode
  So it simplifies the completion of entering my address

    Scenario: Verify address look up call to action finds address
        Given the applicant has provided a valid UK postcode
        When they interact with the call to action button
        Then they will see a drop down list of relevant addresses 
        And will be able to select their address