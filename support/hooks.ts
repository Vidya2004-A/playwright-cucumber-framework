import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';

import { Browser, chromium, firefox, webkit } from '@playwright/test';
import { CustomWorld } from './world';

let browser: Browser;

BeforeAll(async function()
{
    browser = await chromium.launch({ headless: false });
    slowMo: 80000
});

Before(async function(this:CustomWorld)
{
    this.context=await browser.newContext();
    this.page=await this.context.newPage();
});

After(async function()
{
   await this.page.close();
   await this.context.close();
});

AfterAll(async function()
{
    await browser.close();
});
