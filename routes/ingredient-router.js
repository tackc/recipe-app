const express = require('express');
const router = express.Router();
const Ingredient = require('../models/Ingredient');

// Get all ingredients from database
router.get('/ingredients', (req, res) => {
    Ingredient.find( (err, ingredients) => {
        if (err) {
            console.log(err)
        } else {
            res.json(ingredients)
        }
    })
})

module.exports = router;