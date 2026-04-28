const Booking = require('../models/Booking');
const Counsellor = require('../models/Counsellor');
const asyncHandler = require('express-async-handler');
const sendEmail = require('../utils/sendEmail');

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Private
const createBooking = asyncHandler(async (req, res) => {
    const { counsellorId, date, timeSlot, notes, amount } = req.body;

    const counsellor = await Counsellor.findById(counsellorId);
    if (!counsellor) {
        res.status(404);
        throw new Error('Counsellor not found');
    }

    const booking = await Booking.create({
        user: req.user._id,
        counsellor: counsellorId,
        date,
        timeSlot,
        notes,
        amount
    });

    // Increment counsellor's total sessions
    counsellor.totalSessions += 1;
    await counsellor.save();

    // Send email notification to user
    try {
        await sendEmail({
            email: req.user.email,
            subject: 'Counseling Session Booked',
            message: `
        <h3>Your session is booked!</h3>
        <p><strong>Counsellor:</strong> ${counsellor.name}</p>
        <p><strong>Date:</strong> ${new Date(date).toDateString()}</p>
        <p><strong>Time Slot:</strong> ${timeSlot}</p>
        <p>A meeting link will be shared once the booking is confirmed.</p>
      `
        });
    } catch (error) {
        console.error('Email failed to send:', error.message);
    }

    res.status(201).json({ success: true, data: booking });
});

// @desc    Get my bookings
// @route   GET /api/bookings/my
// @access  Private
const getMyBookings = asyncHandler(async (req, res) => {
    const bookings = await Booking.find({ user: req.user._id })
        .populate('counsellor', 'name title image')
        .sort({ date: -1 });

    res.json({ success: true, count: bookings.length, data: bookings });
});

// @desc    Get all bookings
// @route   GET /api/bookings
// @access  Private/Admin
const getAllBookings = asyncHandler(async (req, res) => {
    const bookings = await Booking.find()
        .populate('user', 'name email')
        .populate('counsellor', 'name title')
        .sort({ createdAt: -1 });

    res.json({ success: true, count: bookings.length, data: bookings });
});

// @desc    Update booking status
// @route   PUT /api/bookings/:id
// @access  Private/Admin
const updateBookingStatus = asyncHandler(async (req, res) => {
    const { status, meetingLink, paymentStatus } = req.body;
    const booking = await Booking.findById(req.params.id).populate('user');

    if (!booking) {
        res.status(404);
        throw new Error('Booking not found');
    }

    booking.status = status || booking.status;
    booking.meetingLink = meetingLink || booking.meetingLink;
    booking.paymentStatus = paymentStatus || booking.paymentStatus;

    await booking.save();

    // Notify user if confirmed
    if (status === 'confirmed' && booking.user) {
        try {
            await sendEmail({
                email: booking.user.email,
                subject: 'Booking Confirmed',
                message: `
          <h3>Your booking has been confirmed!</h3>
          <p><strong>Status:</strong> Confirmed</p>
          ${booking.meetingLink ? `<p><strong>Meeting Link:</strong> <a href="${booking.meetingLink}">${booking.meetingLink}</a></p>` : ''}
        `
            });
        } catch (error) {
            console.error('Email failed to send:', error.message);
        }
    }

    res.json({ success: true, data: booking });
});

module.exports = {
    createBooking,
    getMyBookings,
    getAllBookings,
    updateBookingStatus,
};
