const express = require('express');
const router = express.Router();
var request = require('request');
const User = require('../models/User');

// Get recipes associated with current user
router.get('/recipes', (req, res) => {
    User.findOne({_id: req.body.currentUser}, (err, user) => {
        if(err) {
            res.send(`Yo, you're getting the following error: ${err}`)
            console.log(user)
            res.json(user.userRecipes)
        }
    })
})

// Add a recipe to the current user's recipes
router.post('/recipes', (req, res) => {
    User.findOne({_id: req.body.currentUser}, (err, user) => {
        if(err) {
            res.send(err)
        }
        let userRecipes = user.userRecipes
        userRecipes.push(req.body.recipeToAdd)
        console.log(user)
        user.save()
        res.json(user)
    })
})

module.exports = router;