---
title: Escape Room
category: Creative Code
year: 2026
description: "A 15-minute browser escape room built with vanilla JavaScript, where you play as a pigeon spy solving puzzles to escape the lair of the evil Dr. Fox."
cover: ../img/escaperoom.avif
coverAlt: Dark blue and neon interface of home page of escape room, agent c crow on the left with his text underneath and the different ui rooms displayed at the top middle.
featured: true
order: 1
---

You are Agent P (Pigeon), trapped in the evil lair of Dr. Fox, and you have 15 minutes to get out. Your partner Agent C (Crow) guides you through four puzzles with instructions and hints. Every solved puzzle reveals a number, and together those numbers form the secret code to the exit. Fail to escape in time, and Dr. Fox turns you into Peking duck.

The game includes sound effects, illustrated scenes, and win and lose music.

[▶ Play the game](https://rosesananikone.com/escaperoom/) · [View the code]()

## The Task

For Creative Code, we had to build a web-based escape room that combines challenges, exploration and storytelling. Players must solve their way out before the timer runs out: finishing all challenges means escape and victory, running out of time means losing. The game had to be built with vanilla JavaScript only (no libraries or frameworks) and hosted online.

## The Concept

I chose a spy theme with a twist: all the characters are birds. There is no particular reason, I just like pigeons and really wanted Peking duck to be included in it by being the losing screen. So I made the whole theme around birds which kept it very playful.

**The puzzles:**
1. [Puzzle 1: solve a colour blind test by spinning tiles to reveal a number]
2. [Puzzle 2: Drag the right numbers to complete the math puzzle ]
3. [Puzzle 3: A simplified sudoku that you have to fill in from numbers 1-6 only.]
4. [Puzzle 4: Simon says type of game where you need to click the different tones of coos in the right order.]
5. **The final code:** combine the four numbers to unlock the exit.

## Gameplay Features

- **15-minute countdown** that drives the tension
- **Win and lose states** with their own music and endings
- **Hint system** through Agent C
- **Leaderboard** that saves the best completion times in localStorage
- **Micro-interactions** that respond to the player, e.g. windows wrong sound when clicking wrong button in simon says, numbers turning green to reveal themselves, completed sound when finishing a puzzle
- **Sound design**: effects for actions and discoveries, plus win and lose tracks

## Technical

Built from scratch with HTML, CSS and vanilla JavaScript, and hosted on Combell.

- DOM manipulation and event handlers for all interactions, written only with arrow functions
- Forms for [e.g. puzzle answers, the final code and the leaderboard name], with [validation / correct form handling]
- `setInterval()` for the countdown timer
- `setTimeout()` for delayed feedback and animation timing
- `localStorage` for saving best times [and progress, if you did that]
- CSS animations for transitions and feedback

## Reflection

