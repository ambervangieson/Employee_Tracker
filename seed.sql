INSERT INTO DEPARTMENT (id, name)
VALUES (1,"Warehouse"),(2,"Accounting"),(3,"Sales");

INSERT INTO ROLE (title, salary, department_id)
VALUES("Warehouse", 42000.00, 1),("Warehouse Manager", 70000.00,1),("Accounting", 50000.00, 2),("Accounting Manager", 75000.00, 2),("Sales", 40000.00, 3),("Sales Manager", 60000.00, 3);

INSERT INTO EMPLOYEE (first_name, last_name, role_id, manager_id)
VALUES("Michael","Scott",6,NULL);

INSERT INTO EMPLOYEE (first_name, last_name, role_id, manager_id)
VALUES("Darryl","Philibin",2,1);

INSERT INTO EMPLOYEE (first_name, last_name, role_id, manager_id)
VALUES("Angela","Martin",4,1);

INSERT INTO EMPLOYEE (first_name, last_name, role_id, manager_id)
VALUES("Jim","Halpert",5,1);

INSERT INTO EMPLOYEE (first_name, last_name, role_id, manager_id)
VALUES("Kevin","Malone",3,3);

INSERT INTO EMPLOYEE (first_name, last_name, role_id, manager_id)
VALUES("Roy","Anderson",1,2);



