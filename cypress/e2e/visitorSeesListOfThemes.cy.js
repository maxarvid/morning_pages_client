describe("When user visits application", () => {
  describe("sucessfully", () => {
    beforeEach(() => {
      cy.intercept("GET", "**/themes", { fixture: "themesResponse.json" });
      cy.visit("/");
    });

    it("is expected to display a list of themes", () => {
      cy.get("[data-cy=themes-list]").children().should("have.length", 12);
    });

    it("is expected to display the first theme name", () => {
      cy.get("[data-cy=themes-list]")
        .children()
        .first()
        .should("contain.text", "A Sense of Safety");
    });
  });

  describe("unsuccessfully", () => {
    beforeEach(() => {
      cy.intercept("GET", "**/themes", { statusCode: 422 });
      cy.visit("/");
    });

    it("is expected to render an error message", () => {
      cy.get("[data-cy=error-handler]").should(
        "contain.text",
        "Something went wrong, try again later"
      );
    });
  });
});
