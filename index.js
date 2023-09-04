const inquirer = require("inquirer");
const db = require("./db");
const logo = require("asciiart-logo");

init();
function init() {
  const logoText = logo({ name: "Employee Manager" }).render();
  console.log(logoText);
}
