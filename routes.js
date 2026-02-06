import { Router } from 'express'
import UserController from './src/app/controllers/UserController.js'
import SessionController from './src/app/controllers/SessionController.js'
import ProductController from './src/app/controllers/ProductController.js'

const routes = new Router()

routes.post('/users', UserController.store)
routes.post('/session', SessionController.store)
routes.post('/products', ProductController.store)   

export default routes;