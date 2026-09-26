import { Router } from 'express'
import UserController from './src/app/controllers/UserController.js'
import SessionController from './src/app/controllers/SessionController.js'
import ProductController from './src/app/controllers/ProductController.js'
import OrderController from "./src/app/controllers/OrderController.js";
import multer from 'multer'
import multerConfig from './src/config/multer.cjs'
import authMiddlewar from './src/middlewares/auth.js'
import adminMiddleware from './src/middlewares/admin.js'
import CategoryController from './src/app/controllers/CategoryController.js'


const routes = new Router()
const upload = multer(multerConfig)

routes.post('/users', UserController.store)
routes.post('/session', SessionController.store)

routes.use(authMiddlewar)

routes.post('/products', adminMiddleware, upload.single('file'), ProductController.store)

routes.put('/products/:id', adminMiddleware, upload.single('file'), ProductController.update)

routes.get('/products', ProductController.index)

routes.post('/categories', adminMiddleware, upload.single('file'), CategoryController.store) 
routes.put('/categories/:id', adminMiddleware, upload.single('file'), CategoryController.update) 
routes.get('/categories', CategoryController.index)  

routes.post("/orders", OrderController.store);
routes.get("/orders", OrderController.index);
routes.put("/orders/:id", OrderController.update);


export default routes;