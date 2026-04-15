# Power of Two Mini Game

A minimalist browser-based mini game for practicing the sequence of powers of two.

Built with **HTML, CSS, and JavaScript**, this project challenges players to keep entering the next correct value in the doubling sequence.

## Live Demo

[Play Online](https://celine10811020.github.io/PowerOf2/)

## About the Project

This project is a simple number practice game.

The game starts at **1**, and the player must enter the next correct value in the sequence by repeatedly doubling the current number:

1 → 2 → 4 → 8 → 16 → ...

After pressing **Enter**:

- if the answer is correct, the displayed number updates and the game continues
- if the answer is wrong, the game shows an error message and reminds the player of the previous correct value

A **Restart** button is also provided to reset the game and start over.

## Features

- Simple power-of-two number challenge
- Keyboard-based interaction with **Enter**
- Immediate correctness feedback
- Restart support
- No installation required

## How to Play

1. Start from the displayed number
2. Type the next value in the powers-of-two sequence
3. Press `Enter` to submit
4. Continue as long as you answer correctly
5. Use `Restart` to begin again from 1

## Example Sequence

1 → 2 → 4 → 8 → 16 → 32 → 64 → 128 → ...

## Project Structure

```text
PowerOf2/
├── index.html      # Main page
├── main.js         # Game logic
└── style.css       # Visual styling
