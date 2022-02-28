// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license;
  if (licenseType === 'MIT') {
    yourLicense = `![NPM](https://img.shields.io/npm/l/express)`
    // yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)`
    return yourLicense;
  } else if (licenseType === 'MIT2') {
    yourLicense = `![License: MIT2](https://img.shields.io/badge/License-MIT2-brightgreen.svg)`
    return yourLicense;
  } else {
    yourLicense = 'N/A'
    return yourLicense;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else {
    return `${data.license}`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**
  ## Table of Contents
  * [Description]
  * [Installation]
  * [Instructions]
  * [Credits]
  * [Features]
  * [Contribute]
  * [Tests]
  * [Licenses]
  * [Contact/Questions]

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
  ${renderLicenseBadge(license)}

  ## Contact Info / Questions
  - **GitHub: ${data.github}**
  - **Email: ${data.email}**
  - **GitHub Project Link: ${data.link}**

  Further Questions: ${data.questions}
  `;
};

module.exports = generateMarkdown;
