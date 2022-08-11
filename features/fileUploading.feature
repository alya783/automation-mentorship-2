@upload
Feature: Upload profile picture

  Background:
    Given I open main page
    And I login in my account 

  @picture
  Scenario: upload profile img
    Then I upload the image   
    And I save profile changes