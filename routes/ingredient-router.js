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

router.post('/ingredients', (req, res) => {
    let ingredient = new Ingredient(req.body);
    ingredient.save()
        .then(todo => {
            res.status(200).json({'ingredient': 'ingredient added successfully'})
        })
        .catch(err => {
            res.status(400).send('Adding the new ingredient failed')
        })
})

module.exports = router;