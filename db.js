const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'Rafat#01',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'the end'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};