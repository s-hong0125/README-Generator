// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  switch (license) {
    case "Apache":
      badge = 
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
      break;
    case "BSD 3-Clause":
      badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
      break;
    case "Eclipse":
      badge = 
      "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]";
      break;
    case "GNU":
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      break;
    case "MIT":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      break;
    case "Mozilla":
      badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
      break;
    case "None":
      badge = "";
      break;
  }
  return badge;
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  switch (license){
    case "Apache":
      licenseLink = "https://opensource.org/licenses/Apache-2.0)";
      break;
    case "BSD 3-Clause":
      licenseLink ="https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "Eclipse":
      licenseLink = "https://opensource.org/licenses/EPL-1.0";
      break;
    case "GNU":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "MIT":
      licenseLink = "https://opensource.org/licenses/MIT";
      break;
    case "Mozilla":
      licenseLink = "https://opensource.org/licenses/MPL-2.0";
      break;
    case "None":
      licenseLink = "";
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `The project has the ${license} license.`;
    
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

 ## Description
  ${data.description}
  

 ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [License](#licnse)
- [Github](#github)
- [Questions](#questions)

## Installation
${data.installation}

## Usage 
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.test}

## License
${renderLicenseBadge(data.license)}

## Questions
My GitHub page: https://github.com/${data.github}
Email address for any questions: ${data.email}


`;
}

module.exports = generateMarkdown;
