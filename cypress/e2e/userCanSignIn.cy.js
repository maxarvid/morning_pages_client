describe("When user signs in", () => {
  beforeEach(() => {
    cy.intercept("POST", "**/auth/sign_in", { fixture: "signInResponse.json" });
    cy.intercept("GET", "**/auth/validate_token", {
      fixture: "signInResponse.json",
    });
    cy.visitThemes();
  });

  it("is expected to display a welcome message if the user is not signed in", () => {
    cy.get("[data-cy=welcome]").should(
      "contain.text",
      "Welcome to Morning Pages"
    );
  });

  describe("successfully", () => {
    beforeEach(() => {
      cy.get("[data-cy=login-email]").type("user@email.com");
      cy.get("[data-cy=login-password]").type("password");
      cy.get("[data-cy=login-submit-btn]").click();
    });
    it("is expected to inform the user they have signed in", () => {
      cy.get("[data-cy=toast-container]").should(
        "contain.text",
        "You are now signed in"
      );
    });

    it("is expected to display the list of themes when the user signs in", () => {
      cy.get("[data-cy=themes-list]").should("be.visible");
    });
  });

  describe("unsuccessfully", () => {
    beforeEach(() => {
      cy.intercept("POST", "**/auth/sign_in", {
        statusCode: 401,
        fixture: "signInFailure.json",
      });
      cy.intercept("GET", "**/auth/validate_token**", {
        statusCode: 401,
        fixture: "signInFailure.json",
      });

      cy.get("[data-cy=login-email]").type("user@email.com");
      cy.get("[data-cy=login-password]").type("wrong password");
      cy.get("[data-cy=login-submit-btn]").click();
    });
    it("is expected to display an error message", () => {
      cy.get("[data-cy=toast-container").should(
        "contain.text",
        "Invalid login credentials. Please try again."
      );
    });
  });
});
