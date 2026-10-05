import {Given,When,Then} from '@cucumber/cucumber';

import { expect } from '@playwright/test';

import { PdfReaderPage } from '../pages/PdfReaderPage';

let pdfReaderPage: PdfReaderPage;

let pdfText: string;

Given('User has a PDF file',async function ()
{
    pdfReaderPage =new PdfReaderPage();
});

When('User reads the PDF content',async function ()
{
    pdfText =await pdfReaderPage.readPdfText();

    console.log(pdfText);
});

Then('Verify PDF contains expected text',async function ()
{
    expect(pdfText).toContain('Playwright Upload Testing for testcase 1');
});