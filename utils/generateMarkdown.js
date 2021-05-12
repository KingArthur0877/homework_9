// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenceBadge = (licence) => {
  if (licence === "None") {
    return "";
  } else {
    return `![Licence Badge](https://img.shields.io/badge/licence-${licence}-green)`;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenceLink = (licence) => {
  if (licence === "None") {
    return "";
  }
  if (licence === "MIT") {
    return `https://www.mit.edu/~amini/LICENSE.md`;
  }
  if (licence === "GPL_3.0") {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`;
 
  }
  if (licence === "APACHE_2.0") {
    return `https://www.apache.org/licenses/LICENSE-2.0`;
  }
  if (licence === "BSD_3") {
    return `https://opensource.org/licenses/BSD-3-Clause`;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenceSection = (licence) => {
  if (licence === "None") {
    return "This content is not licenced.";
  } else {
    return `This content is licenced under the ${licence} Licence.`;
  }
};

const install = (installation) => {
  if (!installation) {
    return "No installation required.";
  } else {
    return "";
  }
};

const installInformation = (installInfo) => {
  if (!installInfo) {
    return "";
  } else {
    return installInfo;
  }
};

const test = (tests) => {
  if (!tests) {
    return "No testing required.";
  } else {
    return "";
  }
};

const testInformation = (testInfo) => {
  if (!testInfo) {
    return "";
  } else {
    return testInfo;
  }
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {
  const {
    projectName,
    description,
    installation,
    installInfo,
    usage,
    licence,
    contribution,
    tests,
    testInfo,
    email,
    github,
    questions,
  } = answers;

  const licenceBadge = renderLicenceBadge(licence);
  const licenceSection = renderLicenceSection(licence);
  const licenceLink = renderLicenceLink(licence);
  const installationConfirm = install(installation);
  const installationInfoConfirm = installInformation(installInfo);
  const testConfirm = test(tests);
  const testInfoConfirm = testInformation(testInfo);

  return `# ${projectName}

  ${licenceBadge}

  ## Table of Contents
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Licence](#licence)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description

  ${description}

  ## Installation
  \`\`\`
  ${installationInfoConfirm} ${installationConfirm}
  \`\`\`

  ## Usage

  ${usage}

  ## Licence

  ${licenceSection}
  ${licenceLink}

  ## Contributing

  ${contribution}

  ## Tests

  ${testConfirm} ${testInfoConfirm}

  ## Questions
  
  Have any questions? Get in touch!
  
  ${email}, ${github}, ${questions}
  `;
};

module.exports = generateMarkdown;
