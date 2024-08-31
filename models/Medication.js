const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  medicationName: {
    type: String,
    required: true,
  },
  dosage: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  reminderSent: {
    type: Boolean,
    default: false,
  },
  doseTimesPerDay: {
    type: String,
    required: true,
    enum: ['1x1', '1x2', '1x3'], // Example options
  },
  time1: {
    type: String, // Use a string to store time, e.g., '06:00 AM'
  },
  time2: {
    type: String,
  },
  time3: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Medication = mongoose.model('Medication', medicationSchema);

module.exports = Medication;
