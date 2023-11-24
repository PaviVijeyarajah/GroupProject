let mongoose = require('mongoose');

// create a model class
let itemModel = mongoose.Schema({
    Name: String,
    Sport: String,
    EndDate: String,
    StartDate: String,
    Type: String
},
{
    collection:"TourTable"
});
module.exports = mongoose.model('Item',itemModel);
