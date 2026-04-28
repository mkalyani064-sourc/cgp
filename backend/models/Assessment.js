const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['personality', 'aptitude', 'interest'],
    required: true
  },
  answers: mongoose.Schema.Types.Mixed,
  result: {
    type: {
      type: String,
      description: String,
      strengths: [String],
      careers: [String]
    },
    default: {}
  },
  scores: {
    type: Map,
    of: Number
  },
  recommendations: [String],
  completedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Assessment', assessmentSchema);