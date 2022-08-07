const { prompt } = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHtml')
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');

const team = [];

managerQuestion()

function managerQuestion() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where are you from?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ])
        .then((results) => {
            console.log(results)
            team.push(results)

            menu()

        });
}


function menu() {
    prompt(
        {
            type: 'list',
            name: 'choice',
            message: 'what would you like to do?',
            choices: ['add an Engineer', 'add an Intern', 'Build my Team']
        }
    ).then((res) => {
        switch (res.choice) {
            case 'add an Engineer':
                addEngineer();
                break;
            case 'add an Intern':
                addIntern();
                break;
            case 'Build my Team':
                buildTeam();    
        }
        console.log(res)
    })
}



function buildTeam() {
    fs.writeFileSync('./dist/index.html', generateHTML(team), (err) =>
        err ? console.log(err) : console.log('Successfully generated index.html!')
    );
}

