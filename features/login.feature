Feature: Login Feature

  Scenario: Successful Login
    Given I am on the login page
    When I enter "hajriansyah577@gmail.com" and "@hajri12345"
    Then I should see the dashboard

  Scenario: Unsuccessful Login
    Given I am on the login page
    When I enter "hajriansyah577@gmail.com" and "@hajri12345"
    Then I should see an error message
