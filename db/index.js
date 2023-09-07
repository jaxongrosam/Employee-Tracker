const connection = require("./connection.js");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  // Function for finding employees
  findAllEmployees() {
    return this.connection
      .promise()
      .query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
      );
  }
  // Function to find all employees except for ones with a specific ID
  findAllButSpecificEmployee(employeeId) {
    return this.connection
      .promise()
      .query(
        "SELECT id, first_name, last_name FROM employee WHERE id != ?",
        employeeId
      );
  }
  // Function to create a new employee
  createEmployee(employee) {
    console.log(employee);
    employee = {
      first_name: "JOHN",
      last_name: "DOE",
      role_id: 5,
      manager_id: 1,
    };
    return this.connection
      .promise()
      .query("INSERT INTO employee VALUES (NULL, ?, ?, ?, ?)", [
        employee.first_name,
        employee.last_name,
        employee.role_id,
        employee.manager_id,
      ]);
  }
  // Function to remove a specific employee based on ID
  removeEmployee(employeeId) {
    return this.connection
      .promise()
      .query("DELETE FROM employee WHERE id = ?", employeeId);
  }
  // Function to update an employee's role based on IDs
  updateEmployeeRole(employeeId, roleId) {
    return this.connection
      .promise()
      .query("UPDATE employee SET role_id = ? WHERE id = ?", [
        roleId,
        employeeId,
      ]);
  }
  // Function to update an employee's manager based on IDs
  updateManager(employeeId, managerId) {
    return this.connection
      .promise()
      .query("UPDATE employee SET manager_id = ? WHERE id = ?", [
        managerId,
        employeeId,
      ]);
  }
  // Function to find all employee roles
  findAllRoles() {
    return this.connection
      .promise()
      .query(
        "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
      );
  }
  // Function to create a new role
  createRole(role) {
    return this.connection.promise().query("INSERT INTO role SET ?", role);
  }
  // Function to remove a role from the database
  removeRole(roleId) {
    return this.connection
      .promise()
      .query("DELETE FROM role WHERE id = ?", roleId);
  }
  // Function to find all departments
  findAllDepartments() {
    return this.connection
      .promise()
      .query("SELECT department.id, department.name FROM department;");
  }
  //   Function to find the departments, then join them with the employees and roles to create a sum for the budget of the department
  viewDepartmentBudgets() {
    return this.connection
      .promise()
      .query(
        "SELECT department.id, department.name, SUM(role.salary) AS utilized_budget FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id GROUP BY department.id, department.name;"
      );
  }
  // Function to create a new department
  createDepartment(department) {
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?", department);
  }
  // Function to remove a department from the database
  removeDepartment(departmentId) {
    return this.connection
      .promise()
      .query("DELETE FROM department WHERE id = ?", departmentId);
  }
  // Function to find employees in a department and join them with roles to show role titles
  findEmployeesByDepartment(departmentId) {
    return this.connection
      .promise()
      .query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department department on role.department_id = department.id WHERE department.id = ?;",
        departmentId
      );
  }
  //   Function to find employees based on manager IDs and then join with departments and roles to show roles and departments
  findEmployeesByManager(managerId) {
    return this.connection
      .promise()
      .query(
        "SELECT employee.id, employee.first_name, employee.last_name, department.name AS department, role.title FROM employee LEFT JOIN role on role.id = employee.role_id LEFT JOIN department ON department.id = role.department_id WHERE manager_id = ?;",
        managerId
      );
  }
}

module.exports = new DB(connection);
