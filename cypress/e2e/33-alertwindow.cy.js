///<reference types = "cypress"/>

describe('Handling Alert Windows', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("theInternet")}/javascript_alerts`)
    })
    it('JS Alert', () => {

        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert', (message) => {
            expect(message).to.be.equal("I am a JS Alert")
        })
        cy.on('window:confirm', () => true)
        cy.get('#result').should('have.text', 'You successfully clicked an alert')


    })

    it('JS Confirm-OK', () => {

        cy.get(':nth-child(2) > button').click()
        cy.on('window:confirm', (message) => {
            expect(message).to.be.equal("I am a JS Confirm")
        })
        cy.on('window:confirm', () => true)
        cy.get('#result').should('have.text', 'You clicked: Ok')


    })
    it('JS Confirm-Cancel', () => {

        cy.get(':nth-child(2) > button').click()
        cy.on('window:confirm', (message) => {
            expect(message).to.be.equal("I am a JS Confirm")
        })
        cy.on('window:confirm', () => false)
        cy.get('#result').should('have.text', 'You clicked: Cancel')


    })

    it('JS Prompt', () => {
        cy.window().then((window) => {
            cy.stub(window, "prompt")
                .returns("This is the text from JS Prompt.")
            cy.get("button[onclick='jsPrompt()']").click()


        })
        cy.get('#result').should('have.text', "You entered: This is the text from JS Prompt.")
    })



})

