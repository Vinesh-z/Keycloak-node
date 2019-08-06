var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({

    itemName: {
        type: String
    }
});

module.exports = mongoose.model('item', itemSchema);