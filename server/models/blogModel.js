const mongoose = require('mongoose')

const Schema = mongoose.Schema

const blogPostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    images: {
        type: String
    }
}, { timestamps: true})

module.exports = mongoose.model('Blog', blogPostSchema)