const express = require('express');
const { registerPatient, loginPatient, getMe } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Register a new patient
router.post('/register', registerPatient);

// Authenticate patient & get token
router.post('/login', loginPatient);

// Get logged in patient's info
router.get('/me', authMiddleware, getMe);

module.exports = router;
