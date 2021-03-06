// Intercepts
Cypress.Commands.add("interceptThemes", () => {
  cy.intercept("GET", "**/themes", { fixture: "themesResponse.json" }).as(
    "getThemes"
  );
});

Cypress.Commands.add("interceptValidateToken", () => {
  cy.intercept("GET", "**/validate_token**", {
    fixture: "validateTokenResponse.json",
  }).as("getValitadeToken");
});

Cypress.Commands.add("interceptMorningPages", () => {
  cy.intercept("GET", "**/morning_pages", {
    fixture: "morningPagesIndex.json",
  }).as("getMorningPages");
});

Cypress.Commands.add("interceptMorningPage", () => {
  cy.intercept("GET", "**/morning_pages/1", {
    fixture: "morningPageShow.json",
  }).as("getMorningPage");
});

// Setting currentUser
Cypress.Commands.add("visitApplicationWithToken", () => {
  cy.visit("/", {
    onBeforeLoad: (window) => {
      window.localStorage.setItem(
        "J-tockAuth-Storage",
        '{"access-token":"ksJp_n5Y-u5TdRwB9E5eoQ","cache-control":"max-age=0, private, must-revalidate","client":"wuQhMVFTbPt12PvuHoxSIQ","content-type":"application/json; charset=utf-8","expiry":"1657213753","token-type":"Bearer","uid":"user@email.com"}'
      );
    },
  });
});

Cypress.Commands.add("setUserInApplicationState", () => {
  cy.window()
    .its("store")
    .invoke("dispatch", {
      type: "auth/setCurrentUser",
      payload: { name: "user", email: "user@email.com" },
    });
});

// Combinations
Cypress.Commands.add("userVisit", () => {
  cy.interceptValidateToken();
  cy.interceptThemes();
  cy.visitApplicationWithToken();
  cy.setUserInApplicationState();
});

Cypress.Commands.add("visitThemes", () => {
  cy.intercept("GET", "**/themes", { fixture: "themesResponse.json" });
  cy.visit("/");
});

Cypress.Commands.add("themesList", () => {
  cy.get("[data-cy=themes-list]").children();
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
  cy.get("[data-cy=morning-page-dropdown").click();
  cy.get("[data-cy=morning-page-dropdown").children().last().click();
  cy.get("[data-cy=morning-page-submit-btn]").click();
});

Cypress.Commands.add("signInIntercept", () => {
  cy.intercept("POST", "**/auth/sign_in", {
    fixture: "signInResponse.json",
  });
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

Cypress.Commands.add("signUp", () => {
  cy.get("[data-cy=create-account-email]").type("user@email.com");
  cy.get("[data-cy=create-account-password]").type("password");
  cy.get("[data-cy=create-account-submit-btn]").click();
});

Cypress.Commands.add("viewMorningPage", () => {
  cy.intercept("GET", "**/morning_pages/1", {
    fixture: "morningPageShow.json",
  }).as("getMorningPage");
  cy.get("[data-cy=morning-page]").first().click();
});
