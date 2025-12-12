// controllers/restaurantController.js
const restaurantModel = require('../models/restaurantModel');

exports.getAllRestaurants = async (req, res) => {
    try {
        const [rows] = await restaurantModel.getAll();
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: "Failed to load restaurants" });
    }
};

exports.getByCuisine = async (req, res) => {
    try {
        const [rows] = await restaurantModel.getByCuisine(req.params.cuisine);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: "Failed to load cuisine restaurants" });
    }
};
