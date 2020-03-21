const inquirer = require('inquirer');
const fs = require('fs');

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
    ]).then(response => console.log(`${response.name}, ${response.email}, ${response.id}, ${response.role}`))}

promptUser();