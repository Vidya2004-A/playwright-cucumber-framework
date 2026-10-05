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

    // FU_006

    readonly fileTypeInput: Locator;
    readonly fileTypeError: Locator;

    // FU_010

    readonly dropZoneLocator: Locator;
    readonly fileNameDisplayInDropZoneLocator: Locator;

    constructor(page: Page)
    {
        this.page = page;

        this.singleFileInput =page.locator('[data-testid="fu-single-input"]');

        this.fileNameDisplay =page.locator('#result-s01');

        this.multiFileInput =page.locator('[data-testid="fu-multi-input"]');
        this.multipleFilesDisplay =page.locator('[data-testid="result-s02"]');

        this.fileTypeInput =page.locator('[data-testid="fu-type-input"]');
        this.fileTypeError =page.locator('[data-testid="fu-type-error"]');

        this.dropZoneLocator=page.locator('[data-testid="fu-drop-input"]');
        this.fileNameDisplayInDropZoneLocator=page.locator('#result-s04');
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

    // FU_006

    async uploadInvalidFileType()
    {
      await this.fileTypeInput.setInputFiles('tests/fixtures/invalid.txt');
    }

    async isFileTypeErrorVisible()
    {
      return await this.fileTypeError.isVisible();
    }

    async getFileTypeErrorText()
    {
      return await this.fileTypeError.textContent();
    }

    //FU_010
    
    async uploadFileInDropZone()
    {
        await this.dropZoneLocator.setInputFiles('tests/fixtures/sample.pdf');
    }
    async getUploadedDropZoneFileName()
    {
        return await this.fileNameDisplayInDropZoneLocator.textContent();
    }
}