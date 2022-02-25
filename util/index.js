// 
const inquirer = require ("inquirer");
const fs = require ('fs')
const util = require ("util")

// array of questions for README generation
const questions = [{
    type: "input",
    message: "Enter project title",
    Name: "",
}, {
    type: "input",
    message: "Project discription",
    Name: "",
}, {
    type: "input",
    message: "License",
    Name: "",
}, {
    type: "input",
    message: "GitHub user name",
    Name: "",
}, {
    type: "input",
    message: "Email address",
    Name: "",
}
]