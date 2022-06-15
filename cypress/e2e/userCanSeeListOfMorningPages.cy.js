describe("When user navigates to their Morning Pages", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/morning_pages", {
      fixture: "morningPagesIndex.json",
    }).as("getMorningPages");
    cy.visit("/");
    cy.window()
      .its("store")
      .invoke("dispatch", { type: "SET_CURRENT_USER", payload: true });
    cy.get("[data-cy=morning-pages-btn]").click();
  });

  it("is expected to display an index of morning pages", () => {
    cy.wait("@getMorningPages");
    cy.get("[data-cy=morning-pages-list]").should("have.length", 3);
  });
});
