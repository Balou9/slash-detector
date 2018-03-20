var slashmod = require('./index.js')
var astring = 'wefiwejifljwie\\\\\///////\\\\/////'

var obj = slashmod.slashDetector(astring)

console.log(obj.slash.length, obj.backslash.length, astring.length, obj)
