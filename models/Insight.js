const mongoose = require('mongoose');

const InsightSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ['recommended', 'symptoms', 'food', 'firstAid'],
    required: true
  },
  image_url: { 
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  slides: {
    type: [String],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Insight', InsightSchema);
