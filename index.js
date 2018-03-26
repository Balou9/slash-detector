function strHasBackslashes (backSlasher) {
  return /\\/.test(backSlasher)
}
function strHasSlashes (slasher) {
    return /\//.test(slasher)
}

function iSlashes (str) {
  return str.split('').map(function (char) {
    if (char === '/') return true
    else if (char === '\\') return false
    else return null
  })
}

exports.strHasBackslashes = strHasBackslashes
exports.strHasSlashes = strHasSlashes
exports.iSlashes = iSlashes
