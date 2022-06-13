describe("User can visit application", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("is expected to display hello world", () => {
    cy.get("body").should("contain.text", "Hello World");
  });
});
