const fs = require('fs');
const inquirer = require('inquirer');
const generateMardown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
        type: "input",
        name: "name",
        message: "Enter your name:"
    },
    {
        type: "input",
        name: "title",
        message: "Enter the title of your project:"
    },
    {
        type: "input",
        name: "description",
        message: "Enter the description of your project:"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter the instructions to install your application:"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter the instructions for how to use your application:"
    },
    {
        type: "list",
        name: "license",
        message: "Select a license which your project is covered under:",
        choices: ["MIT", "Apache", "GPL"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter instructions for how to contribute to your project:"
    },
    {
        type: "input",
        name: "tests",
        message: ":"
    }

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
