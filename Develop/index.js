// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
// TODO: Create an array of questions for user input
inquirer.prompt([
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
        message: "Please provide a step-by-step set of instructions of use:",
        name: "install",
    },
    {
        type: "input",
        message: "How is this application used? ",
        name:"usage",
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
        choices: ["MIT", 
        "Apache 2", 
        "GNU GPLv3",
        "BSD 2", 
        "BSD 3", 
        "Boost Software", 
        "Creative Commons Zero", 
        "Eclipse Public"],
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
.then(questions => {
    generateMd("README.md", questions)
})


// Writefile function
function generateMd(fileName, data) {
    fs.writeFile(fileName, 
    
        `<p align="center">
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
    
    To add a screenshot, create an assets/images folder in your repository and upload your 
    screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    
    
    ## Credits
    
    List your collaborators, if any, with links to their GitHub profiles.
    
    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    
    If you followed tutorials, include links to those here as well.
    
    ## License
    
    - Using ${data.lice}

    [https://choosealicense.com/](https://choosealicense.com/).
    
    ---
    
    🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
    
    ## Badges
    
    ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
    Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. 
    Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
    ## Questions
    
    - My GitHub username: ${data.github} 
    - My GitHub: [GitHub Profile](www.github.com/${data.github})
    
    For additional questions you can reach me at ${data.email}

    ## How to Contribute

    - ${data.cont}
    
    Please refer to [Contributor Covenant](https://www.contributor-covenant.org/)
    
    ## Tests
    
    - ${data.tests}
    `
    , (err) =>
    err ? console.error(err) : console.log("Your README.md is created!"))
}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();


