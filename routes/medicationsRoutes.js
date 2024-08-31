const express = require('express');
const router = express.Router();
const { 
  addMedication, 
  getMedicationsByPatient, 
  updateReminderStatus 
} = require('../controllers/medicationController');
const authMiddleware = require('../middlewares/authMiddleware');

// @route   POST /api/medications
// @desc    Add new medication
// @access  Private
router.post('/', authMiddleware, addMedication);

// @route   GET /api/medications/patient/:patientId
// @desc    Get all medications for a patient
// @access  Private
router.get('/patient/:patientId', authMiddleware, getMedicationsByPatient);

// @route   PUT /api/medications/:id/reminder
// @desc    Update medication reminder status
// @access  Private
router.put('/:id/reminder', authMiddleware, updateReminderStatus);

module.exports = router;
