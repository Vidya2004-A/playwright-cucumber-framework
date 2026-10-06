import { Given, When, Then } from '@cucumber/cucumber';
import { ENV } from '../support/env';
import { LoginPage } from '../pages/LoginPage';
import { CustomWorld } from '../support/world';

let loginPage: LoginPage;

Given('User launches SauceDemo application', async function (this:CustomWorld) {
    // open application
    loginPage=new LoginPage(this.page);
    await loginPage.gotoLoginPage();
});
When('User enters valid credentials', async function (this:CustomWorld) {
    // enter username and password
    console.log('USERNAME:', ENV.SAUCE_USERNAME);
    console.log('PASSWORD:', ENV.SAUCE_PASSWORD);
    await loginPage.login(ENV.SAUCE_USERNAME,ENV.SAUCE_PASSWORD);
    
});
When('User clicks Login button', async function (this:CustomWorld) {
    // click login button
    
});
Then('User should navigate to Products page', async function (this:CustomWorld) {
    // verify inventory page
    await loginPage.verifyLoginSuccess();
});