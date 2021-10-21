# Carna package Template

The template covers the following use cases:

| Type          | Description                                                                       |
| ------------- | --------------------------------------------------------------------------------- |
| `Application` | The package is not published on NPM and runs directly, e.g. as a Docker container |
| `Library`     | The package is a library that is published on NPM, for example                    |
| `CLI`         | The package is like a library, but with one executable file                       |
| `Monorepo`    | This is a collection of different packages in one repository                      |

Depending on which scenario has been selected, the following adjustment must still be made.
Regardless of the selection, the points under `Special Settings` must still be made.

## 🧬 - Application Package

Delete the following folders or files:

```bash
rm -rf ./.github/workflows/release.yml ./.releaserc.json
rm -rf ./src/bin ./packages
```

Delete the following keys in `package.json` with the subvalues:

```json
{
  "bin": {},
  "repository": {},
  "bugs": {},
  "publishConfig": {},
  "workspaces": {}
}
```

## 🧬 - CLI Package

Delete the following folders or files:

```bash
rm -rf ./packages
```

Delete the following keys in `package.json` with the subvalues:

```json
{
  "workspaces": {}
}
```

## 🧬 - Library Package

Delete the following folders or files:

```bash
rm -rf ./src/bin ./packages
```

Delete the following keys in `package.json` with the subvalues:

```json
{
  "bin": {},
  "workspaces": {}
}
```

## 🧬 - Monoreepo

There is a prepared package for each of the above types, these can be taken depending on the scenario...

Delete the following folders or files:

```bash
rm -rf ./.github/workflows/release.yml ./.releaserc.json
rm -rf ./src ./tests
```

Delete the following keys in `package.json` with the subvalues:

```json
{
  "bin": {},
  "repository": {},
  "bugs": {},
  "publishConfig": {}
}
```

## 💉 - Special Settings

The `jest.config.js` must still be customized.
For a single repository the monorepo entries have to be deleted and for a monorepo the single repository entries have to be deleted. When extending a monorepo (new package) the corresponding entries have to be added.

### Project variables

Replace the following variable in the project with the respective values:

| Key                        | Description                                        |
| -------------------------- | -------------------------------------------------- |
| `placeholder-package-name` | Package name                                       |
| `package-name-app`         | Package name from package-app (only with monorepo) |
| `package-name-cli`         | Package name from package-cli (only with monorepo) |
| `package-name-lib`         | Package name from package-lib (only with monorepo) |
| `kettil`                   | Github username (from the URL)                     |
| `github-repo`              | Github repository (from the URL)                   |

The following values can or should be adjusted in the `package.json`:

```json
{
  "description": "",
  "license": "ISC",
  "author": "name <email>",
  "keywords": [],
  "engines": {},
  "private": true
}
```

If the package is to be published, e.g. at NPM, then the key `private` must be set to `false`.

### Without Github

Delete the following folders or files:

```bash
rm -rf .github
```

Delete the following keys in **all** `package.json` with the subvalues:

```json
{
  "repository": {},
  "bugs": {}
}
```
