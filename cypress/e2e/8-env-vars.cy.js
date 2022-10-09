/// <reference types = "cypress"/>

describe('Using Env Variables', () => {
    it('Sample Env variable', () => {
        cy.log(` Env Variable Value: ${Cypress.env('demoVar')}`)


    })

})