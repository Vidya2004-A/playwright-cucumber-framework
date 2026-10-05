import {Given,When,Then} from '@cucumber/cucumber';

import { expect } from '@playwright/test';
import { DatePickerPage } from '../pages/DatePickerPage';
import { CustomWorld } from '../support/world';

let datePickerPage: DatePickerPage;

// DP_001
let actualDate: string;

// DP_002
let isCalendarPanelVisible: boolean;

// DP_003
let resultDisplayText: string;


// Common Given

Given('User navigates to Date picker page',async function (this: CustomWorld)
    {
        datePickerPage =new DatePickerPage(this.page);

        await datePickerPage.gotoDatePickerPage();
    }
);


// DP_001

When('User fills a valid date {string}',async function (enteredDate: string)
    {
        await datePickerPage.enterTheDate(enteredDate);
    }
);

Then('Verify whether entered date matches {string}',async function (expectedDate: string)
    {
        actualDate =await datePickerPage.getEnteredDate();

        expect(actualDate).toBe(expectedDate);
    }
);


// DP_002

When('User clicks calendar trigger',async function ()
    {
        await datePickerPage.clickCalendarTrigger();
    }
);

Then('Verify calendar panel is visible',async function ()
    {
        isCalendarPanelVisible =await datePickerPage.isCalendarPanelVisible();

        expect(isCalendarPanelVisible).toBeTruthy();
    }
);


// DP_003

When('User navigates to and selects date {string}',async function (targetDate: string)
    {
        await datePickerPage.navigateToAndSelectDate(targetDate);
    }
);

Then('Verify the result display contains {string}',async function (expectedDate: string)
    {
        resultDisplayText =await datePickerPage.getResultDisplayText();

        expect(resultDisplayText).toContain(expectedDate);
    }
);