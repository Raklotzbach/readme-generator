// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs =require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    {message: "What is the project's title?",
    name: "title"},
    {type: "list",
    message: "What is the license type?",
    choices: ["Apache_2.0", "Boost_1.0", "BSD_2--Clause", "MIT"],
    name: "license"},
    {message : "Please enter a description of the project.",
    name: "description"},
    {message: "What is the installation?",
    name: "installation"},
    {message: "What is the usage?",
    name: "usage"},
    {message: "Who else is contributing?",
    name: "contributing"},
    {message: "What are the tests?",
    name: "tests"},
    {message: "What is your GitHub username?",
    name: "github"},
    {message: "Please enter your email",
    name: "email"}
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("README.md", generateMarkdown(data), (err) => (err) ? console.log("There is an Error in the Title") : console.log("Title is Successful!"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile(data);
        generateMarkdown(data.title);
    })
}

// Function call to initialize app
init();
