const inquirer = require("inquirer");
const db = require("./db");
const logo = require("asciiart-logo");

init();
function init() {
  const logoText = logo({ name: "Employee Manager" }).render();
  console.log(logoText);
}

async function menu() {
  const answer = await inquirer.createPromptModule([
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
}
