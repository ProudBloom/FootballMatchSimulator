describe('Simulation tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  test('Simulation uninterrupted test', () => {
    cy.get('[data-testid="startSimulationButton"]').should('be.visible');
    cy.get('[data-testid="totalGoalsElement"]').should('have.value', '0');

    cy.get('[data-testid="startSimulationButton"]').click();
    cy.get('[data-testid="endSimulationButton"]').should('be.visible');

    cy.wait(90000);

    cy.get('[data-testid="restartSimulationButton"]').should('be.visible');
    cy.get('[data-testid="totalGoalsElement"]').should('have.value', '9');
  });

  test('Simulation interrupted after 45s test', () => {
    cy.get('[data-testid="startSimulationButton"]').should('be.visible');
    cy.get('[data-testid="totalGoalsElement"]').should('have.value', '0');

    cy.get('[data-testid="startSimulationButton"]').click();
    cy.get('[data-testid="endSimulationButton"]').should('be.visible');

    cy.wait(45000);
    cy.get('[data-testid="endSimulationButton"]').click();

    cy.get('[data-testid="restartSimulationButton"]').should('be.visible');
    cy.get('[data-testid="totalGoalsElement"]').should('have.value', '4');
  });

  test('Monitor goals scored every 10 seconds', () => {
    cy.get('[data-testid="totalGoalsElement"]').should('have.value', '0');

    for (let i = 0; i < 9; i++) {
      cy.wait(1000);
      cy.get('[data-testid="totalGoalsElement"]').should('have.value', i);
    }
  });
});
