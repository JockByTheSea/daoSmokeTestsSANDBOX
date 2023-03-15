Feature: Allow customers applying for an account to provide their F Gas registration details
  As an F Gas registered Applicant
  I want to provide my registration number
  So I will be able to order restricted products

  Scenario: Verify F Gas registration input field
    Given I am on the Your Company page
    When I select Climate as the Wolseley business i am most likely to deal with
    Then I will see an additional field to input my F Gas number
    When I click on the information icon
    Then I will see a pop up informing me Your FGAS number will be 7-11 characters long. Please include any letters in your FGAS number.
    When I input a number less than seven characters
    Then I am presented with an Error message Please enter a valid F Gas number
    When I input a number with seven or more capped at eleven
    Then I am able to click the save and proceed button without error messages

    



  
    
