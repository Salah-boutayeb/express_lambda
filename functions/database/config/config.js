require("dotenv").config();

module.exports = {
  development: {
    username: process.env.db_username,
    password: process.env.db_password,
    database: process.env.database,
    host: process.env.db_host,
    dialect: "postgres",
  },
  test: {
    username: process.env.db_username,
    password: process.env.db_password,
    database: process.env.database,
    host: process.env.db_host,
    dialect: "postgres",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
