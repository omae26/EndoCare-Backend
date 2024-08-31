// Routes file: communityPostRoutes.js

const express = require('express');
const {
  createCommunityPost,
  getCommunityPosts,
  getCommunityPostById,
  updateCommunityPost,
  deleteCommunityPost,
} = require('../controllers/communityPostController');

const router = express.Router();

// Define routes
router.post('/', createCommunityPost);        // POST /api/communities
router.get('/', getCommunityPosts);           // GET /api/communities
router.get('/:id', getCommunityPostById);     // GET /api/communities/:id
router.patch('/:id', updateCommunityPost);      // PUT /api/communities/:id
router.delete('/:id', deleteCommunityPost);   // DELETE /api/communities/:id

module.exports = router;
