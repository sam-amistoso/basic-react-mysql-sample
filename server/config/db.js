const dotenv = require('dotenv');
dotenv.config();

const config = {
  mysql: {
    connectionLimit: 500,
    host: 'localhost',
    port: 3306,
    database: process.env.dbname,
    user: process.env.dbuser,
    password: process.env.dbpass,
  },
};

module.exports = config;
