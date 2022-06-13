describe("When user visits application", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/themes", { fixture: "themesResponse.json" });
    cy.visit("/");
  });

  it("is expected to display a list of themes", () => {
    cy.get("[data-cy=themes-list]").children().should("have.length", 6);
  });
});
