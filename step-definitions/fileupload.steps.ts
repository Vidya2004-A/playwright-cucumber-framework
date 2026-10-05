import {Given,When,Then} from '@cucumber/cucumber';

import { expect } from '@playwright/test';

import { FileUploadPage } from '../pages/FileUploadPage';

import { CustomWorld } from '../support/world';

let fileUploadPage: FileUploadPage;

//FU_001

let uploadedFileName: string | null;

// FU_002

let uploadedFileCount: number;

// FU_006

let isErrorVisible: boolean;
let fileTypeErrorText:string | null;

// FU_010

let uploadedFileNameInDropZone: string | null;

Given('User navigates to File Upload page',async function (this: CustomWorld)
{
    fileUploadPage =new FileUploadPage(this.page);

    await fileUploadPage.gotoFileUploadPage();
});

When('User uploads a single file',async function ()
{
    await fileUploadPage.uploadSingleFile();
});

Then('Verify uploaded file name is displayed',async function ()
{
    uploadedFileName =await fileUploadPage.getUploadedFileName();

    expect(uploadedFileName).toContain('sample.pdf');
});

//FU_002
When('User uploads multiple files',async function ()
{
    await fileUploadPage.uploadMultipleFiles();
});
Then('Verify 2 files are uploaded',async function ()
{
    uploadedFileCount =await fileUploadPage.getUploadedFileCount();
    expect(uploadedFileCount).toBe(2);
});

//FU_006
When('User uploads an invalid file type',async function ()
{
    await fileUploadPage.uploadInvalidFileType();
});
Then('Verify file type error is displayed',async function ()
{
    isErrorVisible =await fileUploadPage.isFileTypeErrorVisible();
    expect(isErrorVisible).toBeTruthy();
});
Then('Verify error message contains image',async function ()
{
    fileTypeErrorText =await fileUploadPage.getFileTypeErrorText();
    expect(fileTypeErrorText?.toLowerCase()).toContain('image');
});
//FU_010
When('User uploads file through drop zone',async function ()
{
    await fileUploadPage.uploadFileInDropZone();
});
Then('Drop zone displays the file name',async function ()
{
    uploadedFileNameInDropZone =await fileUploadPage.getUploadedDropZoneFileName();
    expect(uploadedFileNameInDropZone).toContain("sample.pdf");
});
