/// <reference types = 'cypress'/>
describe('DemoQA Click Practice', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/buttons`)
    })
    it('DoubleClickPractice', () => {
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('have.text', 'You have done a double click')
    })
    it('Right Click Practice', () => {
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('have.text', 'You have done a right click')
    })






})