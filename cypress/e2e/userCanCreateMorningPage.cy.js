describe("When user creates a new morning page", () => {
  beforeEach(() => {
    cy.interceptValidateToken();
    cy.interceptThemes();
    cy.visitApplicationWithToken();
    cy.setUserInApplicationState();
  });

  describe("successfully", () => {
    beforeEach(() => {
      cy.intercept("POST", "**/morning_pages", {
        fixture: "morningPageCreate.json",
      }).as("morningPageCreate");
      cy.createMorningPage();
    });

    it("is expected to make an API call", () => {
      cy.wait("@morningPageCreate").its("request.method").should("eql", "POST");
    });

    it("is expected to respond with a message", () => {
      cy.get("[data-cy=toast-container]").should(
        "contain.text",
        "The page was saved to the database"
      );
    });
  });

  describe("unsuccessfully", () => {
    beforeEach(() => {
      cy.intercept("POST", "**/morning_pages", {
        statusCode: 422,
      });
      cy.createMorningPage();
    });
    it("is expected to render an error message", () => {
      cy.get("[data-cy=toast-container]").should(
        "contain.text",
        "Something went wrong, try again later"
      );
    });
  });
});
