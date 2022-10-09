
describe('Viewport Demo for Devices', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('Angular')}/angularjs-protractor-practice-site`)  // using env variable as a template literal and path you want instead of using the baseUrl
    })
    it('device name', () => {
        cy.viewport('iphone-6')
        cy.get('#mobile_menu_toggler').should('be.visible')

    })
    it('specific viewport', () => {
        cy.viewport(500, 600)
        cy.get('#mobile_menu_toggler').should('be.visible')

    })



})