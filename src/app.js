import './database/index.js';
import express from 'express';
import routes from '../routes.js';
import fileRouteConfig from './config/fileRoutes.cjs';
import cors from "cors";


const app = express();


const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origem não permitida pelo CORS"));
    },
  })
);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/product-file', fileRouteConfig)
app.use('/category-file', fileRouteConfig)

app.use(routes)


export default app;
