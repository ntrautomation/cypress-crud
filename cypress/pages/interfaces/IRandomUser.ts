const { faker } = require(`@faker-js/faker`);

/**
 *  FAKER DOCUMENTATION -> https://fakerjs.dev/api/
 */


/**
 * @interface for random user creation
 */

interface IRandomUser {
    userName? : string,
    password? : string
}

export const TEST_USER: IRandomUser = {
    
    userName: faker.internet.userName(),
    password: `123Automation#`
}