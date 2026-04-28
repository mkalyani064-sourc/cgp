const express = require('express');
const router = express.Router();
const {
    createBooking,
    getMyBookings,
    getAllBookings,
    updateBookingStatus,
} = require('../controllers/bookingController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
    .get(protect, admin, getAllBookings)
    .post(protect, createBooking);

router.get('/my', protect, getMyBookings);

router.route('/:id')
    .put(protect, admin, updateBookingStatus);

module.exports = router;
