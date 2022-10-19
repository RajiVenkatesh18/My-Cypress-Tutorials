const { defineConfig } = require("cypress");
//import { defineConfig } from 'cypress'

//for file download verification
const { verifyDownloadTasks } = require('cy-verify-downloads');
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'http://uitestingplayground.com',
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {

      //for file download verification
      on('task', verifyDownloadTasks);

      //for mochawesome reporter
      require("cypress-mochawesome-reporter/plugin")(on);

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
  reporterOptions: {
    charts: true,
    reportPageTitle: 'My Cypress Test Suite Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  "retries": {
    // Configure retry attempts for `cypress run`
    // Default is 0
    "runMode": 2,
    // Configure retry attempts for `cypress open`
    // Default is 0
    "openMode": 1
  },
  video: true,
  screenshotOnRunFailure: true,
});
