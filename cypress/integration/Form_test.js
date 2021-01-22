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

  it("check validation", () => {
    cy.get("#nameInput").type("Polly").clear();
    cy.get(".error-message > :nth-child(1)").should("be.visible");
    cy.get("#emailInput").type("polly@email.com").clear();
    cy.get(".error-message > :nth-child(2)").should("be.visible");
    cy.get("#passwordInput").type("abCd123456!").clear();
    cy.get(".error-message > :nth-child(2)").should("be.visible");
  });
});
