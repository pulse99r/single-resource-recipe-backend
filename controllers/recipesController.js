const express = require("express");
const recipes = express.Router();

// const {
//   getAllRecipes
// } = require("")

// INDEX
recipes.get("/", async (req, res) => {
  const allRecipes = await getAllRecipes();
  console.log(allRecipes)
  if (allRecipes[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});