Feature: end to end application for a government or charity organisation
    As a government or charity organisation
    I want to complete the government or charity organisation application
    So that I can open an account

        Scenario: execute an end to end journey for a government or charity organisation applicant
            Given I am applying from a government or charity organisation
            When I complete all government or charity organisation details
            Then I complete all government or charity organisation about you details
            And I complete all finance details
            Then I can submit my application successfully