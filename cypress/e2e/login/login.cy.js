/// <reference types="cypress" />

context('Acessara página de login do Saucedemo', () => {
    beforeEach(() => {
        cy.visit('https://saucedemo.com/')
    })

    it('Login válido', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        // cy.get('.title').should('contain', 'Products')
        cy.get('.app_logo').should('contain', 'Swag')
    })

})