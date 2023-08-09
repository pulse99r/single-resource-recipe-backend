const db = require("../db/dbConfig.js");

const getAllRecipes = async () => {
  try {
    const allRecipes = await db.any("SELECT * FROM recipes");
    return allRecipes;
  } catch (error) {
    return error;
  }
};

const getRecipe = async (id) => {
  try {
    const oneRecipe = await db.one("SELECT * FROM recipes WHERE id=$1", id);
    return oneRecipe;
  } catch (error) {
    return error;
  }
};

// CREATE
const createRecipe = async (recipe) => {
  try {
    const newRecipe = await db.one(
      "INSERT INTO recipes (name, img, ingredients, instructions, cooking_time, nationality, is_Favorite) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [recipe.name, recipe.img, recipe.ingredients, recipe.instructions, recipe.cooking_time, recipe.nationality, recipe.is_Favorite]
      
    );
    return newRecipe;
  } catch (error) {
    return error;
  }
};

const deleteRecipe = async (id) => {
  try {
    const deletedRecipe = await db.one(
      "DELETE FROM recipes WHERE id = $1 RETURNING *", id 
      );
    return deletedRecipe;
  } catch (error) {
    return error;
  }
};

const updateRecipe = async (id, recipe) => {
  try {
    const updatedRecipe = await db.one(
      "UPDATE recipes SET name=$1, img=$2, ingredients=$3, instructions=$4, cooking_time=$5, nationality=$6, is_Favorite=$7 WHERE id=$8 RETURNING *",
      [recipe.name, recipe.img, recipe.ingredients, recipe.instructions, recipe.cooking_time, recipe.nationality, recipe.is_Favorite, id]
    );
    return updatedRecipe;
  } catch (error) {
    return error;
  }
};


module.exports = {getAllRecipes, getRecipe, createRecipe, deleteRecipe, updateRecipe};