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
        name: "contributing",
        message: "What are the Contributing Guidlines for this Project?"
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