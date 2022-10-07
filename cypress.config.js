const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://uitestingplayground.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  //pageLoadTimeout: 3000
});
