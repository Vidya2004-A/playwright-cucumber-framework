@login
Feature: Login

Scenario: Successful Login

Given User launches SauceDemo application

When User enters valid credentials and clicks Login button

Then User should navigate to Products page