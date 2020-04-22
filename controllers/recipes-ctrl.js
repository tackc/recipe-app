var Recipe = require('../models/Recipe');

function createRecipe(req, res) {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must enter all required recipe fields',
        })
    }

    const recipe = new Recipe(body);

    if (!recipe) {
        return res.status(400).json({ success: false, error: 'There is no recipe being sent from the form to the server' });
    }

    recipe
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: recipe._id,
                message: 'Recipe created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                message: `The recipe was not created due to the following error: ${error}`,
            })
        })
}

async function updateRecipe(req, res) {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Recipe not found',
        })
    }

    Recipe.findOne({ _id: req.params.id }, (err, recipe) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Recipe not found',
            })
        }

        recipe.name = body.name
        recipe.description = body.description
        recipe.ingredientQuantity = body.ingredientQuantity
        recipe.ingredient = body.ingredient
        recipe.instructions = body.instructions
        recipe.preparation_time = body.preparation_time
        recipe.cooking_time = body.cooking_time
        recipe.total_time = body.total_time
        recipe.serves = body.serves
        recipe.notes = body.notes
        recipe.author = body.author
        recipe.url = body.url
        recipe.ratings = body.ratings
        recipe.images = body.images

        recipe
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: recipe._id,
                    message: 'Recipe updated!'
                })
            })
            .catch(error => {
                return res.status(404).json({
                    success: true,
                    message: `Recipe not updated due to the following error: ${error}`
                })
            })
    })
}

async function deleteRecipe(req, res) {
    await Recipe.findOneAndDelete({ _id: req.params.id }, (err, recipe) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!recipe) {
            return res.status(400).json({ success: false, error: 'Recipe not found' })
        }

        return res.status(200).json({ success: true, data: recipe })
    })
    .catch(err => console.log(err))
}

async function getRecipeById(req, res) {
    await Recipe.findOne({ _id: req.params.id }, (err, recipe) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!recipe) {
            return res.status(404).json({ success: false, error: 'Recipe not found' })
        }

        return res.status(200).json({ status: true, data: recipe })
    })
    .catch(err => console.log(err))
}

module.exports = {
    createRecipe,
    updateRecipe,
    deleteRecipe,
    getRecipeById,
};