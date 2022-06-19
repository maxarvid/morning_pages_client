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

Cypress.Commands.add("signInIntercept", () => {
  cy.intercept("POST", "**/auth/sign_in", { fixture: "signInResponse.json" });
  cy.intercept("GET", "**/auth/validate_token", {
    fixture: "signInResponse.json",
  });
});

Cypress.Commands.add("signInFailureIntercept", () => {
  cy.intercept("POST", "**/auth/sign_in", {
    statusCode: 401,
    fixture: "signInFailure.json",
  });
  cy.intercept("GET", "**/auth/validate_token**", {
    statusCode: 401,
    fixture: "signInFailure.json",
  });
});

Cypress.Commands.add("signIn", () => {
  cy.get("[data-cy=login-email]").type("user@email.com");
  cy.get("[data-cy=login-password]").type("password");
  cy.get("[data-cy=login-submit-btn]").click();
});
