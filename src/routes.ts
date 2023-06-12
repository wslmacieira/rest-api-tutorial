import { Express, Request, Response } from 'express'
import { createUserHandler } from './controller/user.controller';
import { createUserSessionHandler, deleteSessionHandler, getUserSessionHandler } from './controller/session.controller';
import validateResource from './middleware/validateResource'
import { createUserSchema } from './schema/user.schema';
import { sessionSchema } from './schema/session.schema';
import requireUser from './middleware/requireUser';

function routes(app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => {
    res.sendStatus(200)
  })

  app.post('/api/users', validateResource(createUserSchema), createUserHandler)

  app.post('/api/sessions', validateResource(sessionSchema), createUserSessionHandler)

  app.get('/api/sessions', requireUser, getUserSessionHandler)

  app.delete('/api/sessions', requireUser, deleteSessionHandler)
}

export default routes;
