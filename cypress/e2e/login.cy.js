
describe('Hub de Leitura', () => {
  it('deve abrir a página inicial com sucesso', () => {
    cy.visit('http://localhost:3000/index.html');

    cy.url().should('include', '/index.html');
    cy.get('body').should('be.visible');
  });
});

describe('Hub de Leitura', () => {
  it('deve abrir a página inicial com sucesso', () => {
    cy.visit('http://localhost:3000/index.html');

    cy.url().should('include', '/index.html');
    cy.get('body').should('be.visible');
  });

  it('deve exibir os botões principais', () => {
    cy.visit('http://localhost:3000/index.html');

    cy.contains('Explorar Catálogo').should('be.visible');
    cy.contains('Criar Conta Grátis').should('be.visible');
  });
});

  it('deve acessar o catálogo ao clicar em Explorar Catálogo', () => {
    cy.visit('http://localhost:3000/index.html');

    cy.contains('Explorar Catálogo').click();

    cy.url().should('include', '/catalog.html');
    cy.get('input[placeholder*="Buscar por título"]').should('be.visible');
    
  });
