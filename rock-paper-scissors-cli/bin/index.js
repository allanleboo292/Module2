#!/usr/bin/env node

import { program } from "commander";
import gameState from "../src/lib/state.js";
import { showMainMenu } from "../src/lib/gameLogic.js";

program
  .name("rockpaperscissors")
  .description("Rock Paper Scissors CLI Game")
  .version("1.0.0");

program.parse(process.argv);

try {
  await showMainMenu(gameState);
} catch (error) {
  if (error.name === "ExitPromptError") {
    console.log("\nGoodbye!");
    process.exit(0);
  }

  console.error(error);
  process.exit(1);
}
