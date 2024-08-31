const express = require('express');
const router = express.Router();
const insightController = require('../controllers/insightController');

// Get all insights
router.get('/', insightController.getAllInsights);

// Get insights by category
router.get('/category/:category', insightController.getInsightsByCategory);

// Create a new insight
router.post('/', insightController.createInsight);

// Update an existing insight
router.patch('/:id', insightController.updateInsight);

// Delete an insight
router.delete('/:id', insightController.deleteInsight);

module.exports = router;
