require('dotenv').config();
var express = require( 'express' );
const mongoose = require('mongoose');
var path = require( 'path' );
var favicon = require( 'serve-favicon' );
var logger = require( 'morgan' );
const expressJWT = require('express-jwt')

const apiRoutes = require('./routes/recipe-router');
const auth = require('./routes/auth');
const ingredientsRoutes = require('./routes/ingredient-router');
const locked = require('./routes/locked');

var app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middlewares to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

require('./config/database.js');
// Put API routes here, before the "catch all" route
app.use('/api', apiRoutes);
app.use('/auth', auth);
app.use('/ingredients', ingredientsRoutes)
app.use('/locked', expressJWT({secret: process.env.JWT_SECRET}).unless({method: 'POST'}), locked);

// The following "catch all" route (note the *)is necessary for a SPA's client-side routing to properly work
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3000 during development to avoid collision with React's dev server (which is set to 8000)

var port = process.env.BACK_END_PORT || 3001;

var server = app.listen(port, () => {
    console.log(`Express app running on port ${port}`)
});

module.exports = server;