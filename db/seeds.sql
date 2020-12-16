INSERT INTO employee(first_name, last_name, role_id)
VALUES
("Chris", "Cooley", 1),
("Star", "Cooley", 2),
("Jeff", "McKone", 3),
("Daniel", "Rincon", 4),
("Peter", "Stead", 5),
("Steve", "Lewis", 6),
("Eli", "Pederson", 7),
("Andrew", "Calder", 8);

INSERT INTO department(department_name)
VALUES
("Accounting"),
("Human Resources"),
("Marketing"),
("Sales"),
("Technology");

INSERT INTO role(title, salary, department_id)
VALUES
("Accountant", 55000, 1),
("Hiring Manager", 50000, 2),
("Marketing Research Director", 115000, 3),
("Sales Rep", 45000, 4),
("Web Developer", 125000, 5);

UPDATE `employeeDB`, `employee` SET `manager_id` = "1" WHERE (`id` >= "1");