const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 8080;  // Porta alterada para 8080

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

app.get('/', (req, res) => {
  res.send("Hello from Node.js and PostgreSQL!");
});

app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT 'Connected to PostgreSQL!' AS message");
    const message = result.rows[0].message;
    client.release();
    res.json({ message });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database connection error' });
  }
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
