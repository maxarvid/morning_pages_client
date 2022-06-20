describe("When authenticating, before the server responds", () => {
  beforeEach(() => {
    cy.visitThemes();
  });

  describe("successfully", () => {
    beforeEach(() => {
      cy.intercept("POST", "**/auth/sign_in", {
        fixture: "signInResponse.json",
        delay: 500,
      }).as("signIn");
      cy.signIn();
    });

    it("is expected to display a loader while logging user in", () => {
      cy.wait("@signIn");
      cy.get("[data-cy=loader-container]").should("contain.text", "Loading");
    });
  });

  describe("unsuccessfully", () => {
    beforeEach(() => {
      cy.intercept("POST", "**/auth/sign_in", {
        statusCode: 401,
        fixture: "signInFailure.json",
        delay: 4000,
      }).as("signInFailure");
      cy.signIn();
    });

    it("is expected to display a loader while logging user in", () => {
      cy.wait("@signInFailure");
      cy.get("[data-cy=loader-container]").should("contain.text", "Loading");
    });
  });
});
