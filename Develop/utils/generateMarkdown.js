// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  * [Description]
  * [Installation]
  * [Instructions]
  * [Credits]
  * [Features]
  * [Contribute]
  * [Tests]
  * [Contact/Questions]

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Instructions
  ${data.instructions}

  ## Credits/Collaborators
  ${data.credits}

  # Features
  ${data.features}

  # Contributions
  ${data.contribute}

  # Tests
  ${data.tests}

  ## Licenses
  ${data.license}

  ### Contact Info / Questions
  GitHub: ${data.github}
  Email: ${data.email}
  GitHub Project Link: ${data.link}

  ${data.questions}
  `;
};

module.exports = generateMarkdown;
