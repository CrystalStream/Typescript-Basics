# Typescript Basics

This repo its only for learning typescript.

Topics:
* Install typescript
* Using the compiler
* Setting up a basic workspace.


### Typescript installation

On the command line runs 

``` npm install -g typescript ```

This command will download and install typescript globally.


### Using the compiler

Once you installed Typescriot, to compile a .ts file just run

``` tsc <file> ```

To compile all the files easily we could run:

``` tsc --init ```

This command will create a tsconfig.json file where all the compiler configurations goes. then we could easily just run within oru project folder: 

``` tsc ```


### Basic setup

On this examples we are runnning a local server. to install it first we need to create the package.json file, so we need to run:

``` npm init ```

This will create the package.json file, then to install the server we are going to use we run:

``` npm install --save-dev lite-server ```

This will install the [lite-serve](https://github.com/johnpapa/lite-server) library on the dev dependencies, because we only need on the dev dependencies.


### Installing third-part libraries.

To user third-part libraries, we first need to install the library with:

``` npm install --save | --save-dev <name-of-library> ```

This command will download the library. Then we can use a module loader (We are using [SystemJS](https://github.com/systemjs/systemjs))

```html
<script src="node_modules/systemjs/dist/system.js"></script>
	<script>
		// Set our baseUrl reference path
		SystemJS.config({
			map: {
				'jQuery': 'node_modules/jquery/dist/jquery.min.js' 
			},
			baseUrl: '/',
			packages: {
				'/':{
					defaultExtension: 'js'
				}
			}
		})

		// Load /js/main.js
		SystemJS.import('app.js')
	</script>
```

In the map option of the SystemJS config we set up the mapping of the library. Then on our file we import the file with the given name.

``` import "jQuery"; ```

Finally we need to tell TS to 'learn' all the js library definitions. We can install a module called [tpyings](https://github.com/typings/typings)

Then we run:

``` typings install dt~<package-name> --global --save```

--global: Mean all your project files will have access to it

--save: Creates a .json file so we dont have to share all the definitions

dt: [Definitely Typed](https://github.com/DefinitelyTyped/DefinitelyTyped)

With TS 2.0 we have a built-in of getting all de defintition.

``` npm install --save-dev @types/<package-name> ```

This will get the definition and added that definition to the package.json