var slashmod = require('./index.js')
var astring = 'wefiwejifljwie\\\\\///////\\\\/////'

var det = slashmod.iSlashes(astring)

console.log(det)
