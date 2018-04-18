# A Happy Hacker's Monorepo

<!-- TOC depthFrom:2 -->

- [Package scripts](#package-scripts)
  - [`yarn lint`](#yarn-lint)
  - [`yarn typecheck`](#yarn-typecheck)

<!-- /TOC -->

## Package scripts

### `yarn lint`

Run [TSLint](https://palantir.github.io/tslint/) on all workspaces. TSLint is configured to only consider non-style-related rules, with formatting being handled by [Prettier](https://prettier.io).

### `yarn typecheck`

Typecheck all workspaces containing a `tsconfig.json` file.
