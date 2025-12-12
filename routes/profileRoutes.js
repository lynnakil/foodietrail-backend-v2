// routes/profileRoutes.js
const express = require('express');
const profileController = require('../controllers/profileController');
const router = express.Router();

router.get('/:id', profileController.getProfile);
router.put('/:id/preferences', profileController.updatePreferences);
router.put('/:id/password', profileController.changePassword);

module.exports = router;
