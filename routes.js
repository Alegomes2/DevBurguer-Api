import { Router } from 'express'
import UserController from './src/app/controllers/UserController.js'
import SessionController from './src/app/controllers/SessionController.js'
import ProductController from './src/app/controllers/ProductController.js'
import multer from 'multer'
import multerConfig from './src/config/multer.cjs'
import authMiddlewar from './src/middlewares/auth.js'
import CategoryController from './src/app/controllers/CategoryController.js'

const routes = new Router()
const upload = multer(multerConfig)

routes.post('/users', UserController.store)
routes.post('/session', SessionController.store)

routes.use(authMiddlewar)
routes.post('/products', upload.single('file'), ProductController.store) 
routes.get('/products', ProductController.index)

routes.post('/categories', CategoryController.store) 
routes.get('/categories', CategoryController.index)     


export default routes;