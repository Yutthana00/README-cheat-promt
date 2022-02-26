var fileGenerator = require("./fileGenerator");
var fs = require("fs");
var inquirer = require('inquirer');


// array of questions for user to create README page.
let questions = [
    {
        type: "input",
        message: "Project title",
        name: "title",
    },{
        type: "input",
        message: "Project descriptions",
        name: "description",
    },{
        type: "input",
        message: "What dependencies users need to run this app? ",
        name: "installation ",
    },{
        type: "input",
        message: "Who contributed to this project?.",
        name: "contribution",
    },{
        type: "input",
        message: "What command are needed to test/lunch this app?",
        name: "test",
    },{
        type: "input",
        message: "Enter instructions on how to use this app",
        name: "usage",
    },{
        type: "list",
        message: "Please select the type of license you would like to use.",
        name: "license",
        choices: [
            "APACHE 2.O",
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "None"
        ],
    },{
        type: "input",
        message: "Enter your GitHub username",
        name: "userName",
    },{
        type: "input",
        message: "Enter your email address",
        name: "email",
    }
];

// function to write user input to README file.

inquirer.prompt(questions).then(function(response) {
    console.log(response);

        var content = fileGenerator(response);
        console.log(content);
            fs.writeFile("./ReadME.md", content, function(err){ 
                if (err) throw err
                console.log("Success!")
            });
}   );
