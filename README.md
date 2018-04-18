# A Happy Hacker's Monorepo

An uncomplicated Typescript boilerplate for single-project monorepos. Opinionated and fun to work with. Uses [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/), [GitLab CI](https://about.gitlab.com/features/gitlab-ci-cd/), [TSLint](https://palantir.github.io/tslint/), [Prettier](https://prettier.io/), [Jest](https://facebook.github.io/jest/), [WallabyJS](https://wallabyjs.com/) and [VSCode](https://code.visualstudio.com/).

<!-- TOC depthFrom:2 -->

- [Package scripts](#package-scripts)
  - [`yarn precommit`](#yarn-precommit)
  - [`yarn test [--coverage]`](#yarn-test-coverage)
  - [`yarn lint`](#yarn-lint)
  - [`yarn typecheck`](#yarn-typecheck)
- [VSCode](#vscode)
  - [Setup](#setup)
  - [Tasks](#tasks)
  - [Debugging](#debugging)
- [How-to...](#how-to)
  - [Set up workspaces](#set-up-workspaces)

<!-- /TOC -->

## Package scripts

### `yarn precommit`

Run the entire static analysis and testing pipeline, including the Typescript compiler, TSLint, Prettier and Jest. Should ensure that your branch will pass CI, provided that the working tree is clean.

### `yarn test [--coverage]`

Run all `*.spec.ts` files project-wide using Jest. Adding the `--coverage` option will output a coverage report to the CLI, as well as producing an HTML report in `/coverage/`.

### `yarn lint`

Run TSLint on all workspaces. TSLint is configured to only consider non-style-related rules, with formatting being handled by Prettier.

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

### Set up workspaces

- Create a new directory under `/packages/`
- Add a `package.json` with name `@happy-hackers-monorepo/<workspace-name>`
- Add a `tsconfig.json` which extends the root typescript config
- Add a `jest.config.js` file which exports an object which inherits from the base `jest.workspace.js`
