import { CRUD } from "../pages/objects/CrudOperation";
import { books } from "../pages/data/books.json"
import { Iterator } from "../pages/helper/Iterators";
import { add } from "cypress/types/lodash";
let bookList: string[] = [];
describe('CRUD Examples', () => {

    before(() => {
      Iterator.iterateOverJson(bookList, books);
    })
  
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

    it.only('CRUD flow with adding and removing books', () => {
      //CREATE USER -> save userID
      CRUD.createUser().then((userData) => {

        //GENERATE TOKEN
        CRUD.getAuthorizationToken()
          .then((tokenData) => {

            //ADD BOOKS TO USER
            CRUD.addBooksToUser(bookList[0], tokenData.token, userData.userID)
              .then((bookData) => {
                let addedBook = bookData.body.books[0].isbn;
                expect(addedBook).to.be.equal(bookList[0]);

                CRUD.updateUserBook(bookList[0], bookList[2], userData.userID, tokenData.token)
                  .then((updatedBookData) => {
                    let updatedBook = updatedBookData.body.books[0].isbn;
                    expect(updatedBookData.body.userId).to.be.equal(userData.userID);
                    expect(updatedBook).to.not.be.equal(addedBook);
                    expect(updatedBook).to.be.equal(bookList[2]);
                  })
              })
          })
          

            

      });

      
      //UPDATE BOOK -> update book ID
      //DELETE BOOK
      //DELETE USER
    });
  });