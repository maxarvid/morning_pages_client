describe("When authenticating, before the server responds", () => {
  beforeEach(() => {
    cy.visitThemes();
  });

  it("is expected to display a loader while logging user in", () => {
    let resolveReq;
    cy.intercept("POST", "**/auth/sign_in", (req) => {
      return new Cypress.Promise((resolve) => {
        resolveReq = resolve;
      }).then(req.reply);
    })
    cy.signIn();
    cy.get("[data-cy=loader-container]")
      .should("contain.text", "Loading")
      .then(() => resolveReq());
    cy.get("[data-cy=loader-container").should("not.exist");
  });
});
