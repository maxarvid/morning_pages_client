describe("When user creates a new morning page", () => {
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
    cy.wait("@getMorningPages");
  });

  describe("successfully", () => {
    beforeEach(() => {
      cy.intercept("POST", "**/morning_pages/**", {
        fixture: "morningPageCreate.json",
      }).as("morningPageCreate");
      cy.get("[data-cy=morning-page-new-btn]").click();
      cy.get("[data-cy=morning-page-title-input]").type("This is the title");
      cy.get("[data-cy=morning-page-body-input]").type("this is the body");
      cy.get("[data-cy=morning-page-submit-btn]").click();
    });

    it("is expected to make an API call", () => {
      cy.wait("@morningPageCreate").its("request.method").should("eql", "POST");
    });

    it("is expected to respond with a message", () => {
      cy.get("[data-cy=morning-page-toast]").should(
        "containt.text",
        "Your morning page was saved!"
      );
    });
  });
});
