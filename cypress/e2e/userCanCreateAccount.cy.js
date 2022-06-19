describe("When user creates an account", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/themes", { fixture: "themesResponse.json" });
    cy.intercept("POST", "**/auth", { fixture: "signInResponse" });
    cy.visit("/");
  });

  describe("successfully", () => {
    beforeEach(() => {
      cy.signUp();
    });

    it("is expected to display a message", () => {
      cy.get("[data-cy=toast-container").should(
        "contain.text",
        "You have successfully created your account"
      );
    });

    it("is expected to display the themes list", () => {
      cy.get("[data-cy=themes-list]").should("be.visible");
    });
  });

  describe("unsuccessfully", () => {
    beforeEach(() => {
      cy.intercept("POST", "**/auth", {
        fixture: "signInFailure.json",
        statusCode: 422,
      });
      cy.signUp();
    });
    
    it("is expected to display an error message", () => {
      cy.get("[data-cy=toast-container]").should(
        "contain.text",
        "Invalid login credentials. Please try again."
      );
    });
  });
});
