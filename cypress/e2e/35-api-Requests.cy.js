///<reference types ="cypress"/>

describe('API testing Using Cypress', () => {

    it('Using Get Requests', () => {
        cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1/comments").then((response) => {
            cy.log("response", response)
        })

    })

    it("POST request", () => {
        cy.request("POST", "https://jsonplaceholder.typicode.com/posts/", {
            title: "samplePostRequest",
            body: "This is a post request.",
            userId: 106
        })

    })

    it("PUT request to update", () => {
        cy.request("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
            id: 106,
            title: "Updated Sample Request",
            body: "This is an update.",
            userId: 106
        }).then((response) => {
            cy.log("response", response)
        })
    })

    it("Delete Request", () => {
        cy.request("DELETE", "https://jsonplaceholder.typicode.com/posts/1", {

        }).then((response) => {
            cy.log("response", response)
        })
    })








})