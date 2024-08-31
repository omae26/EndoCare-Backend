const mongoose = require("mongoose");

const specialistSchema = new mongoose.Schema({
  specialist_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  profile_img: {
    type: String,  
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Specialist = mongoose.model("Specialist", specialistSchema);

module.exports = Specialist;
