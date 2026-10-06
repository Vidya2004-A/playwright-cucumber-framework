# Playwright TypeScript Cucumber BDD Framework

## Project Overview

This is a web automation testing framework developed using Playwright, TypeScript, and Cucumber BDD.

The framework follows the Page Object Model design pattern to separate page interactions from test scenarios and improve code readability, reusability, and maintainability.

The project includes UI automation, API testing, file upload validation, and PDF content validation.

## Technology Stack

- Playwright
- TypeScript
- Cucumber BDD
- Node.js
- Page Object Model
- Git and GitHub
- pdf-parse

## Framework Features

- Cucumber feature files written in Gherkin
- Reusable Page Object classes
- Separate step-definition files
- Hooks for browser setup and teardown
- Custom World for sharing the Playwright page
- Scenario execution using Cucumber tags
- Single and multiple file upload
- File-type validation
- Drop-zone file upload
- PDF text extraction and validation
- API testing
- GitHub version control

## Project Structure

```text
Playwright_framework
├── api
├── features
├── pages
├── step-definitions
├── support
├── tests
│   ├── api
│   ├── fixtures
│   └── ui
├── cucumber.json
├── package.json
├── package-lock.json
├── playwright.config.ts
├── tsconfig.json
├── .gitignore
└── README.md
```

## Folder Details

- `features`: Contains Cucumber feature files and Gherkin scenarios.
- `pages`: Contains Page Object classes, locators, and reusable page methods.
- `step-definitions`: Contains step definitions corresponding to feature-file steps.
- `support`: Contains Cucumber hooks, Custom World, and supporting configuration.
- `tests/api`: Contains API test files.
- `tests/ui`: Contains Playwright UI test files.
- `tests/fixtures`: Contains files used for upload and PDF validation.
- `api`: Contains API-related framework files.

## Prerequisites

Install the following software before running the framework:

- Node.js
- Visual Studio Code
- Git
- Chromium browser through Playwright

## Installation

Clone the GitHub repository:

```bash
git clone https://github.com/Vidya2004-A/playwright-cucumber-framework.git
```

Navigate to the project directory:

```bash
cd playwright-cucumber-framework
```

Install project dependencies:

```bash
npm install
```

Install Playwright browser binaries:

```bash
npx playwright install
```

## Test Execution

Run all Cucumber scenarios:

```bash
npx cucumber-js
```

Run scenarios using a specific tag:

```bash
npx cucumber-js --tags "@datatable"
```

Run an individual Data Table scenario:

```bash
npx cucumber-js --tags "@DT_004"
```

Run Date Picker scenarios:

```bash
npx cucumber-js --tags "@datepicker"
```

Run File Upload scenarios:

```bash
npx cucumber-js --tags "@fileupload"
```

Run an individual File Upload scenario:

```bash
npx cucumber-js --tags "@FU_010"
```

Run the PDF Reader scenario:

```bash
npx cucumber-js --tags "@PDF_001"
```

## Implemented Scenarios

### SauceDemo End-to-End Flow

- Login
- Add product to cart
- Checkout
- Order confirmation

### Data Table

- Validate table headers
- Validate visible row count
- Read a specific cell value
- Search for an author across paginated pages
- Click the Edit button in the matching row
- Validate that the table is not empty

### Date Picker

- Enter a date into a native date input
- Open a calendar widget
- Navigate to the required month
- Select a specific date
- Validate the selected date

### File Upload

- `FU_001`: Upload a single file
- `FU_002`: Upload multiple files
- `FU_006`: Validate an invalid file type
- `FU_010`: Upload a file using the hidden input inside a drop zone

### PDF Reader

- Read a PDF file
- Extract text from the PDF
- Validate expected PDF content

### API Testing

- API request and response validation

## Page Object Model

The framework uses the Page Object Model design pattern.

- Feature files describe test behavior.
- Step definitions map Gherkin steps to automation code.
- Page Object files contain locators and reusable page interactions.
- Assertions are maintained in step-definition or test files.
- Hooks manage browser setup and teardown.

## Test Data and Fixtures

Test files used for upload and PDF validation are stored under:

```text
tests/fixtures
```

Example files include:

```text
sample.pdf
file1.pdf
file2.png
invalid.txt
```

## Environment Configuration

URLs and credentials will be maintained in a separate `.env` file.

The `.env` file must not be committed to GitHub because it may contain sensitive information. An `.env.example` file can be committed to document the required variable names without exposing actual credentials.

## Git Workflow

Check changed files:

```bash
git status
```

Stage changes:

```bash
git add .
```

Commit changes:

```bash
git commit -m "Enter a meaningful commit message"
```

Push changes to GitHub:

```bash
git push
```

## GitHub Repository

https://github.com/Vidya2004-A/playwright-cucumber-framework

## Author

Vidya A  
Quality Engineer