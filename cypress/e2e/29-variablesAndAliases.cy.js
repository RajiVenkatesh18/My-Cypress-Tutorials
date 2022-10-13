/// <reference types = 'cypress'/> 

let newVariable = "test"

describe('Aliases and Variables Demo', () => {
    beforeEach(() => {
        cy.visit(`dynamicID`)
    })

    it('find variable text', () => {
        cy.contains('button', "Button with Dynamic ID")
            .invoke('text')
            .then((buttontext) => {
                cy.log(buttontext)
                const myVariable = buttontext
                cy.wrap(myVariable).as("textFromContains")
                cy.log(myVariable)
            })


        // cy.log(newVariable)
        cy.get("@textFromContains").then((buttontext) => {
            cy.log("Text from outside closure/contains block:" + buttontext)
        })

    })

    it('sharing context using aliases', function () {
        // cy.log(newVariable)

        const fromanotherBlock = this.textFromContains
        cy.log(fromanotherBlock)
    })



})