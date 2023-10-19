const express = require("express");
const cors = require("cors");
const app = express();
const serverless = require("serverless-http");
const db = require("../database/models");
const { errorHandler } = require("../middleware/middleware");
const dotenv = require("dotenv").config();
const router = express.Router();
// express middleware
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("dotenv").config();
app.use(cors());

// use routes here
router.get("/", (req, res) => {
  res.send("App is running..");
});

app.use("/.netlify/functions/api", router);
app.use("/.netlify/functions/api/users", require("../routes/userRoutes"));
app.use(
  "/.netlify/functions/api/categories",
  require("../routes/categoryRoutes")
);
app.use("/.netlify/functions/api/recipes", require("../routes/recipeRoutes"));

app.use(errorHandler);
db.sequelize.sync({ alter: true });

module.exports.handler = serverless(app);
