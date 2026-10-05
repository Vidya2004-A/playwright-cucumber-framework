import {Page,Locator} from '@playwright/test';

export class FileUploadPage
{
    readonly page: Page;

    // FU_001

    readonly singleFileInput: Locator;
    readonly fileNameDisplay: Locator;

    // FU_002

    readonly multiFileInput: Locator;
    readonly multipleFilesDisplay : Locator;

    constructor(page: Page)
    {
        this.page = page;

        this.singleFileInput =page.locator('[data-testid="fu-single-input"]');

        this.fileNameDisplay =page.locator('#result-s01');

        this.multiFileInput =page.locator('[data-testid="fu-multi-input"]');
        this.multipleFilesDisplay =page.locator('[data-testid="result-s02"]');
    }

    async gotoFileUploadPage()
    {
        await this.page.goto('https://qaplayground.com/practice/file-upload');
    }

    // FU_001

    async uploadSingleFile()
    {
        await this.singleFileInput.setInputFiles('tests/fixtures/sample.pdf');
    }

    async getUploadedFileName()
    {
        return await this.fileNameDisplay.textContent();
    }
    // FU_002

    async uploadMultipleFiles()
    {
       await this.multiFileInput.setInputFiles(['tests/fixtures/file1.pdf','tests/fixtures/file2.png']);
    }

    async getUploadedFileCount()
    {
      const fileCount =await this.multiFileInput.evaluate((input: HTMLInputElement) =>input.files?.length ?? 0);
      return fileCount;
    }
}