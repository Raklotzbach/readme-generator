// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs =require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is the project's title?",
        name: "title",
    },
    {
        message : "Please enter a description of the project.",
        name: "description",
    },
    {
        message: "What is the installation?",
        name: "installation",
    },
    {
        message: "What is the usage?",
        name: "usage",
    },
    {
        message: "Who else is contributing?",
        name: "contributing",
    },
    {
        message: "What are the tests?",
        name: "tests",
    },
    {
        message: "What is your GitHub username?",
        name: "github",
    },
    {
        message: "Please enter your email",
        name: "email"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
