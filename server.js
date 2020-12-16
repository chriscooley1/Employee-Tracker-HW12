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

function runApp(){
    inquirer
        .prompt({
            name: "menu",
            type: "list",
            message: "what do you want to do?\n",
            choices: [
                "View Employees",
                "View Roles",
                "View Departments",
                "Add Employee",
                "Add Role",
                "Add Department",
                "Update Employee's Role",
                "Exit",
            ],
        })
        .then(function (res){
            console.log("You entered: " + res.menu);
            switch (res.menu){
                case "View Employees":
                    viewEmployees();
                    runApp();
                    break;
                case "View Roles":
                    viewRoles();
                    runApp();
                    break;
                case "View Departments":
                    viewDepartments();
                    runApp();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Add Department":
                    addDepartment();
                    break;
                case "Update Employee's Role":
                    updateEmployeeRole();
                    break;
                case "Exit":
                    connection.end();
                    break;
            }
        });
    
    
}