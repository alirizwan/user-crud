import { createConnection, Connection, getRepository } from 'typeorm';
import {User} from './User';

async function init(config: any = null) {
  return createConnection(config).then((connection: Connection) => ({
    connection,
    User: connection.getRepository(User)
  }));
}

export default {init};