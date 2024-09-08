const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campgroundSchema = new Schema({
    lake: String,
    area: String,
    route: String,
    difficulty: String,
    description: String,
    dateVisited: Date,
    image: String,
});

module.exports = mongoose.model('Campground', campgroundSchema);

