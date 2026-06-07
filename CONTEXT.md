# Project Context

## What This Game Is

This is a side-scrolling 2D platformer. The player crosses each level from left to right, avoids holes and enemies, shoots enemies, and reaches a goal flag. Levels become longer and harder over time.

## Vocabulary

- **Player** — the character controlled by the kid. The player can run, jump, double-jump, crouch, roll, shoot, take damage, die, and respawn.
- **Enemy** — a creature that patrols a section of the level, chases the player when close, attacks, takes damage, and disappears when defeated.
- **Level** — one playable stage from `src/data/levels.js`. A level defines layout, theme, enemies, spawn, goal, and timer target.
- **Spawn** — the tile position where the player starts or respawns.
- **Goal** — the flag area that completes a level.
- **Hole** — a gap in the ground that the player must jump over.
- **Platform** — a floating row of tiles the player can stand on.
- **Wall** — a vertical stack of solid tiles that blocks movement and enables wall interactions.
- **Patrol** — the left and right bounds an enemy walks between.
- **Theme** — the visual set for a level: tile prefix, background, enemy type, decorations, flag, and dust color.
- **Coyote time** — a small grace period that lets the player jump just after leaving a platform.
- **Jump buffer** — a small grace period that remembers a jump press just before landing.
- **Combo** — consecutive enemy defeats within a short time window for extra score.

## Main Editing Surfaces

- `src/config/gameConfig.js` is the tuning file. Use it for most changes to difficulty, speed, health, cooldowns, and scoring.
- `src/data/levels.js` is the level design file. Use it for platform layouts, hole placement, enemy patrols, themes, and level names.
- `src/gameObjects/Player.js` owns player movement and actions.
- `src/gameObjects/Enemy.js` owns enemy movement and attacks.
- `src/scenes/GameScene.js` wires the level together and owns collisions, scoring events, goal completion, and camera behavior.
- `src/systems/audioManager.js` owns synthesized sounds and music loops.

## Invariants

- Keep the game runnable with `npm run dev` and buildable with `npm run build`.
- Keep game media local; do not depend on external runtime URLs.
- Keep level data readable as arrays and plain objects so agents can edit it surgically.
- Keep most kid-facing tuning in `src/config/gameConfig.js` or `src/data/levels.js` instead of scattering constants through behavior files.
- Do not commit generated dependency or build folders.
