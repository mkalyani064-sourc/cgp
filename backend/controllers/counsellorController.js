const Counsellor = require('../models/Counsellor');
const asyncHandler = require('express-async-handler');

// @desc    Get all counsellors
// @route   GET /api/counsellors
// @access  Public
const getCounsellors = asyncHandler(async (req, res) => {
    const { specialization, search } = req.query;
    let query = { isAvailable: true };

    if (specialization) {
        query.specialization = { $in: [specialization] };
    }

    if (search) {
        query.name = { $regex: search, $options: 'i' };
    }

    const counsellors = await Counsellor.find(query);
    res.json({ success: true, count: counsellors.length, data: counsellors });
});

// @desc    Get single counsellor
// @route   GET /api/counsellors/:id
// @access  Public
const getCounsellor = asyncHandler(async (req, res) => {
    const counsellor = await Counsellor.findById(req.params.id);

    if (!counsellor) {
        res.status(404);
        throw new Error('Counsellor not found');
    }

    res.json({ success: true, data: counsellor });
});

// @desc    Create counsellor
// @route   POST /api/counsellors
// @access  Private/Admin
const createCounsellor = asyncHandler(async (req, res) => {
    const counsellor = await Counsellor.create(req.body);
    res.status(201).json({ success: true, data: counsellor });
});

// @desc    Update counsellor
// @route   PUT /api/counsellors/:id
// @access  Private/Admin
const updateCounsellor = asyncHandler(async (req, res) => {
    const counsellor = await Counsellor.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if (!counsellor) {
        res.status(404);
        throw new Error('Counsellor not found');
    }

    res.json({ success: true, data: counsellor });
});

// @desc    Delete counsellor
// @route   DELETE /api/counsellors/:id
// @access  Private/Admin
const deleteCounsellor = asyncHandler(async (req, res) => {
    const counsellor = await Counsellor.findById(req.params.id);

    if (!counsellor) {
        res.status(404);
        throw new Error('Counsellor not found');
    }

    await counsellor.deleteOne();
    res.json({ success: true, data: {} });
});

module.exports = {
    getCounsellors,
    getCounsellor,
    createCounsellor,
    updateCounsellor,
    deleteCounsellor,
};
