const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "r6t43g",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
