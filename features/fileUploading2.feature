@upload
Feature: Upload the file

  Background:
    Given I open the page "https://the-internet.herokuapp.com/upload"

  @picture
  Scenario: upload img
    Then I upload the file  
    And I check the file was uploaded