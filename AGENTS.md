# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

This is a minimal Node.js HTTP server application (`CusorAgentTest`). It uses Node.js built-in `node:http`, `node:test`, and `node:assert` modules — no runtime framework dependencies are needed.

### Available commands

All commands are defined in `package.json`:

| Command | Description |
|---|---|
| `npm run dev` | Start the development server on port 3000 |
| `npm run lint` | Run ESLint on `src/` |
| `npm test` | Run tests using Node.js built-in test runner |

### Dev environment notes

- **Node.js version**: v22+ (uses built-in `node:test` runner and ES module features).
- **No external services** (databases, caches, etc.) are required.
- **Port 3000** is the default dev server port (override via `PORT` env var).
- Tests run on port 3001 to avoid conflicts with the dev server.
- ESLint uses the flat config format (`eslint.config.js`).
