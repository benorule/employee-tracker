DROP DATABASE IF EXISTS employeesDB;
CREATE database employeesDB;

USE employeesDB;

CREATE TABLE employees (
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  FOREIGN KEY (role_id) REFERENCES roles(role_id)
);

CREATE TABLE roles (
	role_id INT NOT NULL,
	title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (role_id),
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);
    
CREATE TABLE departments (
	department_id INT NOT NULL,
	name VARCHAR(30),
    PRIMARY KEY (department_id)
);

INSERT INTO roles (role_id, title, salary, department_id)
VALUES (1, "Junior Developer", 65.5, 1);

INSERT INTO roles (role_id, title, salary, department_id)
VALUES (2, "Senior Developer", 85.5, 1);

INSERT INTO roles (role_id, title, salary, department_id)
VALUES (3, "Manager", 75.5, 2);

INSERT INTO departments (department_id, name)
VALUES (1, "IT");

INSERT INTO departments (department_id, name)
VALUES (2, "HR");