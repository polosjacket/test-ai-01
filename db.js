const Database = require('better-sqlite3');
const path = require('path');

// Connect to or create the database
const db = new Database(path.join(__dirname, 'users.db'));

// Create the users table
db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

module.exports = db;
