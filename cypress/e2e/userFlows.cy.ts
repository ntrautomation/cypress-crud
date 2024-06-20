import { CRUD } from "../pages/objects/CrudOperation";
import * as userData from "../pages/user_data/getUserData.json";
import { Reader } from "../pages/objects/Readers";

describe('CRUD Examples', () => {
  
    it('CRUD user flow', () => {
        //CREATE USER -> save userID
        CRUD.createUser();
        let userID = Reader.readFromJSON(userData.userID);
        cy.log(userID)
        //GEN TOKEN -> save token

        //READ USER -> user userID and token
        //DELETE USER 
    });

    it('CRUD flow with adding and removing books', () => {
      //CREATE USER -> save userID
      //GEN TOKEN -> save token
      //READ USER -> user userID and token
      //ADD BOOKS -> save added book
      //UPDATE BOOK -> update book ID
      //DELETE BOOK
      //DELETE USER
    });
  });