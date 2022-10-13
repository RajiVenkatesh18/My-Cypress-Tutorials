/// <reference types ='cypress'/> 

Cypress.session.clearAllSavedSessions()
describe('Global Hooks and Cookies', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/login`)
    })

    it("Validation of Successful Login Saved", () => {

        cy.contains('#userName-value', 'test')
    })
    it('Validation of Successful Login Saved', () => {
        cy.contains("#userName-value", "test")
    })

    it('Counting the cookies', () => {
        cy.getCookies().then((cookies) => {
            cy.log("Cookies", cookies)
            //expect(cookies).to.have.length(11)

        })
    })

})