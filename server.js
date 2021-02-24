const mysql = require('mysql');
const inquirer = require ('inquirer');
const app = require ('express') ();

const connection = mysql.createConnection({
    host: 'localhost',
    port:3306,
    user: 'root',
    passowrd: 'zoe041494',
    database: 'employeetracker_db',
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadID}`);
    connection.end();
});

function promptUser = ()=> {
    inquirer.prompt ([
            type: "list",
            message: "Choose option to proceed",
            name: "prompted list",
            choice: ["View All Employees", "View All Roles","Add Role","Add Department","Add Employee", "Update Employee Roles", "View Departments",]
    })

    .then(answer) => {
        console.log('answer', answer);
        switch (answer.action) {
            case "View All Employees":
                viewAllEmployees();
                break;

            case "View all Roles":
                viewAllRoles();
                break;

             case "View Departments":
                viewDepartments();
                break;

            case "Add Role":
                AddRole();
                break;

            case "Add Department":
                AddDepartment();
                break;

            case "Add Employee":
                AddEmployee();
                break;

            case "Update Employee Roles":
                UpdateEmployeeRoles();
                break;
        }
    });
}   
function viewALLEmployees() {
    var query = "SELECT * FROM employee";
        connection.query(query, function(err, res) {
            console.log(`EMPLOYEES:`)
        res.forEach(employee => {
            console.log(`ID: ${employee.id} | Name: ${employee.first_name} ${employee.last_name} | Role ID: ${employee.role_id} | Manager ID: ${employee.manager_id}`);
        });
function viewALLRoles() {
            var query = "SELECT * FROM role";
                connection.query(query, function(err, res) {
                    console.log(`Roles`)
                res.forEach(role => {
                    console.log(`ID: ${role_id} | Title: ${role.title} | Role Salary: ${role.salary} | Department ID: ${role.department_id}`);
                });
function viewDepartments() {
                    var query = "SELECT * FROM department";
                        connection.query(query, function(err, res) {
                            console.log(`Departments`)
                        res.forEach(role => {
                            console.log(`ID: ${department_id} | Name: ${department.name}`);
                        });
function AddDepartment()
   inquirer
       .prompt({
           name: "department",
           type: "input",
          message: "What is the name of the new department?",
  })
    .then(function(answer) {
    var query = "INSERT INTO department (name) VALUES ( ? )";
     connection.query(query, answer.department, function(err, res) {
      console.log(`You have added this department: ${(answer.department).toUpperCase()}.`)
})
viewDepartments();
})
 }

 function AddRole()
  inquirer
    .prompt ({
        name: "role title"
        type: "input"
        message: "What is the name of the new role?"
    },
    {
        name: "salary"
        type: "input"
        message: "What is the salary for this role?"
    },
    {
        name:"Department"
        type: "Input"
        message: "What department will this role report to?"
    })
    .then(function(answer))
     
    connection.query(query, answer.roletitle),
        function(err, res, fields) {
        console.log(`You have added this role: ${(values[0]).toUpperCase()}.`)
    })
    )
