const Itinerary = require('../models/itineraryModel');

const createItinerary = async (userId, itineraryData) => {
  const itinerary = await Itinerary.create({ ...itineraryData, userId });
  return itinerary;
};

const getUserItineraries = async (userId) => {
  return await Itinerary.find({ userId }).sort({ createdAt: -1 });
};

module.exports = { createItinerary, getUserItineraries };
