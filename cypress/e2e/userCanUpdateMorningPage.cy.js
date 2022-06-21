describe("When user updates a morning page", () => {
  beforeEach(() => {
    cy.userVisit();
    cy.visitMorningPages();
    cy.intercept("GET", "**/morning_pages/1", {
      fixture: "morningPageShow.json",
    }).as("getMorningPage");
    cy.get("[data-cy=morning-page]").first().click();
  });

  it("is expected to render an update button", () => {
    cy.get("[data-cy=update-btn]").should("be.visible");
  });

  describe("successfully", () => {
    beforeEach(() => {
      cy.intercept("PUT", "**/morning_pages/1", {
        fixture: "morningPageUpdate.json",
      }).as("morningPageUpdate");
      cy.get("[data-cy=update-btn]").click();
      cy.get("[data-cy=morning-page-title-input]").type(
        "This is the updated title"
      );
      cy.get("[data-cy=morning-page-body-input]").type(
        "this is the updated body"
      );
      cy.get("[data-cy=morning-page-submit-btn]").click();
    });

    it("is expected to make an API call when clicked", () => {
      cy.wait("@morningPageUpdate").its("request.method").should("eql", "PUT");
    });

    it("is expected to alert the customer the page was update", () => {
      cy.get("[data-cy=toast-container]").should(
        "contain.text",
        "This is the updated title has been updated"
      );
    });

    it("is expected to return to the morning page show url", () => {
      cy.url().should("eq", "http://localhost:3000/morning_pages/1");
    });

    it("is expected to display the newly edited morning page", () => {
      cy.get("[data-cy=morning-page-body]").should(
        "contain.text",
        "this is the updated body"
      );
    });
  });

  describe("unscuccessfully", () => {
    beforeEach(() => {
      cy.intercept("PUT", "**/morning_pages/1", { statusCode: 404 });
      cy.get("[data-cy=update-btn]").click();
      cy.get("[data-cy=morning-page-title-input]").type(
        "This is the updated title"
      );
      cy.get("[data-cy=morning-page-body-input]").type(
        "this is the updated body"
      );
      cy.get("[data-cy=morning-page-submit-btn]").click();
    });

    it("is expected to render an error message", () => {
      cy.get("[data-cy=toast-container]").should(
        "contain.text",
        "Something went wrong, try again later"
      );
    });
  });
});
