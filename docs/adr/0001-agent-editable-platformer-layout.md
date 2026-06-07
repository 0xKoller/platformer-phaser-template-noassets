# Agent-Editable Platformer Layout

## Context

This template is used as a Studio starter for kids remixing a Phaser platformer with an AI agent. The agent needs to make small, reliable edits from kid-language requests like "make the jump higher", "add more enemies", or "turn level 2 into a desert" without rediscovering the codebase every turn.

The project is not yet reorganized into Rabbit's full `phaser-2d` blueprint, so the existing Phaser files must still provide clear edit seams.

## Decision

Keep the current Phaser/Vite runtime layout, but document deterministic edit routing:

- Numeric tuning lives in `src/config/gameConfig.js`.
- Level layout and visual theme data live in `src/data/levels.js`.
- Player-specific behavior lives in `src/gameObjects/Player.js`.
- Enemy-specific behavior lives in `src/gameObjects/Enemy.js`.
- Level assembly, collisions, scoring events, camera, and goal flow live in `src/scenes/GameScene.js`.
- HUD display lives in `src/scenes/UIScene.js`.
- Synthesized sound and music patterns live in `src/systems/audioManager.js`.

The root `AGENTS.md` and `CONTEXT.md` are the authoritative orientation docs for future agents editing this starter.

## Consequences

- Agents can make most kid-requested changes without broad rewrites.
- The template can be imported as a legacy Studio starter while still being easier to edit than an undocumented Phaser repo.
- A future blueprint refactor can move toward `src/game-config.js`, `src/player.js`, `src/rules.js`, and actor files without changing the current gameplay contract.
- Generated folders such as `node_modules/` and `dist/` should not be committed, because they slow imports and distract agents from source files.
