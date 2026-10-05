import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { AddToCartPage } from '../pages/AddtocartPage';
import { CustomWorld } from '../support/world';

let loginPage: LoginPage;
let addToCartPage: AddToCartPage;

Given('User is logged into SauceDemo', async function (this: CustomWorld) {

    loginPage = new LoginPage(this.page);
    addToCartPage = new AddToCartPage(this.page);

    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');

});

When('User adds Sauce Labs Backpack to the cart', async function () {

    await addToCartPage.addProductToCart();

});

When('User opens the cart', async function () {

    // Already handled inside addProductToCart()
    // Or keep empty if cart click is inside page method

});

Then('Backpack product should be displayed in cart', async function () {

    await addToCartPage.verifyProductAvailability();

});