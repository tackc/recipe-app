const Ingredient = require('../models/Ingredient');

function insertIngredient(req, res) {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must have ingredients in your recipe',
        })
    }

    const ingredient = new Ingredient(body);

    if (!ingredient) {
        return res.status(400).json({
            success: false,
            error: 'There are no ingredients'
        })
    }

    ingredient
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: ingredient._id,
                message: 'Ingredient added'
            })
        })
        .catch(error => {
            return res.status(400).json({
                message: `The ingredient was not added due to the following error: ${error}`,
            })
        })
}

module.exports = {
    insertIngredient,
}