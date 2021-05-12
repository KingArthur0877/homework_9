// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (licence === "None") {
    return "";
  } else {
    return `![License Badge](https://img.shields.io/badge/licence-${licence}-green)`;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
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
const renderLicenseSection = (license) => {};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}

`;
};

module.exports = generateMarkdown;
