

describe('basics', () => {
    beforeEach(() => {
        cy.visit('/textinput')
    })
    it('visit explanation text input', () => {
        cy.url().then((url) => {
            cy.log(`Printing the url: ${url}`)
            expect(url).to.contains('/textinput')
        })
    })
    it('title validation', () => {
        cy.title().then((title) => {
            cy.log(title)
            expect(title).to.be.equal('Text Input')
        })
    })
    it('validateButtontext', () => {
        cy.get('#newButtonName').type('testingButtonText')
        cy.get('#updatingButton').click()
            .should('have.text', 'testingButtonText')
    })
})


