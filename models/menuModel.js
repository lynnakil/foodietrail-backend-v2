// models/menuModel.js
const db = require('../db');

exports.getMenu = (placeId, type) => {
    return db.query(
        "SELECT * FROM menus WHERE place_id = ? AND place_type = ?",
        [placeId, type]
    );
};
