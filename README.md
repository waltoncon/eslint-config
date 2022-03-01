# waltoncon eslint config

An ESLint config based on [antfu's config](https://github.com/antfu/eslint-config) that includes Prettier.

## Install

```shell
pnpm add -D typescript eslint prettier # Peer dependencies
pnpm add -D @waltoncon/eslint-config
```

## Usage

`.eslintrc`

```json
{
    "extends": "@waltoncon"
}
```

`prettier.config.js`

```js
module.exports = require('@waltoncon/eslint-config/prettier.config.js');
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

**File | Settings | Languages & Frameworks | JavaScript | Prettier** (if you have the Prettier plugin installed)

- Uncheck "On 'Refactor Code' action"
- Uncheck "On save"

**File | Settings | Languages & Frameworks | JavaScript | Code Quality Tools | ESLint**

- Check "Run eslint --fix on save"