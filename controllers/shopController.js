// controllers/shopController.js
const productModel = require('../models/productModel');

exports.getProducts = async (req, res) => {
    try {
        const [rows] = await productModel.getAll();
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: "Failed to load products" });
    }
};
