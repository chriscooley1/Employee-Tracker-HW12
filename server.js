require("dotenv").config();
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3301,
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "employeeDB",
});

connection.connect(function (err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

