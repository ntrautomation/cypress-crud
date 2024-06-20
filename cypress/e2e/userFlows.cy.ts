import { CRUD } from "../pages/objects/CrudOperation";
import * as userData from "../pages/user_data/getUserData.json";
import * as userToken from "../pages/user_data/getUserToken.json";
import * as loggedUserInfo from "../pages/user_data/getLoggedUserInfo.json"
import { Reader } from "../pages/objects/Readers";
import { TEST_USER } from "../pages/objects/Constants";
let token;
let userID;
const path: string = `cypress/pages/user_data/`

describe('CRUD Examples', () => {

    beforeEach(() => {
       
      
      
    })
  
    it('CRUD user flow', () => {
      //CREATE USER -> save userID
      CRUD.createUser();
      userID = Reader.readFromJSON(userData.userID);
      let userName = Reader.readFromJSON(TEST_USER.userName);
      cy.log(userID, userName)
      //GEN TOKEN -> save token
      CRUD.getAuthorizationToken(userName);
      token = Reader.readFromJSON(userToken.token)
      cy.log(token)

      CRUD.getUserInformation(token, userID);
      let loggedUser = Reader.readFromJSON(loggedUserInfo);
      cy.log(loggedUserInfo.username, loggedUserInfo.userId)
      //expect(userData.userID).to.be.equal(loggedUserInfo.userId);
        
        //DELETE USER 
    });

    it('CRUD flow with adding and removing books', () => {
      //READ USER -> user userID and token
      
      //CREATE USER -> save userID
      //GEN TOKEN -> save token
      //READ USER -> user userID and token
      //ADD BOOKS -> save added book
      //UPDATE BOOK -> update book ID
      //DELETE BOOK
      //DELETE USER
    });
  });