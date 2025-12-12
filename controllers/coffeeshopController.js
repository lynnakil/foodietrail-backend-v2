// controllers/coffeeshopController.js
const coffeeshopModel = require('../models/coffeeshopModel');

exports.getAllCoffeeShops = async (req, res) => {
    try {
        const [rows] = await coffeeshopModel.getAll();
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: "Failed to load coffee shops" });
    }
};
