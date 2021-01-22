describe("User-Onboarding", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("input fields working", () => {
    cy.get("#nameInput").type("Polly").should("have.value", "Polly");
    cy.get("#emailInput").type("polly@email.com");
    cy.get("#passwordInput").type("abCd123456!");
    cy.get("#checkbox1").check();
    cy.get(".btn").click();
  });
});
