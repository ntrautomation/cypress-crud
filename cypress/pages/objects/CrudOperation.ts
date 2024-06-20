import { API_REQUEST } from "../enums/RequestTypes";
import { TEST_USER } from "./Constants";


const path: string = `cypress/pages/user_data/`

class CrudOperation implements IUserLogin{
    clearFiles(){
      cy.writeFile(`${path}getUserData.json`, '');
      cy.writeFile(`${path}getUserToken.json`, '');
      cy.writeFile(`${path}getLoggedUserInfo.json`, '');
    }
    createUser(){
        cy.request(API_REQUEST.POST, `https://demoqa.com/Account/v1/User/`, TEST_USER)
        .then((res) => {
          cy.log(`userName`, TEST_USER.userName)
          cy.writeFile(`${path}getUserData.json`, '');
          cy.writeFile(`${path}getUserData.json`, res.body);
        });
    };
    
    getAuthorizationToken(userName){
      const LOGIN_USER: IRandomUser = {
        userName : userName,
        password : Cypress.env('password')
      }
      cy.request(API_REQUEST.POST, `https://demoqa.com/Account/v1/GenerateToken`, LOGIN_USER)
      .then((res) => {
        cy.log(LOGIN_USER.userName)
        cy.writeFile(`${path}getUserToken.json`, '');
        cy.writeFile(`${path}getUserToken.json`, res.body);
      })
    };

    getUserInformation(token, userID){
      const Authorization: string = `Bearer ${token}`;
      const options = {
        method: API_REQUEST.GET,
        url: `https://demoqa.com/Account/v1/User/${userID}`,
        headers: {
          Authorization,
        }
      }
      cy.request(options).then((res) => {
        cy.writeFile(`${path}getLoggedUserInfo.json`, '');
        cy.writeFile(`${path}getLoggedUserInfo.json`, res.body);
      })
    };
    deleteUser(){

    };
}

export const CRUD = new CrudOperation();