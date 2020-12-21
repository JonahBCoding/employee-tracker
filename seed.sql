

INSERT INTO department (name)
VALUES ("Management");

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Accounting");

INSERT INTO department (name)
VALUES ("Warehouse");

INSERT INTO department (name)
VALUES ("Human Resources")

INSERT INTO role (title, salary, department_id)
VALUES ("Regional Manager", 150000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 90000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 70000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Warehouse Worker", 50000, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("HR Representative", 90000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Scott", 1, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dwight", "Schrute", 2, "Michael Scott");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jim", "Halpert", 2, "Michael Scott");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Phyllis", "Vance", 2, "Michael Scott");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Stanley", "Hudson", 2, "Michael Scott");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Andrew", "Bernard", 2, "Michael Scott");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Angela", "Martin", 3, "Michael Scott");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Oscar", "Martinez", 3, "Michael Scott");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kevin", "Malone", 3, "Michael Scott");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Toby", "Flenderson", 5, "Michael Scott");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Holly", "Flax", 5, "Michael Scott");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Darryl", "Robinson", 4, "Michael Scott");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lonny", "Collins", 4, "Michael Scott");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Medge", "Madsen", 4, "Michael Scott");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jerry", "DiCanio", 4, "Michael Scott");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Hidetoshi", "Hasagawa", 4, "Michael Scott");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Val", "Johnson", 4, "Michael Scott");



