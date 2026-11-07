import chalk from "chalk";
import { select, confirm } from "@inquirer/prompts";

const choices = ["rock", "paper", "scissors"];

export async function showMainMenu(gameState) {
  while (!gameState.over) {
    console.log(chalk.cyan("\n=== ROCK PAPER SCISSORS ==="));

    const action = await select({
      message: "Main Menu",
      choices: [
        { name: "Start Game", value: "start" },
        { name: "See Statistics", value: "stats" },
        { name: "Reset Statistics", value: "reset" },
        { name: "Quit", value: "quit" },
      ],
    });

    switch (action) {
      case "start":
        await startGame(gameState);
        break;

      case "stats":
        showStats(gameState);
        break;

      case "reset": {
        const answer = await confirm({
          message: "Are you sure you want to reset statistics?",
          default: false,
        });

        if (answer) {
          resetGame(gameState);
          console.log(chalk.blue("Statistics have been reset."));
        }
        break;
      }

      case "quit":
        gameState.over = true;
        console.log(chalk.green("Goodbye!"));
        break;
    }
  }
}

export async function startGame(gameState) {
  const userChoice = await select({
    message: "Choose your weapon:",
    choices: choices.map((choice) => ({
      name: choice.toUpperCase(),
      value: choice,
    })),
  });

  const computerChoice =
    choices[Math.floor(Math.random() * choices.length)];

  console.log(chalk.blue(`You chose: ${userChoice}`));
  console.log(chalk.blue(`Computer chose: ${computerChoice}`));

  const result = determineWinner(userChoice, computerChoice);

  updateStats(result, gameState);

  if (result === "win") {
    console.log(chalk.green("Congratulations! You won!"));
  } else if (result === "lose") {
    console.log(chalk.red("Sorry! You lost!"));
  } else {
    console.log(chalk.yellow("It's a tie!"));
  }
}

export function determineWinner(userChoice, computerChoice) {
  const winMap = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (userChoice === computerChoice) return "tie";

  return winMap[userChoice] === computerChoice ? "win" : "lose";
}

export function updateStats(result, gameState) {
  if (result === "win") {
    gameState.stats.wins++;
  } else if (result === "lose") {
    gameState.stats.losses++;
  } else if (result === "tie") {
    gameState.stats.ties++;
  }
}

export function showStats(gameState) {
  console.log(chalk.cyan("\n=== GAME STATISTICS ==="));
  console.log(chalk.green(`Wins: ${gameState.stats.wins}`));
  console.log(chalk.red(`Losses: ${gameState.stats.losses}`));
  console.log(chalk.yellow(`Ties: ${gameState.stats.ties}`));

  const total =
    gameState.stats.wins +
    gameState.stats.losses +
    gameState.stats.ties;

  console.log(`Total Games: ${total}`);
}

export function resetGame(gameState) {
  gameState.stats = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}
