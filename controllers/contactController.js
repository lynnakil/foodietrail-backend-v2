// controllers/contactController.js
const contactModel = require('../models/contactModel');

exports.sendMessage = async (req, res) => {
    const { name, email, spot, message } = req.body;

    try {
        await contactModel.create(name, email, spot, message);
        res.status(201).json({ message: "Message submitted successfully!" });
    } catch (err) {
        res.status(500).json({ error: "Failed to send message" });
    }
};
