import inquirer from 'inquirer';
import { exec } from 'child_process'; //npm i inquirer@7

async function runGitCommands() {
  try {
    // Prompt the user for the commit message
    const { message } = await inquirer.prompt([
      {
        type: 'input',
        name: 'message',
        message: 'Enter commit message:'
      }
    ]);

    // Execute Git commands
    exec('git add .', (err, stdout, stderr) => {
      if (err) {
        console.error(`Error adding files: ${stderr}`);
        return;
      }

      console.log(stdout);

      exec(`git commit -m "${message}"`, (err, stdout, stderr) => {
        if (err) {
          console.error(`Error committing: ${stderr}`);
          return;
        }

        console.log(stdout);

        exec('git push origin main', (err, stdout, stderr) => {
          if (err) {
            console.error(`Error pushing: ${stderr}`);
            return;
          }

          console.log(stdout);
        });
      });
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

runGitCommands();
