// routes/coffeeshopRoutes.js
const express = require('express');
const coffeeshopController = require('../controllers/coffeeshopController');
const router = express.Router();

router.get('/', coffeeshopController.getAllCoffeeShops);

module.exports = router;
