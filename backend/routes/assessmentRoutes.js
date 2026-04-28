const express = require('express');
const router = express.Router();
const {
  submitAssessment,
  getUserAssessments,
  getAssessment,
} = require('../controllers/assessmentController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, submitAssessment)
  .get(protect, getUserAssessments);

router.route('/:id')
  .get(protect, getAssessment);

module.exports = router;
