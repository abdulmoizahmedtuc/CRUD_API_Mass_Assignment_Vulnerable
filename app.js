const express = require('express');
const pool = require('./db'); // Import the PostgreSQL connection

const app = express();
app.use(express.json()); // Parse JSON request bodies

// Define API routes
app.get('/users', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post('/users', async (req, res) => {
  const { name, email } = req.body;

  try {
    const { rows } = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Add other CRUD routes as needed

const port = 3000; // Choose a port number

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

