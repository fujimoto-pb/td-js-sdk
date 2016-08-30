var objOwnProperty = Object.prototype.hasOwnProperty
// var assign = require('object.assign/polyfill')
// var assign = function () {}
var lang = require('./lang')

// function baseCopy (source, props, object) {
//   object || (object = {})

//   var index = -1
//   var length = props.length

//   while (++index < length) {
//     var key = props[index]
//     object[key] = source[key]
//   }
//   return object
// }

// function baseAssign(object, source) {
//   return source == null
//     ? object
//     : baseCopy(source, keys(source), object)
// }

// var keys = Object.keys || function keys (obj) {
// }

function get (object, path, defaultValue) {
  if (!lang.isObject(object) || !lang.isArray(path) || !path.length) {
    return defaultValue
  }

  var currentValue = object
  var length = path.length
  for (var idx = 0; idx < length; idx++) {
    var key = path[idx]

    if (lang.isObject(currentValue) && hasKey(currentValue, key)) {
      currentValue = currentValue[key]
      continue
    } else {
      currentValue = defaultValue
      break
    }
  }

  return currentValue
}

function has (object, path) {
  var result = get(object, path)
  return !lang.isUndefined(result)
}

function hasKey (object, key) {
  return objOwnProperty.call(object, key)
}

module.exports = {
  // assign: assign,
  get: get,
  has: has,
  hasKey: hasKey
}