// models/profileModel.js
const db = require('../db');

exports.getUserById = (id) => {
    return db.query(
        "SELECT id, name, email, email_updates FROM users WHERE id = ?",
        [id]
    );
};

exports.updateEmailPreferences = (id, email_updates) => {
    return db.query(
        "UPDATE users SET email_updates = ? WHERE id = ?",
        [email_updates ? 1 : 0, id]
    );
};

exports.updatePassword = (id, password) => {
    return db.query(
        "UPDATE users SET password_hash = ? WHERE id = ?",
        [password, id]
    );
};
