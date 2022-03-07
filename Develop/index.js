// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Creates an array of questions for user input
const promptReadme = data => {
    console.log(`
================
Add a New ReadMe
================
`);
    // List of ReadME questions for project
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
            message: 'List your collaborators, if any, with their GitHub profile links:',
            default: ['N/A']
        },
        {
            type: 'input',
            name: 'features',
            message: 'Enter any outstanding features of your project here:'
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'If you would like other developers to contribute to this project, provide steps on how to do so here:',
            default: ['N/A']
        },
        {
            type: 'input',
            name: 'tests',
            message: 'If you wrote tests for your project, provide the examples on how to run them here:',
            default: ['N/A']
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What licenses are involved with this project?',
            choices: ['MIT', 'MPL 2.0', 'Apache 2.0', 'EPL-2.0', 'GPL'],
            default: ['N/A']
        },
        {
            type: 'confirm',
            name: 'confirmReadme',
            message: 'Would you like to create another ReadMe file?',
            default: false
        }
    ])
    .then(readmeData => {
        console.log(readmeData);
        data.push(readmeData);
        if (readmeData.confirmAddProject) {
            return promptReadme(data);
        } else {
            return data;
        }
    });
};

// Create a function to write README file
// const writeFile = fileContent => { //Possibly change fileContent to something else, or change data below to fileContent
//     return new Promise((resolve, reject) => {
//         fs.writeFile(`./${fileName.toLowerCase.split(' ').join('')}.md`, fileContent, err => {
//             // If Error, reject Promise and sent error info to .catch method
//             if (err) {
//                 reject(err);
//                 // Return to make sure the Promise doesn't run resolve function
//                 return
//             }
//             // Resolve if everything worked and send data to .then method
//             resolve({
//                 ok: true,
//                 message: 'ReadME file created!'
//             });
//         });
//     });
// };

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init(promptReadme);
promptReadme();