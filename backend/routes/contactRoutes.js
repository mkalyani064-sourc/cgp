const express = require('express');
const router = express.Router();
const {
    sendContactMessage,
    getContactMessages,
    deleteContactMessage,
} = require('../controllers/contactController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
    .post(sendContactMessage)
    .get(protect, admin, getContactMessages);

router.route('/:id')
    .delete(protect, admin, deleteContactMessage);

module.exports = router;
