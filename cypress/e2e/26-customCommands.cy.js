/// <reference types ='cypress'/>
//import '../cypress/support/commands'

describe('First Page Object Using Cypress', () => {
    // beforeEach(() => {
    //     cy.visit(`${Cypress.env('demoQA')}/login`)
    // })

    it('Login Using Valid Credentials', () => {

        cy.checklogin('test1', 'Test1234*')
        cy.url().should('contain', 'profile')
        cy.get("div[class='main-header']").should('have.text', 'Profile')
        cy.get('#userName-value').should('have.text', 'test')
    })

    it('Login Using Invalid Credentials', () => {
        cy.checklogin('wrongUser', 'WrongPassword')

        cy.url().should('not.contain', 'profile')
        cy.get("#name").should('have.text', 'Invalid username or password!')
        cy.get("div[class='main-header']").should('have.text', 'Login')
    })
})