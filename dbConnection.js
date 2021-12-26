const mysql = require('mysql');
let dbConfigObj;

if (process.env.NODE_ENV === 'production') {
  console.log('### dbConnection.js > mysql connection 설정 - prod');
  dbConfigObj = {
    connectionLimit: 20,
    host: process.env.endpoint,
    user: process.env.username,
    password: process.env.pw,
    database: process.env.database,
    multipleStatements: true,
  };
} else if (process.env.NODE_ENV === 'development') {
  console.log('### dbConnection.js > mysql connection 설정 - dev');
  dbConfigObj = {
    connectionLimit: 20,
    host: process.env.endpoint,
    user: process.env.username,
    password: process.env.pw,
    database: process.env.database,
    multipleStatements: true,
  };
}

module.exports = {
  dbPool: mysql.createPool(dbConfigObj), // createPool 사용
};
