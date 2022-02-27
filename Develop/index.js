// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = () => {   
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your project? (Required)',
            name: 'title',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Please provide a description of your project',
            name: 'description',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        },
        {
           type: 'input',
           message: 'What are the steps needed to install this project? (Required)',
           name: 'installation',
           validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Provide instructions and examples on how it works. Include screenshots if needed.'
        }
        
    ]);
};
// Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, rejectt) => {
        fs.writeFile('./dist/ReadME.md', fileContent, err => {
            // If Error, reject Promise and sent error info to catch method
            if (err) {
                rejectt(err);
                return
            }
            // Resolve if everything worked and send data to then method
            resolve({
                ok: true,
                message: 'ReadME file created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
