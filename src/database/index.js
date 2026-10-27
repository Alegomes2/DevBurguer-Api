

import { Sequelize } from "sequelize";
import databaseConfig from "../config/database.cjs";

import User from "../app/models/User.js";
import Product from "../app/models/Product.js";
import Category from "../app/models/Category.js";
import Order from "../app/models/Order.js";
import OrderItem from "../app/models/OrderItem.js";

const models = [
  User,
  Product,
  Category,
  Order,
  OrderItem,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    const environment =
      process.env.NODE_ENV || "development";

    const config = databaseConfig[environment];

    if (!config) {
      throw new Error(
        `Configuração de banco não encontrada: ${environment}`
      );
    }

    console.log("Ambiente atual:", environment);

    // Cria a conexão com o PostgreSQL
    this.connection = new Sequelize(config);

    // Inicializa todos os modelos
    models.forEach((model) => {
      model.init(this.connection);
    });

    // Configura os relacionamentos
    models.forEach((model) => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });

    // Testa a conexão com o banco
    this.connection
      .authenticate()
      .then(() => {
        console.log("PostgreSQL conectado com sucesso!");
      })
      .catch((error) => {
        console.error(
          "Erro ao conectar ao PostgreSQL:",
          error
        );
      });
  }
}

export default new Database();
