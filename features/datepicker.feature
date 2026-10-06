@datepicker
Feature: Date Picker

@DP_001
Scenario: Verify date can be typed into a native date input

  Given User navigates to Date picker page
  When User fills a valid date "2025-06-15"
  Then Verify whether entered date matches "2025-06-15"

@DP_002
Scenario: Verify calendar opens on trigger click

  Given User navigates to Date picker page
  When User clicks calender trigger
  Then Verify calendar panel is visible

@DP_003
Scenario: Verify a specific day can be selected from the calendar

  Given User navigates to Date picker page
  When User clicks calendar trigger
  And User navigates to and selects date "2025-07-20"
  Then Verify the result display contains "2025-07-20"