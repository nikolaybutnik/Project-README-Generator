const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
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
        choices: ["MIT", "Apache 2.0", "GPLv3"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter instructions for how to contribute to your project:"
    },
    {
        type: "input",
        name: "tests",
        message: "Enter testing instructions:"
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:"
    }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err)
        }
        console.log("README created successfully.")
    })
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(function (response) {
        let answers = JSON.stringify(response)
        const markdown = generateMarkdown(answers)
        writeToFile("./generated_readme/README.md", markdown)
    })
}

// function call to initialize program
init();
