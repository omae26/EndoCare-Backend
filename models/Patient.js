const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  profile_img: {
    type: String,
    default: '',
  }
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Password hashing middleware
patientSchema.pre('save', async function(next) {
  if (!this.isModified('passwordHash')) {
    return next();
  }

  // If you need to handle confirmPassword during registration, do it in the route/controller
  // const { confirmPassword } = this; // Access confirmPassword if needed

  const salt = await bcrypt.genSalt(10);
  this.passwordHash = await bcrypt.hash(this.passwordHash, salt);
  next();
});

patientSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.passwordHash);
};

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
