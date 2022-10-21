///<reference types = "cypress"/> 

describe("Downloading a File in Cypress", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/upload-download`)


    })
    it("Demo Download a File", () => {

        cy.get('#downloadButton').click()
        cy.verifyDownload('sampleFile.jpeg')

    })




})