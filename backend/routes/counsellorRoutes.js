const express = require('express');
const router = express.Router();
const {
    getCounsellors,
    getCounsellor,
    createCounsellor,
    updateCounsellor,
    deleteCounsellor,
} = require('../controllers/counsellorController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
    .get(getCounsellors)
    .post(protect, admin, createCounsellor);

router.route('/:id')
    .get(getCounsellor)
    .put(protect, admin, updateCounsellor)
    .delete(protect, admin, deleteCounsellor);

module.exports = router;
