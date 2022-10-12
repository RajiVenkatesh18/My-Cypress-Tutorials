/// <reference types = "cypress"/> 
import { loginPage } from '../../cypress/pages/loginpage'

describe('First Page Object Using Cypress', () => {
    beforeEach(() => {
        loginPage.visit()
    })

    it('Login Using Valid Credentials', () => {
        // cy.get('#userName').type('test')
        // cy.get('#password').type('Test1234*')
        // cy.get('#login').click()
        loginPage.submitLogin('test', 'Test1234*')
        cy.url().should('contain', 'profile')
        cy.get("div[class='main-header']").should('have.text', 'Profile')
        cy.get('#userName-value').should('have.text', 'test')
    })

    it('Login Using Invalid Credentials', () => {
        // cy.get('#userName').type('wrongUser')
        // cy.get('#password').type('wrongPassword')
        // cy.get('#login').click()
        loginPage.submitLogin('wrongUser', 'WrongPassword')
        cy.url().should('not.contain', 'Profile')
        cy.get("#name").should('have.text', 'Invalid username or password!')
        cy.get("div[class='main-header']").should('have.text', 'Login')
    })
})