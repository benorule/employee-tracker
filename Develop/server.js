var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "myRootPassword",
  database: "employeesDB"
});

connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View an employee",
        "View all employees",
        "View a role",
        "View all roles",
        "View a department",
        "View all departments",
        "Add an employee",
        "Update an employee's information",
        "Delete an employee's information"
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View an employee":
          viewOne();
          break;

        case "View all employees":
          viewAll();
          break;

        case "View a role":
          viewRole();
          break;

        case "View all roles":
          viewRoles();
          break;

        case "View a department":
          viewDepartment();
          break;

        case "View all departments":
          viewDepartments();
          break;

        case "Add an employee":
          addInfo();
          break;

        case "Update an employee's information":
          updateInfo();
          break;

        case "Delete an employee's information":
          deleteInfo();
          break;
      }
    });
}

function viewOne() {
  inquirer
    .prompt({
      name: "id",
      type: "input",
      message: "Enter employee ID: "
    })
    .then(function (answer) {
      var query = "SELECT id, first_name, last_name, role_id FROM employees WHERE ?";
      connection.query(query, { id: answer.id }, function (err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log(res[i].first_name + " " + res[i].last_name + " (ID: " + res[i].id + ", Role: " + res[i].role_id + ")");
        }
        runSearch();
      });
    });
}

function viewAll() {
  var query = "SELECT * FROM employees";
  connection.query(query, function (err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].first_name + " " + res[i].last_name + " (ID: " + res[i].id + ", Role: " + res[i].role_id + ")");
    }
    runSearch();
  });
}

function addInfo() {
  inquirer
    .prompt({
      name: "first_name",
      type: "input",
      message: "Enter employee's first name: "
    },
    {
      name: "last_name",
      type: "input",
      message: "Enter employee's last name: "
    },
    {
      name: "role_id",
      type: "input",
      message: "Enter employee's role ID: "
    })
    .then(function (answer) {
      var query = "INSERT INTO employees (first_name, last_name, role_id) VALUES (???)";
      connection.query(query, [ answer.first_name, answer.last_name, answer.role_id ], function (err, res) {
        console.log(answer.first_name + answer.last_name + answer.role_id)
        console.log("Employee's information added.");
        runSearch();
      });
    });
}

function updateInfo() {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "Enter employee ID: ",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "role_id",
        type: "input",
        message: "Enter employee's new role ID: ",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function(answer) {
      var query = "UPDATE employees SET ? WHERE ?";
      connection.query(query, [answer.role_id, answer.id], function(err, res) {
          console.log(
            "Employee's information updated."
          );
        runSearch();
      });
    });
}

function deleteInfo() {
        inquirer
          .prompt({
            name: "id",
            type: "input",
            message: "Enter employee ID: "
          })
          .then(function (answer) {
            var query = "DELETE FROM employees WHERE ?";
            connection.query(query, { id: answer.id }, function (err, res) {
              console.log("Employee's information deleted.");
              runSearch();
            });
          });
      }

function viewRole() {
  inquirer
    .prompt({
      name: "role_id",
      type: "input",
      message: "Enter role ID: "
    })
    .then(function(answer) {
      var query = "SELECT role_id, title, salary, department_id FROM roles WHERE ?";
      connection.query(query, { role_id: answer.role_id }, function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log(res[i].title + ", Salary: " + res[i].salary + "k per year (ID: " + res[i].role_id + ", Department: " + res[i].department_id + ")");
        }
        runSearch();
      });
    });
}

function viewRoles() {
  var query = "SELECT * FROM roles";
  connection.query(query, function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].title + " Salary: " + res[i].salary + " (ID: " + res[i].role_id + ", Department: " + res[i].department_id + ")");
    }
    runSearch();
  });
}

function viewDepartment() {
  inquirer
    .prompt({
      name: "department_id",
      type: "input",
      message: "Enter department ID: "
    })
    .then(function(answer) {
      var query = "SELECT name FROM departments WHERE ?";
      connection.query(query, { department_id: answer.department_id }, function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log(res[i].name + " department (ID: " + answer.department_id + ")");
        }
        runSearch();
      });
    });
}

function viewDepartments() {
  var query = "SELECT * FROM departments";
  connection.query(query, function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].name + " (ID: " + res[i].department_id + ")");
    }
    runSearch();
  });
}