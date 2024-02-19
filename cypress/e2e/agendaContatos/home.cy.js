/// <reference types="cypress" />
describe('Testes para pagina inicial', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it("testando a inclusão de um contato", () => {
        cy.get('input[placeholder="Nome"] ').type('Nome qualquer')
        cy.get('[type="email"]').type('emailqualquer@gmail.com')
        cy.get('input[placeholder="Telefone"]').type('8197856425')
        
        cy.get('.adicionar').click()
        cy.get('.sc-iAEyYk > div').should('have.length', 5)
    })
    it('testando deletar', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
        cy.get('.sc-iAEyYk > div').should('have.length', 4)
    })
    it('Testando edição', () => {
        cy.get(':nth-child(3) > .sc-gueYoa > .edit').click()
        // cy.get('input[placeholder="Nome"] ').type('Nome qualquer')
        // cy.get('[type="email"]').type('emailqualquer@gmail.com')
        // cy.get('input[placeholder="Telefone"]').type('8197856425')
        cy.get('.alterar').click()
    })
})