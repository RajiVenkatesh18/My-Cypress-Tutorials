
Cypress.config('defaultCommandTimeout', 16000)
describe('Client Delay Retry ability', () => {
    beforeEach(() => {

        cy.visit('/clientdelay')

    })
    it('checking visibility of element after button click', () => {
        cy.log('Client Delay Page')
        cy.get('#ajaxButton').click()
        cy.get('.bg-success')
            .should('have.text', 'Data calculated on the client side.')

    })
    it.only('progress bar after clicking a button', () => {
        cy.visit('/progressbar')
        cy.get('#startButton').click()
        cy.get('#progressBar', { timeout: 30000 })
            .should('have.text', '100%')

    })
})