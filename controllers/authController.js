const Patient = require('../models/Patient');
const jwt = require('jsonwebtoken');

// @desc    Register a new patient
// @route   POST /api/auth/register
// @access  Public
exports.registerPatient = async (req, res) => {
  const { name, email, passwordHash, profile_img } = req.body;

  try {
    // Check if the patient already exists
    let patient = await Patient.findOne({ email });

    if (patient) {
      return res.status(400).json({ msg: 'Patient already exists' });
    }

    // // Validate password and confirmPassword match
    // if (password !== confirmPassword) {
    //   return res.status(400).json({ msg: 'Password confirmation does not match password' });
    // }

    // Create a new patient
    patient = new Patient({
      name,
      email,
      passwordHash: passwordHash, // Password will be hashed in the schema's pre-save middleware
      profile_img: profile_img || '', // Optional field for profile image, default is an empty string
    });

    await patient.save();

    // Generate JWT token
    const payload = {
      patient: {
        id: patient.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Authenticate patient & get token
// @route   POST /api/auth/login
// @access  Public
exports.loginPatient = async (req, res) => {
  const { email, passwordHash } = req.body;

  try {
    const patient = await Patient.findOne({ email });

    if (!patient) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await patient.matchPassword(passwordHash);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Generate JWT token
    const payload = {
      patient: {
        id: patient.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


// @desc    Get logged in patient's info
// @route   GET /api/auth/me
// @access  Private
exports.getMe = async (req, res) => {
  try {
    const patient = await Patient.findById(req.patient.id).select('-passwordHash'); // Access the patient's ID via req.patient
    if (!patient) {
      return res.status(404).json({ msg: 'Patient not found' });
    }
    res.json(patient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

