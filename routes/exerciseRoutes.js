const express = require('express');
const { 
  createExercise, 
  getExercisesByPatientId, 
  getExerciseById, 
  updateExercise, 
  deleteExercise 
} = require('../controllers/exerciseController');

const router = express.Router();

// @route   POST /api/exercises
// @desc    Create a new exercise
// @access  Private
router.post('/', createExercise);

// @route   GET /api/exercises/patient/:patient_id
// @desc    Get all exercises for a patient
// @access  Private
router.get('/patient/:patient_id', getExercisesByPatientId);

// @route   GET /api/exercises/:id
// @desc    Get a single exercise by ID
// @access  Private
router.get('/:id', getExerciseById);

// @route   PUT /api/exercises/:id
// @desc    Update an exercise
// @access  Private
router.patch('/:id', updateExercise);

// @route   DELETE /api/exercises/:id
// @desc    Delete an exercise
// @access  Private
router.delete('/:id', deleteExercise);

module.exports = router;
