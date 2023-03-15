Feature: end to end application for a limited LLP PLC company
    As a limited LLP PLC company
    I want to complete the limited LLP PLC company application
    So that I can open an account

        Scenario: execute an end to end journey for a limited LLP PLC company applicant
            Given I am applying from a limited LLP PLC company
            When I complete all limited LLP PLC company details
            Then I complete all limited LLP PLC about you details
            And I complete all finance details
            Then I can submit my application successfully