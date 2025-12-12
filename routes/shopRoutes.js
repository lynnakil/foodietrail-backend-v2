// routes/shopRoutes.js
const express = require('express');
const shopController = require('../controllers/shopController');
const router = express.Router();

router.get('/products', shopController.getProducts);

module.exports = router;
