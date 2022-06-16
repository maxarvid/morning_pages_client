// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("visitThemes", () => {
  cy.intercept("GET", "**/themes", { fixture: "themesResponse.json" });
  cy.visit("/");
});

Cypress.Commands.add("themesList", () => {
  cy.get("[data-cy=themes-list]").children();
});

Cypress.Commands.add("userVisit", () => {
  cy.visitThemes();
  cy.window()
    .its("store")
    .invoke("dispatch", { type: "auth/setCurrentUser", payload: true });
});

Cypress.Commands.add("visitMorningPages", () => {
  cy.intercept("GET", "**/morning_pages", {
    fixture: "morningPagesIndex.json",
  }).as("getMorningPages");
  cy.get("[data-cy=morning-pages-btn]").click();
  cy.wait("@getMorningPages");
});

Cypress.Commands.add("morningPagesList", () => {
  cy.get("[data-cy=morning-pages-list]").children();
});

Cypress.Commands.add("createMorningPage", () => {
  cy.get("[data-cy=morning-page-new-btn]").click();
  cy.get("[data-cy=morning-page-title-input]").type("This is the title");
  cy.get("[data-cy=morning-page-body-input]").type("this is the body");
  cy.get("[data-cy=morning-page-submit-btn]").click();
});
