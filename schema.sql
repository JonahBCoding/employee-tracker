DROP DATABASE IF EXISTS companydb;
CREATE DATABASE companydb;
USE companydb;


CREATE TABLE employees (
    employeeId INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    employeeId INT NOT NULL,
    managerId INT NOT NULL,
    PRIMARY KEY (role_id)
);

CREATE TABLE employee_role (
    role_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    department VARCHAR(30) NOT NULL,
    salary VARCHAR(30) NOT NULL,
    PRIMARY KEY (role_id)
);
CREATE TABLE department (
    role_id INT AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (role_id)
);