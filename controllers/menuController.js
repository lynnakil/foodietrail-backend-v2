// controllers/menuController.js
const menuModel = require('../models/menuModel');

exports.getMenu = async (req, res) => {
    const { placeId, type } = req.query;

    if (!placeId || !type) {
        return res.status(400).json({ error: "placeId and type required" });
    }

    try {
        const [rows] = await menuModel.getMenu(placeId, type);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: "Failed to load menu" });
    }
};
