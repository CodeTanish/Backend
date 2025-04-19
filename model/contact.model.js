const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
}, { timestamps: true })

const contact = mongoose.model('contact', contactSchema) 

module.exports = contact