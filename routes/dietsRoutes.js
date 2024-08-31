const express = require('express');
const router = express.Router();
const { addDiet, getDietsByPatient, deleteDiet } = require('../controllers/dietController');

// @route   POST /api/diets
// @desc    Add a new diet
// @access  Private
router.post('/', addDiet);

// @route   GET /api/diets/patient/:patient_id
// @desc    Get all diets for a patient
// @access  Private
router.get('/patient/:patient_id', getDietsByPatient);

// @route   DELETE /api/diets/:id
// @desc    Delete a diet
// @access  Private
router.delete('/:id', deleteDiet);

module.exports = router;
