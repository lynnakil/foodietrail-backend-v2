// controllers/profileController.js
const profileModel = require('../models/profileModel');

exports.getProfile = async (req, res) => {
    try {
        const [rows] = await profileModel.getUserById(req.params.id);
        if (rows.length === 0)
            return res.status(404).json({ error: "User not found" });

        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: "Failed to load profile" });
    }
};

exports.updatePreferences = async (req, res) => {
    const { email_updates } = req.body;

    try {
        await profileModel.updateEmailPreferences(req.params.id, email_updates);
        res.json({ message: "Preferences updated" });
    } catch (err) {
        res.status(500).json({ error: "Failed to update preferences" });
    }
};

exports.changePassword = async (req, res) => {
    const { newPassword } = req.body;

    try {
        await profileModel.updatePassword(req.params.id, newPassword);
        res.json({ message: "Password updated successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to update password" });
    }
};
