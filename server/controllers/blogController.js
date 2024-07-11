const mongoose = require('mongoose');

const Blog = require('../models/blogModel')

//get all blog
const getBlogs = async (req, res) => {
    const blogs = await Blog.find({}).sort({created_at: -1})

    res.status(200).json(blogs)
}

//get a single blog
const getBlog = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: 'Invalid id provided'})
    }

    const blog = await Blog.findById(id)
    if(!blog) {
        return res.status(404).json({error: 'Blog Not Found'})
    }

    res.status(200).json(blog)
}

//create a new blog
const createBlog = async (req, res) => {
    const {title, content, date, images} = req.body

    try{
        const blog = await Blog.create({title, content, date, images})
        res.status(200).json(blog)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete a single blog
const deleteBlog = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: 'Invalid id provided'})
    }

    const blog = await Blog.findOneAndDelete({_id: id})
    if(!blog) {
        return res.status(404).json({error: 'Blog Not Found'})
    }

    res.status(200).json(blog)
}


//update a single blog
const updateBlog = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: 'Invalid id provided'})
    }

    const blog = await Blog.findOneAndUpdate({_id: id},{
        ...req.body 
    })
    if(!blog) {
        return res.status(404).json({error: 'Blog Not Found'})
    }

    res.status(200).json(blog)
}

module.exports = {
    getBlogs,
    getBlog,
    createBlog,
    deleteBlog,
    updateBlog
}