function strHasBackslashes (backSlasher) {
  return /\\/.test(backSlasher)
}

function strHasSlashes (slasher) {
    return /\//.test(slasher)
}

function slashDetector (str) {
  var slash = []
  var backslash = []
    for (var i = 0; i < str.length; i++){
      slash.push(strHasSlashes(str.charAt(i)))
      backslash.push(strHasBackslashes(str.charAt(i)))
    }
  var obj = {slash: slash,
             backslash: backslash}
  return obj
}

module.exports = slashDetector
