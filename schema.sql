CREATE DATABASE employeetracker_db;

USE employeetracker_db;

CREATE TABLE department (
 id  INTEGER NOT NULL AUTO_INCREMENT,
 name VARCHAR(30) NOT NULL,
 PRIMARY KEY (id)
 );
 
 SELECT * FROM department;
 
CREATE TABLE role (
id  INTEGER NOT NULL AUTO_INCREMENT,
title VARCHAR(30) NOT NULL,
salary DECIMAL(10),
department_id INTEGER(10) ,
PRIMARY KEY (id),
FOREIGN KEY (department_id) REFERENCES department(id)
);

SELECT * FROM role;

CREATE TABLE employee (
id INTEGER NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INTEGER(10) NOT NULL,
manager_id INTEGER(10),
PRIMARY KEY (id),
FOREIGN KEY (role_id) REFERENCES role(id)
);

SELECT * FROM employees;

SELECT department.id, department_id, role_id
FROM department, role, employee
WHERE  department.id=role.department_id
AND role.id= employee.role_id LIMIT 0,30
