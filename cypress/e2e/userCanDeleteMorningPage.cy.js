describe("When user deletes a morning page", () => {
  beforeEach(() => {
    cy.userVisit();
    cy.visitMorningPages();
    cy.intercept("GET", "**/morning_pages/1", {
      fixture: "morningPageShow.json",
    }).as("getMorningPage");
    cy.get("[data-cy=morning-page]").first().click();
  });

  it("is expected to display a delete button", () => {
    cy.get("[data-cy=delete-btn]").should("be.visible");
  });

  describe("successfully", () => {
    beforeEach(() => {
      cy.intercept("DELETE", "**/morning_pages/1", {
        fixture: "morningPageDelete.json",
      }).as("morningPageDelete");
      cy.get("[data-cy=delete-btn]").click();
    });

    it("is expected to make an API call when clicked", () => {
      cy.wait("@morningPageDelete")
        .its("request.method")
        .should("eql", "DELETE");
    });

    it("is expected to alert the customer the page was deleted", () => {
      cy.get("[data-cy=toast-container]").should(
        "contain.text",
        "This is the title has been deleted"
      );
    });
  });

  describe("unsuccessfully", () => {
    beforeEach(() => {
      cy.intercept("DELETE", "**/morning_pages/1", { statusCode: 404 });
      cy.get("[data-cy=delete-btn]").click();
    });

    it("is expected to render an error message", () => {
      cy.get("[data-cy=toast-container]").should(
        "contain.text",
        "Something went wrong, try again later"
      );
    });
  });
});
