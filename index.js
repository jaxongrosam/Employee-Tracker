const inquirer = require("inquirer");
const db = require("./db");
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
      name: "menu",
      message: "What would you like to do?",
      choices: [
        "View all employees",
        "View all roles",
        "View all departments",
        "Add employee",
        "Add role",
        "Add department",
        "Update employee role",
        "Update an employee manager",
        "View employees by manager",
        "View employees by department",
        "Delete an employee",
        "Delete a role",
        "Delete a department",
        "View budget",
        "Quit",
      ],
    },
  ]);

  switch (questions.menu) {
    case "View all employees":
      findAllEmployees();
      break;

    case "View all roles":
      findAllRoles();
      break;

    case "View all departments":
      findAllDepartments();
      break;

    case "Add employee":
      createEmployee();
      break;

    case "Add role":
      createRole();
      break;

    case "Add department":
      createDepartment();
      break;

    case "Update employee role":
      updateEmployeeRole();
      break;

    case "Update an employee manager":
      updateManager();
      break;

    case "View employees by mangaer":
      findEmployeesByManager();
      break;

    case "View employees by department":
      findEmployeesByDepartment();
      break;

    case "Delete an employee":
      removeEmployee();
      break;

    case "Delete a role":
      removeRole();
      break;

    case "Delete a department":
      removeDepartment();
      break;

    case "View budget":
      viewDepartmentBudgets();
      break;

    case "Quit":
      process.exit(0);
  }
}

menu();
