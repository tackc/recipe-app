var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    categoryID: Number,
    categoryName: String,
    recipes: [{type: Schema.Types.ObjectId, ref: 'Recipe'}],
})

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;