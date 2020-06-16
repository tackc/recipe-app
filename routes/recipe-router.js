const express = require('express');
const router = express.Router();
const RecipeCtrl = require('../controllers/recipes-ctrl');

router.post('/recipes', RecipeCtrl.insertRecipe);
router.patch('/recipes/:id', RecipeCtrl.updateRecipe);
router.delete('/recipes/:id', RecipeCtrl.deleteRecipe);
router.get('/recipes/:id', RecipeCtrl.getRecipeById);
router.get('/recipes', RecipeCtrl.getRecipes);

module.exports = router;