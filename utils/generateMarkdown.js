const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache License 2.0') {
    const licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    return licenseBadge;
  
  } else if (license === 'BSD 3-Clause License') {
    const licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    return licenseBadge;
  
  } else if (license === 'BSD 2-Clause License') {
    const licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
    return licenseBadge;

  } else if (license === 'MIT License') {
    const licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    return licenseBadge;
  
  } else if (license === 'Mozilla Public License 2.0') {
    const licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    return licenseBadge;

  } else if (license === 'Eclipse Public License 2.0') {
    const licenseBadge = '[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)'
    return licenseBadge;;
  
  } else {
    return '';
  } 
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    const licenseLink = 'https://opensource.org/licenses/Apache-2.0'
    return licenseLink;
  
  } else if (license === 'BSD 3-Clause License') {
    const licenseLink = 'https://opensource.org/licenses/BSD-3-Clause'
    return licenseLink;
  
  } else if (license === 'BSD 2-Clause License') {
    const licenseLink = 'https://opensource.org/licenses/BSD-2-Clause'
    return licenseLink;

  } else if (license === 'MIT License') {
    const licenseLink = 'https://opensource.org/licenses/MIT'
    return licenseLink;
  
  } else if (license === 'Mozilla Public License 2.0') {
    const licenseLink = 'https://opensource.org/licenses/MPL-2.0'
    return licenseLink;
  
  } else if (license === 'Common Development and Distribution License') {
    const licenseLink = 'https://opensource.org/licenses/CDDL-1.0'
    return licenseLink;

  } else if (license === 'Eclipse Public License 2.0') {
    const licenseLink = 'https://opensource.org/licenses/EPL-2.0'
    return licenseLink;
  
  } else {
    return '';
  } 
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
  return(`${renderLicenseBadge(license)}`);
  } else {
    return '';
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  


}

module.exports = generateMarkdown;
