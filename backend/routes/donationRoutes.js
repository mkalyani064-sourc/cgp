const express = require('express');
const router = express.Router();
const {
    initiateDonation,
    confirmDonation,
    getDonations,
} = require('../controllers/donationController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
    .get(protect, admin, getDonations)
    .post(initiateDonation);

router.post('/confirm', confirmDonation);

module.exports = router;
