interface IRequestOptions {
    method: string,
        url: string,
        failOnStatusCode? : boolean,
        headers?: {
          Authorization : string,
        },
        body?: {
          userName?,
          password?,
          userId?,
          isbn?,
          collectionOfIsbns?
        }
}