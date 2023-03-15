Feature: Confirm who is the correct billing contact
  As the applicant
  I want to confrim who the billing contact will be
  So any invoices get sent to the correct person

    Scenario: Verify who will be the billing contact
        Given the applicant is on the About You Section
        When they select Yes to Will you be the billing contact
        Then they will not see additional fields
        And when they select No to Will you be the billing contact
        Then they will see additional fields