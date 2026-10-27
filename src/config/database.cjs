

require("dotenv").config();

const caCertificate = process.env.DB_CA_CERT?.replace(/\\n/g, "\n");

const databaseConfig = {
  dialect: "postgres",

  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 5432),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

module.exports = {
  development: {
    ...databaseConfig,

    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },

  production: {
  ...databaseConfig,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: true,
      ca: caCertificate,
    },
  },
},
};
