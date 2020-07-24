const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type: String,
        minlength: 5,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    typeOfUser:{
        type:String,
        default : 'user'
    },
    },
    {
        timestamps:true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;