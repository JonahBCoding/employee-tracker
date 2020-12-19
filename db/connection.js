const mysql = require('mysql');
const inquirer = require('inquirer');
//const consoleTable = require(console.table)
//const index = require('./index')
// const consoleTable = require('console.table');
// const promisemysql = require('promise-mysql')


const connection = mysql.createConnection({

    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "companydb"
});

connection.connect(function(err) {
    if (err) throw err;
    initApp();
    console.log("Connected!");
    })

async function initApp() {
    //initial questions
    await inquirer.prompt({
        message: "What would you like to do?",
        name: "initialQuestions",
        type: "list",
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add a employee', 'Update an Employee Role', 'Quit']
    })
        .then(function (answer) {

            switch (answer.initialQuestions) {
                default:
                    console.log("Please choose an option above");

                    break;
                case "Add a department":
                    addDepartment();
                    break;


                case "View all roles":
                    viewRoles();
                    break;

                case "View all employees":
                    viewEmployees();
                    break;

                case "View all departments":
                    viewDepartments();
                    break;

                case "Add a role":
                    addRole();
                    break;

                case "Add a employee":
                    addEmployee();
                    break;

                case "Update an Employee Role":
                    updateRole();
                    break;

                case "Quit":
                    connection.end();
                    break;
            }
        })
}

 async function addDepartment() {
    inquirer.prompt([{
        type: "input",
        name: "department",
        message: "What is the department name?"
    }, ]).then(function(res) {
        connection.query('INSERT INTO department (department_name) VALUES (?)', [res.department], function(err, data) {
            if (err) throw err;
            console.table("Department Added!");
            initApp();
        })
    })
}

module.exports = connection;

