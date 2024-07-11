const express = require('express');
const {
    getBlogs,
    getBlog,
    createBlog,
    deleteBlog,
    updateBlog
} = require('../controllers/blogController');

const router = express.Router();

//Get all blogs
router.get('/', getBlogs)

//Get a single blog
router.get('/:id', getBlog)

//Post a new blog
router.post('/', createBlog)

//Delete a blog
router.delete('/:id', deleteBlog)

//Update a blog
router.patch('/:id', updateBlog)

module.exports = router;