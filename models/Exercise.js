const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  exercise_name: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Back pain exercises", "joint-pain", "low-effort"],
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
