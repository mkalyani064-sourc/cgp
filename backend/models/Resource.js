const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['article', 'guide', 'video', 'tool'],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  content: {
    type: mongoose.Schema.Types.Mixed, // For rich content
    default: {}
  },
  tags: [String],
  author: {
    name: String,
    role: String,
    image: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  readTime: String,
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },
  saves: {
    type: Number,
    default: 0
  },
  path: String,
  isActive: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Resource', resourceSchema);