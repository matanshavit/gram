# Gram

**Architecture Interview Tool** - A specialized software architecture diagramming tool built on tldraw, optimized for technical interviews.

## Overview

Gram enhances tldraw with interview-specific features like pre-built architecture components, scenario templates, and smart connections for different data flows. Built to help candidates focus on architecture logic rather than drawing mechanics.

## Tech Stack

- **Frontend**: Vite + React + TypeScript + Tailwind CSS
- **Backend**: Fastify + TypeScript  
- **Diagramming**: @tldraw/tldraw SDK
- **Package Manager**: pnpm (monorepo)

## Development

```bash
# Install dependencies
pnpm install

# Start development servers (frontend + backend)
pnpm dev

# Build all packages
pnpm build

# Type checking
pnpm type-check
```

## Project Structure

```
gram/
├── packages/
│   ├── frontend/     # Vite React app (port 3000)
│   └── backend/      # Fastify API (port 3001)
├── CLAUDE.md         # Detailed project plan
└── package.json      # Workspace configuration
```

## Development Status

- ✅ **Foundation**: Project structure and development setup
- 🚧 **Core Features**: Custom tldraw shapes and toolbar  
- 📋 **Templates**: Interview scenario templates and export functionality

---

*Built for architecture interview preparation and portfolio demonstration.*