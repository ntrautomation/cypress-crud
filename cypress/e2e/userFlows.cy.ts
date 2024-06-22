import { CRUD } from "../pages/objects/CrudOperation";
import { TEST_USER } from "../pages/objects/Constants";

const path: string = `cypress/pages/user_data/`

describe('CRUD Examples', () => {
  
    it('CRUD user flow', () => {
      //CREATE USER -> save userID
      CRUD.createUser().then((userData) => {

          //GENERATE TOKEN
          CRUD.getAuthorizationToken()
            .then((tokenData) => {

              //LOGIN USER
              CRUD.getUserInformation(tokenData.token, userData.userID)
                .then((userInfo) => {
                  expect(userInfo.username).to.be.equal(userData.username)
                  expect(userInfo.userId).to.be.equal(userData.userID)

                  //DELETE USER
                  CRUD.deleteUser(tokenData.token, userData.userID)
                }).then((deleteData) => {
                  expect(deleteData.status).to.be.equal(204)
                })
            })
          });
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