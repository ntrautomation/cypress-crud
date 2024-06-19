import { defineConfig } from "cypress";
require('dotenv').config();

//FAKER
const { faker } = require(`@faker-js/faker`);

export default defineConfig({
  e2e: {
    //baseUrl: "https://www.uitestingplayground.com/",
    setupNodeEvents(on, config) {

      //localStorage
      require("cypress-localstorage-commands/plugin")(on, config);

      //MOCHAWSOME REPORT
      require('cypress-mochawesome-reporter/plugin')(on);

      //Faker task
      on(`task`, {
        freshUser(){
          let user = {
            userName: faker.name.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            registeredAt: faker.date.past(),
          };
          return user;
        }
      })

    },
    env: {
      ...process.env,
    }
  },
  pageLoadTimeout: 30000,
  viewportHeight:1080,
  viewportWidth: 1920,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Test automation with Cypress',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  "retries" : {
    // Configure retry attempts for `cypress run`
    // Default is 0
    "runMode" : 0,
    // Configure retrun attempts for `cypress open`
    // Default is 0
    "openMode" : 0
  },
  video :  false,
  screenshotOnRunFailure : true
});