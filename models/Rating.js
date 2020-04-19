var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ratingSchema = new Schema({
    ratingId: Number,
    rating: Number,
    recipes: [{type: Schema.Types.ObjectId, ref: 'Ratings'}],
})

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;