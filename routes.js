import { Router } from 'express'
import UserController from './src/app/controllers/UserController.js'

const routes = new Router()

routes.post('/users', UserController.store)

export default routes;