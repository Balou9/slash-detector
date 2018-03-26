var tape = require('tape')
var slashmod = require('./index.js')
var astr = 'wefiwejifljwie\\\\\///////\\\\/////'

tape('Detector function ', function (t) {
  t.ok(slashmod.iSlashes(astr), 'true', 'is ok')
  t.end()
})

tape('Detector is ', function (t) {
  t.ok(typeof slashmod.iSlashes(astr), 'array', 'typeof array')
  t.end()
})

tape('Detector and string has same length', function (t) {
  t.ok(slashmod.iSlashes(astr).length === astr.length, 'true',
  'is true')
  t.end()
})
