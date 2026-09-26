import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database.cjs';
import User from "../app/models/User.js";
import Product from '../app/models/Product.js';
import Category from '../app/models/Category.js';
import Order from "../app/models/Order.js";
import OrderItem from '../app/models/OrderItem.js';

const models = [User, Product, Category, Order, OrderItem]

class Database {
    constructor(){
        this.init();
    }

    init(){
        this.connection = new Sequelize(databaseConfig.development)
        models
        .map((model) => model.init(this.connection))
        .map(
            (model) => model.associate && model.associate(this.connection.models)
        );
    }
}

export default new Database();