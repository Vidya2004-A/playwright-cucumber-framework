import { Page, Locator, expect } from '@playwright/test';

export class AddToCartPage
{
    readonly page: Page;
    readonly addToCartButton: Locator;
    readonly cartIcon: Locator;

    constructor(page: Page)
    {
        this.page = page;
        this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartIcon=page.locator('.shopping_cart_link');
    }

    // Add product to cart and navigate to cart page
    async addProductToCart()
    {
        await this.addToCartButton.click();
        await this.cartIcon.click();
    }

    // Verify selected product is displayed in cart
    async verifyProductAvailability()
    {
        await expect(this.page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
    }
}