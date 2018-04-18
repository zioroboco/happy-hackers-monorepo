# A Happy Hacker's Monorepo

<!-- TOC depthFrom:2 -->

- [Package scripts](#package-scripts)
  - [`yarn test [--coverage]`](#yarn-test-coverage)
  - [`yarn lint`](#yarn-lint)
  - [`yarn typecheck`](#yarn-typecheck)
- [VSCode tasks](#vscode-tasks)
  - [Build (lint and typecheck)](#build-lint-and-typecheck)
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

## VSCode tasks

### Build (lint and typecheck)

The default build task in VSCode is set to run all non-style-related static checks against the entire project, parse the output, and show any failures in the Problems view.

Note that the default shorcut for running build tasks is `Meta-Shift-B`.

## How-to...

### Add additional workspaces

- Create a new directory under `/packages/`
- Add a `package.json` with name `@happy-hackers-monorepo/<workspace-name>`
- Add a `tsconfig.json` which extends the root typescript config
- Add a `jest.config.js` file which exports an object which inherits from the base `jest.workspace.js`
