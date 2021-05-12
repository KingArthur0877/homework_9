// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    // Add the questions
    {
        type: "input",
        message: "What is the title of your project?",
        name: "projectName",
    },
    {
        type: "input",
        message: "Please add a description for your Project.",
        name: "description",
    },
    {
        type: "confirm",
        message: "Does your project require any installation?",
        name: "installation",
    },
    {
        type: "input",
        message: "Please add the necessary installation information",
        name: "installInfo",
        when: (answers) => {
            return answers.installation;
        },
    },
    {
        type: "input",
        message: "Please input some information about your project.",
        name: "usage",
    },
    {
        type: "list",
        message: "Please select your licence for this project.",
        name: "licence",
        choices: ["MIT", "GPL_3.0", "APACHE_2.0, BSD_3", "None"],
    },
    {
        type: "input",
        message: "Please add any information for people wanting to contribute to your project.",
        name: "contribution",
    },
    {
        type: "confirm",
        message: "Are there any tests for this project?",
        name: "tests",
    },
    {
        type: "input",
        message: "Please add any information for testing.",
        name: "testInfo",
        when: (answers) => {
            return answers.tests;
        },
    },
    {
        type:"input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "Please provide your GitHub Link.",
        name: "github",
    },
    {
        type: "input",
        message: "What is the best way for people to contact you?",
        name: "questions",
    },
];

// TODO: Create a function to write README file
const writeToFile = (fileName) => {
    const callback = (err) => {
        if (err) {
            console.info(err);
        } else {
            console.info("ReadMe Created");
        }
    };

    fs.writeFile("NewREADME.md", fileName, callback);
};

// TODO: Create a function to initialize app
const init = async () => {
    // Start asking the questions
    const answers = await inquirer.prompt(questions);

    const generateMarkdown = generateMarkdown(answers);

    writeToFile(generateMarkdown);
};

// Function call to initialize app
init();
