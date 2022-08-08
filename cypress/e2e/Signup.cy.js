///  <reference types="Cypress" />

describe("User can sign up for a personal account", () => {
 const phoneNumber = 9412303025;
 beforeEach(() => {
  cy.visit("www.paypal.com");
  cy.wait(1000);
  cy.get("#acceptAllButton").click();
 }),
  it("User must enter a valid phone number", () => {
   const inputField = cy.get("#text-input-Hero");
   inputField.type("5555555555");

   cy.get("[aria-label='Agree']").click();
   cy.wait(1000);
   cy.get(".hero").contains("Enter a valid phone number to continue");
  });

 it("user gets a success message whne they enter a valid phone number", () => {
  cy.get("#text-input-Hero").type(phoneNumber);
  cy.get("[aria-label='Agree']").click();
  cy.wait(1000);
  cy.get(".app-download-group-success-msg-container").should("be.visible");
 });

 it("user goes to the signup page and fills picks Send, spend, and mange your money", () => {
  cy.get("#signup-button").click();
  cy.url().should("include", "/account-selection");

  cy.get("[id='radio-personal']").click();
  cy.get("#cta-btn").click();

  cy.url().should("include", "/mobile_conf");

  cy.get("[id='paypalAccountData_phone']").type(phoneNumber);

  cy.get("[id='paypalAccountData_submit']").click();
 });
});

describe("User can sign up for a business account", () => {
 beforeEach(() => {
  cy.visit("www.paypal.com");
  cy.wait(1000);
 }),
  it("user signs up for a business account", () => {
   cy.get("#signup-button").click();
   cy.url().should("include", "/account-selection");

   cy.get("[id='radio-business']").click();
   cy.get("#cta-btn").click();

   cy.wait(3000);
  });
});
