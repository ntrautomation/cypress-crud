<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=cypress,typescript" />
  </a>
</p>

[![](https://img.shields.io/badge/cypress_crud_api-grey?style=for-the-badge)](https://www.cypress.io/)

CRUD API testing example with Cypress and Typescript

![cypress](https://img.shields.io/badge/Cypress-13.10.0-brightgreen) ![ts](https://img.shields.io/badge/TS-5.4.5-blue) ![faker](https://img.shields.io/badge/Faker-8.4.1-lightgrey) ![mochawesome](https://img.shields.io/badge/Mochawesome-3.8.2-red)

[![](https://img.shields.io/badge/PROJECT_SETUP-grey?style=for-the-badge)](https://www.cypress.io/)
- clone the repo
- open the project and in terminal run `npm i`
- `npm run runner` in terminal to run Cypress test app
- `cypress.env.json` is excluded from commits -> in the root folder `touch cypress.env.json` to create one


[![](https://img.shields.io/badge/how_to_setup_a_new_cypress_project-grey?style=for-the-badge)](https://www.cypress.io/)

> [!NOTE]  
>This project does not need the following steps. This is just a quick how-to-guide when you are starting a new project from scratch.
- Open your terminal where your project is located
- run `npm init` - follow and and answer the questionary.
    - most of the answers will remain default
    - `package.json` file will be created at the end
- run `npm install --save-dev typescript` 
    - it will install latest version of typescript, for older version use
        `npm install --save-dev typescript@<version_number>`
        example : `npm install --save-dev typescript@1.7.5`
    - typescript is added as devDependency in your package.json
- run `npm install --save-dev cypress`
    - it will install the latest version of cypres
        - for older versions follow the instructions above given in the Typescript section
    - cypress is added as devDependency in your package.json
- run `npm run test` - as this is the default script command that will be set under your package.json
    - it will open the Cypress configuration
    - click on E2E testing, configuration files will be created and cypress folder in your project
    - click on Continue
    - choose your browser, and click on `Start E2E Testing in <browser_name>`
- to Kill the cypress session use command/control + C on your keyboard depending on your OS.
- add `tsconfig.json` inside your `/cypress` folder
    - from the root folder in your terminal type:
        - `cd cypress`
        - `touch tsconfig.json`
    - this will create the file. Paste the following:

        ```
        {
        "compilerOptions": {
            "target": "es5",
            "lib": ["es5", "dom"],
            "types": ["cypress", "node"]
        },
        "include": ["**/*.ts"]
        }
        ```
- to get back to the root folder type: `cd ..`

> [!TIP]
>To avoid clicking the CY configuration after your run `npm cypress open` under your `package.json` add the following command:
   
```
    "scripts" : {
       "runner" : "cypress open --e2e --browser chrome"
    }
```
