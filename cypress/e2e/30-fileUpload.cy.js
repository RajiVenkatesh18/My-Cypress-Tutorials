///<reference types = "cypress"/> 

describe("Uploading a File in Cypress", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/upload-download`)


    })
    it("Demo Upload a File", () => {

        cy.get('input#uploadFile').attachFile('Biscuit.jpg').click()
        cy.get('#uploadedFilePath').should('contain', 'Biscuit.jpg')
    })




})