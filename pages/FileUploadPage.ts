import {Page,Locator} from '@playwright/test';
import { ENV } from '../support/env';

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

    // Navigate to File Upload page
    async gotoFileUploadPage()
    {
        await this.page.goto(`${ENV.QA_PLAYGROUND_URL}/practice/file-upload`);
    }

    // FU_001
    // Upload a single file
    async uploadSingleFile()
    {
        await this.singleFileInput.setInputFiles('tests/fixtures/sample.pdf');
    }

    async getUploadedFileName()
    {
        return await this.fileNameDisplay.textContent();
    }

    // FU_002
    // Upload multiple files
    async uploadMultipleFiles()
    {
       await this.multiFileInput.setInputFiles(['tests/fixtures/file1.pdf','tests/fixtures/file2.png']);
    }

    // Get uploaded file count
    async getUploadedFileCount()
    {
      const fileCount =await this.multiFileInput.evaluate((input: HTMLInputElement) =>input.files?.length ?? 0);
      return fileCount;
    }

    // FU_006
    // Upload an invalid file type
    async uploadInvalidFileType()
    {
      await this.fileTypeInput.setInputFiles('tests/fixtures/invalid.txt');
    }

    // Verify file type error visibility
    async isFileTypeErrorVisible()
    {
      return await this.fileTypeError.isVisible();
    }

    // Get file type error message
    async getFileTypeErrorText()
    {
      return await this.fileTypeError.textContent();
    }

    //FU_010
    // Upload file through the drop zone
    async uploadFileInDropZone()
    {
        await this.dropZoneLocator.setInputFiles('tests/fixtures/sample.pdf');
    }

    // Get uploaded file name from drop zone
    async getUploadedDropZoneFileName()
    {
        return await this.fileNameDisplayInDropZoneLocator.textContent();
    }
}