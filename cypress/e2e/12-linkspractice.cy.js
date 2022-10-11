///<reference types = 'cypress'/> 

describe.skip('Access links Using Cypress', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/links`)
    })
    it('First step without clicking the link', () => {
        cy.get('#simpleLink')
            .should('have.attr', 'href', 'https://demoqa.com')
        cy.get('#simpleLink')
            .should('have.attr', 'target', '_blank')

    })
    it('Second Method By Removing an Attribute', () => {
        cy.get('#simpleLink').invoke('removeAttr', 'target').click()
        cy.url().then((url) => {
            expect(url).to.be.equal('https://demoqa.com/')
        })

    })


})
describe.only('Intercepting API(spying)', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/links`)
        cy.intercept('GET', `${Cypress.env('demoQA')}/created`).as('linkStatus')
    })
    it('First step without clicking the link', () => {
        cy.get('a#created').click()
        cy.wait('@linkStatus').then((request) => {
            cy.log('This is the request intercepted', request)
            expect(request.response.statusCode).to.be.equal(201)
            expect(request.response.statusMessage).to.be.equal('Created')
        })


    })

})


