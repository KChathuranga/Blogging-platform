const mongoose = require('mongoose')
const Blog = require('../models/blogModel')

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
        type: Date,
        required: true
    },
    images: {
        type: String
    }
}, { timestamps: true})

module.exports = mongosose.module('Blog', blogPostSchema)