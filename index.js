const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How is your project installed?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is your project used?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How are tests run for your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

function generateReadme(answers) {
  return `
# ${answers.projectTitle}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

\`\`\`
${answers.installation}
\`\`\`

## Usage

${answers.usage}

## Contributing

${answers.contributing}

## Tests

\`\`\`
${answers.tests}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at [${answers.github}](https://github.com/${answers.github}).

## License

This project is licensed under the ${answers.license} license.
  `;
}

inquirer.prompt(questions).then((answers) => {
  const readmeContent = generateReadme(answers);

  fs.writeFile('README.md', readmeContent, (err) => {
    if (err) throw err;
    console.log('Successfully wrote to README.md');
  });
});

