describe('User Registration', () => {
  it('should allow a user to register', () => {
    cy.visit('/register');
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.contains('Welcome, testuser').should('be.visible');
  });
});

