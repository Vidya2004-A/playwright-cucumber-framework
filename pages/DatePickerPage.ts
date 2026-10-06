import {Page,Locator} from '@playwright/test';

export class DatePickerPage
{
    readonly page: Page;

    // DP_001
    readonly dateInputBox: Locator;

    // DP_002
    readonly calendarTrigger: Locator;
    readonly calendarPanel: Locator;

    // DP_003
    readonly previousMonthButton: Locator;
    readonly nextMonthButton: Locator;
    readonly resultDisplayPanel: Locator;

    constructor(page: Page)
    {
        this.page = page;

        // DP_001
        this.dateInputBox = page.locator('[data-testid="dp-basic-input"]');

        // DP_002
        this.calendarTrigger = page.locator('[data-testid="dp-calendar-trigger"]');

        this.calendarPanel = page.locator('.date-picker-module__PNVq0G__calendarPanel');

        // DP_003
        this.previousMonthButton = page.locator('[data-testid="dp-prev-month"]');

        this.nextMonthButton = page.locator('[data-testid="dp-next-month"]');

        this.resultDisplayPanel = page.locator('#result-s02');
    }

    // Navigate to Date Picker page
    async gotoDatePickerPage(): Promise<void>
    {
        await this.page.goto('https://qaplayground.com/practice/date-picker');
    }

    // DP_001
    // Enter date into the input field
    async enterTheDate(date: string): Promise<void>
    {
        await this.dateInputBox.fill(date);
    }

    // Get the entered date from the input field
    async getEnteredDate(): Promise<string>
    {
        return await this.dateInputBox.inputValue();
    }

    // DP_002
    // Open the calendar widget
    async clickCalendarTrigger(): Promise<void>
    {
        await this.calendarTrigger.click();
    }

    // Verify calendar panel visibility
    async isCalendarPanelVisible(): Promise<boolean>
    {
        return await this.calendarPanel.isVisible();
    }

    // DP_003
    // Navigate to the target month and select the required date
    async navigateToAndSelectDate(targetDateString: string): Promise<void>
    {
        const targetDate = new Date(`${targetDateString}T00:00:00`);

        const currentDate = new Date();

        const currentMonthNumber =currentDate.getFullYear() * 12 +currentDate.getMonth();

        const targetMonthNumber =targetDate.getFullYear() * 12 +targetDate.getMonth();

        const monthDifference =targetMonthNumber - currentMonthNumber;

        if (monthDifference < 0)
        {
            for (let count = 0;count < Math.abs(monthDifference);count++)
            {
                await this.previousMonthButton.click();
            }
        }

        if (monthDifference > 0)
        {
            for (let count = 0;count < monthDifference;count++)
            {
                await this.nextMonthButton.click();
            }
        }

        const targetDayButton =this.page.locator(`[data-testid="dp-day-btn"][data-date="${targetDateString}"]`);

        await targetDayButton.click();
    }

    // Get the selected date result text
    async getResultDisplayText(): Promise<string>
    {
        const resultText =await this.resultDisplayPanel.textContent();

        return resultText?.trim() ?? '';
    }
}