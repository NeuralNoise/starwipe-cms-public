# StarWipe CMS
CMS frontend for StarWipe.

## Running Locally
To get starwipe-cms running locally:

1. Follow the steps to start up [starwipe](https://github.com/theonion/starwipe)
so the StarWipe API is available to the CMS.

1. Add a mapping for ```cms.starwipe.local``` to your ```docker-dev``` ip in
your ```/etc/hosts```.

1. Inside starwipe-cms, run the following commands (the serve script will build the server):
  ```bash
  $ ./scripts/serve
  ```

1. Access the locally running CMS at [cms.starwipe.local:10001](http://cms.starwipe.local:9000)

### Linting
To lint, do the setup steps above, but instead of running ```./scripts/serve```,
run ```./scripts/lint```.

If you would like to integrate eslint with your editor, add an ```.eslintrc```
file at the root of the project folder with the following contents:
```json
{
  "extends": "./resources/js/eslint.json"
}
```
You can switch the path from ```eslint.json``` to ```eslint-dev.json``` for more
lenient linting for things like spec, server, and build files.

### APP_ENV Variable
The ```docker-compose``` file that ships with this repo has its ```APP_ENV```
set to ```local```. This will enable livereload and other development-friendly
settings when serving the CMS.

To enable a more production-like environment, set the ```APP_ENV``` variable
in ```docker-compose``` to ```production``` and comment out the ```command```
setting. Livereloading will not be enabled, and all sources will be minified
before serving.
