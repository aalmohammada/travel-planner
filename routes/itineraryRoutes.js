const express = require('express');
const { createItineraryController, getItinerariesController } = require('../controllers/itineraryController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', protect, createItineraryController);
router.get('/', protect, getItinerariesController);

module.exports = router;
