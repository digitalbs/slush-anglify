# slush-anglify [![Build Status](https://secure.travis-ci.org/digitalbs/slush-anglify.png?branch=master)](https://travis-ci.org/digitalbs/slush-anglify) [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-anglify.png)](http://badges.enytc.com/for/npm/slush-anglify)

> Slush generator to scaffold out angular + browserify + gulp apps


## Getting Started

Welcome to the Angular and Browserify generator for Slush. Slush-Anglify will scaffold out an Angular application with Browserify. It follows the latest Angular architecture organization standards. Layout follows [BEM + SMACSS](http://webuild.envato.com/blog/how-to-scale-and-maintain-legacy-css-with-sass-and-smacss/). 

### Prerequisites
As with any Slush generator, you will need to have **Node** and **Slush** installed globally.

Install `slush` globally:

```bash
$ npm install -g slush
```
After you have all the prerequisites installed, install the **Slush-Anglify** generator globally. 

Install `slush-anglify` globally:

```bash
$ npm install -g slush-anglify
```

### Usage

Create a new folder for your project:

```bash
$ mkdir my-project
```

Run the generator from within the new folder:

```bash
$ cd my-project 
$ slush anglify
```

There are some basic scaffolding questions to help get your application built out. During the scaffolding process, it will install all node modules and pull down any third-party library dependencies needed for the application with bower. 

Once you are ready to start developing, you can run the application in develop mode with the following gulp task:
```bash
$ gulp develop
```

There is an optional argument to pass with the develop task if you would like to see the coverage of your code:
```bash
$ gulp develop --coverage
```


## Getting To Know Slush

Slush is a tool that uses Gulp for project scaffolding.

Slush does not contain anything "out of the box", except the ability to locate installed slush generators and to run them with liftoff.

To find out more about Slush, check out the [documentation](https://github.com/klei/slush).

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/digitalbs/slush-anglify/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/digitalbs/slush-anglify/issues).

## License

The MIT License

Copyright (c) 2014, Brian Schneider

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

