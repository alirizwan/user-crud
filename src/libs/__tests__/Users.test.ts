import Entities from '../../entities';
import Libs from '../';
const config = {
    type: "sqlite",
    database: './data.sqlite',
    entities: ["dist/entities/*.js"],
    logging: true
};

describe('user.crud', async () => {

    const entities = await Entities.init(config);
    const libs = Libs.init(entities);

    test('Create user', async () => {
        const params = { firstName: 'John', lastName: 'Doe', username: 'john.doe', password: 'hello123' };
        const user = await libs.Users.create(params);

        expect(user.firstName).toEqual(params.firstName);
        expect(user.lastName).toEqual(params.lastName);
        expect(user.username).toEqual(params.username);
        expect(user.password).toEqual(undefined);
    });

    test('Get user', async () => {
        const params = { username: 'john.doe' };
        const users = await libs.Users.get(params);

        expect(users.length).toEqual(1);

        const user = users[0];

        expect(user.firstName).toEqual('John');
        expect(user.lastName).toEqual('Doe');
        expect(user.password).toEqual(undefined);
    });

    test('Update user', async () => {
        const newParams = { lastName: 'Wick', username: 'john.wick' };
        const params = { username: 'john.doe' };
        const users = await libs.Users.get(params);

        expect(users.length).toEqual(1);

        const user = await libs.Users.update(users[0].id, newParams);

        expect(user.lastName).toEqual(newParams.lastName);
        expect(user.username).toEqual(params.username); // Username shoudln't change
    });

    test('Delete user', async () => {
        const params = { username: 'john.doe' };
        const users = await libs.Users.get(params);

        expect(users.length).toEqual(1);

        await libs.Users.remove(users[0].id);

        const expectedUsers = await libs.Users.get(params);

        expect(expectedUsers.length).toEqual(0);
    });

});