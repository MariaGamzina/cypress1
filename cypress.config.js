const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {    
    "baseUrl": "http://localhost:3000/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    laptop: {
      viewportWidth: 1000,
      viewportHeight: 660,
    },
    phone: {
      viewportWidth: 1080,
      viewportHeight: 1920,
    },
  }

  
});
