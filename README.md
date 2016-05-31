# StarWipe CMS
CMS frontend for StarWipe.

## Running Locally
To get starwipe-cms running locally:

1. Follow the steps to start up [starwipe](https://github.com/theonion/starwipe)
so the StarWipe API is available to the CMS.

### Linting
You can lint the code in this repository with eslint using the `lint` script in `scripts/lint`:

```bash
./scripts/lint
```

Alternatively, you may use the `npm` script to run the lint script:

```bash
npm run lint
```

### Build
To build the project locally, use the `build` script in `scripts/build`:

```bash
./scripts/build
```

Alternatively, you may use the `npm` script to run the build script:

```bash
npm run build
```

### Releasing
To cut a release, make sure all your local changes are committed and your working directory is clean. Simply run the `scripts/tag-and-release` script, passing it the type of release you wish to build _(temp, patch, minor, major)_.

```bash
./scripts/tag-and-release
```

This will run the linter, the tests and build the project into a distributable build product in the `dist` folder.
