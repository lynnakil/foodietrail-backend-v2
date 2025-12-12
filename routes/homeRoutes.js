// routes/homeRoutes.js
const express = require('express');
const homeController = require('../controllers/homeController');
const router = express.Router();

router.get('/featured', homeController.getFeaturedDish);

module.exports = router;
