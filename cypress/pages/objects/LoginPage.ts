import { Main } from "./MainPage";

enum LP_ELEM {
    loggedUser = `label#userName-value`,
}
class LoginPage extends Main{

    get loggedUser() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(LP_ELEM.loggedUser);
    }
}

export const Login = new LoginPage();