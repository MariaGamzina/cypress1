
Cypress.Commands.add('login', (email, password) => {
    cy.get('.text-light.navbar-brand').should('be.visible');
    cy.get('.ml-auto > .ml-2').click();
    cy.get('#mail').type(email);
    cy.get('#pass').type(password);
    cy.contains('Submit').click();
});
