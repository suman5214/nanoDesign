(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animation.ts":
/*!******************************!*\
  !*** ./src/app/animation.ts ***!
  \******************************/
/*! exports provided: slideInAnimation, slideInMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInMenu", function() { return slideInMenu; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            }),
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ], { optional: true })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
    ])
]);
var slideInMenu = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInMenu', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
    ])
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _select_page_select_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-page/select-page.component */ "./src/app/select-page/select-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]
    },
    { path: 'select',
        component: _select_page_select_page_component__WEBPACK_IMPORTED_MODULE_3__["SelectPageComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "router-outlet ~ * {\n  position: absolute;\n  height: 100%;\n  width: 100%; }\n\napp-home-page {\n  text-align: center;\n  font-size: 0.8em; }\n\n@media screen and (min-width: 500px) {\n    app-home-page {\n      font-size: 2em; } }\n\n@media screen and (min-width: 1200px) {\n    app-home-page {\n      font-size: 2.5em; } }\n\n@media screen and (min-width: 1600px) {\n    app-home-page {\n      font-size: 3em; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxzdW1hblxcRGVza3RvcFxcbmFub0Rlc2lnbi9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBRWhCO0lBSkY7TUFLSSxjQUFjLEVBQUEsRUFXakI7O0FBUkM7SUFSRjtNQVNJLGdCQUFnQixFQUFBLEVBT25COztBQUpDO0lBWkY7TUFhSSxjQUFjLEVBQUEsRUFHakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJyb3V0ZXItb3V0bGV0IH4gKiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuYXBwLWhvbWUtcGFnZXtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./src/app/animation.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.translate = translate;
        this.title = 'nanoDesign';
        translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [_animation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _select_page_select_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select-page/select-page.component */ "./src/app/select-page/select-page.component.ts");
/* harmony import */ var _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullpage/angular-fullpage */ "./node_modules/@fullpage/angular-fullpage/fesm5/fullpage-angular-fullpage.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _select_pill_select_pill_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./select-pill/select-pill.component */ "./src/app/select-pill/select-pill.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-svg-icon */ "./node_modules/angular-svg-icon/fesm5/angular-svg-icon.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_19__["TranslateHttpLoader"](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"],
                _select_page_select_page_component__WEBPACK_IMPORTED_MODULE_7__["SelectPageComponent"],
                _select_pill_select_pill_component__WEBPACK_IMPORTED_MODULE_14__["SelectPillComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_8__["AngularFullpageModule"],
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_9__["SwiperModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__["MDBBootstrapModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"]]
                    }
                }),
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__["WavesModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__["InputsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_15__["ButtonsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                angular_svg_icon__WEBPACK_IMPORTED_MODULE_16__["AngularSvgIconModule"]
            ],
            providers: [{
                    provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_9__["SWIPER_CONFIG"],
                    useValue: DEFAULT_SWIPER_CONFIG
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home-page/api-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/api-service.service.ts ***!
  \**************************************************/
/*! exports provided: ApiServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServiceService", function() { return ApiServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiServiceService = /** @class */ (function () {
    function ApiServiceService(http) {
        this.http = http;
    }
    ApiServiceService.prototype.getGames = function () {
        return this.http.get('https://us-central1-nanodesign-1d2cb.cloudfunctions.net/get_games');
    };
    ApiServiceService.prototype.postGames = function (list) {
        return this.http.post('https://us-central1-nanodesign-1d2cb.cloudfunctions.net/postResult', { games: list });
    };
    ApiServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiServiceService);
    return ApiServiceService;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg-icon (click)=\"nextPage()\" [applyCss]=\"true\" class=\"arrow-bot\" src=\"../../assets/arrow-bot.svg\" [svgStyle]=\"{ 'width.em': 2, 'height.em': 1 }\"></svg-icon>\r\n<header [@enterAnimation] id=\"menu\" [ngClass]=\"{'non-first': !disableMenu}\">\r\n  <div class=\"top-left\">\r\n    <span>\r\n      <a>STORY</a>\r\n      <a>GALLERY</a>\r\n    </span>\r\n  </div>\r\n  <div [@enterAnimation] *ngIf=\"disableMenu\" class=\"top-middle\">\r\n    <h1 ><span><svg-icon src=\"../../assets/nano-logo-5.svg\" [svgStyle]=\"{ 'width.em': 5}\"></svg-icon></span> </h1>\r\n  </div>\r\n  <div class=\"top-right\">\r\n    <span>\r\n      <a>CONTACT</a>\r\n      <a (click)=\"changeLanguage()\">LANGUAGE\r\n        <svg-icon *ngIf=\"translate.currentLang === 'en' \" src=\"../../assets/canada.svg\" [svgStyle]=\"{ 'width.em': 2, 'padding-left.em': 0.25, 'padding-bottom.em': 0.25}\"></svg-icon>\r\n        <svg-icon *ngIf=\"translate.currentLang === 'cn' \" src=\"../../assets/china.svg\" [svgStyle]=\"{ 'width.em': 2, 'padding-left.em': 0.25, 'padding-bottom.em': 0.25}\"></svg-icon>\r\n      </a>\r\n    </span>\r\n  </div>\r\n</header>\r\n\r\n<div fullpage id=\"fullpage\" [options]=\"config\" (ref)=\"getRef($event)\" #fullpageRef>\r\n  <div class=\"section\">\r\n    <section class=\"story\">\r\n      <div>\r\n          <h1><span>Nano Design</span></h1>\r\n      </div>\r\n      \r\n\r\n    </section>\r\n  </div>\r\n  <div class=\"section\">\r\n    <section class=\"about\">\r\n\r\n      <div>\r\n        <div class=\"about-container\">\r\n            <p class=\"about-title\">- Our Mission -</p>\r\n            <p class=\"about-caption\">{{ 'STORY_CAPTION' | translate}} </p>\r\n        </div>\r\n\r\n        <!-- <p>        To provide the most unique customize pc for passionate users.\r\n          </p>\r\n        <p> Nano design is a group formed by experienced hardware engineer, software developer and customer service. We want to make the whole process transparent, budget efficient and more customize to benefit as many pc lovers as possible. Always remember making the unique feeling for users is one of the most important goals from us.\r\n          </p> -->\r\n          <p>{{ 'FIRST_STORY' | translate}}</p>\r\n          <p>{{ 'SECOND_STORY' | translate}}</p>\r\n        <small>The NanoDesign Team</small>\r\n      </div>\r\n    </section>\r\n  </div>\r\n  <div class=\"section\">\r\n    <section class=\"product\">\r\n      <div class=\"left-container\">\r\n        <div class=\"product-card\">\r\n          <img class=\"card-img-top\" src=\"../assets/computer.jpg\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <small class=\"card-title\">Gaming Computer</small>\r\n            <p class=\"card-text\">{{ 'GAMING_DES' | translate}}</p>\r\n            <div class=\"text-center\">\r\n              <button href=\"#\" class=\"btn-card\" (click)=\"handleSelect('game')\">LEARN MORE</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"right-container\">\r\n        <div class=\"product-card\">\r\n          <img class=\"card-img-top\" src=\"../assets/computer.jpg\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <small class=\"card-title\">Work Station</small>\r\n            <p class=\"card-text\">{{ 'WORK_DES' | translate}}</p>\r\n            <div class=\"text-center\">\r\n              <button href=\"#\" class=\"btn-card\" (click)=\"handleSelect('game')\">LEARN MORE</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </div>\r\n  <div class=\"section\">\r\n    <section class=\"options\">\r\n      <div class=\"select-options\">\r\n        <button [@enterAnimation] (click)=\"getResult()\" *ngIf=\"selectedList.length !== 0\" href=\"#\" class=\"btn-card\">GET RESULT</button>\r\n        <div class=\"title\">\r\n          <p> What Kind of games are you planning to play?</p>\r\n        </div>\r\n        <!-- <div class=\"swiper-container\" [swiper]=\"swipperConfig\">\r\n\r\n            <div class=\"swiper-wrapper\">\r\n              <div class=\"swiper-slide\" *ngFor=\"let game of gameList\">\r\n                  <select-pill [imgLink]=\"'../../assets/gameLogo/' + game + '.jpg'\" [pillName]=\"game\" [selected]=\"selectedList.includes(game)\" (select)=\"pillSelect($event)\" ></select-pill>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n        <div #container class=\"options-container\">\r\n          <ng-container *ngFor=\"let game of gameList\">\r\n            <select-pill [imgLink]=\"'../../assets/gameLogo/' + game + '.jpg'\" [pillName]=\"game\"\r\n              [selected]=\"selectedList.includes(game)\" (select)=\"pillSelect($event)\"></select-pill>\r\n          </ng-container>\r\n        </div>\r\n\r\n\r\n        <!-- <button (click)=\"scrollToTop(container)\">scroll to top</button> -->\r\n        <!-- <button (click)=\"scrollToBot(container)\">scroll to bottom</button> -->\r\n        <form class=\"form-inline md-form form-sm\">\r\n            <svg-icon (click)=\"scrollToBot(container)\" src=\"../../assets/select-up.svg\" [svgStyle]=\"{ 'width.em': 2 }\"></svg-icon>\r\n            <svg-icon (click)=\"scrollToTop(container)\" src=\"../../assets/select-down.svg\" [svgStyle]=\"{ 'width.em': 2 }\"></svg-icon>\r\n          <input [formControl]=\"searchField\" class=\"form-control form-control-sm ml-3 w-75\" type=\"text\"\r\n            placeholder=\"Search\" aria-label=\"Search\">\r\n          <i class=\"fas fa-search\" aria-hidden=\"true\"></i>\r\n        </form>\r\n      </div>\r\n\r\n      <div class=\"result-options\">\r\n        <svg-icon [@loadAnimation] *ngIf=\"loading\" src=\"../../assets/loading.svg\" [svgStyle]=\"{ 'width.em': 1.5 }\"></svg-icon> \r\n        <div [@loadAnimation] *ngIf=\"!loading\" class=\"configuration\">\r\n          <div class=\"parts\">\r\n            <svg-icon src=\"../../assets/config-cpu.svg\" [svgStyle]=\"{ 'width.em': 5 }\"></svg-icon>\r\n            <div class=\"parts-title\">\r\n                <span>CPU</span>\r\n                <p>{{result.cpu}}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"parts\">\r\n            <svg-icon src=\"../../assets/config-gpu.svg\" [svgStyle]=\"{ 'width.em': 5 }\"></svg-icon>\r\n            <div class=\"parts-title\">\r\n                <span>Graphics Card</span>\r\n                <p>{{result.gpu}}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"parts\">\r\n            <svg-icon src=\"../../assets/config-case.svg\" [svgStyle]=\"{ 'width.em': 5 }\"></svg-icon>\r\n            <div class=\"parts-title\">\r\n                <span>Case</span>\r\n                <p>Up to 9th Gen Intel® Core™ i9 9900K</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"parts\">\r\n            <svg-icon src=\"../../assets/config-ram.svg\" [svgStyle]=\"{ 'width.em': 5 }\"></svg-icon>\r\n            <div class=\"parts-title\">\r\n                <span>Memorey</span>\r\n                <p>{{result.mem}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </section>\r\n  </div>\r\n  <!-- <div class=\"section\">\r\n    <h1>Section 4</h1>\r\n    <button (click)=\"addSection()\">Add sections and change color</button>\r\n    <button (click)=\"fullpage_api.moveTo('secondPage', 2)\">Move to second page</button>\r\n    <button (click)=\"removeLast()\">Remove last</button>\r\n  </div> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".arrow-bot {\n  position: absolute;\n  bottom: 0.25em;\n  left: 50%;\n  margin-left: -1.25em;\n  z-index: 100; }\n  .arrow-bot svg:hover {\n    height: 1.3em !important; }\n  section {\n  width: 100%;\n  padding: 5em;\n  box-sizing: border-box;\n  color: white;\n  font-family: alternate-gothic, sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  -webkit-font-smoothing: antialiased; }\n  section.options {\n    height: 100%;\n    width: 100%;\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    color: #1c1c1c;\n    padding: 0;\n    background-color: #eaeaea; }\n  section.options .result-options, section.options .select-options {\n      width: 50%;\n      height: 100%; }\n  section.options .result-options {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-evenly;\n      align-items: center; }\n  section.options .result-options .configuration {\n        height: 50%;\n        width: 100%;\n        display: flex;\n        justify-content: flex-start;\n        flex-wrap: wrap; }\n  section.options .result-options .configuration .parts {\n          width: 50%;\n          font-size: 0.35em; }\n  section.options .result-options .configuration .parts svg-icon {\n            float: left; }\n  section.options .result-options .configuration .parts .parts-title {\n            float: left;\n            height: 100%;\n            margin-left: 1em; }\n  section.options .result-options .configuration .parts .parts-title span {\n              float: left; }\n  section.options .result-options .configuration .parts .parts-title p {\n              clear: left;\n              width: 15em;\n              font-size: 1.4em;\n              text-align: left; }\n  section.options .select-options {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-evenly;\n      align-items: center; }\n  section.options .select-options .options-container {\n        scroll-behavior: smooth;\n        display: flex;\n        justify-content: center;\n        flex-wrap: wrap;\n        align-items: center;\n        overflow: hidden;\n        height: 50%;\n        width: 100%; }\n  section.options .select-options .options-container select-pill {\n          margin: 0.5em;\n          position: relative; }\n  section.options .btn-card {\n      background-color: #1c1c1c;\n      color: white;\n      margin: 0 auto auto auto;\n      border-radius: 300px;\n      border: none;\n      height: 3.5em;\n      width: 11em;\n      text-align: center;\n      font-size: 0.3em;\n      font-weight: 100;\n      letter-spacing: 0.2em;\n      transition: background-color 0.3s ease;\n      position: absolute;\n      right: 2em;\n      bottom: 2em; }\n  section.options .btn-card:hover {\n        background-color: #c8a175;\n        color: white; }\n  section.options .title {\n      margin: 2em auto 0 auto; }\n  section.options form {\n      width: 10em;\n      margin: auto; }\n  section.options form input {\n        font-size: 0.5em; }\n  section.options form i {\n        font-size: 0.5em;\n        color: #1c1c1c; }\n  section.options .swiper-container {\n      height: 15em;\n      width: 75em;\n      margin: auto calc( 50% - 37.5em) 0 calc( 50% - 37.5em); }\n  section.options .swiper-slide {\n      margin: 0 1.45px;\n      overflow: hidden; }\n  section.options .swiper-slide div {\n        opacity: 0;\n        background-color: white;\n        transition: opacity ease 0.5s;\n        display: flex;\n        align-items: center;\n        justify-content: center; }\n  section.options .swiper-slide div:hover {\n          opacity: 0.7; }\n  section.options .swiper-slide div:nth-of-type(1) {\n        position: absolute;\n        height: calc(50% - 2.5px);\n        width: 100%;\n        top: 0; }\n  section.options .swiper-slide div:nth-of-type(2) {\n        position: absolute;\n        height: 50%;\n        width: 100%;\n        top: 50%; }\n  section.options .swiper-slide img {\n        display: block;\n        margin-left: auto;\n        margin-right: auto; }\n  section.options .swiper-slide img:nth-of-type(1) {\n        height: calc(50% - 2.5px);\n        margin-bottom: 2.5px; }\n  section.options .swiper-slide img:nth-of-type(2) {\n        height: calc(50% - 2.5px);\n        margin-top: 2.5px; }\n  section.about {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    background-color: #eaeaea;\n    padding: 0; }\n  section.about div {\n      width: 24em; }\n  section.about small {\n      font-family: \"utopia-std\";\n      text-transform: none;\n      letter-spacing: 0;\n      font-style: italic;\n      font-size: 0.35em;\n      color: #1c1c1c; }\n  section.about .about-container {\n      margin-top: 1.5em;\n      margin-bottom: 3.5em; }\n  section.about .about-caption {\n      font-size: 0.38em; }\n  section.about .about-title {\n      font-size: 1em;\n      font-weight: 100;\n      font-family: sans-serif;\n      margin-bottom: 0; }\n  section.about p {\n      width: 100%;\n      font-size: 0.5em;\n      line-height: 2em;\n      letter-spacing: 2px;\n      color: #1c1c1c;\n      margin-bottom: 1em; }\n  section.story {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 100vh;\n    font-family: sans-serif;\n    border: 2px solid white;\n    background-image: url('bg.png');\n    background-repeat: no-repeat;\n    background-size: cover; }\n  section.story h3 {\n      font-size: 2em;\n      font-weight: 100; }\n  section.story p {\n      font-size: 1.4em;\n      margin: 0;\n      font-weight: bold;\n      opacity: 0.6; }\n  section.story h1 {\n      font-size: 1.5em;\n      border-bottom: 0.2em solid #fff471; }\n  section.story h1 span {\n        color: #fff471;\n        font-size: 1.5em;\n        font-weight: bold;\n        padding-left: 0.5em; }\n  section.products {\n    background-color: white;\n    z-index: 5;\n    padding-top: 100px;\n    position: absolute;\n    color: #1c1c1c;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap; }\n  section.products .title {\n      width: 100%;\n      height: 100px;\n      text-align: center; }\n  section.products .title h2 {\n        font-weight: 600;\n        font-size: 2.2em; }\n  .section section {\n  border: 0.3em solid white; }\n  .section section.product {\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    padding: 0; }\n  .section section.product .product-card {\n      border: none;\n      width: 50%;\n      height: 100%;\n      margin: 0 1%; }\n  .section section.product .product-card img {\n        margin-top: 30%; }\n  .section section.product .product-card .card-body {\n        margin: 20% 0;\n        padding: 0; }\n  .section section.product .product-card .card-body small {\n          font-family: \"utopia-std\";\n          text-transform: none;\n          letter-spacing: 0;\n          font-style: italic;\n          font-size: 0.35em; }\n  .section section.product .product-card .card-body p {\n          font-size: 0.5em;\n          line-height: 1.5em;\n          letter-spacing: 2px;\n          padding-top: 1em; }\n  .section section.product .product-card .card-body .btn-card {\n          margin-top: 25%;\n          border-radius: 300px;\n          border: none;\n          height: 3.5em;\n          width: 11em;\n          text-align: center;\n          font-size: 0.24em;\n          font-weight: 100;\n          letter-spacing: 0.2em;\n          transition: background-color 0.3s ease; }\n  .section section.product .product-card .card-body .btn-card:hover {\n            background-color: #c8a175;\n            color: white; }\n  .section section.product .left-container {\n      background: #1c1c1c;\n      height: 100%;\n      margin-right: 7.5px;\n      max-width: 50%;\n      flex: 1 1 auto;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n  .section section.product .left-container button {\n        color: #1c1c1c;\n        background-color: white; }\n  .section section.product .right-container {\n      background: #eaeaea;\n      height: 100%;\n      margin-left: 7.5px;\n      max-width: 50%;\n      flex: 1 1 auto;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: #1c1c1c; }\n  .section section.product .right-container button {\n        color: white;\n        background-color: #1c1c1c; }\n  #menu {\n  position: fixed;\n  /* top: 0.9em; */\n  left: 0;\n  z-index: 70;\n  width: 100%;\n  /* padding: 0; */\n  /* margin-left: -1em; */\n  /* margin: 0 -23em 0 1em; */\n  border-left: solid 0.9em white;\n  border-right: solid 0.9em white; }\n  header.non-first {\n  height: 2em;\n  background-color: #1c1c1c; }\n  header.non-first div {\n    min-height: auto; }\n  header {\n  font-size: 0.33em;\n  height: 8em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #1c1c1c; }\n  header div {\n    min-width: 30px;\n    min-height: 30px;\n    letter-spacing: 0.2em; }\n  header div.top-middle h1 {\n      font-size: 4em; }\n  header div.top-middle h1 span {\n        letter-spacing: -0.16em; }\n  header div span a {\n      color: white;\n      margin: 0.618em;\n      padding: 0.618em;\n      font-size: 0.85em;\n      transition: background-color 0.3s ease; }\n  header div span a:hover {\n        color: #fff471;\n        text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL0M6XFxVc2Vyc1xcc3VtYW5cXERlc2t0b3BcXG5hbm9EZXNpZ24vc3JjXFxhcHBcXGhvbWUtcGFnZVxcaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLFlBQVksRUFBQTtFQUxkO0lBUU0sd0JBQXdCLEVBQUE7RUFNOUI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUNBQW1DLEVBQUE7RUFSckM7SUFZSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGNBckNlO0lBc0NmLFVBQVU7SUFDVix5QkF4Q1UsRUFBQTtFQWtCZDtNQXdCTSxVQUFVO01BQ1YsWUFBWSxFQUFBO0VBekJsQjtNQTRCTSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLDZCQUE2QjtNQUM3QixtQkFBbUIsRUFBQTtFQS9CekI7UUFpQ1EsV0FBVztRQUNYLFdBQVc7UUFDWCxhQUFhO1FBQ2IsMkJBQTJCO1FBQzNCLGVBQWUsRUFBQTtFQXJDdkI7VUF1Q1UsVUFBVTtVQUNWLGlCQUFpQixFQUFBO0VBeEMzQjtZQTBDWSxXQUFXLEVBQUE7RUExQ3ZCO1lBNkNZLFdBQVc7WUFDWCxZQUFZO1lBQ1osZ0JBQWdCLEVBQUE7RUEvQzVCO2NBaURjLFdBQVcsRUFBQTtFQWpEekI7Y0FvRGMsV0FBVztjQUNYLFdBQVc7Y0FDWCxnQkFBZ0I7Y0FDaEIsZ0JBQWdCLEVBQUE7RUF2RDlCO01BOERNLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsNkJBQTZCO01BQzdCLG1CQUFtQixFQUFBO0VBakV6QjtRQW1FUSx1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsV0FBVyxFQUFBO0VBMUVuQjtVQTRFVSxhQUFhO1VBQ2Isa0JBQWtCLEVBQUE7RUE3RTVCO01Ba0ZNLHlCQW5HYTtNQW9HYixZQUFZO01BQ1osd0JBQXdCO01BQ3hCLG9CQUFvQjtNQUNwQixZQUFZO01BQ1osYUFBYTtNQUNiLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixxQkFBcUI7TUFDckIsc0NBQXNDO01BQ3RDLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YsV0FBVyxFQUFBO0VBaEdqQjtRQWtHUSx5QkFsSFk7UUFtSFosWUFBWSxFQUFBO0VBbkdwQjtNQXdHTSx1QkFBdUIsRUFBQTtFQXhHN0I7TUEyR00sV0FBVztNQUNYLFlBQVksRUFBQTtFQTVHbEI7UUE4R1EsZ0JBQWdCLEVBQUE7RUE5R3hCO1FBaUhRLGdCQUFnQjtRQUNoQixjQW5JVyxFQUFBO0VBaUJuQjtNQXNITSxZQUFZO01BQ1osV0FBVztNQUNYLHNEQUFzRCxFQUFBO0VBeEg1RDtNQTRITSxnQkFBZ0I7TUFDaEIsZ0JBQWdCLEVBQUE7RUE3SHRCO1FBK0hRLFVBQVU7UUFDVix1QkFBdUI7UUFDdkIsNkJBQTZCO1FBQzdCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCLEVBQUE7RUFwSS9CO1VBc0lVLFlBQVksRUFBQTtFQXRJdEI7UUEwSVEsa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixXQUFXO1FBQ1gsTUFBTSxFQUFBO0VBN0lkO1FBZ0pRLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsV0FBVztRQUNYLFFBQVEsRUFBQTtFQW5KaEI7UUF1SlEsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixrQkFBa0IsRUFBQTtFQXpKMUI7UUE0SlEseUJBQXlCO1FBQ3pCLG9CQUFvQixFQUFBO0VBN0o1QjtRQWdLUSx5QkFBeUI7UUFDekIsaUJBQWlCLEVBQUE7RUFqS3pCO0lBc0tJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHlCQTlMVTtJQStMVixVQUFVLEVBQUE7RUE3S2Q7TUErS00sV0FBVyxFQUFBO0VBL0tqQjtNQWtMTSx5QkFBeUI7TUFDekIsb0JBQW9CO01BQ3BCLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLGNBeE1hLEVBQUE7RUFpQm5CO01BMExNLGlCQUFpQjtNQUNqQixvQkFBb0IsRUFBQTtFQTNMMUI7TUE4TE0saUJBQWlCLEVBQUE7RUE5THZCO01BaU1NLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsdUJBQXVCO01BQ3ZCLGdCQUFnQixFQUFBO0VBcE10QjtNQXVNTSxXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixtQkFBbUI7TUFDbkIsY0E1TmE7TUE2TmIsa0JBQWtCLEVBQUE7RUE1TXhCO0lBZ05JLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBdUJ2QiwrQkFBNEM7SUFDNUMsNEJBQTRCO0lBQzVCLHNCQUFzQixFQUFBO0VBOU8xQjtNQXVOTSxjQUFjO01BQ2QsZ0JBQWdCLEVBQUE7RUF4TnRCO01BMk5NLGdCQUFnQjtNQUNoQixTQUFTO01BQ1QsaUJBQWlCO01BQ2pCLFlBQVksRUFBQTtFQTlObEI7TUFpT00sZ0JBQWdCO01BQ2hCLGtDQWpQYyxFQUFBO0VBZXBCO1FBb09RLGNBblBZO1FBb1BaLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFHakIsbUJBQW1CLEVBQUE7RUF6TzNCO0lBa1BJLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixjQXZRZTtJQXdRZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWUsRUFBQTtFQXpQbkI7TUEyUE0sV0FBVTtNQUNWLGFBQWE7TUFDYixrQkFBa0IsRUFBQTtFQTdQeEI7UUErUFEsZ0JBQWdCO1FBQ2hCLGdCQUFnQixFQUFBO0VBTXhCO0VBR0UseUJBQXlCLEVBQUE7RUFIM0I7SUFNSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsVUFBVSxFQUFBO0VBVmQ7TUFZTSxZQUFZO01BQ1osVUFBVTtNQUNWLFlBQVk7TUFJWixZQUFZLEVBQUE7RUFsQmxCO1FBZ0JRLGVBQWUsRUFBQTtFQWhCdkI7UUFvQlEsYUFBYTtRQUNiLFVBQVUsRUFBQTtFQXJCbEI7VUF1QlUseUJBQXlCO1VBQ3pCLG9CQUFvQjtVQUNwQixpQkFBaUI7VUFDakIsa0JBQWtCO1VBQ2xCLGlCQUFpQixFQUFBO0VBM0IzQjtVQThCVSxnQkFBZ0I7VUFDaEIsa0JBQWtCO1VBQ2xCLG1CQUFtQjtVQUNuQixnQkFBZ0IsRUFBQTtFQWpDMUI7VUFvQ1UsZUFBZTtVQUNmLG9CQUFvQjtVQUNwQixZQUFZO1VBQ1osYUFBYTtVQUNiLFdBQVc7VUFDWCxrQkFBa0I7VUFDbEIsaUJBQWlCO1VBQ2pCLGdCQUFnQjtVQUNoQixxQkFBcUI7VUFDckIsc0NBQXNDLEVBQUE7RUE3Q2hEO1lBK0NZLHlCQXJVUTtZQXNVUixZQUFZLEVBQUE7RUFoRHhCO01Bc0RNLG1CQTdVYTtNQThVYixZQUFZO01BRVosbUJBQW1CO01BQ25CLGNBQWM7TUFDZCxjQUFjO01BQ2QsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUIsRUFBQTtFQTlEN0I7UUFnRVEsY0F2Vlc7UUF3VlgsdUJBQ0YsRUFBQTtFQWxFTjtNQXFFTSxtQkE3VlE7TUE4VlIsWUFBWTtNQUVaLGtCQUFrQjtNQUNsQixjQUFjO01BQ2QsY0FBYztNQUNkLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLGNBcldhLEVBQUE7RUF1Um5CO1FBZ0ZRLFlBQVk7UUFDWix5QkF4V1csRUFBQTtFQStXbkI7RUFDQyxlQUFlO0VBQ1osZ0JBQUE7RUFDQSxPQUFPO0VBQ1AsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBOEI7RUFDOUIsK0JBQStCLEVBQUE7RUFHbkM7RUFDRSxXQUFXO0VBQ1gseUJBQXlCLEVBQUE7RUFGM0I7SUFJSSxnQkFBZ0IsRUFBQTtFQUlwQjtFQUVFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0EzWWlCLEVBQUE7RUFvWW5CO0lBVUssZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUIsRUFBQTtFQVoxQjtNQWlCUyxjQUFjLEVBQUE7RUFqQnZCO1FBbUJXLHVCQUF1QixFQUFBO0VBbkJsQztNQTBCUyxZQUFZO01BQ1osZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsc0NBQXNDLEVBQUE7RUE5Qi9DO1FBaUNXLGNBbmFTO1FBb2FULDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRncmF5OiAjZWFlYWVhO1xyXG4kbmF2eV9ibHVlOiAjMWMxYzFjO1xyXG4kcmljZV9icm93bjogI2M4YTE3NTtcclxuJGR1Y2tfeWVsbG86ICNmZmY0NzE7XHJcbi5hcnJvdy1ib3R7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMC4yNWVtO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTEuMjVlbTtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgc3ZnIHtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgIGhlaWdodDogMS4zZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5zZWN0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA1ZW07XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IGFsdGVybmF0ZS1nb3RoaWMsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcblxyXG5cclxuICAmLm9wdGlvbnN7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgY29sb3I6ICRuYXZ5X2JsdWU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXk7XHJcbiAgICAucmVzdWx0LW9wdGlvbnMsIC5zZWxlY3Qtb3B0aW9uc3tcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnJlc3VsdC1vcHRpb25ze1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLmNvbmZpZ3VyYXRpb257XHJcbiAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIC5wYXJ0c3tcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuMzVlbTtcclxuICAgICAgICAgIHN2Zy1pY29ue1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wYXJ0cy10aXRsZXtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBjbGVhcjogbGVmdDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTVlbTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5zZWxlY3Qtb3B0aW9uc3tcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC5vcHRpb25zLWNvbnRhaW5lcntcclxuICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgc2VsZWN0LXBpbGx7XHJcbiAgICAgICAgICBtYXJnaW46IDAuNWVtO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0bi1jYXJke1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2eV9ibHVlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvIGF1dG8gYXV0bztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzAwcHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgaGVpZ2h0OiAzLjVlbTtcclxuICAgICAgd2lkdGg6IDExZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAwLjNlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMmVtO1xyXG4gICAgICBib3R0b206IDJlbTtcclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmljZV9icm93bjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGl0bGV7XHJcbiAgICAgIG1hcmdpbjogMmVtIGF1dG8gMCBhdXRvO1xyXG4gICAgfVxyXG4gICAgZm9ybXtcclxuICAgICAgd2lkdGg6IDEwZW07XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgaW5wdXR7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjVlbTtcclxuICAgICAgfVxyXG4gICAgICBpe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC41ZW07XHJcbiAgICAgICAgY29sb3I6ICRuYXZ5X2JsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5zd2lwZXItY29udGFpbmVye1xyXG4gICAgICBoZWlnaHQ6IDE1ZW07XHJcbiAgICAgIHdpZHRoOiA3NWVtO1xyXG4gICAgICBtYXJnaW46IGF1dG8gY2FsYyggNTAlIC0gMzcuNWVtKSAwIGNhbGMoIDUwJSAtIDM3LjVlbSk7XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLXNsaWRle1xyXG4gICAgICAvLyB3aWR0aDogMjAlO1xyXG4gICAgICBtYXJnaW46IDAgMS40NXB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UgMC41cztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZGl2Om50aC1vZi10eXBlKDEpe1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoNTAlIC0gMi41cHgpO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgfVxyXG4gICAgICBkaXY6bnRoLW9mLXR5cGUoMil7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG5cclxuICAgICAgfVxyXG4gICAgICBpbWd7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgIGltZzpudGgtb2YtdHlwZSgxKXtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoNTAlIC0gMi41cHgpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIuNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIGltZzpudGgtb2YtdHlwZSgyKXtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoNTAlIC0gMi41cHgpO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIuNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICYuYWJvdXR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXZ7XHJcbiAgICAgIHdpZHRoOiAyNGVtO1xyXG4gICAgfVxyXG4gICAgc21hbGx7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcInV0b3BpYS1zdGRcIjtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC4zNWVtO1xyXG4gICAgICBjb2xvcjogJG5hdnlfYmx1ZTtcclxuICAgIH1cclxuICAgIC5hYm91dC1jb250YWluZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxLjVlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMy41ZW07XHJcbiAgICB9XHJcbiAgICAuYWJvdXQtY2FwdGlvbntcclxuICAgICAgZm9udC1zaXplOiAwLjM4ZW07XHJcbiAgICB9XHJcbiAgICAuYWJvdXQtdGl0bGV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6IDAuNWVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMmVtO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICBjb2xvcjogJG5hdnlfYmx1ZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAmLnN0b3J5e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIGgze1xyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMC4yZW0gc29saWQgJGR1Y2tfeWVsbG87XHJcbiAgICAgIHNwYW57XHJcbiAgICAgICAgY29sb3I6ICRkdWNrX3llbGxvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgLy8gYm9yZGVyOiAwLjA2ZW0gc29saWQ7XHJcbiAgICAgICAgLy8gbGV0dGVyLXNwYWNpbmc6IDAuM2VtO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMC41ZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2JnLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG5cclxuICAmLnByb2R1Y3Rze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6ICRuYXZ5X2JsdWU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAudGl0bGV7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgaDJ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDIuMmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4uc2VjdGlvbiB7XHJcblxyXG4gc2VjdGlvbntcclxuICBib3JkZXI6IDAuM2VtIHNvbGlkIHdoaXRlO1xyXG5cclxuICAmLnByb2R1Y3R7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC5wcm9kdWN0LWNhcmR7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBpbWd7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzAlO1xyXG4gICAgICB9XHJcbiAgICAgIG1hcmdpbjogMCAxJTtcclxuICAgICAgLmNhcmQtYm9keXtcclxuICAgICAgICBtYXJnaW46IDIwJSAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgc21hbGx7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJ1dG9waWEtc3RkXCI7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjM1ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuNWVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAxZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tY2FyZHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDI1JTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzLjVlbTtcclxuICAgICAgICAgIHdpZHRoOiAxMWVtO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjI0ZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbiAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmljZV9icm93bjtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxlZnQtY29udGFpbmVye1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkbmF2eV9ibHVlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIC8vIHdpZHRoOiA1MCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNy41cHg7XHJcbiAgICAgIG1heC13aWR0aDogNTAlOztcclxuICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBidXR0b257XHJcbiAgICAgICAgY29sb3I6ICRuYXZ5X2JsdWU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJpZ2h0LWNvbnRhaW5lcntcclxuICAgICAgYmFja2dyb3VuZDogJGdyYXk7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgLy8gd2lkdGg6IDUwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDcuNXB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDUwJTs7XHJcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICRuYXZ5X2JsdWU7XHJcbiAgICAgIGJ1dHRvbntcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdnlfYmx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIH1cclxufVxyXG5cclxuI21lbnV7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG4gICAgLyogdG9wOiAwLjllbTsgKi9cclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiA3MDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogcGFkZGluZzogMDsgKi9cclxuICAgIC8qIG1hcmdpbi1sZWZ0OiAtMWVtOyAqL1xyXG4gICAgLyogbWFyZ2luOiAwIC0yM2VtIDAgMWVtOyAqL1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDAuOWVtIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAwLjllbSB3aGl0ZTtcclxufVxyXG5cclxuaGVhZGVyLm5vbi1maXJzdHtcclxuICBoZWlnaHQ6IDJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxYzFjO1xyXG4gIGRpdntcclxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5oZWFkZXIge1xyXG5cclxuICBmb250LXNpemU6IDAuMzNlbTtcclxuICBoZWlnaHQ6IDhlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICRuYXZ5X2JsdWU7XHJcblxyXG4gICBkaXYge1xyXG4gICAgIG1pbi13aWR0aDogMzBweDtcclxuICAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gICAgIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcclxuICAgICAmLnRvcC1taWRkbGV7XHJcbiAgICAgICAvLyB3aWR0aDogODBweDtcclxuICAgICAgLy8gIG1hcmdpbjogMCAzMGVtO1xyXG4gICAgICAgaDF7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgICAgICBzcGFue1xyXG4gICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNmVtO1xyXG5cclxuICAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICAgIH1cclxuICAgICBzcGFue1xyXG4gICAgICAgYXtcclxuICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICBtYXJnaW46IDAuNjE4ZW07XHJcbiAgICAgICAgIHBhZGRpbmc6IDAuNjE4ZW07XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgIC8vICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmljZV9icm93bjtcclxuICAgICAgICAgICBjb2xvcjogJGR1Y2tfeWVsbG87XHJcbiAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgICB9XHJcbiAgIH1cclxuIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api-service.service */ "./src/app/home-page/api-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(router, translate, apiService) {
        var _this = this;
        this.router = router;
        this.translate = translate;
        this.apiService = apiService;
        this.disableMenu = false;
        this.visible = false;
        this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.orginalList = [];
        this.swipperConfig = {
            direction: 'horizontal',
            slidesPerView: 5,
            keyboard: true,
            mousewheel: true,
            scrollbar: false,
            navigation: true,
            pagination: false
        };
        this.result = { 'cpu': '', 'gpu': '', 'mem': '' };
        this.loading = false;
        this.config = {
            licenseKey: '0FB20392-42234774-8832938C-619D0B0A',
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
            menu: '#menu',
            navigation: true,
            onLeave: function (origin, destination, direction) {
                _this.disableMenu = false;
            },
            // events callback
            afterLoad: function (origin, destination, direction) {
                // console.log(origin, destination, direction);
                if (destination.anchor === 'firstPage') {
                    _this.disableMenu = true;
                }
            },
            afterRender: function () {
                // console.log('afterRender');
            },
            afterResize: function (width, height) {
                // console.log('afterResize' + width + ' ' + height);
            },
            afterSlideLoad: function (section, origin, destination, direction) {
                console.log(section, origin, destination, direction);
            }
        };
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getGames().subscribe(function (data) {
            console.log(data.name);
            _this.orginalList = data.name;
            _this.gameList = _this.orginalList;
        });
        this.selectedList = [];
        // this.gameList = this.orginalList;
        this.searchField.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500))
            .subscribe(function (term) {
            console.log(term);
            if (term === '') {
                _this.gameList = _this.orginalList;
            }
            _this.gameList = _this.orginalList.filter(function (game) {
                return game.includes(term);
            });
            // this.directiveRef.update();
        });
    };
    HomePageComponent.prototype.getRef = function (fullPageRef) {
        this.fullpage_api = fullPageRef;
    };
    HomePageComponent.prototype.handleSelect = function (type) {
        this.router.navigate(['/select', { type: type }]);
    };
    HomePageComponent.prototype.pillSelect = function (event) {
        if (this.selectedList.includes(event)) {
            this.selectedList = this.selectedList.filter(function (item) {
                return item !== event;
            });
        }
        else {
            this.selectedList.push(event);
        }
    };
    HomePageComponent.prototype.changeLanguage = function () {
        if (this.translate.currentLang === 'en') {
            this.translate.use('cn');
        }
        else {
            this.translate.use('en');
        }
    };
    HomePageComponent.prototype.removeLast = function () {
        var lastSection = this.fp_directive.nativeElement.lastChild;
        if (lastSection.isEqualNode(this.fullpage_api.getActiveSection().item)) {
            this.fullpage_api.moveSectionUp();
        }
        lastSection.remove();
        this.fullpage_api.build();
    };
    HomePageComponent.prototype.randomColor = function () {
        return '#' + Math.random().toString(16).slice(-3);
    };
    HomePageComponent.prototype.nextPage = function () {
        this.fullpage_api.moveSectionDown();
    };
    HomePageComponent.prototype.convertRemToPixels = function (rem) {
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    };
    HomePageComponent.prototype.scrollToTop = function (el) {
        el.scrollTop = el.scrollTop + this.convertRemToPixels(15);
    };
    HomePageComponent.prototype.scrollToBot = function (el) {
        el.scrollTop = el.scrollTop - this.convertRemToPixels(15);
    };
    HomePageComponent.prototype.getResult = function () {
        var _this = this;
        this.loading = true;
        console.log(this.selectedList);
        this.apiService.postGames(this.selectedList).toPromise().then(function (res) {
            console.log(res);
            Object.keys(res).forEach(function (key) {
                _this.result[key] = res[key][0];
            });
            console.log(_this.result);
            _this.loading = false;
        }).catch(function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fullpageRef'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomePageComponent.prototype, "fp_directive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperDirective"]),
        __metadata("design:type", ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperDirective"])
    ], HomePageComponent.prototype, "directiveRef", void 0);
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('enterAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-20px)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s 0.7s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0)', opacity: 1 }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('loadAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-20px)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s 0.7s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0)', opacity: 1 }))
                    ])
                ])
            ],
            providers: [_api_service_service__WEBPACK_IMPORTED_MODULE_7__["ApiServiceService"]],
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/home-page/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _api_service_service__WEBPACK_IMPORTED_MODULE_7__["ApiServiceService"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/select-page/select-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/select-page/select-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  select-page works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/select-page/select-page.component.scss":
/*!********************************************************!*\
  !*** ./src/app/select-page/select-page.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC1wYWdlL3NlbGVjdC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/select-page/select-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/select-page/select-page.component.ts ***!
  \******************************************************/
/*! exports provided: SelectPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPageComponent", function() { return SelectPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectPageComponent = /** @class */ (function () {
    function SelectPageComponent() {
    }
    SelectPageComponent.prototype.ngOnInit = function () {
    };
    SelectPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select-page',
            template: __webpack_require__(/*! ./select-page.component.html */ "./src/app/select-page/select-page.component.html"),
            styles: [__webpack_require__(/*! ./select-page.component.scss */ "./src/app/select-page/select-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectPageComponent);
    return SelectPageComponent;
}());



/***/ }),

/***/ "./src/app/select-pill/select-pill.component.html":
/*!********************************************************!*\
  !*** ./src/app/select-pill/select-pill.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pill-container\" (click)=\"onSelect()\" >\r\n  <div class=\"overlay\" [ngClass]=\"{'selectedPill': selected}\">\r\n    <p *ngIf=\"!selected\">SELECT</p>\r\n    <p *ngIf=\"selected\">SELECTED</p>\r\n  </div>\r\n  <img src=\"{{imgLink}}\">\r\n</div>\r\n<div class=\"pill-title\">\r\n  {{pillName}}\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/select-pill/select-pill.component.scss":
/*!********************************************************!*\
  !*** ./src/app/select-pill/select-pill.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div, img {\n  height: 3em;\n  width: 3em; }\n\n.pill-title {\n  height: auto;\n  width: auto;\n  font-size: 0.5em; }\n\ndiv .pill-container {\n  position: relative; }\n\ndiv .overlay {\n  opacity: 0;\n  background-color: white;\n  transition: opacity ease 0.5s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute; }\n\ndiv .overlay:hover {\n    opacity: 0.7; }\n\ndiv .overlay p {\n    font-size: 0.7em;\n    margin: 0; }\n\ndiv .selectedPill {\n  opacity: 0.85; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0LXBpbGwvQzpcXFVzZXJzXFxzdW1hblxcRGVza3RvcFxcbmFub0Rlc2lnbi9zcmNcXGFwcFxcc2VsZWN0LXBpbGxcXHNlbGVjdC1waWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFVBQVUsRUFBQTs7QUFFWjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBRUksa0JBQWtCLEVBQUE7O0FBRnRCO0VBS0ksVUFBVTtFQUNWLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCLEVBQUE7O0FBWHRCO0lBYU0sWUFBWSxFQUFBOztBQWJsQjtJQWdCTSxnQkFBZ0I7SUFDaEIsU0FBUyxFQUFBOztBQWpCZjtFQXFCSSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWxlY3QtcGlsbC9zZWxlY3QtcGlsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiwgaW1ne1xyXG4gIGhlaWdodDogM2VtO1xyXG4gIHdpZHRoOiAzZW07XHJcbn1cclxuLnBpbGwtdGl0bGV7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMC41ZW07XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgLnBpbGwtY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAub3ZlcmxheXtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSAwLjVzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLnNlbGVjdGVkUGlsbHtcclxuICAgIG9wYWNpdHk6IDAuODU7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/select-pill/select-pill.component.ts":
/*!******************************************************!*\
  !*** ./src/app/select-pill/select-pill.component.ts ***!
  \******************************************************/
/*! exports provided: SelectPillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPillComponent", function() { return SelectPillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectPillComponent = /** @class */ (function () {
    function SelectPillComponent() {
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SelectPillComponent.prototype.ngOnInit = function () {
    };
    SelectPillComponent.prototype.onSelect = function () {
        this.select.emit(this.pillName);
        this.selected = !this.selected;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SelectPillComponent.prototype, "imgLink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SelectPillComponent.prototype, "select", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SelectPillComponent.prototype, "pillName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SelectPillComponent.prototype, "selected", void 0);
    SelectPillComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-pill',
            template: __webpack_require__(/*! ./select-pill.component.html */ "./src/app/select-pill/select-pill.component.html"),
            styles: [__webpack_require__(/*! ./select-pill.component.scss */ "./src/app/select-pill/select-pill.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectPillComponent);
    return SelectPillComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBHK6L2HB7p2NORgXd6LqcftFEJIYlbAkw',
        authDomain: 'nanodesign-1d2cb.firebaseapp.com',
        databaseURL: 'https://nanodesign-1d2cb.firebaseio.com',
        projectId: 'nanodesign-1d2cb',
        storageBucket: 'nanodesign-1d2cb.appspot.com',
        messagingSenderId: '251238543395'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\suman\Desktop\nanoDesign\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map