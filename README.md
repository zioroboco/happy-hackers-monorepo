# A Happy Hacker's Monorepo

<!-- TOC depthFrom:2 -->

- [Package scripts](#package-scripts)
  - [`yarn lint`](#yarn-lint)
  - [`yarn typecheck`](#yarn-typecheck)
- [VSCode tasks](#vscode-tasks)
  - [Build (lint and typecheck)](#build-lint-and-typecheck)

<!-- /TOC -->

## Package scripts

### `yarn lint`

Run [TSLint](https://palantir.github.io/tslint/) on all workspaces. TSLint is configured to only consider non-style-related rules, with formatting being handled by [Prettier](https://prettier.io).

### `yarn typecheck`

Typecheck all workspaces containing a `tsconfig.json` file.

## VSCode tasks

### Build (lint and typecheck)

The default build task in VSCode is set to run all non-style-related static checks against the entire project, parse the output, and show any failures in the Problems view.

Note that the default shorcut for running build tasks is `Meta-Shift-B`.
