

/**
 * Module dependencies.
 */


/**
 * Expose `Dropdown`.
 */

module.exports = toObject;

/**
 * toObject
 *
 * @param {Array} array array to convert
 * @param {String} key (optional)
 * @param {Boolean} removeItemKey remove key item (default false)
 * @param {Function} fn modify function (optional)
 * @return {Object}
 */

function toObject(array, key, removeKeyItem, fn) {
  var obj = {};
  fn = 'function' == typeof removeKeyItem ? removeKeyItem : fn;
  removeKeyItem = 'function' == typeof removeKeyItem ? false : removeKeyItem;
  fn = fn || function(k){ return k; };

  for (var i = 0; i < array.length; i++) {
    var prp = fn(array[i][key] || i);
    obj[prp] = array[i];
    if (removeKeyItem) {
      delete obj[prp][key];
    }
  }
  return obj;
}
