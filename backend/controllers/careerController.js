const Career = require('../models/Career');
const asyncHandler = require('express-async-handler');

// @desc    Get all careers
// @route   GET /api/careers
// @access  Public
const getCareers = asyncHandler(async (req, res) => {
    const { stream, search } = req.query;
    let query = {};

    if (stream) {
        query.stream = stream;
    }

    if (search) {
        query.title = { $regex: search, $options: 'i' };
    }

    const careers = await Career.find(query);
    res.json({ success: true, count: careers.length, data: careers });
});

// @desc    Get single career
// @route   GET /api/careers/:id
// @access  Public
const getCareer = asyncHandler(async (req, res) => {
    const career = await Career.findById(req.params.id);

    if (!career) {
        res.status(404);
        throw new Error('Career not found');
    }

    res.json({ success: true, data: career });
});

// @desc    Create career
// @route   POST /api/careers
// @access  Private/Admin
const createCareer = asyncHandler(async (req, res) => {
    const career = await Career.create(req.body);
    res.status(201).json({ success: true, data: career });
});

// @desc    Update career
// @route   PUT /api/careers/:id
// @access  Private/Admin
const updateCareer = asyncHandler(async (req, res) => {
    const career = await Career.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if (!career) {
        res.status(404);
        throw new Error('Career not found');
    }

    res.json({ success: true, data: career });
});

// @desc    Delete career
// @route   DELETE /api/careers/:id
// @access  Private/Admin
const deleteCareer = asyncHandler(async (req, res) => {
    const career = await Career.findById(req.params.id);

    if (!career) {
        res.status(404);
        throw new Error('Career not found');
    }

    await career.deleteOne();
    res.json({ success: true, data: {} });
});

module.exports = {
    getCareers,
    getCareer,
    createCareer,
    updateCareer,
    deleteCareer,
};
