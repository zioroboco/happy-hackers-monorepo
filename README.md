# A Happy Hacker's Monorepo

<!-- TOC depthFrom:2 -->

- [Package scripts](#package-scripts)
  - [`yarn test [--coverage]`](#yarn-test-coverage)
  - [`yarn lint`](#yarn-lint)
  - [`yarn typecheck`](#yarn-typecheck)
- [VSCode](#vscode)
  - [Setup](#setup)
  - [Tasks](#tasks)
  - [Debugging](#debugging)
- [How-to...](#how-to)
  - [Add additional workspaces](#add-additional-workspaces)

<!-- /TOC -->

## Package scripts

### `yarn test [--coverage]`

Run all `*.spec.ts` files project-wide using [Jest](https://facebook.github.io/jest/). Adding the `--coverage` option will output a coverage report to the CLI, as well as producing an HTML report in `/coverage/`.

### `yarn lint`

Run [TSLint](https://palantir.github.io/tslint/) on all workspaces. TSLint is configured to only consider non-style-related rules, with formatting being handled by [Prettier](https://prettier.io).

### `yarn typecheck`

Typecheck all workspaces containing a `tsconfig.json` file.

## VSCode

### Setup

- [Install VSCode](https://code.visualstudio.com/)

- Open the project and let VSCode install recommended extensions

- Open `View > Command Palette` and run `Shell Command: Install 'code' command in PATH`

> **Tip:** Always run VSCode from a terminal, as it will pick up your working directory and environment variables.

### Tasks

**Build: lint and typecheck**

The default build task in VSCode is set to run all non-style-related static checks against the entire project, parse the output, and show any failures in the Problems view.

### Debugging

**Jest**

This will run Jest project-wide while attached to its node process, and stop on any breakpoints encountered both in the spec files or the code under test. This is an excellent way to debug, as it sets up your code under known conditions and allows for mocking of dependencies.

## How-to...

### Add additional workspaces

- Create a new directory under `/packages/`
- Add a `package.json` with name `@happy-hackers-monorepo/<workspace-name>`
- Add a `tsconfig.json` which extends the root typescript config
- Add a `jest.config.js` file which exports an object which inherits from the base `jest.workspace.js`
