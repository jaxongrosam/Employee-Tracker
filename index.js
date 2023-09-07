const inquirer = require("inquirer");
const db = require("./db/");
const logo = require("asciiart-logo");

init();
function init() {
  const logoText = logo({ name: "Employee Manager" }).render();
  console.log(logoText);
}

async function menu() {
  const questions = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Roles",
        "View All Departments",
        "Add Employee",
        "Add Role",
        "Add Department",
        "Update Employee Role",
        "Update An Employee Manager",
        "View Employees By Manager",
        "View Employees By Department",
        "Delete An Employee",
        "Delete A Role",
        "Delete A Department",
        "View Budget",
        "Quit",
      ],
    },
  ]);

  switch (questions.choice) {
    case "View All Employees":
      db.findAllEmployees();
      break;

    case "View All Roles":
      db.findAllRoles();
      break;

    case "View All Departments":
      db.findAllDepartments();
      break;

    case "Add Employee":
      db.createEmployee();
      break;

    case "Add Role":
      db.createRole();
      break;

    case "Add Department":
      db.createDepartment();
      break;

    case "Update Employee Role":
      db.updateEmployeeRole();
      break;

    case "Update An Employee Manager":
      db.updateManager();
      break;

    case "View Employees By Mangaer":
      db.findEmployeesByManager();
      break;

    case "View Employees By Department":
      db.findEmployeesByDepartment();
      break;

    case "Delete An Employee":
      db.removeEmployee();
      break;

    case "Delete A Role":
      db.removeRole();
      break;

    case "Delete A Department":
      db.removeDepartment();
      break;

    case "View Budget":
      db.viewDepartmentBudgets();
      break;

    case "Quit":
      process.exit(0);
  }
}

menu();
