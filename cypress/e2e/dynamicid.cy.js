




describe('locators', () => {
    beforeEach(function () {
        cy.visit('/dynamicid')
    })
    it('cy.contains example', () => {

        cy.contains('Button with Dynamic ID')
    })

    it('get and find example', () => {
        cy.get('div').find('button')
            .should('have.text', 'Button with Dynamic ID')


    })
    it('css selector using an attribute', () => {

        cy.get(`button[class='btn btn-primary']`)
            .should('have.text', 'Button with Dynamic ID')

    })

})

