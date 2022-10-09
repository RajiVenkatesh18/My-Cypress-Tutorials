const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://uitestingplayground.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      demoVar: 'Testing env variable in Cypress.config.js',
      demoQA: 'https://demoqa.com',
      theInternet: 'https://the-internet.herokuapp.com',
      Angular: 'https://www.globalsqa.com',


    },
  },
  pageLoadTimeout: 60000,
  viewportHeight: 1200,
  viewportWidth: 1400,
});
