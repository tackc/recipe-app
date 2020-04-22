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
        return res.status(400).json({ success: false, error: err });
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
                error,
                message: 'There was an error. The recipe was not created',
            })
        })

    Recipe.create(req.body)
    .then(recipe => {
        res.json(recipe);
    })
    .catch(err => {
        res.json({error: err})
    })
}

module.exports = {
    createRecipe,
};