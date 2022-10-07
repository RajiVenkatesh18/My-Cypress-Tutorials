
describe('Locators using xpath', () => {
    beforeEach(() => {

        cy.visit('/classattr')
    })
    it('Finding elements using text', () => {
        cy.xpath(`//*[text()='Correct variant is']`)
            .should('contain.text', 'Correct variant')

    })

    it('finding element using its attribute', () => {

        cy.xpath(`//pre[@class=' language-html']`)
            .should('contain.text', 'button')
    })

    it('finding element using xpath and css property', () => {
        cy.xpath(`//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]`)
            .should('have.css', 'background-color', 'rgb(0, 123, 255)')
    })

})