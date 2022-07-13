// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license) {
    return `![${data.license}](https://img.shields.io/badge/License-${data.license}-important.svg)`
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = renderLicenseBadge(data);
  return `# Title: **${data.title}**

  # License Type:
  ${license}

  # Table of Contents
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)

  # Description:
  ${data.description} 

  # Installation:
  ${data.installation}

  # Usage:
  ${data.usage}

  # Contributing:
  ${data.contributing}

  # Tests:
  ${data.tests}

  # Questions:
  ### GitHub: ${data.github}

  ### Email: ${data.email}
  `
}

module.exports = generateMarkdown;
