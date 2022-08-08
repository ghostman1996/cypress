describe("Login form", () => {
 beforeEach(() => {
  cy.visit("www.paypal.com");
  cy.wait(1000);
 }),
  it("user can go to login page", () => {
   cy.get("#ul-btn").click();
   cy.wait(1000);

   cy.url().should("include", "/signin");
  });
});
