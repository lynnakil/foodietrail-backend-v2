// routes/eventRoutes.js
const express = require('express');
const eventController = require('../controllers/eventController');
const router = express.Router();

router.get('/', eventController.getAllEvents);
router.post('/register', eventController.registerForEvent);

module.exports = router;
