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

  @FU_006

Scenario: Upload invalid file type triggers error message

  Given User navigates to File Upload page
  When User uploads an invalid file type
  Then Verify file type error is displayed
  And Verify error message contains image


 @FU_010

Scenario: File input inside drop zone can be targeted directly

  Given User navigates to File Upload page
  When User uploads file through drop zone
  Then Drop zone displays the file name