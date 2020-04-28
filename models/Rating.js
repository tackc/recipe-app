var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ratingSchema = new Schema(
    {
        rating_id: Number,
        user_id: [{type: Schema.Types.ObjectId, ref: 'User'}],
        recipe_id: [{type: Schema.Types.ObjectId, ref: 'Ratings'}],
        rating: Number,
    },
    {timestamps: true},
)

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;