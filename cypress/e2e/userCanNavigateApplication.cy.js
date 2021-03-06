describe("When navigating the application", () => {
  describe("as an authenticated user", () => {
    beforeEach(() => {
      cy.interceptValidateToken();
      cy.interceptThemes();
      cy.visitApplicationWithToken();
      cy.wait("@getThemes");
      cy.setUserInApplicationState();
    });

    it("is expected to have a currentUser in application state", () => {
      cy.window()
        .its("store")
        .invoke("getState")
        .its("auth.currentUser")
        .should("include", { name: "user", email: "user@email.com" });
    });

    it("is expected to display a navbar with link to create a new morning page", () => {
      cy.get("[data-cy=morning-page-new-btn]").should("be.visible");
    });

    describe('following the "create morning page" link', () => {
      beforeEach(() => {
        cy.interceptMorningPages();
        cy.get("[data-cy=morning-page-new-btn]").click();
      });

      it("is expected to display a create morning page form", () => {
        cy.get("[data-cy=morning-page-form]").should("be.visible");
      });

      it("is expected to direct user to a new url when clicked", () => {
        cy.url().should("include", "/morning_pages/create");
      });
    });
  });

  describe("as a visitor", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("is expected NOT to display a link to create a new morning page", () => {
      cy.get("[data-cy=morning-page-new-btn]").should("not.be.exist");
    });

    it("is expected to redirect user to login screen", () => {
      cy.url().should("include", "/login");
    });

    it("is expected to redirect visitor to login screen when trying to navigate to create a new morning page", () => {
      cy.visit("morning_pages/create");
      cy.get("[data-cy=login-email]").should("be.visible");
    });

    it("is expected to render a message prompting visitor to login or create account", () => {
      cy.get("[data-cy=toast-container]").should(
        "contain.text",
        "Please login or create an account"
      );
    });
  });
});
