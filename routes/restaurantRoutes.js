// routes/restaurantRoutes.js
const express = require('express');
const restaurantController = require('../controllers/restaurantController');
const router = express.Router();

router.get('/', restaurantController.getAllRestaurants);
router.get('/:cuisine', restaurantController.getByCuisine);

module.exports = router;
