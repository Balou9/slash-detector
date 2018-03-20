var tape = require('tape')
var slashmod = require('./index.js')
var astr = 'wefiwejifljwie\\\\\///////\\\\/////'

tape('Detector function ', function (t) {
  t.ok(slashmod.slashDetector(astr), 'true', 'is ok')
  t.end()
})

tape('Detector is ', function (t) {
  t.ok(typeof slashmod.slashDetector(astr), 'string', 'is string')
  t.end()
})

tape('Length of detectors and string', function (t) {
  var obj = slashmod.slashDetector(astr)
  t.is(obj.slash.length, obj.backslash.length, astr.length, 'is equal')
  t.end()
})
