// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// const { writeFile, copyFile } = require('./utils/generate-readme.js');

// Creates an array of questions for user input
// List of user questions
const promptUser = () => {
    console.log(`
===================
Contact / Questions
===================
`);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username: (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address: (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: "Please enter the link to your project's repository: (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the link to your project repository.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Add any additional questions about the project here:'
        }
    ]);
};

const promptReadme = data => {
    console.log(`
================
Add a New ReadMe
================
`);

    // Array to contain multiple ReadMe files, if none exist, create one
    if (!data.projects) {
        data.projects = [];
    }
    // ReadME questions for project
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
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
            name: 'description',
            message: 'Please provide a description of your project: (Required)',
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
           name: 'installation',
           message: 'What are the steps needed to install this project? (Required)',
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
            name: 'instructions',
            message: 'Provide instructions and examples on how the project works. Include screenshots if needed: (Required)',
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
            name: 'credits',
            message: 'List your collaborators, if any, with their GitHub profile links: (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the collaborators, if any. If none, enter N/A.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'features',
            message: 'Enter any outstanding features of your project here:'
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'If you would like other developers to contribute to this project, provide steps on how to do so here:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'If you wrote tests for your project, provide the examples on how to run them here:'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What licenses are involved with this project?',
            choices: ['MIT', 'MIT2', 'Choice 3', 'Choice 4', 'N/A']
        },
        {
            type: 'confirm',
            name: 'confirmReadme',
            message: 'Would you like to create another ReadMe file?',
            default: false
        }
    ])
    .then(data => {
        data.projects.push(data);
        if (data.confirmAddProject) {
            return promptReadme(data);
        } else {
            return data;
        }
    });
};

// Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./${fileName.toLowerCase.split(' ').join('')}.md`, data, err => {
            // If Error, reject Promise and sent error info to .catch method
            if (err) {
                reject(err);
                // Return to make sure the Promise doesn't run resolve function
                return
            }
            // Resolve if everything worked and send data to .then method
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
    .then(promptReadme)
    .then(data => {
        return generateMarkdown(data);
    })
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

