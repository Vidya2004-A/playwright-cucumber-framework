@datatable
Feature: Data Table
 
@DT_001
Scenario: Verify all table headers

  Given User navigates to Data Table page
  When User reads all the table headers
  Then Verify all the obtained headers with expected headers

@DT_002
Scenario: Verify the table displays five rows on page one

  Given User navigates to Data Table page
  When User waits for table rows to be visible
  And User counts the visible table rows
  Then Table should display exactly 5 rows
  And Row count indicator should contain 25 books

@DT_003
Scenario: Verify the textContent of row2 and col2 on page one

  Given User navigates to Data Table page
  When User reads the book name from row 2 column 2
  Then Book name should be Clean Code

@DT_004
Scenario: Find George Orwell across all pages and click Edit

  Given User navigates to Data Table page
  When User searches all table pages for author "George Orwell" and clicks Edit
  Then Edit book dialog should be displayed

@DT_005
Scenario: Table is not empty after initial page load

  Given User navigates to Data Table page
  When User was able to see more than one table row
  Then Check whether the first row is visible