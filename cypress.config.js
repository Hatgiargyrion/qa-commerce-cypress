const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true  
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",

    setupNodeEvents: async (on, config) => {
      const env = config.env || {};

      const ambiente = env.ambiente || "QA";
      const site = env.site || "";

      if (env.urls && env.urls[ambiente]) {
        config.baseUrl = env.urls[ambiente];
        console.log("BaseUrl configurada para:", config.baseUrl);
      } else {
        console.warn(`URL do ambiente "${ambiente}" não encontrada. Usando padrão.`);
      }

      config.env.TAGS = env.tags || "";

      config.env.stepDefinitions = "cypress/e2e/**/steps/**/*.{js,ts}";

      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
