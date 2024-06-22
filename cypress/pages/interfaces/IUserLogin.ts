interface IUserLogin {
    createUser();
    getAuthorizationToken(username: string);
    getUserInformation(token: string, userID: string);
    deleteUser(token: string, userID: string);
}