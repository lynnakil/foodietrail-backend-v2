// models/contactModel.js
const db = require('../db');

exports.create = (name, email, spot, message) => {
    return db.query(
        "INSERT INTO contact_messages (name, email, spot, message) VALUES (?, ?, ?, ?)",
        [name, email, spot, message]
    );
};
