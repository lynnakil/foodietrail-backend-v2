// models/restaurantModel.js

const db = require('../db');

exports.getAll = async () => {
  console.log("Running SQL: SELECT * FROM restaurants");
  return db.query("SELECT * FROM restaurants");
};

exports.getByCuisine = async (cuisine) => {
  console.log("Running SQL: SELECT * FROM restaurants WHERE cuisine = ?", cuisine);
  return db.query("SELECT * FROM restaurants WHERE cuisine = ?", [cuisine]);
};
