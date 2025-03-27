const itineraryService = require('../services/itineraryService');

const createItineraryController = async (req, res) => {
  try {
    const itinerary = await itineraryService.createItinerary(req.userId, req.body);
    res.status(201).json(itinerary);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getItinerariesController = async (req, res) => {
  try {
    const itineraries = await itineraryService.getUserItineraries(req.userId);
    res.status(200).json(itineraries);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createItineraryController, getItinerariesController };
