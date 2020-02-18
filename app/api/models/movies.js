const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const MovieSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    released_date: {
        type: Date,
        trim: true,
        required: true
    },
    director: {
        type: String,
        trim: false,
        required: true,
    },
    score: {
        type: Number,
        min: 0,
        max: 10,
        required: true,
    },
    plot_description: {
        type: String,
        trim: false,
        required: true,
    },
});
module.exports = mongoose.model('Movie', MovieSchema)