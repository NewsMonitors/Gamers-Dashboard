# News-Monitor Gamers Dashboard 

## Usage

Install `yo`, `gulp-cli`, and `generator-angular-fullstack`:
```
npm install -g yo gulp-cli generator-angular-fullstack
```
__Please note__: If you run into trouble compiling native add-ons during the installation, follow [`node-gyp`](https://github.com/nodejs/node-gyp)'s short guide on [required compilation tools](https://github.com/nodejs/node-gyp#installation).

> If you're looking for Angular 2, you can try the latest alpha (`npm install -g generator-angular-fullstack@alpha`), or if you'd like a more complete solution, you can give [angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter) a shot.

---

Run `yo angular-fullstack`
```
yo angular-fullstack
```

**See the [Getting Started](https://angular-fullstack.github.io/get-started/) guide for more information.**

## Prerequisites

* MongoDB - Download and Install [MongoDB](https://www.mongodb.com/download-center#community) - If you plan on scaffolding your project with mongoose, you'll need mongoDB to be installed and have the `mongod` process running.
* The project's JavaScript is written in ECMAScript 2015. If you're unfamiliar with the latest changes to the specification for JavaScript, check out http://es6-features.org/

## Supported Configurations

**General**

* Build Systems: `Gulp`
* Testing: 
  * `Jasmine`
  * `Mocha + Chai + Sinon`
    * Chai assertions:
      * `Expect`
      * `Should`

**Client**

* Scripts: `JavaScript (Babel)`, `TypeScript`
* Module Systems: `Webpack`
* Markup:  `HTML`, `Pug`
* Stylesheets: `CSS`, `Stylus`, `Sass`, `Less`
* Angular Routers: `ngRoute`, `ui-router`
* CSS Frameworks: `Bootstrap`
  * Option to include `UI Bootstrap`

**Server**

* Scripts: `JavaScript (Babel)`, `TypeScript` (planned)
* Database:
  * `None`,
  * `MongoDB`, `SQL`
    * Authentication boilerplate: `Yes`, `No`
    * oAuth integrations: `Facebook`, `Twitter`, `Google`
    * Socket.io integration: `Yes`, `No`


## Generators

Available generators:

* App
    - [angular-fullstack](/docs/generators/app.md) (aka [angular-fullstack:app](/docs/generators/app.md))
* Server Side
    - [angular-fullstack:endpoint](/docs/generators/endpoint.md)
* Client Side (via [generator-ng-component](https://github.com/DaftMonk/generator-ng-component))
    - [angular-fullstack:route](/docs/generators/route.md)
    - [angular-fullstack:component](/docs/generators/component.md)
    - [angular-fullstack:controller](/docs/generators/controller.md)
    - [angular-fullstack:filter](/docs/generators/filter.md)
    - [angular-fullstack:directive](/docs/generators/directive.md)
    - [angular-fullstack:service](/docs/generators/service.md)
    - [angular-fullstack:provider](/docs/generators/service.md)
    - [angular-fullstack:factory](/docs/generators/service.md)
    - [angular-fullstack:decorator](/docs/generators/decorator.md)
* Deployment
    - [angular-fullstack:openshift](/docs/generators/openshift.md)
    - [angular-fullstack:heroku](/docs/generators/heroku.md)


## Documentation

Check out our [documentation home page](http://angular-fullstack.github.io/generator-angular-fullstack).


## Contribute

See the [contributing docs](https://github.com/DaftMonk/generator-angular-fullstack/blob/master/contributing.md)

When submitting an issue, please follow the [Yeoman issue guidelines](https://github.com/yeoman/yeoman/blob/master/contributing.md#issue-submission). Especially important is to make sure Yeoman is up-to-date, and providing the command or commands that cause the issue, as well as any stack traces.

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)


