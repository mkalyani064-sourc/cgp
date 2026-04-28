const mongoose = require('mongoose');

const counsellorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  specialization: [String],
  bio: String,
  image: String,
  rating: {
    type: Number,
    default: 4.5
  },
  totalSessions: {
    type: Number,
    default: 0
  },
  availability: [{
    day: String,
    slots: [String]
  }],
  education: [{
    degree: String,
    institution: String,
    year: String
  }],
  languages: [String],
  pricePerSession: Number,
  isAvailable: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Counsellor', counsellorSchema);