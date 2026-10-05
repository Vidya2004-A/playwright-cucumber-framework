@fileupload

Feature: File Upload

@FU_001
Scenario: Upload a single file via native file input

  Given User navigates to File Upload page
  When User uploads a single file
  Then Verify uploaded file name is displayed

  @FU_002
Scenario: Upload multiple files via multi-file input

  Given User navigates to File Upload page
  When User uploads multiple files
  Then Verify 2 files are uploaded