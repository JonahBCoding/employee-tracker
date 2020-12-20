const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require(console.table)
//const index = require('./index')
// const promisemysql = require('promise-mysql')

const showEmployees;
const connection = mysql.createConnection({

    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "companydb"
});

connection.connect(function (err) {
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
                    var sql = "CREATE TABLE employees (firstName VARCHAR(30), lastName(30), employeeId VARCHAR(30), managerId VARCHAR(30) VALUE S(?, ?, ?, ?))";
                    connection.query(sql, function (err) {
                        if (err) throw err;
                        console.table("Employee Table Created!")
                    });
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
    },]).then(function (res) {
        connection.query("INSERT INTO department (department_name) VALUES (?)", [res.department], function (err, data) {
            if (err) throw err;
            console.table("Department Added!");
            initApp();
        })
    })
}

async function viewDepartments() {
    connection.query("SELECT * FROM department", function (err, data) {
        console.table(data);
        initApp();
    })
}

async function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the employee's last name?"
        },
        {
            type: "input",
            name: "salary",
            message: "What is the employee's salary?"
        },
        {
            type: "input",
            name: "employeeId",
            message: "What is the employee's role?"
        },
        {
            type: "input",
            name: "managerId",
            message: "Who is the employee's Manager?"
        }
    ])
        .then(function (res) {
            connection.query('INSERT INTO employees (firstName, lastName, salary, employeeId, managerId) VALUES (?, ?, ?, ?)', [res.firstName, res.lastName, res.employeeId, res.managerId], function (err, data) {
                    if (err) throw err;
                    console.table("Employee added!")
                    initApp();
                })
        })

}

async function viewEmployees() {
    connection.query("SELECT * FROM employees", function (err, data) {
        console.table(data);
        initApp();
    })
}

async function updateRole() {
    inquirer.prompt([
        {
            type: "list",
            name: "employeeId",
            message: "Which employee's role would you like to update?",
            choices: showEmployees
        },
        {
            type: "list",
            name: "roleId",
            message: "What is the Employee's new Role?",
            choices: showRoles
        }
    ])
    .then(function(response) {
        updateEmployeeRole(response);
    });

}


module.exports = connection;

