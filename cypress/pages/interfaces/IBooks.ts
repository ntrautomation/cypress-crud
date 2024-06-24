interface IBooks {
    addBooksToUser(isbn: string, token: string);

    //getAuthorizationToken(username: string); --> use this IUserLogin

    updateUserBook(isbn: string, token: string);

    deleteUserBook()
}
