@PDF_001
Feature: PDF Reader

  Scenario: Verify PDF content can be read and validated

    Given User has a PDF file
    When User reads the PDF content
    Then Verify PDF contains expected text