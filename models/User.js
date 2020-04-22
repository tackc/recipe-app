const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'You must enter your first name'],
        minlength: [1, 'Your first name must be between 1 and 25 characters'],
        maxlength: [25, 'Your first name must be between 1 and 25 characters']
    },
    lastName: {
        type: String,
        required: [true, 'You must enter your last name'],
        minlength: [1, 'Your last name must be between 1 and 25 characters'],
        maxlength: [25, 'Your last name must be between 1 and 25 characters']
    },
    email: {
        type: String,
        required: [true, 'You must enter an email'],
        minlength: [5, 'Email must be between 5 and 50 characters'],
    maxlength: [50, 'Email must be between 5 and 50 characters']
    }
});

// This returns a user object without a password
userSchema.set('toObject', {
    transform: (doc, ret, options) => {
        console.log('in toObject')
        let returnJSON = {
            _id: ret._id,
            email: ret.email,
            firstName: ret.firstName,
            lastName: ret.lastName
        }
        return returnJSON
    }
});

// This checks the entered password against the hashed password
userSchema.methods.authenticated = function(password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.pre('save', function(next) {
    if(this.isNew) {
        let hash = bcrypt.hashSync(this.password, 12);
        this.password = hash;
    }
    next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;