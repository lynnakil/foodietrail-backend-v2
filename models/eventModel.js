// models/eventModel.js
const db = require('../db');

exports.getAll = () => {
    return db.query(
        "SELECT * FROM events ORDER BY event_date"
    );
};

exports.register = (name, email, event_id) => {
    return db.query(
        "INSERT INTO event_registrations (name, email, event_id) VALUES (?, ?, ?)",
        [name, email, event_id]
    );
};
