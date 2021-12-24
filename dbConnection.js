const mysql = require('mysql');
let dbConfigObj;

console.log('### dbConnection.js > mysql connection 설정 - dev');
dbConfigObj = {
  connectionLimit: 20,
  host: '127.0.0.1',
  user: 'jyoon',
  password: '1004',
  port: '3306',
  database: 'record_welfare',
  multipleStatements: true,
};

module.exports = {
  dbPool: mysql.createPool(dbConfigObj), // createPool 사용
};
