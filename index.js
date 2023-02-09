// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the Title of your Project?"
    },

    {
        type: "input",
        name: "description",
        message: "Provide a Short Description of your Project"
    },

    {
        type: "input",
        name: "installation",
        message: "What Command should be Run to Install Dependencies?",
        default: "npm install"
    },

    {
        type: "input",
        name: "usage",
        message: "What are the Usuge Guidlines for this Project?"
    },

    {
        type: "input",
        name: "contribution",
        message: "What are the Contribution Guidlines for this Project?"
    },

    {
        type: "input",
        name: "tests",
        message: "What Command should be Run to Perform Tests?",
        default: "npm test"
    },

    {
        type: "list",
        name: "license",
        message: "What Type of License does this Project have?",
        choices: ["MIT", "APACHE2.0", "BSD3", "GPL3.0", "none"]
    },

    {
        type: "input",
        name: "github",
        message: "What is your Github Username?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your Email Address?"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses)=>{
        console.log("generating your readme file")
        writeToFile ("README.md", generateMarkdown({...responses}))
    })
}

// Function call to initialize app
init();


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README