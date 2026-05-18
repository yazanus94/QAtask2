import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open SauceDemo website", () => {
  cy.visit("https://www.saucedemo.com");
});

When("I login with username {string} and password {string}", (username, password) => {
  cy.get("#user-name").type(username);
  cy.get("#password").type(password);
  cy.get("#login-button").click();
});

Then("I should see the products page", () => {
  cy.url().should("include", "inventory.html");
});

When("I add a product to the cart", () => {
  cy.get(".inventory_item button").first().click();
});

When("I open the cart", () => {
  cy.get(".shopping_cart_link").click();
});

When("I start checkout", () => {
  cy.get("#checkout").click();
});

Then("I should see checkout page", () => {
  cy.url().should("include", "checkout-step-one.html");
});

When("I click the menu button", () => {
  cy.get("#react-burger-menu-btn").click();
});

When("I click logout", () => {
  cy.contains("Logout").click();
});

Then("I should return to login page", () => {
  cy.url().should("eq", "https://www.saucedemo.com/");
});