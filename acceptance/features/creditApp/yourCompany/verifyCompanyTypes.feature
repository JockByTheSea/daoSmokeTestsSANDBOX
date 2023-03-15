Feature: Allow four different organisational types apply for an account

As an Online Applicant
I want to be able to select the relevant organisational type
So I can make the correct application journey

Scenario: Verify Ltd LLP PLC company type can apply
    Given I am from a Ltd LLP or Plc company
    When I select Ltd LLP or Plc from the company types list
    Then I am presented with the Ltd LLP or Plc details form

Scenario: Verify Sole Trader company type can apply
    Given I am from a Sole Trader company
    When I select Sole Trader from the company types list
    Then I am presented with the Sole Trader details form

Scenario: Verify Partnership company type can apply
    Given I am from a Partnership company
    When I select Partnership from the company types list
    Then I am presented with the Partnership details form

Scenario: Verify Government or Charitable organisation can apply
    Given I am from a Government or Charitable organisation
    When I select Government or Charitable organisation from the company types list
    Then I am presented with the Government or Charitable organisation details form