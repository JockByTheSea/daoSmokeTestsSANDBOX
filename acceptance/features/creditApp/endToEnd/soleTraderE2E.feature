Feature: end to end application for a sole trader
    As a sole trader
    I want to complete the sole trader application
    So that I can open an account

        Scenario: execute an end to end journey for a sole trader applicant
            Given I am applying from a sole trader
            When I complete all sole trader company details
            Then I complete all sole trader about you details
            And I complete all finance details
            Then I can submit my application successfully