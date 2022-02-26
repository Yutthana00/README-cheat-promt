var fileGenerator = require("./fileGenerator");
var fs = require("fs");
var inquirer = require('inquirer');


// array of questions for user to create README page.
let questions = [
    {
        type: "input",
        message: "Create project title",
        name: "title",
    },{
        type: "input",
        message: "What is this project about? Give detailed descriptions",
        name: "description",
    },{
        type: "input",
        message: "Enter installation instructions. (What does the user need to install to run is app?) (e.g Dependencies)",
        name: "installation ",
    },{
        type: "input",
        message: "Enter usage guildline. (How to use this app)",
        name: "usage",
    },{
        type: "input",
        message: "create contribution guidelines. ()",
        name: "contribution",
    },{
        type: "input",
        message: "Enter test instructions. (The following is needed to run this test)",
        name: "test",
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
        message: "Enter GitHub username: (Link to your github profile page)",
        name: "userName",
    },{
        type: "input",
        message: "Enter your email address: (This is how to reach me with additional questions)",
        name: "email",
    }
];

// function to write user input to README file.

inquirer.prompt(questions).then(function(response) {
    console.log(response);

        var content = fileGenerator(response);
            fs.writeFile("./ReadME.md", content, function(err){ 
                if (err) throw err
                console.log("Success!")
            });
}   );
