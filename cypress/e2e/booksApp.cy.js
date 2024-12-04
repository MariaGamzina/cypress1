before(() => {
  //Cypress.env('laptop');
  //Cypress.env('phone');
});

describe('first', () => {
  beforeEach(() => {
    
    cy.visit('/');
  });
  
  it('Page should be visible', () => {    
    cy.get('.text-light.navbar-brand').should('be.visible');
  });

  
  it('Should not login with empty login', () => {       
    cy.login(' ', 'test');
    cy.get('#mail').then($el => $el[0].checkValidity()).should('be.false');
  });

  it('Should not login with empty password', () => {       
    cy.get('.text-light.navbar-brand').should('be.visible');
    cy.get('.ml-auto > .ml-2').click();
    cy.get('#mail').type('test@test.com');
    cy.contains('Submit').click();
    cy.get('#pass').then($el => $el[0].checkValidity()).should('be.false');
  });

});

describe('second', () => {

  beforeEach(() => {    
    cy.visit('/');
    cy.login('test@test.com', 'test');
  });
  
 
  it('Should successfully login', () => {    
    cy.contains('Добро пожаловать test@test.com').should('be.visible');
  });

    
  it('Add book', () => {       
    cy.contains('Add new').click();
    cy.get('#title').type('Сказки');
    cy.get('#description').type('Детские сказки');
    cy.get('#authors').type('Русские народные сказки');
    cy.get('#favorite').click();
    cy.contains('Submit').click();
    cy.contains('Сказки').should('be.visible');
  });

  it('Add book to favorites', () => {    
    cy.get('a.mt-3 .card-title').contains('Мастер и Маргарита').parent().parent().contains('Add to favorite').click();
    cy.get('h4').click();
    cy.get('a.mt-3 .card-title').contains('Мастер и Маргарита').parent().parent().contains('Delete from favorite').should('be.visible');
    
  });

  it('Delete book from favorites', () => { 
    cy.get('h4').click();
    cy.get('a.mt-3 .card-title').contains('Мастер и Маргарита').parent().parent().contains('Delete from favorite').click();
    cy.get('.text-light.navbar-brand').click();
    cy.get('a.mt-3 .card-title').contains('Мастер и Маргарита').parent().parent().contains('Add to favorite').should('be.visible');
        
  });


})