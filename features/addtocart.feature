Feature: Add To Cart

Scenario: Add Backpack To Cart

Given User is logged into SauceDemo

When User adds Sauce Labs Backpack to the cart

And User opens the cart

Then Backpack product should be displayed in cart