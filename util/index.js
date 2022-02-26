const inquirer = require ('inquirer');
const fs = require ('fs')
const util = require ("util")

const generateMarkdown = require ("./markdownGenerator.js");


// array of questions for README generation
const questions = [
        {
        type: "input",
        message: "Create project title",
        Name: "Title",
    }, 
        {
        type: "input",
        message: "What is this project about? Give detailed descriptions",
        Name: "Description",
    }, 
        {
        type: "input",
        message: "Table of contents",
        Name: "Table Of Contents",
    }, 
        {
        type: "input",
        message: "Enter installation instructions. (What does the user need to install to run is app?) (e.g Dependencies)",
        Name: "Installation Instructions",
    }, 
        {
        type: "input",
        message: "Enter usage guildline. (How to use this app)",
        Name: "Usage Information",
    }, 
        {
        type: "input",
        message: "create contribution guidelines. ()",
        Name: "Contribution Guidelines",
    }, 
        {
        type: "input",
        message: "Enter test instructions. (The following is needed to run this test)",
        Name: "Test Instrctions",
    }, 
        {
        type: "input",
        message: "Please select the type of license you would like to use.",
        Name: "License",
        choices: [
            "APACHE 2.O",
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "None"
        ]
    }, 
        {
        type: "input",
        message: "Enter GitHub username: (Link to your github profile page)",
        Name: "userName",
    }, 
        {
        type: "input",
        message: "Enter your email address: (This is how to reach me with additional questions)",
        Name: "Email Address",
    },
]

// function to write user input to README file.

function writeToReadMe(fileName, data){
    fs.writeFile(fileName, data, function(err){
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("Completed!")
        }  
    })
}

// function to instalise program
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToReadMe("README.md", generateMarkdown(data));
            console.log(data)
        })
}

// Function call to instalise program.
init();