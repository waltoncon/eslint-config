# waltoncon eslint config

## Usage

Install with

```shell
pnpm add -D @saffron-monorepo/eslint-config
```

Create a `.eslintrc` file and add

```json
{
    "extends": "@saffron-monorepo"
}
```

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