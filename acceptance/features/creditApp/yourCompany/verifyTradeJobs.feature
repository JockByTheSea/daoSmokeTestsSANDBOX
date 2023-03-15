Feature: Select business area of Wolseley I am most likely to deal with

As an Online Applicant
I want to inform Wolseley of the area of the business I am interested inform
So the products can be tailored to my interests

Scenario: Verify area of business and trade jobs dropdowns
    Given I have selected Plumb & Parts as the area I will most likely deal with
    When I interact with trade jobs drop dropdown
    Then I will see Heating engineer; Plumber; Bathroom Installer; Local Business Owner - Non Trade; New Build Developer; New Build Contractor; Social Housing & Public - Local Authority; Social Housing & Public - Contractor
    When I have selected Pipe as the area I will most likely deal with
    Then I will see Drainage Contractor; Fabricator; Commercial Facilities Management; Regional M&E Contractor; National M&E Contractor; Pipe Fitter
    When I have selected Climate as the area I will most likely deal with
    Then I will see Air Con Contractor; Air Con & Refrigeration; Refrigeratgion Contractor; Commercial Facilities Management; Industrial Services; Regional M&E Contractor; National M&E Contractor
    When I have selected Burdens as the area I will most likely deal with
    Then I will see Highways; Commercial & Industrial; Main Works; Housebuilder Ground Worker; Specialist Service
    When I have selected Fusion Utilities as the area I will most likely deal with
    Then I will see Commercial & Industrial; Main Works; Residential Connections; Specialist Services
    When I have selected Managed Services as the area I will most likely deal with
    Then I will see Social Housing Service Provider; Social Housing Contractor; Facilities Maintenance Service Provider; Facilities Maintenance Contractor; Retail Service Provider; Leisure Service Provider
    When I have selected Neville Lumb as the area I will most likely deal with
    Then I will see M&E Contractor; Main Contractor; Sub Contractor; Plumbing Contractor; Regional Developer; National Developer; Fit-OutFacilities Property Management; Specialist Contractor; Off-Site Manufacture