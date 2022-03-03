// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseArray = ['MIT', 'MPL 2.0', 'Apache 2.0', 'EPL-2.0', 'GPL'];

function renderLicenseBadge(license) {
  if (license === licenseArray[0]) {
    return '[![MIT](https://img.shields.io/badge/License-MIT-brightgreen)](https://opensource.org/licenses/MIT)';
  } else if (license === licenseArray[1]) {
    return '[![MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-orange)](https://opensource.org/licenses/MPL-2.0)';
  } else if (license === licenseArray[2]) {
    return '[![Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === licenseArray[3]) {
    return '[![EPL-2.0](https://img.shields.io/badge/License-EPL%202.0-green)](https://opensource.org/licenses/EPL-2.0)';
  } else if (license === licenseArray[4]) {
    return '[![GPL](https://img.shields.io/badge/License-GPL-blueviolet)](https://opensource.org/licenses/gpl-license)';
  } else {
    return '';
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licenseArray[0]) {
    return '[MIT](https://opensource.org/licenses/MIT)';
  } else if (license === licenseArray[1]) {
    return '[MPL 2.0](https://opensource.org/licenses/MPL-2.0)';
  } else if (license === licenseArray[2]) {
    return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === licenseArray[3]) {
    return '[EPL-2.0](https://opensource.org/licenses/EPL-2.0)';
  } else if (license === licenseArray[4]) {
    return '[GPL](https://opensource.org/licenses/gpl-license)';
  } else {
    return '';
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === licenseArray[0]) {
    return 'To learn more about this license, click here: ${licenseArrray[0]}';
  } else if (license === licenseArray[1]) {
    return 'To learn more about this license, click here: ${licenseArrray[1]}';
  } else if (license === licenseArray[2]) {
    return 'To learn more about this license, click here: ${licenseArrray[2]}';
  } else if (license === licenseArray[3]) {
    return 'To learn more about this license, click here: ${licenseArrray[3]}';
  } else if (license === licenseArray[4]) {
    return 'To learn more about this license, click here: ${licenseArrray[4]}';
  } else {
    return '';
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # **${data.title}**


  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Instructions](#instructions)
  * [Credits](#credits)
  * [Features](#features)
  * [Contribute](#contribute)
  * [Tests](#test)
  * [Licenses](#license)
  * [Contact/Questions](#github)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Instructions
  ${data.instructions}

  ## Credits/Collaborators
  ${data.credits}

  ### Features
  ${data.features}

  ### Contributions
  ${data.contribute}

  ### Tests
  ${data.tests}

  ### Licenses
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contact Info / Questions
  Feel free to reach out if you have any further questions regarding the project!
  - **GitHub: ${data.github}**
  - **Email: ${data.email}**
  - **GitHub Project Link: ${data.link}**
  `;
};

module.exports = generateMarkdown;
