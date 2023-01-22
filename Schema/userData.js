const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    category: { type: String, required: true },
    images: [Object]

}, { timestamps: true })
module.exports = mongoose.model('Users', fileSchema);