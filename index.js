// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");



// TODO: Create an array of questions for user input
const questions = [
    { 
      type: 'input',
      name: 'title',
      message: "Enter the title of your project",
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write description about your project',
    },
    {
      type: 'input',
      name: 'installation',
      message: "Please describe the steps required to install your project",
    },
    {
      type: 'input',
      name: 'usage' ,
      message: 'Please write usage information',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide contributing guidelines for your project',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please add your test instructions',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license you would like use',
      choices: ["Apache", "BSD 3-Clause", "Eclipse", "GNU","MIT", "Mozilla", "None"],
    },
    {
     type: "input",
     name: "github",
     message: "What is your Github username?",
      },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>
    err
    ? console.log(err)
    : console.log('README file is successfully created!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile('SampleREADME.md', generateMarkdown(data));
    })
}

// Function call to initialize app
init();