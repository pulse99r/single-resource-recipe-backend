// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors()); // Cross Origin Resource Sharing
app.use(express.json());

// * * * ROUTES * * *
app.get("/", (req, res) => {
  res.send("Welcome to Recipe App");
});

// Recipes ROUTES
// const recipesController = require("./controllers/recipesController.js");
// app.use("/recipes", recipesController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;