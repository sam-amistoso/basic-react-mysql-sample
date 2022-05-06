const mysql = require('mysql2');
const config = require('../config/db');
const { connect } = require('../routes/userRoutes');

const db = mysql.createPool(config.mysql);

db.getConnection((err, connect) => {
  if (err) {
    console.log('MySQL Connection Failed! ', err);
  } else {
    console.log('Successfully connected to MySQL');
  }
});

module.exports = db;
