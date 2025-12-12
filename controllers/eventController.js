// controllers/eventController.js
const eventModel = require('../models/eventModel');

exports.getAllEvents = async (req, res) => {
    try {
        const [rows] = await eventModel.getAll();
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: "Failed to load events" });
    }
};

exports.registerForEvent = async (req, res) => {
    const { name, email, event_id } = req.body;

    try {
        await eventModel.register(name, email, event_id);
        res.json({ message: "Registered successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to register" });
    }
};
