const RecipeController = require('../controllers/recipe.controller');

module.exports = app => {
    app.get('/api/recipes', RecipeController.findAllRecipes);
    app.get('/api/recipe/:id', RecipeController.singleRecipe);
    app.post('/api/create/recipe', RecipeController.createNewRecipe);
    app.delete('/api/delete/recipe/:id', RecipeController.deleteRecipe);
    app.patch('/api/update/recipe/:id', RecipeController.editRecipe)
}