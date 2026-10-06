import {Page,Locator} from '@playwright/test';

export class LoginPage
{
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    
    constructor(page:Page)
    {
        this.page=page;
        this.username=page.locator('#user-name');
        this.password=page.locator('#password');
        this.loginButton=page.locator('#login-button');
    }

    // Navigate to login page
    async gotoLoginPage() 
    {
        await this.page.goto('https://www.saucedemo.com/');
    }

    // Perform login using username and password
    async login(user: string,pass: string) 
    {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginButton.click();
    }

    // Verify successful login
    async verifyLoginSuccess() 
    {
        await this.page.waitForURL('https://www.saucedemo.com/inventory.html');
    }
}