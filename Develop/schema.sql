DROP DATABASE IF EXISTS employeesDB;
CREATE database employeesDB;
USE employeesDB;

CREATE TABLE departments (
	department_id INT NOT NULL,
	name VARCHAR(30),
    PRIMARY KEY (department_id)
);

CREATE TABLE roles (
	role_id INT NOT NULL,
	title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (role_id),
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);
    
CREATE TABLE employees (
  id int AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  PRIMARY KEY(id),
  FOREIGN KEY (role_id) REFERENCES roles(role_id)
);

INSERT INTO departments (department_id, name)
VALUES (1, "IT");

INSERT INTO departments (department_id, name)
VALUES (2, "HR");

INSERT INTO roles (role_id, title, salary, department_id)
VALUES (1, "Junior Developer", 65.5, 1);

INSERT INTO roles (role_id, title, salary, department_id)
VALUES (2, "Senior Developer", 85.5, 1);

INSERT INTO roles (role_id, title, salary, department_id)
VALUES (3, "Manager", 75.5, 2);

INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Barry", "Allen", 1);

INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Peter", "Parker", 1);

INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Tony", "Stark", 2);

INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Bruce", "Wayne", 2);

INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Steve", "Rogers", 3);

INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Clark", "Kent", 3);

SELECT * FROM employees;