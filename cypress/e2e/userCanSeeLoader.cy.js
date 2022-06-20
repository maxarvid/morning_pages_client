describe("When authenticating, before the server responds", () => {
  beforeEach(() => {
    cy.visitThemes();
  });

  describe("successfully", () => {
    beforeEach(() => {
      cy.intercept("POST", "**/auth/sign_in", {
        fixture: "signInResponse.json",
        delay: 2000,
      }).as("signIn");
      cy.intercept("GET", "**/auth/validate_token", {
        fixture: "signInResponse.json",
        delay: 2000,
      });
      cy.signIn();
      cy.wait("@signIn");
    });

    it("is expected to display a loader while logging user in", () => {
      cy.get("[data-cy=loader-container]").should("contain.text", "Loading");
    });
  });

  describe("unsuccessfully", () => {
    beforeEach(() => {
      cy.intercept("POST", "**/auth/sign_in", {
        statusCode: 401,
        fixture: "signInFailure.json",
        delay: 2000,
      }).as("signInFailure");
      cy.intercept("GET", "**/auth/validate_token**", {
        statusCode: 401,
        fixture: "signInFailure.json",
        delay: 2000,
      });
      cy.signIn();
      cy.wait("@signInFailure");
    });

    it("is expected to display a loader while logging user in", () => {
      cy.get("[data-cy=loader-container]").should("contain.text", "Loading");
    });
  });
});
