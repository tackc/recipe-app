var express = require( 'express' );
var path = require( 'path' );
var favicon = require( 'serve-favicon' );
var logger = require( 'morgan' );
const apiRoutes = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middlewares to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route
require('./config/database');
require('/api', apiRoutes)

// The following "catch all" route (note the *)is necessary for a SPA's client-side routing to properly work
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during development to avoid collision with React's dev server

var port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Express app running on port ${port}`)
});