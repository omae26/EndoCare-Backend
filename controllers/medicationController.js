const Medication = require('../models/Medication');

// @desc    Add new medication
// @route   POST /api/medications
// @access  Private
exports.addMedication = async (req, res) => {
  const {
    patientId,
    medicationName,
    dosage,
    startDate,
    endDate,
    doseTimesPerDay,
    time1,
    time2,
    time3,
  } = req.body;

  try {
    const newMedication = new Medication({
      patientId,
      medicationName,
      dosage,
      startDate,
      endDate,
      doseTimesPerDay,
      time1,
      time2,
      time3,
    });

    const medication = await newMedication.save();

    res.status(201).json(medication);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get all medications for a patient
// @route   GET /api/medications/patient/:patientId
// @access  Private
exports.getMedicationsByPatient = async (req, res) => {
  try {
    const medications = await Medication.find({ patientId: req.params.patientId });
    res.json(medications);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Update medication reminder status
// @route   PUT /api/medications/:id/reminder
// @access  Private
exports.updateReminderStatus = async (req, res) => {
  try {
    const medication = await Medication.findById(req.params.id);

    if (!medication) {
      return res.status(404).json({ msg: 'Medication not found' });
    }

    medication.reminderSent = req.body.reminderSent;
    await medication.save();

    res.json(medication);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
