describe.skip('UI Scenarios', () => {
    beforeEach(() => {

        cy.visit('/click')
    })
    it('class assertions', () => {
        cy.get('#badButton').click().should('have.class', 'btn btn-success')


    })

    it('background color', () => {
        cy.get('#badButton').click().should('have.css', 'background-color', 'rgb(40, 167, 69)')

    })


})
describe.skip('Hover Challenge', () => {
    beforeEach(() => {
        cy.visit('/mouseover')
    })
    it('hover with cypress workaround', () => {

        cy.get('.text-primary').trigger('mouseover')
    })
    it('hover with realHover plugin', () => {

        cy.get('.text-primary').realHover()
    })
})
