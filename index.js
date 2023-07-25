const inquirer = require("inquirer");
const fs = require("fs");
const license1 = require("./generateMarkdown.js");

const generateHTML = ({
  title,
  description,
  installation,
  ContributionGuide,
  linkedin,
  Instructions,
  type,
  GithubUserName,
  EmailAddress,
}) =>
  `## Badges <a name ="Badges"/>` +
  license1.renderLicenseBadge(type) +
  `
  
## Table of Contents

- [Badges](#badges)
- [Title](#title)
- [Description](#description)
- [Installation](#installation)
- [Instructions](#instructions)
- [Contribution guideline](#contribution)
- [Linkedin](#linkedin)
- [License](#license)
- [Github-username](#githubusername)
- [Email-address](#emailaddress)


   # Title <a name="title"/>
   ${title} 

   ## Description <a name="description"/>
   ${description}
   
   ## Installation <a name="installation"/>
   ${installation}

   ## Instructions <a name="instructions"/>
   ${Instructions}

   ## Contribution guideline <a name ="contribution"/>
   ${ContributionGuide}

   ## Linkedin <a name ="linkedin"/>
   ${linkedin}

   ## License <a name ="license"/>
   ` +
  license1.renderLicenseReadme(type) +
  `

   ## Github Username <a name ="githubusername"/>
   Github: ${GithubUserName} 
   Github address : https://github.com/${GithubUserName}

   ## Email address <a name ="emailaddress"/>;
   Any questions please contact : ${EmailAddress}`;

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Description of your project?",
    },
    {
      type: "input",
      name: "installation",
      message: "Any installations needed?",
    },
    {
      type: "input",
      name: "ContributionGuide",
      message: "Contribution guideline?",
    },
    {
      type: "input",
      name: "linkedin",
      message: "Linkedin profile?",
    },
    {
      type: "input",
      name: "Instructions",
      message: "Test instructions",
    },
    {
      type: "list",
      message: "What is your license?",
      name: "type",
      choices: [
        "Apache license 2.0",
        "GNU General Public License v3.0[![License: GPL ",
        "MIT License",
        "BSD 2-Clause “simplified” License",
        "BSD 3 Clause “New” or “Revised” License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v 2.0",
        "GNU Lesser General Public License v 2.1",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
    },
    {
      type: "input",
      name: "GithubUserName",
      message: "What is your github Username?",
    },
    {
      type: "input",
      name: "EmailAddress",
      message: "What is your Email address?",
    },
  ])
  .then((answers) => {
    const ReadmeContent = generateHTML(answers);

    fs.writeFile("README.md", ReadmeContent, (err) =>
      err ? console.log(err) : console.log("Successfully created Readme.md!")
    );
  });
