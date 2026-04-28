const Assessment = require('../models/Assessment');
const asyncHandler = require('express-async-handler');

// @desc    Submit assessment
// @route   POST /api/assessment
// @access  Private
const submitAssessment = asyncHandler(async (req, res) => {
    const { type, answers, scores, result, recommendations } = req.body;

    const assessment = await Assessment.create({
        user: req.user._id,
        type,
        answers,
        scores,
        result,
        recommendations
    });

    res.status(201).json({
        success: true,
        data: assessment
    });
});

// @desc    Get user assessments
// @route   GET /api/assessment
// @access  Private
const getUserAssessments = asyncHandler(async (req, res) => {
    const assessments = await Assessment.find({ user: req.user._id }).sort({ createdAt: -1 });

    res.json({
        success: true,
        count: assessments.length,
        data: assessments
    });
});

// @desc    Get single assessment
// @route   GET /api/assessment/:id
// @access  Private
const getAssessment = asyncHandler(async (req, res) => {
    const assessment = await Assessment.findById(req.params.id);

    if (!assessment) {
        res.status(404);
        throw new Error('Assessment not found');
    }

    // Check if owner
    if (assessment.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
        res.status(401);
        throw new Error('Not authorized');
    }

    res.json({
        success: true,
        data: assessment
    });
});

module.exports = {
    submitAssessment,
    getUserAssessments,
    getAssessment,
};
