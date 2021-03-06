# Web Snippets

This repo contains a collection of helpful code snippets for the web (TypeScript, Javascript, CSS).

## General

All Javascript snippets are generated from the corresponding TypeScript snippet. So, do not edit the snippets in `js/`.

All files should start with this line:

```ts
/*! <name> <version> | MIT | © Hannes Dröse https://github.com/hd-code/web-snippets */
```

- `<name>` is the name of the package, it usually corresponds with the filename
- `<version>` is the version number in classical semver format (e.g `v1.2.3`)

Make sure to update the version number after changing a snippet.

## TypeScript Snippets

### Preparation

Please install the dev dependencies before working on the TypeScript snippets.

```sh
npm install
```

### Testing

All TypeScript snippets should be tested thoroughly. Tests are placed in `test/` and are executed by the Mocha framework.

### Compile to Javascript

**Always run `npm run deploy` after editing the TypeScript snippets.**

This will perform several tasks: first it performs typechecks and validates the code style. It then runs the tests. If all goes well, the Javascript files will be compiled and put into the `js/` folder together with TypeScript declaration files. The Javascript files will be minified as well.

If anything goes wrong, the build will not succeed and errors will be logged to the console.
