// controllers/reviewController.js
const reviewModel = require('../models/reviewModel');

exports.getReviews = async (req, res) => {
    try {
        const [rows] = await reviewModel.getAll();
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: "Failed to load reviews" });
    }
};

exports.addReview = async (req, res) => {
    const { name, rating, comment } = req.body;

    try {
        await reviewModel.create(name, rating, comment);
        res.status(201).json({ message: "Review added!" });
    } catch (err) {
        res.status(500).json({ error: "Failed to submit review" });
    }
};
