# Gram

**Architecture Interview Tool** - A specialized software architecture diagramming tool built on tldraw, optimized for technical interviews.

## Overview

Gram enhances tldraw with interview-specific features like pre-built architecture components, scenario templates, and smart connections for different data flows. Built to help candidates focus on architecture logic rather than drawing mechanics.

## Tech Stack

- **Frontend**: Vite + React + TypeScript + Tailwind CSS
- **Backend**: Fastify + TypeScript
- **Diagramming**: @tldraw/tldraw SDK
- **Package Manager**: pnpm (monorepo)
- **Code Quality**: ESLint + Prettier + Husky + lint-staged

## Development

```bash
# Install dependencies
pnpm install

# Start development servers (frontend + backend)
pnpm dev

# Build all packages
pnpm build

# Code quality
pnpm lint         # Check code quality
pnpm lint:fix     # Auto-fix linting issues
pnpm format       # Format code with Prettier
pnpm format:check # Check code formatting
pnpm type-check   # TypeScript type checking

# Clean build artifacts
pnpm clean
```

## Project Structure

```
gram/
├── packages/
│   ├── frontend/     # Vite React app (port 3000)
│   └── backend/      # Fastify API (port 3001)
├── .husky/           # Git hooks
├── eslint.config.js  # ESLint configuration
├── .prettierrc       # Prettier configuration
├── CLAUDE.md         # Detailed project plan
└── package.json      # Workspace configuration
```

## Development Status

- ✅ **Foundation**: Project structure and development tooling
- 🚧 **Core Features**: Custom tldraw shapes and toolbar
- 📋 **Templates**: Interview scenario templates and export functionality

## Code Quality

This project uses automated code quality tools:

- **Pre-commit hooks**: Automatically lint and format staged files
- **ESLint**: Catches bugs and enforces code standards
- **Prettier**: Ensures consistent formatting
- **TypeScript**: Static type checking across all packages

---

_Built for architecture interview preparation and portfolio demonstration._
