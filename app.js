const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/Employee");

function promptUser() {
    inquirer
        .prompt([{
            type: 'input',
            name: 'name',
            message: "What is the employee's name?"
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the employee's email?`
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the employee's id?`
        },
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role?",
            choices: ["Manager", "Engineer", "Intern"]
        }
    ]).then(response => {
        var newEmployee = new Employee(response.name, response.email, response.id);
        var role = response.role;
        switch (role) {
            case 'Manager': 
                managerQ(newEmployee.name, newEmployee.email, newEmployee.id);
                break;
            case 'Engineer': 
                engineerQ(newEmployee.name, newEmployee.email, newEmployee.id);
                break;
            case 'Intern': 
                internQ(newEmployee.name, newEmployee.email, newEmployee.id);
                break;
        };
    })
}

function managerQ() {

}

function engineerQ() {

}

function internQ() {
    
}

promptUser();