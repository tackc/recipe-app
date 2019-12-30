var Recipe = require('../models/Recipe');

module.exports = {
    create
}

function create(req, res) {
    Recipe.create(req.body)
    .then(recipe => {
        res.json(recipe);
    })
    .catch(err => {
        res.json({error: err})
    })
}