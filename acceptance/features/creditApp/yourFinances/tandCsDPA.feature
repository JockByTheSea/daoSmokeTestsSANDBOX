Feature: Have applicant agree to Data protection policy and terms and conditions
    As an applicant
    I want to see and agree to Data protection policy and terms and conditions
    So that I am aware of my rights

    Scenario: Verify Data protection policy and terms and conditions tick boxes and links
        Given the applicant is on the Your Finances page
        When they click on the policy link
        Then they will be redirected to the Privacy security and cookie policies page
        And they click on the terms and conditions link 
        Then they will be redirected to the terms and conditions page