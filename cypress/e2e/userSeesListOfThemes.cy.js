describe("When user visits application", () => {
  describe("successfully", () => {
    beforeEach(() => {
      cy.userVisit();
      cy.wait("@getThemes");
    });

    it("is expected to display a list of themes", () => {
      cy.themesList().should("have.length", 12);
    });

    it("is expected to display the first theme name", () => {
      cy.themesList().first().should("contain.text", "A Sense of Safety");
    });
  });

  describe("unsuccessfully", () => {
    beforeEach(() => {
      cy.intercept("GET", "**/themes", { statusCode: 422 });
      cy.visit("/");
      cy.window()
        .its("store")
        .invoke("dispatch", { type: "auth/setCurrentUser", payload: true });
    });

    it("is expected to render an error message", () => {
      cy.get("[data-cy=toast-container]").should(
        "contain.text",
        "Something went wrong, try again later"
      );
    });
  });
});
