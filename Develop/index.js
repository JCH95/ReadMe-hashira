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
                    console.log('Please enter a title for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Please provide a description of your project: (Required)',
            name: 'description',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project.');
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
                    console.log('Please enter the installation steps for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Provide instructions and examples on how the project works. Include screenshots if needed: (Required)',
            name: 'instructions',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide instructions for proper usage of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'List your collaborators, if any, with their GitHub profile links: (Required)',
            type: 'credits',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the collaborators, if any. If none, enter N/A.');
                    return false;
                }
            }
        }
    ]);
};

// List of optional questions
const optionalPrompt = () => {
    console.log(`
===================
Optional Questions
===================
`);
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter any outstanding features of your project here:',
            name: 'features'
        },
        {
            type: 'input',
            message: 'If you would like other developers to contribute to this project, provide steps on how to do so here:',
            name: 'contribute'
        },
        {
            type: 'input',
            message: 'If you wrote tests for your project, provide the examples on how to run them here:',
            name: 'tests'
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
// function init() {}

// Function call to initialize app
// init();
promptUser()
    .then(optionalPrompt)
    // .then(writeFileResponse => {
    //     console.log(writeFileResponse);
    //     return copyFile();
    // })
    // .then(copyFileResponse => {
    //     console.log(copyFileResponse);
    // })
    // .catch(err => {
    //     console.log(err);
    // });
