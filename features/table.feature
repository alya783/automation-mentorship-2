Feature: Trendind links

  Scenario Outline: Check text and link for trendind link

    Given I am open the main page
    And I check element "<ind>" has text "<text>"
    And I check element "<ind>" has link "<link>"

    Examples:
      | ind | text             | link                        |
      | 0   | business         | /search/business            |
      | 1   | travel           | /search/travel              |
      | 2   | beach            | /search/beach               |
      | 3   | technology       | /search/technology          |
      | 4   | people           | /search/people              |
      | 5   | summer           | /search/summer              |
      | 6   | food             | /search/food                |
      | 7   | love             | /search/love                |

