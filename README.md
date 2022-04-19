# waltoncon eslint config

An ESLint config based on [antfu's config](https://github.com/antfu/eslint-config) that includes Prettier.

## Install

```shell
# pnpm:
pnpm add -D typescript eslint # Peer dependencies
pnpm add -D @waltoncon/eslint-config

# npm:
npm add -D typescript eslint # Peer dependencies
npm add -D @waltoncon/eslint-config

# yarn:
yarn add -D typescript eslint # Peer dependencies
yarn add -D @waltoncon/eslint-config
```

## Usage

`.eslintrc`

```json
{
    "extends": "@waltoncon"
}
```

## Editor setup

### VSCode

Add the following to `.vscode/settings.json` in the root of your project

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

This eslint config handles the same things as Prettier so `prettier.enable` can be set to false. `source.fixAll.eslint` will fix the issue that Prettier would have fixed.

### Jetbrains IDEs

**File | Settings | Languages & Frameworks | JavaScript | Code Quality Tools | ESLint**

- Check "Run eslint --fix on save"
