Feature: Find out applicants estimated monthly spend
    As an applicant
    I want to advise of my estimated monthly spend
    So that I can get the correct amount of credit

    Scenario: Verify the different amounts of estimated monthly spend
        Given the applicant is on the Your Finances page
        When they interact with the estimated monthly spend field
        Then they will see a drop down of varying spend brackets