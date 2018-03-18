var tape = require('tape')
var slashDetector = require('./index.js')
var astr = 'wefiwejifljwie\\\\\///////\\\\/////'
var number = 0

tape('Detector function ', function (t) {
  t.ok(slashDetector(astr), 'true', 'is ok')
  t.end()
})

tape('Detector is ', function (t) {
  t.ok(typeof slashDetector(astr), 'string', 'is string')
  t.end()
})

tape('Length of detectors and string', function (t) {
  var obj = slashDetector(astr)
  t.is(obj.slash.length, obj.backslash.length, astr.length, 'is equal')
  t.end()
})
