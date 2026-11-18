
describe('Hub de Leitura', () => {
  it('deve abrir a página inicial com sucesso', () => {
    cy.visit('/');

    cy.location('pathname').should('eq', '/');
    cy.get('body').should('be.visible');
  });
});

describe('Hub de Leitura', () => {
  it('deve abrir a página inicial com sucesso', () => {
    cy.visit('/');

    cy.url().should('include', 'localhost:3000');
    cy.get('body').should('be.visible');
  });

  it('deve exibir os botões principais', () => {
    cy.visit('/');

    cy.contains('Explorar Catálogo').should('be.visible');
    cy.contains('Criar Conta Grátis').should('be.visible');
  });
});

  it('deve acessar o catálogo ao clicar em Explorar Catálogo', () => {
    cy.visit('/');


    cy.contains('Explorar Catálogo').click();

    cy.url().should('include', '/catalog.html');
    cy.get('input[placeholder*="Buscar por título"]').should('be.visible');

  });
