const express = require('express');
const { 
  createBlog, 
  getBlogs, 
  getBlogById, 
  updateBlog, 
  deleteBlog 
} = require('../controllers/blogController');

const router = express.Router();

router.post('/', createBlog);        // POST /api/blogs
router.get('/', getBlogs);           // GET /api/blogs
router.get('/:id', getBlogById);     // GET /api/blogs/:id
router.put('/:id', updateBlog);      // PUT /api/blogs/:id
router.delete('/:id', deleteBlog);   // DELETE /api/blogs/:id

module.exports = router;
