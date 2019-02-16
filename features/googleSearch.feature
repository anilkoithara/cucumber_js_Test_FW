@cucumber
Feature: Searching for cucumbers.io

    Scenario: Google cucumber search
        Given I navigate to google search page
        When I search Google for "cucumbers.io"
        Then I should see cucumber link