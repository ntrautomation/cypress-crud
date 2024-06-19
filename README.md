# cypress-crud
crud api testing example with cypress and typescript

### Project setup
- clone the repo
- open the project and in terminal run `npm i`


### How to setup a Cypress project with TS
___NOTE!__ This project does not need the following steps. This is just a quick how-to-guide when you are starting a new project from scratch._
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

___TIP!___
- To avoid clicking the CY configuration after your run `npm cypress open` under your package.json -> "scripts" add the following command:
    - <code>"scripts" : {
        "runner" : "cypress open --e2e --browser chrome"
    }</code>