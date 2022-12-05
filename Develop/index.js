// Call packages
const fs = require("fs");
const inquirer = require("inquirer");
// User input questions array
inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        },
        {
            type: "message",
            message: "Please answer the following description questions..",
            name: "message1",
        },
        {
            type: "input",
            message: "What was your motivation for the project?",
            name: "motivation",
        },
        {
            type: "input",
            message: "What problem does this project solve?",
            name: "why",
        },
        {
            type: "input",
            message:
                "Please provide a step-by-step set of instructions of use:",
            name: "install",
        },
        {
            type: "input",
            message: "How is this application used? ",
            name: "usage",
        },
        {
            type: "input",
            message: "What are your contributing guidlines?",
            name: "cont",
        },
        {
            type: "input",
            message: "Please provide test instructions..",
            name: "tests",
        },
        {
            type: "list",
            message: "Please select your license for your application:",
            choices: [
                "MIT",
                "Apache 2",
                "GNU GPLv3",
                "BSD 2",
                "BSD 3",
                "Boost Software",
                "Creative Commons Zero",
                "Eclipse Public",
            ],
            name: "lice",
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "github",
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email",
        },
    ])
    .then((questions) => {
        generateMd("README.md", questions);
    });

// Writefile function
function generateMd(fileName, data) {
    fs.writeFile(
        fileName,

        `
<p align="center">
<img src="https://img.shields.io/badge/License-${data.lice}-8bd5ca"/>
</p>

# ${data.title} 

## Description

- ${data.motivation}
- ${data.why}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

- ${data.install}

## Usage

- ${data.usage}

## Credits

## License

- Using ${data.lice}

[https://choosealicense.com/](https://choosealicense.com/).

## Badges

- See all my badges at the top!

## Questions

- My GitHub username: ${data.github} 
- My GitHub: [GitHub Profile](www.github.com/${data.github})

For additional questions you can reach me at ${data.email}

## How to Contribute

- ${data.cont}

Please refer to [Contributor Covenant](https://www.contributor-covenant.org/) for more.

## Tests

- ${data.tests}
`,
        (err) =>
            err ? console.error(err) : console.log("Your README.md is created!")
    );
}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
