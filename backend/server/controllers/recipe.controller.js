const Recipe = require('../models/recipe.model');

// FIND
module.exports.findAllRecipes = (req, res) => {
    Recipe.find()
        .then(allDaRecipes => res.json({ recipes: allDaRecipes }))
        .catch(err => res.status(400).json({ message: 'Something went wrong finding all recipes', error: err }));
}

module.exports.singleRecipe = (req,res) => {
    Recipe.findOne({_id: req.params.id})
    .then(singleRecipeInfo => res.json({ recipe: singleRecipeInfo}))
    .catch(err => res.status(400).json({ message: 'Something went wrong when getting single recipe', error: err }));
}

module.exports.editRecipe = (req,res) => {
    Recipe.findOneAndUpdate({_id: req.params.id},
        req.body,
        { new: true, runValidators: true })
    .then(updateRecipe=> res.json({ updatedRecipe: updateRecipe}))
    .catch(err => res.status(400).json({ message: 'Something went wrong when getting single recipe', error: err }));
}

// CREATE
module.exports.createNewRecipe = (req,res) => {
    Recipe.create(req.body)
    .then(newRecipe => res.json({ createdNewRecipe: newRecipe }))
    .catch(err => res.status(400).json({ message: 'Something went wrong creating new recipe', error: err }));
}

// DELETE
module.exports.deleteRecipe = (req,res) => {
    Recipe.deleteMany({_id: req.params.id})
    .then(result => res.json({ result: result}))
    .catch(err => res.status(400).json({ message: 'Something went wrong when deleting recipe', error: err }));
}
