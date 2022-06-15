describe("When user navigates to their Morning Pages", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/themes", { fixture: "themesResponse.json" });
    cy.visit("/");
    cy.window()
      .its("store")
      .invoke("dispatch", { type: "auth/setCurrentUser", payload: true });
  });

  describe("successfully", () => {
    beforeEach(() => {
      cy.intercept("GET", "**/morning_pages", {
        fixture: "morningPagesIndex.json",
      }).as("getMorningPages");
      cy.get("[data-cy=morning-pages-btn]").click();
    });

    it("is expected to store the current user status in application state", () => {
      cy.window()
        .its("store")
        .invoke("getState")
        .its("auth")
        .its("currentUser")
        .should("eq", true);
    });

    it("is expected to display an index of morning pages", () => {
      cy.wait("@getMorningPages");
      cy.get("[data-cy=morning-pages-list]")
        .children()
        .should("have.length", 3);
    });
  });
  describe("unsuccessfully", () => {
    beforeEach(() => {
      cy.intercept("GET", "**/morning_pages", {
        statusCode: 422,
      });
      cy.get("[data-cy=morning-pages-btn]").click();
    });

    it("is expected to render an error message", () => {
      cy.get("[data-cy=toast-container]").should(
        "contain.text",
        "Something went wrong, try again later"
      );
    });
  });
});
