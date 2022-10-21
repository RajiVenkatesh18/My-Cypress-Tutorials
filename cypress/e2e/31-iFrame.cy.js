
describe('iFrame Demo', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/nestedframes`)

    })

    it('Accessing nested frames in Cypress', () => {
        cy.get('#frame1').then(function ($iframe) {
            const body = $iframe.contents().find("body")
            cy.wrap(body).should("have.text", "Parent frame")
            cy.wrap(body).find('iframe').then(function ($childFrame) {
                const childBody = $childFrame.contents().find("body")
                cy.wrap(childBody).find('p')
                    .should('have.text', 'Child Iframe')
            })

        })

    })

})