const { Pool } = require('pg');

const pool = new Pool({
  user: '<your username here>',
  host: 'localhost',
  database: 'CRUD',
  password: '<your password here>',
  port: 5432, // default PostgreSQL port
});

module.exports = pool;
