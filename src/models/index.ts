import { createConnection, Connection, getRepository } from 'typeorm';
import {User} from './User';

async function init() {
  return createConnection().then((connection: Connection) => ({
    connection,
    User: connection.getRepository(User)
  }));
}

export default {init};