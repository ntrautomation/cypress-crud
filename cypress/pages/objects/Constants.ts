import { method } from "cypress/types/lodash";
import { API_REQUEST } from "../enums/RequestTypes";

const { faker } = require(`@faker-js/faker`);

/**
 *  FAKER DOCUMENTATION -> https://fakerjs.dev/api/
 */


export const TEST_USER: IRandomUser = {
    
    userName: faker.internet.userName(),
    password: faker.internet.password(
        {
            length: 15, 
            memorable: false, 
            pattern: /^[a-zA-Z0-9!@#$&()\\-`.+,/\"]*$/,
            prefix: "9$"
        })
}


class Constants {
    getOptions(userID: string, Authorization){
        const options: IRequestOptions = {
            method: API_REQUEST.GET,
            failOnStatusCode: false,
            url: Cypress.env('USER_ENDPOINT') + userID,
            headers: {
              Authorization,
            }
        }
        return options;
    }

    deleteOptions(userID: string, Authorization){
        const options: IRequestOptions = {
            method: API_REQUEST.DELETE,
            url: Cypress.env('USER_ENDPOINT') + userID,
            headers: {
              Authorization,
            }
        }
        return options;
    }

    addBookOptions(userID: string, Authorization, isbn: string){
        const options: IRequestOptions = {
            method: API_REQUEST.POST,
            url: Cypress.env('BOOKS_ENDPOINT'),
            body: {
                userId : userID,
                collectionOfIsbns: [{
                    isbn : isbn
                }]
            },
            headers: {
                Authorization
            }
        }
        return options;
    }

    updateBookOptions(isbn: string, isbnNew: string, userID: string, Authorization){
        const options: IRequestOptions = {
            method: API_REQUEST.PUT,
            url: `${Cypress.env('BOOKS_ENDPOINT')}/${isbn}`,
            body: {
                userId: userID,
                isbn: isbnNew
            },
            headers: {
                Authorization
            }
        }
        return options;
    }

    deleteBookOptions(isbn: string, token: string, userID: string, Authorization){
        const options = {
            method: API_REQUEST.DELETE,
            url: Cypress.env('BOOK_ENDPOINT'),
            body: {
                isbn: isbn,
                userId: userID
            },
            headers: {
                Authorization
            }
        }
        return options;
    }

    loginUserOptions(){
        const options = {
            method: API_REQUEST.POST,  
            url : Cypress.env('LOGIN_ENDPOINT'), 
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                userName: Cypress.env('USER_NAME'), 
                password: Cypress.env('PASSWORD')
            }
        }
        return options;
    }
}

export const Const = new Constants();