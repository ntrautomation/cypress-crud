import { API_REQUEST } from "../enums/RequestTypes";
import { Const, TEST_USER } from "./Constants";

let Authorization: string = `NO TOKEN GENERATED!`;
class CrudOperation implements IUserLogin, IBooks{
  
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
      Authorization = `Bearer ${token}`;
      return cy.request(Const.getOptions(userID, Authorization))
        .then((res) => {
          return res.body
        })
    };

    deleteUser(token, userID){
      Authorization = `Bearer ${token}`;
      return cy.request(Const.deleteOptions(userID, Authorization))
        .then((res) => {
          return res
        })
    };

    addBooksToUser(isbn, token, userID){
      Authorization = `Bearer ${token}`;
      return cy.request(Const.addBookOptions(userID, Authorization, isbn))
        .then((res) => {
          return res
        })
    }

    updateUserBook(isbn: string, isbnNew: string, userID: string, token: string) {
      Authorization = `Bearer ${token}`;
      return cy.request(Const.updateBookOptions(isbn, isbnNew, userID, Authorization))
        .then((res) => {
          return res;
        })
    }
      
}
  
export const CRUD = new CrudOperation();