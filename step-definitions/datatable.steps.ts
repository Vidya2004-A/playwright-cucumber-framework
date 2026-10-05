import { Given , When, Then, setDefaultTimeout} from "@cucumber/cucumber";
import { DataTablePage } from "../pages/DataTablePage";
import { CustomWorld } from "../support/world";
import { expect } from "@playwright/test";

setDefaultTimeout(300000); // 5 minutes


let dataTablepage:DataTablePage;

//tc1
let actualHeaders:string[];

//tc2
let obtainedrowCount : number;
let rowCountIndicatorText : String;

//tc3
let bookName: string | null;

//tc4
let editDialogVisible: boolean;

//tc5
let rowCount:number;
let firstRow:boolean;

Given('User navigates to Data Table page',async function(this:CustomWorld)
{
   dataTablepage =new DataTablePage(this.page);
   await dataTablepage.gotoDatatablePage();
});

//tc1
When('User reads all the table headers',async function()
{
   actualHeaders= await dataTablepage.readHeaders();
});
Then('Verify all the obtained headers with expected headers',async function()
{
    const expectedHeaders = ['Sr No.','Book Name','Book Genre','Book Author','Book ISBN','Book Published','Actions'];
    expect(actualHeaders).toEqual(expectedHeaders);
});

//tc2
When('User waits for table rows to be visible',async function()
{
    await dataTablepage.waitForTableRows();
});
When('User counts the visible table rows',async function()
{
    obtainedrowCount =await dataTablepage.rowsCount();
});
Then('Table should display exactly 5 rows',async function()
{
    expect(obtainedrowCount).toBe(5);
});
Then('Row count indicator should contain 25 books',async function()
{
    rowCountIndicatorText =await dataTablepage.getRowCountIndicatorText();
    expect(rowCountIndicatorText).toContain('25 books');
    //console.log(rowCountIndicatorText);
});

//tc3
When('User reads the book name from row 2 column 2',async function()
{
    bookName=await dataTablepage.readingbookNameCell();
});
Then('Book name should be Clean Code',async function()
{
    expect(bookName?.trim()).toBe('Clean Code');
    //console.log(bookName);
    //await this.page.pause();
});

//t4
When('User searches all table pages for author {string} and clicks Edit',async function (authorName: string)
    {
        await dataTablepage.findAuthorAndClickEdit(authorName);
    });

Then('Edit book dialog should be displayed',async function ()
    {
        editDialogVisible =await dataTablepage.isEditDialogVisible();
        expect(editDialogVisible).toBeTruthy();
    });

//tc5
When('User was able to see more than one table row',async function ()
    {
        rowCount=await dataTablepage.getRowCount();
        expect(rowCount).toBeGreaterThan(0);
    });
Then('Check whether the first row is visible',async function ()
    {
        firstRow=await dataTablepage.isFirstRowVisible();
        expect(firstRow).toBeTruthy();
    });