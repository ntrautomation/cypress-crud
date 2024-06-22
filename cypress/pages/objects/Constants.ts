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
            pattern: /^[a-zA-Z0-9!@#$&()\\-`.+,/\"]*$/
            })
}


class Constants {
    getOptions(userID: string, Authorization){
        const options: IRequestOptions = {
            method: API_REQUEST.GET,
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
}

export const Const = new Constants();