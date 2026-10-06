import { Page, Locator } from "@playwright/test";

export class DataTablePage
{
    readonly page: Page;
    //tc1
    readonly headers: Locator;
    //tc2
    readonly rows: Locator;
    readonly rowCountIndicator: Locator;
    //tc3
    readonly bookNameCell:Locator;

    //t4
    readonly bookRows: Locator;
    readonly editDialog: Locator;

    //t5
    readonly rowCount :Locator;

    constructor (page:Page)
    {
        this.page=page;

        this.headers=page.locator('[data-testid=table-head] th');

        this.rows=page.locator('[data-testid="data-table"] tr[data-testid="book-row"]');
        this.rowCountIndicator = page.locator('[data-testid="row-count"]');

        this.bookNameCell=page.locator('#dataTable tbody tr:nth-child(2) td:nth-child(2)');

        this.bookRows = page.locator('[data-testid="book-row"]');
        this.editDialog =page.getByTestId('edit-book-dialog');

        this.rowCount=page.locator('tbody tr');
    }
    async gotoDatatablePage()
    {
       await this.page.goto("https://qaplayground.com/practice/data-table");
    }
    //tc1
    async readHeaders()
    {
       const headers =await this.headers.allTextContents();
       return headers.map(header => header.replace('⇅', '').trim());
    }
    //tc2
    async waitForTableRows()
    {
       await this.rows.first().waitFor({state: 'visible'});
    }
    async rowsCount()
    {   
       return await this.rows.count();
    }
    async getRowCountIndicatorText()
    {
       const indicatorText = await this.rowCountIndicator.textContent();
       return indicatorText?.trim() ?? '';
    }
    //tc3
    async readingbookNameCell()
    {
       return await this.bookNameCell.textContent();
    } 

    //tc4
    async findAuthorAndClickEdit(authorName: string): Promise<void>
    {
       const totalPages = 5;

       for (let pageNumber = 1;pageNumber <= totalPages;pageNumber++)
       {
        if (pageNumber > 1)
        {
            const pageButton = this.page.locator(`button:text-is("${pageNumber}")`);

            await pageButton.click();
            
            await this.page.locator('[data-testid="row-count"]',{hasText:`page ${pageNumber} of ${totalPages}`}).waitFor({state: 'visible'});
        }
        
        const matchingAuthorRow =this.bookRows.filter({hasText: authorName});

        const matchingRowCount =await matchingAuthorRow.count();

        if (matchingRowCount > 0)
        {
            await matchingAuthorRow.first().locator('[data-testid="btn-edit-book"]').click();
            return;
        }
        }
        throw new Error(`Author "${authorName}" was not found ` +'on any table page.');
    }

    async isEditDialogVisible(): Promise<boolean>
    {
        return await this.editDialog.isVisible();
    }
    
    //tc5
    async getRowCount()
    {
        return await this.rowCount.count();
    }
    async isFirstRowVisible(): Promise<boolean>
    {
        return await this.rowCount.first().isVisible();
    }
}