describe('Hidden Checkbox Display', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/checkbox`)
    })
    it('Checkbox scenario', () => {
        cy.get(`input[type='checkbox']`).click({ force: true })
    })

})