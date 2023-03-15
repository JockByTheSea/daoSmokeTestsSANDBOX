Feature: Implement manadatory fields on the Your Finances page
    As an applicant
    I want to complete all manadatory fields
    So that I can submit my application

    Scenario: Verify all mandatory fields on the Your Finances page
        Given the applicant is on the Your Finances page
        When they try to submit without completing any mandatory fields
        Then they will see all the relevant error messages