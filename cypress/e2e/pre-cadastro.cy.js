describe('Pré-cadastro - Hub de Leitura', () => {

  it('deve abrir a tela de login', () => {

    cy.visit('/');

    cy.contains('Criar Conta Grátis').click();

    cy.url().should('include', '/login.html');

    cy.contains('Bem-vindo ao').should('be.visible');

  });

});