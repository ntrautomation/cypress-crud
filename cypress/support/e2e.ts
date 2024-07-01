// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';
import "cypress-localstorage-commands";

beforeEach(() => {
    //cy.log(`:::::::::: GLOBAL BEFORE EACH HOOK :::::::::: `);
    //ADDING THIS TO BYPASS UNCAUGHT EXCEPTIONS ON SOME WEBSITES
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
});

after(() => {
    cy.log(`:::::::::: GLOBAL AFTER HOOK :::::::::: `);
    cy.clearCookies();
    cy.getCookies().then((cookies) => {
        expect(cookies).to.have.length(0);
    })
});

/**
 * Disable Fetch and XHR Logs
 */

const app = window.top;
if (!app.document.head.querySelector("[data-hide-command-log-request]")){
    const style = app.document.createElement("style");
    style.innerHTML = ".command-name-request, .command-name-xhr {display: none}";
    style.setAttribute("data-hide-command-log-request", "");
    app.document.head.appendChild(style);
}