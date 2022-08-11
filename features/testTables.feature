@table
Feature: Footer collection links

  Background:
    Given I go to the main page

  @inProgress
  Scenario: table without header
    When I click on dropdown menu  
    Then I see the items:
      | Blog    |
      | FAQ     |
      | License |
      | About   |
      | Terms   |
      | Privacy | 
  
  @header
  Scenario: table with header  
    Then I check items:
      | link                         | title                                     |
      | https://blog.stocksnap.io/   | StockSnap Blog                            |
      | https://stocksnap.io/faq     | Frequently Asked Questions - Stocksnap.io |
      | https://stocksnap.io/license | License - Stocksnap.io                    |
      | https://stocksnap.io/about   | About - StockSnap.io                      |
      | https://stocksnap.io/terms   | Terms & Conditions - Stocksnap.io         |
      | https://stocksnap.io/privacy | Privacy Policy - Stocksnap                |
    