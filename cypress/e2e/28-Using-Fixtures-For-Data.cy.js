/// <reference types ='cypress'/> 

describe('Fixtures TestSuite', () => {

    before(function () {
        cy.fixture('data').then(function (data) {
            this.data = data
            cy.log('DATA:', data)

        })
    })
    it('Fixtures DemoTest', function () {
        cy.visit(`${Cypress.env('demoQA')}/login`)
        cy.get("#userName").type(this.data.username)
        cy.get("#password").type(this.data.password)
        cy.get("#login").click()


    })


})