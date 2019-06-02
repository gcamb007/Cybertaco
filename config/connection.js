const mysql = require ("mysql");

const connection = mysql.createConnection({
host:"127.0.0.1",
user:"root",
password:"password",
database:"taco_db"});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("Connected as id " + connection.threadId);
  });

module.exports = connection;