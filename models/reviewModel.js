// models/reviewModel.js
const db = require('../db');

exports.getAll = () => {
    return db.query(
        "SELECT name, rating, comment, created_at FROM reviews ORDER BY created_at DESC"
    );
};

exports.create = (name, rating, comment) => {
    return db.query(
        "INSERT INTO reviews (name, rating, comment) VALUES (?, ?, ?)",
        [name, rating, comment]
    );
};
