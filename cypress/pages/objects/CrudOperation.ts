import { API_REQUEST } from "../enums/RequestTypes";
import { Const, TEST_USER } from "./Constants";

class CrudOperation implements IUserLogin{
  
    createUser(){
        return cy.request(API_REQUEST.POST, Cypress.env('USER_ENDPOINT'), TEST_USER)
          .then((res) => {
            return res.body;
          });
    };
    
    getAuthorizationToken(){
      const LOGIN_USER: IRandomUser = {
        userName : TEST_USER.userName,
        password : TEST_USER.password
      }
      return cy.request(API_REQUEST.POST, Cypress.env('TOKEN_ENDPOINT'), LOGIN_USER)
        .then((res) => {
          return res.body
        })
    };

    getUserInformation(token, userID){
      const Authorization: string = `Bearer ${token}`;
      return cy.request(Const.getOptions(userID, Authorization))
        .then((res) => {
          return res.body
        })
    };

    deleteUser(token, userID){
      const Authorization: string = `Bearer ${token}`;
      return cy.request(Const.deleteOptions(userID, Authorization))
        .then((res) => {
          return res
        })
    };
}

export const CRUD = new CrudOperation();