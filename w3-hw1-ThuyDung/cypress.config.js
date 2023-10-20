module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://demoqa.com",
    env: {
      form: "/automation-practice-form",
      login: "/login",
      book: "/books",
      profile: "/profile",
    },
  },
};


