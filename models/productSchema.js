var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true //possibly not necessary
    },
    img:
    {
        data: {
            type: Buffer,
            required: true
        },
        contentType: {
            type: String,
            required: true
        }
    }
});

module.exports = new mongoose.model('product', productSchema);