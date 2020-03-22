const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/Employee");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./templates/mainHTML');

const employeeList = [];

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

function managerQ(name, email, id) {
    inquirer
        .prompt([{
            type: 'input',
            name: 'officeNumber',
            message: `What is the employee's office phone number?`
        }]).then(answer => {
            var newManager = new Manager(name, id, email, answer.officeNumber);
            employeeList.push(newManager);
            moreEmployees();
        })
}
//something wrong with employeelist?
function engineerQ(name, email, id) {
    inquirer
        .prompt([{
            type: 'input',
            name: 'github',
            message: `What is the employee's github account?`
        }]).then(answer => {
            var newEngineer = new Engineer(name, id, email, answer.github);
            employeeList.push(newEngineer);
            moreEmployees()
        })
}

function internQ(name, email, id) {
    inquirer
    .prompt([{
        type: 'input',
        name: 'school',
        message: `What school is the employee currently attending?`
    }]).then(answer => {
        var newIntern = new Intern(name, id, email, answer.school);
        employeeList.push(newIntern);
        moreEmployees();
    })
}

function moreEmployees() {
    inquirer
        .prompt({
            type: 'input',
            name: 'more',
            message: `If you'd like to add another employee to your team enter 1, if not then enter 0`
        }).then(answer => {
            if(answer.more === '1'){
                promptUser()
            } else {
                var html = generateHTML(employeeList);
                fs.writeFile('teamProfile.html', html, function(err) {
                    if (err) {
                        return console.log(err);
                    } else {
                        console.log('Success!')
                    }
                })
            }
        })
}

promptUser();