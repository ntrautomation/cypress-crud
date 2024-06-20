import { API_REQUEST } from "../enums/RequestTypes";
import { TEST_USER } from "../interfaces/IRandomUser";

const path: string = `cypress/pages/data/`

class CrudOperation implements IUserLogin{
    createUser(){
        console.log(TEST_USER);
        cy.request(API_REQUEST.POST, `https://demoqa.com/Account/v1/User/`, TEST_USER)
        .then((res) => {
          cy.writeFile(`${path}getUserData.json`, res.body);
        });
    };
    
    getAuthorizationToken(){

    };
    getUserInformation(){

    };
    deleteUser(){

    };
}

export const CRUD = new CrudOperation();