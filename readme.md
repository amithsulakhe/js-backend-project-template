# Project Setup

## Prerequisites
- Node.js installed
- npm installed

## Initial Setup

### Install Development Dependencies
```bash
npm i husky lint-staged -D
npx husky init
npm i typescript -D
npm i -D @types/node
npm i ts-node -D


npm i @commitlint/cli @commitlint/config-conventional -D
```

## Husky Configuration
Husky is set up to run git hooks. The initial configuration helps enforce code quality and formatting before commits.

## TypeScript Configuration
The project is configured with TypeScript for type-safe development:
- Installed TypeScript dev dependency
- Added @types/node for Node.js type definitions
- Installed ts-node for TypeScript execution

