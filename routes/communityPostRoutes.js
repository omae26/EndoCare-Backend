const express = require('express');
const {
  createCommunityPost,
  getCommunityPosts,
  getCommunityPostById,
  updateCommunityPost,
  deleteCommunityPost,
} = require('../controllers/communityPostController');

const router = express.Router();

router.post('/community-posts', createCommunityPost);
router.get('/community-posts', getCommunityPosts);
router.get('/community-posts/:id', getCommunityPostById);
router.put('/community-posts/:id', updateCommunityPost);
router.delete('/community-posts/:id', deleteCommunityPost);

module.exports = router;
