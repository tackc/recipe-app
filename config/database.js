const mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    });

var db = mongoose.connection;

db.once('open', () => {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}: ${db.port}`);
})

module.exports = db;