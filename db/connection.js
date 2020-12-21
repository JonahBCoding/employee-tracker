const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

var showemployees;
var showroles;
var showdepartments;

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "company_db",
});

connection.connect(function (err) {
  if (err) throw err;
  initApp();
  console.log("Connected!");
  connection.query("SELECT * from role", function (error, res) {
    showroles = res.map((role) => ({ name: role.title, value: role.id }));
  });
  connection.query("SELECT * from department", function (error, res) {
    showdepartments = res.map((dep) => ({ name: dep.name, value: dep.id }));
  });
  connection.query("SELECT * from employee", function (error, res) {
    // console.log(error, res);
    showemployees = res.map((emp) => ({
      name: `${emp.first_name} ${emp.last_name}`,
      value: emp.id,
    }));
  });
});

async function initApp() {
  //initial questions
  await inquirer
    .prompt({
      message: "What would you like to do?",
      name: "initialQuestions",
      type: "list",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add a employee",
        "Update an Employee Role",
        "Quit",
      ],
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
          return viewDepartments();
          break;

        case "Add a role":
          addRole();
          break;

        case "Add a employee":
          return addEmployee();
          break;

        case "Update an Employee Role":
          updateRole();
          break;

        case "Quit":
          connection.end();
          break;
      }
    });
}

async function addDepartment() {
  await inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "What is the department name?",
      },
    ])
    .then(function (res) {
      return connection.query(
        "INSERT INTO department (name) VALUES (?)",
        [res.department],
        function (err, data) {
          if (err) throw err;
          console.table("Department Added!");
          initApp();
        }
      );
    });
}

async function viewDepartments() {
  connection.query("SELECT * FROM department", function (err, data) {
    console.table(data);
    initApp();
  });
}

async function addEmployee() {
  await inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the employee's last name?",
      },

      {
        type: "input",
        name: "managerId",
        message: "Who is the employee's Manager?",
      },
      {
        type: "list",
        name: "title",
        message: "What is the employee's title?",
        choices: showroles,
      },
    ])
    .then(async function (res) {
      await connection.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [res.firstName, res.lastName, res.title, res.managerId],
        function (err, data) {
          if (err) throw err;
          console.table("Employee added!");
          initApp();
        }
      );
    });
}

async function viewEmployees() {
  await connection.query("SELECT * FROM employee", function (err, data) {
    console.table(data);
    initApp();
  });
}

async function updateRole() {
  await inquirer
    .prompt([
      {
        type: "list",
        name: "empId",
        message: "Which employee's role would you like to update?",
        choices: showemployees,
      },
      {
        type: "list",
        name: "roleId",
        message: "What is the Employee's new Role?",
        choices: showroles,
      },
    ])
    .then(async function (response) {
      return updateEmployeeRole(response);
    });
}

async function updateEmployeeRole(data) {
  connection.query(
    `UPDATE employee SET role_id = ${data.roleId} WHERE id = ${data.empId}`,
    function (err, res) {
      if (err) throw err;
      console.table(res)
      initApp()
    });
}

async function addRole() {
  await inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: " What is the name of the new employee title?",
      },
      {
        name: "salary",
        type: "input",
        message: "What is the salary of this title?",
      },
      {
        name: "id",
        type: "list",
        message: "Which Department does this title work in?",
        choices: showdepartments,
      },
    ])
    .then(async function (response) {
      return addEmployeeRole(response);
    });
}

async function addEmployeeRole(role) {
  return connection.query(
    "INSERT INTO role SET ?",
    {
      title: role.title,
      salary: role.salary,
      department_id: role.id,
    },
    function (err, res) {
      if (err) throw err;
      console.table(res);
      initApp();
    }
  );
}

async function viewRoles() {
  connection.query("SELECT * from role", function (err, res) {
    if (err) throw err;
    console.table(res);
  });
  initApp();
}

module.exports = connection;
