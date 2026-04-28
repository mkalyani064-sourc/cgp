const Resource = require('../models/Resource');
const asyncHandler = require('express-async-handler');

// @desc    Get all resources
// @route   GET /api/resources
// @access  Public
const getResources = asyncHandler(async (req, res) => {
    const { category, search } = req.query;
    let query = { isActive: true };

    if (category) {
        query.category = category;
    }

    if (search) {
        query.$or = [
            { title: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } },
            { tags: { $in: [new RegExp(search, 'i')] } }
        ];
    }

    const resources = await Resource.find(query).sort({ date: -1 });
    res.json({ success: true, count: resources.length, data: resources });
});

// @desc    Get single resource
// @route   GET /api/resources/:id
// @access  Public
const getResource = asyncHandler(async (req, res) => {
    const resource = await Resource.findById(req.params.id);

    if (!resource) {
        res.status(404);
        throw new Error('Resource not found');
    }

    // Increment views
    resource.views += 1;
    await resource.save();

    res.json({ success: true, data: resource });
});

// @desc    Create resource
// @route   POST /api/resources
// @access  Private/Admin
const createResource = asyncHandler(async (req, res) => {
    const resource = await Resource.create(req.body);
    res.status(201).json({ success: true, data: resource });
});

// @desc    Update resource
// @route   PUT /api/resources/:id
// @access  Private/Admin
const updateResource = asyncHandler(async (req, res) => {
    const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    if (!resource) {
        res.status(404);
        throw new Error('Resource not found');
    }

    res.json({ success: true, data: resource });
});

// @desc    Delete resource
// @route   DELETE /api/resources/:id
// @access  Private/Admin
const deleteResource = asyncHandler(async (req, res) => {
    const resource = await Resource.findById(req.params.id);

    if (!resource) {
        res.status(404);
        throw new Error('Resource not found');
    }

    await resource.deleteOne();
    res.json({ success: true, data: {} });
});

module.exports = {
    getResources,
    getResource,
    createResource,
    updateResource,
    deleteResource,
};
