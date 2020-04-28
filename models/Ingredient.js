var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ingredientSchema = new Schema({
    ingredient_id: Number,
    ingredient_quantity: String,
    ingredient_name: String,
    Recipe: [{type: Schema.Types.ObjectId, ref: 'Recipe'}]
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;