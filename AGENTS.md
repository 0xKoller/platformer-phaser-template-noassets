# Agent Instructions

This repo is a Studio starter for a kid-remixable Phaser 3 platformer. Optimize edits for small, safe changes that preserve a playable game.

## Workflow

- Read `CONTEXT.md` before changing gameplay terms or adding concepts.
- Run `npm run build` after changing JavaScript, assets, or project configuration.
- Prefer the smallest correct edit.
- Do not edit generated folders such as `node_modules/` or `dist/`.
- Do not add external network calls, auth, analytics, payments, or server requirements.
- Keep assets local under `public/assets/` when adding game media.

## Routing Rules

Use this order when deciding where a change belongs:

1. Numbers, amounts, speeds, sizes, health, gravity, cooldowns, and scoring go in `src/config/gameConfig.js`.
2. Level layout, enemies per level, holes, platforms, walls, spawn, goal, names, and themes go in `src/data/levels.js`.
3. Player-only behavior goes in `src/gameObjects/Player.js`.
4. Enemy-only behavior goes in `src/gameObjects/Enemy.js`.
5. Collisions, level assembly, score events, camera, and goal flow go in `src/scenes/GameScene.js`.
6. HUD text and display formatting go in `src/scenes/UIScene.js`.
7. Sound and music patterns go in `src/systems/audioManager.js`.
8. Bootstrap, dimensions, Phaser config, and scene order in `src/main.js` are rarely edited.

If a kid asks to make something faster, stronger, bigger, smaller, easier, harder, shorter, longer, or worth more points, check `src/config/gameConfig.js` first.

## Kid-Safe Changes

- Good: change jump height, speed, lives, bullet cooldown, enemy chase range, score values, level names, theme assets, platform placement, enemy patrols, HUD labels, music pattern, and colors.
- Risky: rewriting scene lifecycle, changing Phaser physics mode, replacing the whole asset-loading system, adding npm packages, or changing build tooling.
- If a new feature needs a new file, add it under the closest existing concern and wire it from `GameScene.js`.

## Validation

After file edits, run:

```bash
npm run build
```

If the build fails, fix imports and syntax before reporting completion.
