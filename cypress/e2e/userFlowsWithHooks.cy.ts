import { CRUD } from "../pages/objects/CrudOperation";
import { books } from "../pages/data/books.json"
import { Iterator } from "../pages/helper/Iterators";

let bookList: string[] = [];
let userID;
let token;
let userName;

describe('CRUD Examples with HOOKS', () => {

    before(() => {
      Iterator.iterateOverJson(bookList, books);
    });

    beforeEach(() => {
      CRUD.createUser().then((userData) => {
        userID = userData.userID;
        userName = userData.username;
      });
      CRUD.getAuthorizationToken().then((tokenData) => {
        token = tokenData.token;
      })
    });

    afterEach(() => {
      CRUD.deleteUser(token, userID)
            .then((deleteData) => {
              expect(deleteData.status).to.be.equal(204);

              //VALIDATE USER IS DELETED
              CRUD.getUserInformation(token, userID)
                .then((res) => {
                  expect(res.message).to.be.equal("User not found!");
                  });
            });
    })
  
    it('CRUD user flow', () => {
      //LOGIN USER
      CRUD.getUserInformation(token, userID)
        .then((userInfo) => {
          expect(userInfo.username).to.be.equal(userName);
          expect(userInfo.userId).to.be.equal(userID);
        });
    });

    it('CRUD flow with adding and removing books', () => {
      //ADD BOOKS TO USER
      CRUD.addBooksToUser(bookList[0], token, userID)
        .then((bookData) => {
          let addedBook = bookData.body.books[0].isbn;
          expect(addedBook).to.be.equal(bookList[0]);

          //UPDATE USER'S BOOK
          CRUD.updateUserBook(bookList[0], bookList[2], userID, token)
            .then((updatedBookData) => {
              let updatedBook = updatedBookData.body.books[0].isbn;
                expect(updatedBookData.body.userId).to.be.equal(userID);
                expect(updatedBook).to.not.be.equal(addedBook);
                expect(updatedBook).to.be.equal(bookList[2]);

                //DELETE USER'S BOOK
                CRUD.deleteUserBook(bookList[2], token, userID)
                  .then((deleteBookData) => {
                    expect(deleteBookData.status).to.be.equal(204);
                  });
            });
        });
    });
});