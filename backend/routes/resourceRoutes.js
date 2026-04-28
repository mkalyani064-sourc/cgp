const express = require('express');
const router = express.Router();
const {
    getResources,
    getResource,
    createResource,
    updateResource,
    deleteResource,
} = require('../controllers/resourceController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
    .get(getResources)
    .post(protect, admin, createResource);

router.route('/:id')
    .get(getResource)
    .put(protect, admin, updateResource)
    .delete(protect, admin, deleteResource);

module.exports = router;
