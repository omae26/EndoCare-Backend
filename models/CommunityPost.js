const mongoose = require("mongoose");

const communityPostSchema = new mongoose.Schema({
  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const CommunityPost = mongoose.model('CommunityPost', communityPostSchema);

module.exports = CommunityPost;
