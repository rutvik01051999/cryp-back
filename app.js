const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;
const secretKey = 'your_secret_key';  // Change to a strong secret key

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'phpmyadmin',  // Use your MySQL user
  password: 'root',  // Use your MySQL password
  database: 'login_db'
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// POST /register - Register a new user
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Hash the password
  const hashedPassword = bcrypt.hashSync(password, 8);

  // Insert new user into MySQL
  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(query, [username, hashedPassword], (err, result) => {
    if (err) throw err;
    res.json({ message: 'User registered successfully' });
  });
});

// POST /login - Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], (err, result) => {
    if (err) throw err;

    // If no user found
    if (result.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = result[0];

    // Compare password with hashed password
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Create JWT token
    const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' });

    // Respond with token
    return res.json({
      message: 'Login successful',
      token,
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
