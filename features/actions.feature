@actions
Feature: Emulate actions 

  Background:
    When I go to examples page

  @actions @dropdown
  Scenario: do dropdown 
    Given I open the form page 
    When I move to the first dropdown box 
    And I choose the first option
    Then I see the "First option" is displayed

  @hover @actions
  Scenario: check hover text
    Given I open the badge page 
    When I move to the copy button 
    Then appears hover text "Copy link to example"
  
  @inProgress @actions
  Scenario: do drag and drop 
    Given I open the drag and drop page 
    And I open examples
    Then I move to first ToDo list
    And drag and drop item
    




    