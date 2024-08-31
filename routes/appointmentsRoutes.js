const express = require('express');
const router = express.Router();
const { createAppointment, getAppointmentsByUser, getAppointmentById, updateAppointment, deleteAppointment } = require('../controllers/appointmentController');

// @route   POST /api/appointments
// @desc    Create a new appointment
// @access  Private
router.post('/', createAppointment);

// @route   GET /api/appointments/user/:user_id
// @desc    Get all appointments for a user
// @access  Private
router.get('/user/:user_id', getAppointmentsByUser);

// @route   GET /api/appointments/:id
// @desc    Get a single appointment by ID
// @access  Private
router.get('/:id', getAppointmentById);

// @route   PUT /api/appointments/:id
// @desc    Update an appointment
// @access  Private
router.put('/:id', updateAppointment);

// @route   DELETE /api/appointments/:id
// @desc    Delete an appointment
// @access  Private
router.delete('/:id', deleteAppointment);

module.exports = router;
