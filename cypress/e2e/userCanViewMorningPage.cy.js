describe("When user view single morning page", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/themes", { fixture: "themesResponse.json" });
    cy.intercept("GET", "**/morning_pages", {
      fixture: "morningPagesIndex.json",
    }).as("getMorningPages");
    cy.visit("/");
    cy.window()
      .its("store")
      .invoke("dispatch", { type: "auth/setCurrentUser", payload: true });
    cy.get("[data-cy=morning-pages-btn]").click();
  });

  describe("successfully", () => {
    beforeEach(() => {
      cy.intercept("GET", "**/morning_pages/1", {
        fixture: "morningPageShow.json",
      }).as("getMorningPage");
      cy.get("[data-cy=morning-page]").first().click();
    });

    it("is expected to display the morning page with its body", () => {
      cy.wait("@getMorningPage");
      cy.get("[data-cy=morning-page-body]").should(
        "contain.text",
        "And this is the body"
      );
    });
  });
  describe("unsuccessfully", () => {
    beforeEach(() => {
      cy.intercept("GET", "**/morning_pages/1", { statusCode: 422 });
      cy.get("[data-cy=morning-page]").first().click();
    });

    it("is expected to render an error message", () => {
      cy.get("[data-cy=toast-container]").should(
        "contain.text",
        "Something went wrong, try again later"
      );
    });
  });
});
