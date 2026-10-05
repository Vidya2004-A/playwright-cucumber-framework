Feature: Checkout

Scenario: Successful Checkout

Given User is on the cart page

When User proceeds to checkout

And User enters checkout details

And User clicks Finish

Then Order should be placed successfully