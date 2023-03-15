Feature: Submit application
    As an applicant
    I want to provide my financial information
    So that I can submit my appllciation

    Scenario: Verify applicant can submit application after completing all fields
        Given the applicant is on the Your Finances page
        When they have completed all the mandatory fields
        Then they will be able to click the Apply button successfully