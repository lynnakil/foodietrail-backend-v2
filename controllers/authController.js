// controllers/authController.js
const authModel = require('../models/authModel');

exports.signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const [existing] = await authModel.findUserByEmail(email);
        if (existing.length > 0) {
            return res.status(400).json({ error: "Email already exists" });
        }

        const [result] = await authModel.createUser(name, email, password);

        res.status(201).json({
            id: result.insertId,
            name,
            email
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Signup failed" });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const [rows] = await authModel.findUserByEmail(email);
        const user = rows[0];

        if (!user || user.password_hash !== password) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        res.json({
            id: user.id,
            name: user.name,
            email: user.email,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Login failed" });
    }
};
