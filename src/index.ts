import {Request, Response} from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import Entities from './entities';
import Libs from './libs';

const app = express();
app.use(bodyParser.json());

Entities.init().then(async (entities) => {

  const libs = Libs.init(entities);
  console.log

  // Following routes can further be separated or made into a configuration style Keeping it like that because its just one lib
  app.get('/users/:id', async (request: Request, response: Response, next: Function) => {

    try {
      const result = await libs.Users.get(request.params);
      response.json(result);
    } catch (err) {
      next(err);
    }

  });

  app.get('/users', async (request: Request, response: Response, next: Function) => {

    try {
      const result = await libs.Users.get(request.query);
      response.json(result);
    } catch (err) {
      next(err);
    }

  });

  app.post('/users', async (request: Request, response: Response, next: Function) => {

    try {
      const result = await libs.Users.create(request.body);
      response.json(result);
    } catch (err) {
      next(err);
    }

  });

  app.put('/users/:id', async (request: Request, response: Response, next: Function) => {

    try {
      const result = await libs.Users.update(request.params.id, request.body);
      response.json(result);
    } catch (err) {
      next(err);
    }

  });

  app.put('/users/:id/avatar', async (request: Request, response: Response, next: Function) => {
    try {
      const result = await libs.Users.uploadAvatar(request.params.id);
      response.json(result);
    } catch (err) {
      next(err);
    }
  });

  app.delete('/users/:id', async (request: Request, response: Response, next: Function) => {

    try {
      const result = await libs.Users.remove(request.params.id);
      response.json(result);
    } catch (err) {
      next(err);
    }

  });

  app.use((error: any, request: Request, response: Response, next: Function) => {
    response.status(400);
    response.json({
      message: error.message
    });
  });

  app.listen(3000);

  console.log('Application running on port 3000');

});