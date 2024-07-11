const express = require('express');
const Blog = require('../models/blogModel');

const router = express.Router();

//Get all blogs
router.get('/', (req, res) => {
    res.json({mssg: 'GET all the blogs'})
})

//Get a single blog
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single blog'})
});

//Post a new blog
router.post('/', async (req, res) => {
    const {title, content, date, images} = req.body

    try{
        const blog = await Blog.create({title, content, date, images})
        res.status(200).json(blog)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

//Delete a blog
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a blog'})
})

//Update a blog
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a blog'})
})

module.exports = router;