define(['./_root', './stubFalse'], function(root, stubFalse) {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined;

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = !Buffer ? stubFalse : function(value) {
    return value instanceof Buffer;
  };

  return isBuffer;
});
