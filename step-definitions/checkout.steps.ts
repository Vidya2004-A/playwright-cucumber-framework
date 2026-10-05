import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { AddToCartPage } from '../pages/AddtocartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CustomWorld } from '../support/world';

let loginPage: LoginPage;
let addToCartPage: AddToCartPage;
let checkoutPage: CheckoutPage;

Given('User is on the cart page', async function (this: CustomWorld) 
{
    loginPage = new LoginPage(this.page);
    addToCartPage = new AddToCartPage(this.page);
    checkoutPage = new CheckoutPage(this.page);

    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    await addToCartPage.addProductToCart();
});

   When('User proceeds to checkout', async function () 
   {

    await checkoutPage.checkoutButton.click();

   });

   When('User enters checkout details', async function () 
   {
    await checkoutPage.firstName.fill('Vidya');
    await checkoutPage.lastName.fill('A');
    await checkoutPage.postalCode.fill('600001');
    await checkoutPage.continueButton.click();
   });

   When('User clicks Finish', async function () 
   {
    await checkoutPage.finishButton.click();
   });

   Then('Order should be placed successfully', async function () 
   {

    await checkoutPage.verifyOrderSuccess();

   });