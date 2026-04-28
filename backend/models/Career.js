const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  stream: {
    type: String,
    enum: ['science', 'commerce', 'arts', 'technology', 'design'],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg'
  },
  duration: String,
  eligibility: String,
  salary: String,
  specializations: [String],
  topColleges: [{
    name: String,
    ranking: String,
    location: String
  }],
  skills: [String],
  careerPaths: [{
    role: String,
    companies: String,
    salary: String
  }],
  resources: [{
    name: String,
    link: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Career', careerSchema);