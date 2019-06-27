const mysql = require("mysql");

const connection = mysql.createConnection(process.env.JAWSDB_URL ||{
  host: "cdm1s48crk8itlnr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "oij2zk50oi2qzsus",
  password: "z5owp7kf6bekqz4w",
  database: "taco_db"
});

connection.connect(function (err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as id " + connection.threadId);
});

module.exports = connection;
