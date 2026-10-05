import { Page, Locator, expect } from '@playwright/test';
export class CheckoutPage{
    readonly page: Page;
    readonly checkoutButton: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly successMessage: Locator;
    constructor(page: Page){
        this.page = page;
        this.checkoutButton = page.locator('#checkout');
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
        this.finishButton = page.locator('#finish');
        this.successMessage = page.locator('.complete-header');}
    async completeCheckout(){
        await this.checkoutButton.click();
        await this.firstName.fill('Vidya');
        await this.lastName.fill('A');
        await this.postalCode.fill('600001');
        await this.continueButton.click();
        await this.finishButton.click();}
    async verifyOrderSuccess()
    {
        await expect(this.successMessage).toHaveText('Thank you for your order!');
    }
}