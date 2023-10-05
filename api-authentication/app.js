const express = require('express');
const { Pool } = require('pg');
const cors = require('cors'); // Importe o middleware cors

const app = express();
const port = 3000;
const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: 5432,
});

app.use(express.json());

// Configure o middleware cors para permitir solicitações da origem específica (http://127.0.0.1:8080)
app.use(cors({ origin: 'http://127.0.0.1:8080' }));

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE username = $1 AND password = $2',
      [username, password]
    );

    if (result.rows.length === 1) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Authentication failed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const query = 'INSERT INTO users (username, password) VALUES ($1, $2)';
      const values = [username, password];
  
      await pool.query(query, values);
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
