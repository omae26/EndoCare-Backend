const express = require('express');
const router = express.Router();
const {
  addSpecialist,
  getSpecialists,
  getSpecialistById,
  updateSpecialist,
  deleteSpecialist,
} = require('../controllers/specialistController');

// @route   POST /api/specialists
// @desc    Add a new specialist
// @access  Private (Admin only)
router.post('/', addSpecialist);

// @route   GET /api/specialists
// @desc    Get all specialists
// @access  Public
router.get('/', getSpecialists);

// @route   GET /api/specialists/:id
// @desc    Get a single specialist by ID
// @access  Public
router.get('/:id', getSpecialistById);

// @route   PUT /api/specialists/:id
// @desc    Update a specialist
// @access  Private (Admin only)
router.patch('/:id', updateSpecialist);

// @route   DELETE /api/specialists/:id
// @desc    Delete a specialist
// @access  Private (Admin only)
router.delete('/:id', deleteSpecialist);

module.exports = router;
