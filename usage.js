var slashDetector = require('./index.js')
var astring = 'wefiwejifljwie\\\\\///////\\\\/////'

var obj = slashDetector(astring)

console.log(obj.slash.length, obj.backslash.length, astring.length, obj)
