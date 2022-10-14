const inquirer = require('inquirer');
const generateHtml = require('./src/generate.html');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const path = require('path')
const fs = require('fs')

const staffTeam = [];

const managerPrompt = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Name of Manager? (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please add manager name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Manager employee ID? (Required)',
        validate: idInput => {
            if(idInput) {
                return true;
            } else {
                console.log('Please enter manager ID number.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter manager email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter managers email address.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: 'Please provide manager office number? (Required)',
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log('Please enter manager office number.');
                return false;
            }
        }
    }
 ]);
};
