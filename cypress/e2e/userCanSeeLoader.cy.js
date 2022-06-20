describe("When authenticating, before the server responds", () => {
  beforeEach(() => {
    cy.visitThemes();
  });

  describe("successfully", () => {
    beforeEach(() => {
      cy.signInIntercept();
    });

    it("is expected to display a loader while logging user in", () => {
      cy.signIn();
      cy.get("[data-cy=loader-container]").should("contain.text", "Loading");
    });
  });

  describe("unsuccessfully", () => {
    beforeEach(() => {
      cy.intercept("POST", "**/auth/sign_in", {
        statusCode: 401,
        fixture: "signInFailure.json",
        delay: 2000,
      });
      cy.intercept("GET", "**/auth/validate_token**", {
        statusCode: 401,
        fixture: "signInFailure.json",
        delay: 2000,
      });
    });

    it("is expected to display a loader while logging user in", () => {
      cy.signIn();
      cy.get("[data-cy=loader-container]").should("contain.text", "Loading");
    });
  });
});
