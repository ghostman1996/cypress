///  <reference types="Cypress" />

describe("landing page", () => {
 beforeEach(() => {
  cy.visit("www.paypal.com");
 }),
  it("accepts the cookies", () => {
   const cookies = cy.get("#ccpaCookieContent_wrapper");
   const acceptCookies = cy.get("#acceptAllButton");

   cookies.should("be.visible");
   acceptCookies.click();
   cookies.should("not.be.visible");
  });

 it("navBar is visible", () => {
  const navBar = cy.get(".pp-header__wrapper");
  navBar.should("be.visible");
 });
});

describe("Components", () => {
 beforeEach(() => {
  cy.visit("www.paypal.com");
  cy.wait(1000);
 }),
  it("navBar is visible", () => {
   const navBar = cy.get(".pp-header__wrapper");
   navBar.should("be.visible");
  }),
  it("footer is visible and footer disclosure", () => {
   const footer = cy.get("#footer").scrollIntoView();
   footer.should("be.visible");
   const footerDisclosure = cy.get(".footer-disclosure").scrollIntoView();
   footerDisclosure.should("be.visible");
  });
 it("shows navBar banner and close it", () => {
  const navBarBanner = cy.get(".nav-banner");
  const navBarBannerP = cy.get(".nav-banner-item-paragraph");
  const signupBtn = cy.get(".nav-banner-button-bar > .inline-button-theme");
  const closeNavBarBanner = cy.get("#nav-banner-close-button");

  navBarBanner.should("be.visible");
  navBarBannerP.should("be.visible");
  signupBtn.should("be.visible");
  closeNavBarBanner.click();

  navBarBanner.should("not.exist");
  navBarBannerP.should("not.exist");
  signupBtn.should("not.exist");
 });
 it("shows Sign up on our app and we'll give you $5.", () => {
  const pageTitle = cy.get(
   ".hero-content > .text-group > :nth-child(1) > .text-group-headline",
  );

  pageTitle.should("be.visible");
 });

 it("showns image once loaded", () => {
  const image = cy.get(".hero-media");
  image.should("be.visible");
 });

 it("shows signup button", () => {
  const signupBtn = cy.get("#signup-button");
  signupBtn.should("be.visible");
 });
 it("shows login button", () => {
  const loginBtn = cy.get("#ul-btn");
  loginBtn.should("be.visible");
 });

 it("shows input field with Phone number as label", () => {
  const inputField = cy.get("#text-input-Hero");
  const labelText = cy.get(
   '[class="pp-com-189dnc4-label-text_field_label_sm"]',
  );
  inputField.should("be.visible");
  labelText.contains("Phone number");
 });
 it("shows an Agree button", () => {
  const agreeBtn = cy.get(
   ".app-download-group-phone-input-row > .app-download-group-cta-desktop-container > .app-download-group-cta-sms",
  );
  agreeBtn.should("be.visible");
  agreeBtn.contains("Agree");
 });
});
