const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config);
      return config;
    },
    baseUrl: "http://localhost:3000",
    chromeWebSecurity: false,
    video: false,
    excludeSpecPattern: process.env.CI ? ["cypress/e2e/all.cy.js"] : [],
  },
});
