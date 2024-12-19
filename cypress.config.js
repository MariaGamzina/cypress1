const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {    
    "baseUrl": "http://localhost:3000/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

      viewportWidth: 1000,
      viewportHeight: 660,  

  
});
