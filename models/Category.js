var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categoriesSchema = new Schema({
    categoryID: Number,
    categoryName: String,
    recipes: [{type: Schema.Types.ObjectId, ref: 'Recipe'}],
})

const Category = mongoose.model('Category', categoriesSchema);

module.exports = Category;