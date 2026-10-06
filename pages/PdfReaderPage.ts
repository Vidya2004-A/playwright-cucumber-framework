import fs from 'fs';
import pdf from 'pdf-parse';

export class PdfReaderPage
{
    // Read and extract text content from PDF file
    async readPdfText(): Promise<string>
    {
        const pdfBuffer =fs.readFileSync('tests/fixtures/sample.pdf');

        const pdfData =await pdf(pdfBuffer);

        return pdfData.text;
    }
}