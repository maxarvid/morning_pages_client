describe("When user view single morning page", () => {
  beforeEach(() => {
    cy.userVisit();
    cy.interceptMorningPages();
    cy.get("[data-cy=morning-pages-btn]").click();
    cy.wait("@getMorningPages");
  });

  describe("successfully", () => {
    beforeEach(() => {
      cy.interceptMorningPage();
      cy.get("[data-cy=morning-page]").first().click();
      cy.wait("@getMorningPage");
    });

    it("is expected to display the morning page with its body", () => {
      cy.get("[data-cy=morning-page-body]").should(
        "contain.text",
        "And this is the body"
      );
    });
  });

  describe("unsuccessfully", () => {
    beforeEach(() => {
      cy.intercept("GET", "**/morning_pages/1", { statusCode: 422 }).as(
        "getMorningPageError"
      );
      cy.get("[data-cy=morning-page]").first().click();
      cy.wait("@getMorningPageError");
    });

    it("is expected to render an error message", () => {
      cy.get("[data-cy=toast-container]").should(
        "contain.text",
        "Something went wrong, try again later"
      );
    });
  });
});
