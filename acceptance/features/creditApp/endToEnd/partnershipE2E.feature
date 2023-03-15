Feature: end to end application for a partnership
    As a partnership applicant
    I want to complete the partnership application
    So that I can open an account

        Scenario: execute an end to end journey for a partnership applicant
            Given I am applying from a partnership
            When I complete all partnership company details
            Then I complete all partnership about you details
            And I complete all finance details
            Then I can submit my application successfully
            
