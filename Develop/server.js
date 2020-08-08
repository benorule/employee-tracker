var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "myRootPassword",
  database: "employeesDB"
});

connection.connect(function(err) {
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
        // "View a role",
        // "View all roles",
        // "View a department",
        // "View all departments",
        "Add an employee",
        "Update an employee's information",
        "Delete an employee's information"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "View an employee":
        viewOne();
        break;

      case "View all employees":
        viewAll();
        break;

      // case "View a role":
      //   viewRole();
      //   break;
      
      // case "View all roles":
      //   viewRoles();
      //   break;

      // case "View a department":
      //   viewDepartment();
      //   break;
      
      // case "View departments":
      //   viewDepartment();
      //   break;

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
    .then(function(answer) {
      var query = "SELECT id, first_name, last_name, role_id FROM employees WHERE ?";
      connection.query(query, { id: answer.id }, function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log(res[i].first_name + " " + res[i].last_name + " (ID: " + res[i].id + ", Role: " + res[i].role_id + ")");
        }
        runSearch();
      });
    });
}

function viewAll() {
  var query = "SELECT * FROM employees";
  connection.query(query, function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].first_name + " " + res[i].last_name + " (ID: " + res[i].role_id + ", Role: " + res[i].role_id + ")");
    }
    runSearch();
  });
}

// function viewRole() {
//   inquirer
//     .prompt({
//       name: "role_id",
//       type: "input",
//       message: "Enter role ID: "
//     })
//     .then(function(answer) {
//       var query = "SELECT id, title, salary, department_id FROM roles WHERE ?";
//       connection.query(query, { role_id: answer.role_id }, function(err, res) {
//         for (var i = 0; i < res.length; i++) {
//           console.log(res[i].title + " Salary: " + res[i].salary + " (ID: " + res[i].role_id + ", Department: " + res[i].department_id + ")");
//         }
//         runSearch();
//       });
//     });
// }

// function viewRoles() {
//   var query = "SELECT * FROM roles";
//   connection.query(query, function(err, res) {
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].title + " Salary: " + res[i].salary + " (ID: " + res[i].id + ", Department: " + res[i].department_id + ")");
//     }
//     runSearch();
//   });
// }

// function viewDepartment() {
//   inquirer
//     .prompt({
//       name: "department_id",
//       type: "input",
//       message: "Enter department ID: "
//     })
//     .then(function(answer) {
//       var query = "SELECT name FROM departments WHERE ?";
//       connection.query(query, { department_id: answer.department_id }, function(err, res) {
//         for (var i = 0; i < res.length; i++) {
//           console.log(res[i].name + " (ID: " + res[i].department_id);
//         }
//         runSearch();
//       });
//     });
// }

// function viewDepartments() {
//   var query = "SELECT * FROM departments";
//   connection.query(query, function(err, res) {
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].name + " (ID: " + res[i].department_id);
//     }
//     runSearch();
//   });
// }
