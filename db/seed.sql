USE employees;

INSERT INTO department (name)
VALUES 
("Accounting"),
("Sales"),
("Human Resources"),
("Quality Assurance");

INSERT INTO role (title, salary, department_id)
VALUES
("Accountant", 65000, 1),
("Salesperson", 70000, 2),
("HR Rep", 120000, 3),
("QA Rep", 80000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("John", "Doe", 1, 7),
("Jane", "Doe", 3, NULL);
