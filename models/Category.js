var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const categories = ['appetizer', 'soup', 'salad', 'pasta', 'side dish', 'main dish', 'dessert'];

var categorySchema = new Schema({
    category_id: Number,
    category_name: String,
    recipes: [{type: Schema.Types.ObjectId, ref: 'Recipe'}],
})

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;