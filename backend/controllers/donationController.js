const Donation = require('../models/Donation');
const asyncHandler = require('express-async-handler');
const sendEmail = require('../utils/sendEmail');

// @desc    Initiate donation
// @route   POST /api/donations
// @access  Public
const initiateDonation = asyncHandler(async (req, res) => {
    const { name, email, phone, amount, paymentMethod, message, isAnonymous } = req.body;

    const donation = await Donation.create({
        name,
        email,
        phone,
        amount,
        paymentMethod,
        message,
        isAnonymous,
        status: 'pending'
    });

    // Here you would normally integrate with Razorpay or Stripe
    // For now, we'll return the donation object as if it's ready for payment
    res.status(201).json({
        success: true,
        data: donation
    });
});

// @desc    Confirm donation payment
// @route   POST /api/donations/confirm
// @access  Public
const confirmDonation = asyncHandler(async (req, res) => {
    const { donationId, paymentId, status } = req.body;

    const donation = await Donation.findById(donationId);
    if (!donation) {
        res.status(404);
        throw new Error('Donation not found');
    }

    donation.paymentId = paymentId;
    donation.status = status; // 'success' or 'failed'
    await donation.save();

    if (status === 'success') {
        // Send thank you email
        try {
            await sendEmail({
                email: donation.email,
                subject: 'Thank you for your donation!',
                message: `
          <h3>Hello ${donation.name},</h3>
          <p>We have successfully received your donation of ₹${donation.amount}.</p>
          <p>Your support helps us guide more students towards their dream careers.</p>
          <p><strong>Payment ID:</strong> ${paymentId}</p>
        `
            });
        } catch (error) {
            console.error('Email failed to send:', error.message);
        }
    }

    res.json({ success: true, data: donation });
});

// @desc    Get all donations
// @route   GET /api/donations
// @access  Private/Admin
const getDonations = asyncHandler(async (req, res) => {
    const donations = await Donation.find().sort({ createdAt: -1 });

    res.json({
        success: true,
        count: donations.length,
        data: donations
    });
});

module.exports = {
    initiateDonation,
    confirmDonation,
    getDonations,
};
