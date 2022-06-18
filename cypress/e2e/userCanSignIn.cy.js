describe("When user signs in", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("is expected to display a welcome message if the user is not signed in", () => {
    cy.get("[data-cy=welcome]").should(
      "contain.text",
      "Welcome to Morning Pages"
    );
  });

  it("is expected to display the list of themes when the user signs in", () => {
    cy.get("[data-cy=login-email]").type("user@email.com");
    cy.get("[data-cy=login-password]").type("password");
    cy.get("[data-cy=login-submit-btn]").click();
    cy.get("[data-cy=themes-list").should("be.visible");
  });
});
