// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license !=="none") {
    return `![licensebadge](https://img.shields.io/badge/License-${license}-red)`
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

##  Description

${data.description}

## Table of Contents

- [Installation](#installation)

- [Usuage](#usage)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)

- [License](#license)


## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, I would kindly ask that you reach out to me on [GitHub](https://github.com/${data.username}).

You may also reach me directly at ${data.email}.

## License

${renderLicenseSection(data.license)}


`;
}

module.exports = generateMarkdown;

