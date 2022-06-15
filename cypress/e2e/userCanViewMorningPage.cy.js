describe("When user view single morning page", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/themes", { fixture: "themesResponse.json" });
    cy.intercept("GET", "**/morning_pages", {
      fixture: "morningPagesIndex.json",
    }).as("getMorningPages");
    cy.intercept("GET", "**/morning_pages/1", {
      fixture: "morningPageShow.json",
    }).as("getMorningPage");
    cy.visit("/");
    cy.window()
      .its("store")
      .invoke("dispatch", { type: "auth/setCurrentUser", payload: true });
    cy.get("[data-cy=morning-pages-btn]").click();
    cy.get("[data-cy=morning-page]").first().click();
  });

  it("is expected to display the morning page with its body", () => {
    cy.wait("@getMorningPage");
    cy.get("[data-cy=morning-page-body").should(
      "contain.text",
      "And this is the body"
    );
  });
});
