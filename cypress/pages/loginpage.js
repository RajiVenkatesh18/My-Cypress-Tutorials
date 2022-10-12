class Login {

    username = "#userName"
    password = "#password"
    login_button = "#login"
    invalidLoginMessage = "#name"

    submitLogin(username, password) {
        cy.get(this.username).type(username)
        cy.get(this.password).type(password)
        cy.get(this.login_button).click()

    }
    visit() {
        cy.visit(`${Cypress.env('demoQA')}/login`)
    }

}
export const loginPage = new Login()