///<reference types ="cypress"/>

describe('Accordion Functionality', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/accordian`)

    })
    it('Verification of Accordion feature in Cypress', () => {

        cy.get('#section1Heading').click()


        //checking if the second description is hidden
        cy.get('#section2Heading').next().
            should("have.css", "display", "none")
        //checking if the first description is displayed
        cy.get('#section1Heading').next().
            should("have.css", "display", "block")




    })





})