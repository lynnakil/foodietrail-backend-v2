// models/authModel.js
const db = require('../db');

exports.findUserByEmail = (email) => {
    return db.query(
        "SELECT * FROM users WHERE email = ?",
        [email]
    );
};

exports.createUser = (name, email, password) => {
    return db.query(
        "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
        [name, email, password]
    );
};
