describe("When user visits application", () => {
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
