///<reference types = "cypress"/>

describe('Adding Text Inside Frames', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env("theInternet")}/iframe`)
    })
    it("Demo Enter text in Iframes", () => {
        cy.get("#mce_0_ifr").then(($iframe) => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).find('p').type('{selectAll}{del} This is my sample text inside the frame')
        })
    })

})