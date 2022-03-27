// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (No @ is necessary) (Required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is the name of your GitHub repo? (Required)',
        validate: repoInput => {
            if (repoInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the name of your project!');
                return false;
            }
        }    
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project. Consider the following. What was your motivation? Why did you build this project? What problem does it solve? What did you learn?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'technologies',
        message: 'What technologies did you use to build this project? (JavaScript, HTML, CSS, JQuery, etc.)',
        validate: technologiesInput => {
            if (technologiesInput) {
                return true;
            } else {
                console.log('Please enter which technologies you used!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmInstall',
        message: 'Are there any steps necessary to install your project?',
        default: true
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps necessary to install this project?',
        when: ({ confirmInstall }) => {
            if (confirmInstall) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples of how to properly use this project.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please tell us how to use your project!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmCollab',
        message: 'Did you collaborate with other people on this project?',
        default: false
    },
    {
        type: 'input',
        name: 'collaboration',
        message: 'Please enter the names of your collaborators and provide links to their github profiles.',
        when: ({ confirmCollab }) => {
            if (confirmCollab) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTest',
        message: 'Are there any tests that have been written for your project?',
        default: false
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide any tests for your project and instructions on how to run them.',
        when: ({ confirmTest }) => {
            if (confirmTest) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'Choose a license for this project',
        choices: ['Apache License 2.0', 'BSD 3-Clause License', 'BSD 2-Clause License', 'GNU GPL', 'GNU LGPL', 'MIT License', 'Mozilla Public License 2.0', 'Common Development and Distribution License', 'Eclipse Public License 2.0']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Congratulations! Your README file has been generated!');
    });
};

// TODO: Create a function to initialize app
function init() {
    const responses = await inquirer.prompt(questions);
    console.log('User Responses: ', responses);

}

// Function call to initialize app
init();
