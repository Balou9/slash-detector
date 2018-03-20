# slash-detector

[![build status](http://img.shields.io/travis/Balou9/slash-detector.svg?style=flat)](http://travis-ci.org/Balou9/slash-detector) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/Balou9/slash-detector?branch=master&svg=true)](https://ci.appveyor.com/project/Balou9/slash-detector)

***

Detects slashes and backslashes in strings

***

## Get it!

```
npm install --save slash-detector
```

***

## Usage

``` js
var slashmod = require('./index.js')
var astring = 'wefiwejifljwie\\\\\///////\\\\/////'

var obj = slashmod.slashDetector(astring)
```

***

## API

### `slashDetector(str)`

***

## License

[MIT](./license.md)
