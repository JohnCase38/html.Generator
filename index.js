const {prompt} = require('inquirer');
const fs = require('fs');

const generateHTML = ({ name, location, github, email }) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./style.css"
    <title>Document</title>
</head>
<body>
    <div class="container">
        <h1> My name is ${name}</h1>
        <p> From ${location}</p>
        <h2> My github: ${github}</h2>
        <h2> Shoot me an email! ${email}</h2>
    </div>
</body>
</html>`;

prompt([
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
    const htmlPageContent = generateHTML(results);

    fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully generated index.html!')
        );
});

