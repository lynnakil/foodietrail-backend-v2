// controllers/restaurantController.js
const restaurantModel = require('../models/restaurantModel');


exports.getAllRestaurants = async (req, res) => {
  try {
    console.log("HITTING /api/restaurants");
    const [rows] = await restaurantModel.getAll();
    res.json(rows);
  } catch (err) {
    console.error("ERROR in getAllRestaurants:", err);
    res.status(500).json({ error: "Failed to load restaurants" });
  }
};

exports.getByCuisine = async (req, res) => {
  try {
    console.log("HITTING /api/restaurants/" + req.params.cuisine);
    const [rows] = await restaurantModel.getByCuisine(req.params.cuisine);
    res.json(rows);
  } catch (err) {
    console.error("ERROR in getByCuisine:", err);
    res.status(500).json({ error: "Failed to load cuisine restaurants" });
  }
};
