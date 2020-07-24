const mongoose = require('mongoose');

const Schema = mongoose.Schema

const LinksSchema = new Schema({
    url:{
        type: String,
        required: true,
    },
    duration:{
        type: Number,
        default: 3
    },
    idNumber:{
        type:Number,
        required:true,
        unique: true
    }
    },
    {
        timestamps:true,
});

const Link = mongoose.model('Link', LinksSchema);

module.exports = Link;