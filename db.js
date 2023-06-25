const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'CRUD',
  password: 'Moizmoiz1995',
  port: 5432, // default PostgreSQL port
});

module.exports = pool;
