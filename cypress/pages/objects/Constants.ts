const { faker } = require(`@faker-js/faker`);

/**
 *  FAKER DOCUMENTATION -> https://fakerjs.dev/api/
 */


export const TEST_USER: IRandomUser = {
    
    userName: faker.internet.userName(),
    password: `123Automation#`
}