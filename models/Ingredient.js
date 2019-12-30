var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ingredientSchema = new Schema({
    ingredientID: Number,
    ingredientName: String,
    Recipe: [{type: Schema.Types.ObjectId, ref: 'Recipe'}]
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;