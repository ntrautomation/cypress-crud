interface IBooks {
    addBooksToUser(isbn: string, token: string, userID: string);

    updateUserBook(isbn: string, isbnNew: string, userID: string, token: string);

    deleteUserBook(isbn: string, token: string, userID: string)
}