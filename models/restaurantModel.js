// models/restaurantModel.js
const db = require('../db');

exports.getAll = () => {
    return db.query("SELECT * FROM restaurants");
};

exports.getByCuisine = (cuisine) => {
    return db.query(
        "SELECT * FROM restaurants WHERE cuisine = ?",
        [cuisine]
    );
};
