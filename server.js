// const mysql = require('mysql');
// const inquirer = require('inquirer');
// const consoleTable = require('console.table');
//const promisemysql = require('promise-mysql')
const connection = require('./db/connection')

// async function initApp() {
//     //initial questions
//     await inquirer.prompt({
//         message: "What would you like to do?",
//         name: "initialQuestions",
//         type: "list",
//         choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add a employee', 'Update an Employee Role', 'Quit']
//     })
//         .then(function (answer) {

//             switch (answer.initialQuestions) {
//                 default:
//                     console.log("Please choose an option above");

//                     break;
//                 case "Add a department":
//                     addDepartment();
//                     break;


//                 case "View all roles":
//                     viewRoles();
//                     break;

//                 case "View all employees":
//                     viewEmployees();
//                     break;

//                 case "View all departments":
//                     viewDepartments();
//                     break;

//                 case "Add a role":
//                     addRole();
//                     break;

//                 case "Add a employee":
//                     addEmployee();
//                     break;

//                 case "Update an Employee Role":
//                     updateRole();
//                     break;

//                 case "Quit":
//                     connection.end();
//                     break;
//             }
//         })
// }



