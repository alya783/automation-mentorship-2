Feature: Download the file

  Background:
    Given I go the page "https://the-internet.herokuapp.com/download"

  Scenario: download txt
    Then I download the file
