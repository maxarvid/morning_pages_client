describe("When user signs in", () => {
  beforeEach(() => {
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
      cy.signInIntercept();
      cy.signIn();
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
      cy.signInFailureIntercept();
      cy.signIn();
    });
    it("is expected to display an error message", () => {
      cy.get("[data-cy=toast-container").should(
        "contain.text",
        "Invalid login credentials. Please try again."
      );
    });
  });
});
