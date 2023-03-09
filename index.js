//Dependencies
const inquirer = require('inquirer');
const jest = require('jest');
const path = require('path');
const fs = require('fs');

//Import class constructor files
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//Pathway and location variables
const dist_dir = path.resolve(__dirname, 'dist');
const output = path.join(dist_dir, 'index.html');
const render = require('./src/template.js');

//Empty array to be built up
const teamArray = [];
const idArray = [];




//Run program
function init() {
    //Immediately run createManager function upon startup
    function createManager() {
        console.log('Start building up your team!');
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What's your manager's name?",
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Manager's name still needs to be entered!";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What's the manager's ID?",
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Must enter a valid ID for Manager!"
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What's the manager's email?",
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Manager must have an email address!"
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What's the manager's office number? (format: 0123456789)",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Manager must have a phone number!"
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArray.push(manager);
            idArray.push(answers.managerId);
            createNewMember();
        });
    };

    function createNewMember() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberType",
                message: "Choose the type of member to add next!",
                choices: [
                    "Engineer",
                    "Intern",
                    "I'm finished"
                ]
            }
        ]).then(chosenMember => {
            switch (chosenMember.memberType) {
                case "Engineer":
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
                default:
                    generateHTML();
            }
        });
    };

    function createEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What's your engineer's name?",
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Your Engineer must have a name!";
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "What's your engineer's ID?",
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Engineer's gotta have an ID!";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What's your engineer's email?",
                validate: answer => {
                    if (answer !== '') {
                        return true
                    }
                    return "Your engineer should have an email address!";
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What's your engineer's github username?",
                validate: answer => {
                    if (answer !== '') {
                        return true
                    }
                    return "Make sure to enter your engineer's username!";
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArray.push(engineer);
            idArray.push(answers.engineerId);
            createNewMember();
        });
    };

    function createIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What's your intern's name?",
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Your Intern should really have a name!";
                }
            },
            {
                type: "input",
                name: "internId",
                message: "What's your intern's ID?",
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return "You should really think about giving your intern an ID!";
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "What's your intern's email?",
                validate: answer => {
                    if (answer !== '') {
                        return true
                    }
                    return "Your intern's gotta have an email!";
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "What school does your Intern go to?",
                validate: answer => {
                    if (answer !== '') {
                        return true
                    }
                    return "You have to know which school they are in and enter here!";
                }
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamArray.push(intern);
            idArray.push(answers.internId);
            createNewMember();
        });
    };

    function generateHTML() {
        if (!fs.existsSync(dist_dir)) {
            fs.mkdirSync(dist_dir)
        }
        console.log("Get excited! Your profile is being created!");
        fs.writeFileSync(output, render(teamArray), "utf-8");
    };

    createManager();
};

init();