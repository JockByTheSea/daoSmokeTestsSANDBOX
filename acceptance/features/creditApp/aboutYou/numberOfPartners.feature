Feature: Confirm number of partners in Partnership application
    As a Partnership applicant
    I want to Confirm how many partners there are in my company
    So I can include them in my application

    Scenario: Verify applicant can add up to three partners
        Given I am on the About you section of the partnership journey
        When I choose two partners
        Then I will be able to input details of the second partner
        And I choose three partners
        Then I will be able to input details of the third partner
        And I choose 4 or more partners
        Then I will be able to input details for a fourth partner