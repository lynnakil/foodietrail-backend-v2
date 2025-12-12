// routes/reviewRoutes.js
const express = require('express');
const reviewController = require('../controllers/reviewController');
const router = express.Router();

router.get('/', reviewController.getReviews);
router.post('/', reviewController.addReview);

module.exports = router;
