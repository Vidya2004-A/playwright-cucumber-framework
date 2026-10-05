// import { test } from '@playwright/test';
// import { LoginPage } from '../../pages/LoginPage';
// import { CheckoutPage } from '../../pages/CheckoutPage';
// import { AddToCartPage } from '../../pages/AddtocartPage';

// test('Checkout Product', async ({ page }) =>
// {
//     const loginPage = new LoginPage(page);
//     const addToCartPage=new AddToCartPage(page);
//     const checkoutPage = new CheckoutPage(page);

//     await loginPage.gotoLoginPage();
//     await loginPage.login('standard_user', 'secret_sauce');

//     await addToCartPage.addProductToCart();

//     await checkoutPage.completeCheckout();
//     await checkoutPage.verifyOrderSuccess();
// });