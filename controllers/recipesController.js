const express = require("express");
const recipes = express.Router();

const {
  getAllRecipes,
  getRecipe,
  createRecipe,
  // deleteRecipe,
  // updateRecipe,
} = require("../queries/recipes");

// INDEX ALL RECIPES
recipes.get("/", async (req, res) => {
  const allRecipes = await getAllRecipes();
  if (allRecipes[0]) {
    res.status(200).json(allRecipes);
  } else {
    res.status(500).json({ error: "server error" });
  }
});
// SHOW RECIPE
recipes.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneRecipe = await getRecipe(id);
  console.log ("*** ONE RECIPE ***")
  console.log (oneRecipe)
  if (oneRecipe) {
    res.status(200).json(oneRecipe);
  } else {
    res.status(500).json({ error: "Not found!" });
  }
});

// CREATE RECIPE
recipes.post("/", async (req, res) => {
  try {
    const recipe = await createRecipe(req.body);
    res.json(recipe);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// UPDATE RECIPE


// DELETE RECIPE




module.exports = recipes;