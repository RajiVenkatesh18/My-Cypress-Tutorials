/// <reference types ='cypress'/>


describe.skip('Hidden Checkbox Display', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/checkbox`)
    })
    it('Checkbox scenario', () => {
        cy.get(`input[type='checkbox']`).click({ force: true })
        cy.get('#result')
            .should('contain.text', 'You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile')
    })
})
describe.only('CheckingBox Select Practice', () => {

    it('checkbox selection', () => {
        cy.visit(`${Cypress.env('theInternet')}/checkboxes`)
        cy.get('form#checkboxes input').eq(0).click().should('be.checked')


    })
})