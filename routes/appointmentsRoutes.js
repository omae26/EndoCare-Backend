const express = require('express');
const router = express.Router();
const { createAppointment, getAppointmentsByUser, getAppointmentById, updateAppointment, deleteAppointment } = require('../controllers/appointmentController');

// @route   POST /api/appointments
// @desc    Create a new appointment
// @access  Private
router.post('/', createAppointment);

// @route   GET /api/appointments/patients/:patient_id
// @desc    Get all appointments for a patient
// @access  Private
router.get('/patients/:patient_id', getAppointmentsByUser);

// @route   GET /api/appointments/:id
// @desc    Get a single appointment by ID
// @access  Private
router.get('/:id', getAppointmentById);

// @route   PATCH /api/appointments/:id
// @desc    Partially update an appointment
// @access  Private
router.patch('/:id', updateAppointment);

// @route   DELETE /api/appointments/:id
// @desc    Delete an appointment
// @access  Private
router.delete('/:id', deleteAppointment);

module.exports = router;
