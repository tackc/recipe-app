var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recipeSchema = new Schema({
    recipeID: Number,
    name: String,
    description: String,
    ingredientQuantity: String,
    ingredient: [{type: Schema.Types.ObjectId, ref: 'Ingredient'}],
    instructions: String,
    preparation_time: Number,
    cooking_time: Number,
    total_time: Number,
    serves: Number,
    notes: String,
    author: String,
    url: String,
    ratings: [{type: Schema.Types.ObjectId, ref: 'Rating'}],
    images: String,
})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;