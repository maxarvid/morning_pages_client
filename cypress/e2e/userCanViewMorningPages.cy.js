describe("When user navigates to their Morning Pages", () => {
  beforeEach(() => {
    cy.interceptValidateToken();
    cy.interceptThemes();
    cy.visitApplicationWithToken();
    cy.setUserInApplicationState();
  });

  describe("successfully", () => {
    beforeEach(() => {
      cy.interceptMorningPages();
      cy.get("[data-cy=morning-pages-btn]").click();
      cy.wait("@getMorningPages");
    });

    it("is expected to make an API call with headers", () => {
      cy.wait("@getMorningPages")
        .its("request.headers")
        .its("access-token")
        .should("exist");
    });

    it("is expected to display an index of morning pages", () => {
      cy.morningPagesList().should("have.length", 3);
    });

    it("is expected to display the title of the first morning page", () => {
      cy.morningPagesList().first().should("contain.text", "Awesome title");
    });
  });

  describe("unsuccessfully", () => {
    beforeEach(() => {
      cy.intercept("GET", "**/morning_pages", {
        statusCode: 422,
      }).as("getMorningPagesError");
      cy.get("[data-cy=morning-pages-btn]").click();
      cy.wait("@getMorningPagesError");
    });

    it("is expected to render an error message", () => {
      cy.get("[data-cy=toast-container]").should(
        "contain.text",
        "Something went wrong, try again later"
      );
    });
  });
});
