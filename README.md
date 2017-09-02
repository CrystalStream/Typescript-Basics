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


 