import { CRUD } from "../pages/backend/CrudOperation";
import { Login } from "../pages/objects/LoginPage";

let booksURL = Cypress.env('BOOKS');
let user = Cypress.env('USER_NAME')

describe('Login Programmatically', () => {

    beforeEach(() => {
      CRUD.loginUser();
    })
  
    it('Login Programmatically', () => {
      cy.visit(booksURL)
      Login.validateText(Login.loggedUser, user)
    });

   
  });