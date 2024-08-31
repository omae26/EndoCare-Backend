const Appointment = require('../models/Appointment');

// @desc    Create a new appointment
// @route   POST /api/appointments
// @access  Private
exports.createAppointment = async (req, res) => {
  const { patient_id, hospital_name, doctors_name, appointment_date, time, status } = req.body;

  try {
    const appointment = new Appointment({
      patient_id,
      hospital_name,
      doctors_name,
      appointment_date,
      time,
      status
    });

    await appointment.save();
    res.status(201).json(appointment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get all appointments for a user
// @route   GET /api/appointments/user/:patient_id
// @access  Private
exports.getAppointmentsByUser = async (req, res) => {
  try {
    const appointments = await Appointment.find({ patient_id: req.params.patient_id });
    res.json(appointments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get a single appointment by ID
// @route   GET /api/appointments/:id
// @access  Private
exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ msg: 'Appointment not found' });
    }

    res.json(appointment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Update an appointment
// @route   PUT /api/appointments/:id
// @access  Private
exports.updateAppointment = async (req, res) => {
  const { hospital_name, doctors_name, appointment_date, time, status, reminder_sent } = req.body;

  try {
    let appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ msg: 'Appointment not found' });
    }

    appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      {
        hospital_name,
        doctors_name,
        appointment_date,
        time,
        status,
        reminder_sent
      },
      { new: true }
    );

    res.json(appointment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Delete an appointment
// @route   DELETE /api/appointments/:id
// @access  Private
exports.deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ msg: 'Appointment not found' });
    }

    await appointment.remove();
    res.json({ msg: 'Appointment removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
