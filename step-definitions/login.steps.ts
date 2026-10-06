import { Given, When, Then } from '@cucumber/cucumber';
import { ENV } from '../support/env';
import { LoginPage } from '../pages/LoginPage';
import { CustomWorld } from '../support/world';

let loginPage: LoginPage;

Given('User launches SauceDemo application', async function (this:CustomWorld) 
{
    // open application
    loginPage=new LoginPage(this.page);
    await loginPage.gotoLoginPage();
});

When('User enters valid credentials and clicks Login button', async function () 
{
    // enter username and password
    await loginPage.login(ENV.SAUCE_USERNAME,ENV.SAUCE_PASSWORD);
});

Then('User should navigate to Products page', async function () 
{
    // verify inventory page
    await loginPage.verifyLoginSuccess();
});