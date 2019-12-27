require('dotenv').config();
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

router.post('/signup', (req, res) => {
    // See if the email is already in the DB
    User.findOne({email: req.body.email}, (err, user) => {
        if(user) {
            // Email is already in the DB. Alert the user.
            res.json({
                type: 'auth_error',
                status: 401,
                message: "Email already exists"
            });
        } else {
            // Email is available, create the user in the DB
            User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            }, (err, user) => {
                // check for any DB errors
                if(err) {
                    // Some error occurred creating the user
                    res.json({
                        type: 'db_error',
                        status: 500,
                        message: "Database error occurred while creating the account",
                        error: err
                    });
                } else {
                    // Log the user in (sign a new token)
                    var token = jwt.sign(user.toObject(), process.env.JWT_SECRET, {
                        expiresIn: 60 * 60 * 24
                    });
                    // Return user and token to React app
                    res.json({
                        type: 'success',
                        status: 200,
                        user,
                        token
                    });
                }
            })
        }
    })
});

// Route for logging in to existing account
router.post('/login', (req, res) => {
    // Look up user in the DB
    User.findOne({email: req.body.email}, function(err, user) {
        if (user) {
        // If there is a user, check their entered password against the DB hash
        if (user.authenticated(req.body.password)) {
            // if it matches: log them in (sign a token)
            var token = jwt.sign(user.toObject(), process.env.JWT_SECRET, {
            expiresIn: 60 * 60 * 24
            });
            res.json({
            type: 'success',
            status: 200,
            user,
            token
            });
        } else {
            // Authentication failed: send an error
            res.json({
            type: 'auth_error',
            status: 401,
            message: 'Email or password is incorrect'
            });
        }
        } else {
        // if the user isn't in the DB...
        res.json({
            type: 'auth_error',
            status: 401,
            message: 'Account not found'
        });
        }
    })
});

