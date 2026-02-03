import { Router } from 'express'
import UserController from './src/app/controllers/UserController.js'
import SessionController from './src/app/controllers/SessionController.js'

const routes = new Router()

routes.post('/users', UserController.store)
routes.post('/session', SessionController.store)

export default routes;