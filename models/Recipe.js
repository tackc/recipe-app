var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recipeSchema = new Schema({
    recipeID: Number,
    recipeName: String,
    ingredient: [{type: Schema.Types.ObjectId, ref: 'Ingredient'}],
    directions: String,
    preparation_time: Number,
    cooking_time: Number,
    serves: Number,
    ratings: [{type: Schema.Types.ObjectId, ref: 'Rating'}]
})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;