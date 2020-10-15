// function to generate markdown for README
function generateMarkdown(data) {
  const dataObj = JSON.parse(data)
  let licensebadge = ""
  if (dataObj.license === "MIT") {
    licensebadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (dataObj.license === "Apache 2.0") {
    licensebadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (dataObj.license === "GPLv3") {
    licensebadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  return `# ${dataObj.title}

  ${licensebadge}

  ## Description

  ${dataObj.description}

  ## Table of Contents

  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [Questions](#Questions)

  ## Installation

  ${dataObj.installation}

  ## Usage

  ${dataObj.usage}

  ## License

  This project is covered under the ${dataObj.license} license. To find out what is permitted under this license, click the license badge at the top of the README.

  ## Contributing

  ${dataObj.contributing}

  ## Tests

  ${dataObj.tests}

  ## Questions

  You may directly send any questions related to this project or any of my other projects to [my email adress](mailto:${dataObj.email}). To find all my projects visit [my GitHub profile](https://github.com/${dataObj.github}).

`;
}

module.exports = generateMarkdown;
