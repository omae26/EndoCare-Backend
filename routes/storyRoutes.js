const express = require('express');
const {
  createStory,
  getStories,
  getStoryById,
  updateStory,
  deleteStory,
} = require('../controllers/storyController');

const router = express.Router();

router.post('/stories', createStory);
router.get('/stories', getStories);
router.get('/stories/:id', getStoryById);
router.patch('/stories/:id', updateStory);
router.delete('/stories/:id', deleteStory);

module.exports = router;
