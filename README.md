# 2D Platformer Phaser Template

A side-scrolling 2D platformer built with Phaser 3 and Vite. The player runs, jumps, rolls, crouches, shoots enemies, clears levels, and reaches the goal flag.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Controls

- Move: `A` / `D` or arrow keys
- Jump: `Space`, `W`, or up arrow
- Crouch: `S` or down arrow
- Shoot: `F`
- Roll: `Shift`
- Pause: `Esc`

## Main Edit Points

- `src/config/gameConfig.js` — player speed, jump, health, bullets, enemies, scoring, and other numeric tuning.
- `src/data/levels.js` — level names, spawn and goal positions, holes, platforms, walls, enemy patrols, and theme choices.
- `src/gameObjects/Player.js` — player movement, jumping, rolling, crouching, shooting, health, and respawn behavior.
- `src/gameObjects/Enemy.js` — enemy types, patrol, chase, attack, damage, and defeat behavior.
- `src/scenes/GameScene.js` — level assembly, collisions, score events, goal handling, and camera behavior.
- `src/scenes/UIScene.js` — HUD text for health, lives, score, combo, and time.
- `src/systems/audioManager.js` — generated audio patterns for jumps, shots, hits, UI blips, and music.

Start with `src/config/gameConfig.js` and `src/data/levels.js` for most kid-requested changes. Only edit lower-level scene or actor files when the request changes behavior that cannot be expressed as data or numbers.
