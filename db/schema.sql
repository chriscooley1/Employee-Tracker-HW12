DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE employee(
    id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    role_id INT,
    manager_id INT,
    PRIMARY KEY(id)
);
CREATE TABLE department(
    id INTEGER NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(50),
    PRIMARY KEY(id)
);
CREATE TABLE role(
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(50),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY(id)
);