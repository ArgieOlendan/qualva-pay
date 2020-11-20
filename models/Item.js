var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create Schema
var ItemSchema = Schema({
    name: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    tax: {
        type: Number,
        required: true
    },
    company_name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);