const Contact = require('../models/Contact');
const asyncHandler = require('express-async-handler');
const sendEmail = require('../utils/sendEmail');

// @desc    Send contact message
// @route   POST /api/contact
// @access  Public
const sendContactMessage = asyncHandler(async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    const contact = await Contact.create({
        name,
        email,
        phone,
        subject,
        message
    });

    // Optional: Send email notification to admin
    try {
        await sendEmail({
            email: process.env.EMAIL_USER,
            subject: `New Contact Message: ${subject}`,
            message: `
        <h3>New contact form submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
        });
    } catch (error) {
        console.error('Email failed to send:', error.message);
    }

    res.status(201).json({
        success: true,
        message: 'Message sent successfully'
    });
});

// @desc    Get all contact messages
// @route   GET /api/contact
// @access  Private/Admin
const getContactMessages = asyncHandler(async (req, res) => {
    const messages = await Contact.find().sort({ createdAt: -1 });

    res.json({
        success: true,
        count: messages.length,
        data: messages
    });
});

// @desc    Delete contact message
// @route   DELETE /api/contact/:id
// @access  Private/Admin
const deleteContactMessage = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error('Message not found');
    }

    await contact.deleteOne();
    res.json({ success: true, data: {} });
});

module.exports = {
    sendContactMessage,
    getContactMessages,
    deleteContactMessage,
};
