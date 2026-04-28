const express = require('express');
const router = express.Router();
const {
    getCareers,
    getCareer,
    createCareer,
    updateCareer,
    deleteCareer,
} = require('../controllers/careerController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
    .get(getCareers)
    .post(protect, admin, createCareer);

router.route('/:id')
    .get(getCareer)
    .put(protect, admin, updateCareer)
    .delete(protect, admin, deleteCareer);

module.exports = router;
