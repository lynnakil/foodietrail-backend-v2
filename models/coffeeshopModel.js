// models/coffeeshopModel.js
const db = require('../db');

exports.getAll = () => {
    return db.query("SELECT * FROM coffeeshops");
};
