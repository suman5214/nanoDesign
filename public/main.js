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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "router-outlet ~ * {\n  position: absolute;\n  height: 100%;\n  width: 100%; }\n\napp-home-page {\n  text-align: center;\n  font-size: 0.8em; }\n\n@media screen and (min-width: 500px) {\n    app-home-page {\n      font-size: 2em; } }\n\n@media screen and (min-width: 1200px) {\n    app-home-page {\n      font-size: 2.5em; } }\n\n@media screen and (min-width: 1600px) {\n    app-home-page {\n      font-size: 3em; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1hbi9EZXNrdG9wL25hbm9EZXNpZ24vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLFlBQVcsRUFDWjs7QUFFRDtFQUNFLG1CQUFpQjtFQUNqQixpQkFBZ0IsRUFjakI7O0FBWkM7SUFKRjtNQUtJLGVBQWMsRUFXakIsRUFBQTs7QUFSQztJQVJGO01BU0ksaUJBQWdCLEVBT25CLEVBQUE7O0FBSkM7SUFaRjtNQWFJLGVBQWMsRUFHakIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInJvdXRlci1vdXRsZXQgfiAqIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5hcHAtaG9tZS1wYWdle1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhlbTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICB9XG5cbn1cbiJdfQ== */"

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
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            animations: [_animation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
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

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header [@enterAnimation] id=\"menu\">\n  <div class=\"top-left\">\n    <span>\n      <a routerLink=\"select\">STORY</a>\n      <a>GALLERY</a>\n    </span>\n  </div>\n  <div class=\"top-middle\">\n    <h1 *ngIf=\"disableMenu\"><span>Nano Design</span> </h1>\n  </div>\n  <div class=\"top-right\">\n    <span>\n      <a>CONTACT</a>\n      <a (click)=\"changeLanguage()\">LANGUAGE</a>\n    </span>\n  </div>\n</header>\n\n<div fullpage id=\"fullpage\" [options]=\"config\" (ref)=\"getRef($event)\" #fullpageRef>\n  <div class=\"section\">\n    <section class=\"story\">\n      <h1><span>Nano Design</span></h1>\n    </section>\n  </div>\n  <div class=\"section\">\n    <section class=\"about\">\n\n      <div>\n        <div class=\"about-container\">\n            <p class=\"about-title\">- Our Mission -</p>\n            <p class=\"about-caption\">{{ 'STORY_CAPTION' | translate}} </p>\n        </div>\n\n        <!-- <p>        To provide the most unique customize pc for passionate users.\n          </p>\n        <p> Nano design is a group formed by experienced hardware engineer, software developer and customer service. We want to make the whole process transparent, budget efficient and more customize to benefit as many pc lovers as possible. Always remember making the unique feeling for users is one of the most important goals from us.\n          </p> -->\n          <p>{{ 'FIRST_STORY' | translate}}</p>\n          <p>{{ 'SECOND_STORY' | translate}}</p>\n        <small>The NanoDesign Team</small>\n      </div>\n    </section>\n  </div>\n  <div class=\"section\">\n    <section class=\"product\">\n      <div class=\"left-container\">\n        <div class=\"product-card\">\n          <img class=\"card-img-top\" src=\"../assets/computer.jpg\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <small class=\"card-title\">Gaming Computer</small>\n            <p class=\"card-text\">{{ 'GAMING_DES' | translate}}</p>\n            <div class=\"text-center\">\n              <button href=\"#\" class=\"btn-card\" (click)=\"handleSelect('game')\">LEARN MORE</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"right-container\">\n        <div class=\"product-card\">\n          <img class=\"card-img-top\" src=\"../assets/computer.jpg\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <small class=\"card-title\">Work Station</small>\n            <p class=\"card-text\">{{ 'WORK_DES' | translate}}</p>\n            <div class=\"text-center\">\n              <button href=\"#\" class=\"btn-card\" (click)=\"handleSelect('game')\">LEARN MORE</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n  <div class=\"section\">\n    <section class=\"options\">\n      <div class=\"select-options\">\n        <button [@enterAnimation] *ngIf=\"selectedList.length !== 0\" href=\"#\" class=\"btn-card\">GET RESULT</button>\n        <div class=\"title\">\n          <p> What Kind of games are you planning to play?</p>\n        </div>\n        <!-- <div class=\"swiper-container\" [swiper]=\"swipperConfig\">\n\n            <div class=\"swiper-wrapper\">\n              <div class=\"swiper-slide\" *ngFor=\"let game of gameList\">\n                  <select-pill [imgLink]=\"'../../assets/gameLogo/' + game + '.jpg'\" [pillName]=\"game\" [selected]=\"selectedList.includes(game)\" (select)=\"pillSelect($event)\" ></select-pill>\n              </div>\n            </div>\n          </div> -->\n        <div #container class=\"options-container\">\n          <ng-container *ngFor=\"let game of gameList\">\n            <select-pill [imgLink]=\"'../../assets/gameLogo/' + game + '.jpg'\" [pillName]=\"game\"\n              [selected]=\"selectedList.includes(game)\" (select)=\"pillSelect($event)\"></select-pill>\n          </ng-container>\n        </div>\n        <button (click)=\"scrollToTop(container)\">scroll to top</button>\n        <button (click)=\"scrollToBot(container)\">scroll to bottom</button>\n        <form class=\"form-inline md-form form-sm\">\n\n          <input [formControl]=\"searchField\" class=\"form-control form-control-sm ml-3 w-75\" type=\"text\"\n            placeholder=\"Search\" aria-label=\"Search\">\n          <i class=\"fas fa-search\" aria-hidden=\"true\"></i>\n        </form>\n      </div>\n\n      <div class=\"result-options\">\n\n        <div class=\"configuration\">\n          <div class=\"parts\">\n            <svg-icon src=\"../../assets/config-cpu.svg\" [svgStyle]=\"{ 'width.em': 5 }\"></svg-icon>\n            <div class=\"parts-title\">\n                <span>CPU</span>\n                <p>Up to 9th Gen Intel® Core™ i9 9900K</p>\n            </div>\n          </div>\n          <div class=\"parts\">\n            <svg-icon src=\"../../assets/config-gpu.svg\" [svgStyle]=\"{ 'width.em': 5 }\"></svg-icon>\n            <div class=\"parts-title\">\n                <span>Graphics Card</span>\n                <p>Up to Dual NVIDIA® GeForce RTX™ 2080 8GB GDDR6 each</p>\n            </div>\n          </div>\n          <div class=\"parts\">\n            <svg-icon src=\"../../assets/config-case.svg\" [svgStyle]=\"{ 'width.em': 5 }\"></svg-icon>\n            <div class=\"parts-title\">\n                <span>Case</span>\n                <p>Up to 9th Gen Intel® Core™ i9 9900K</p>\n            </div>\n          </div>\n          <div class=\"parts\">\n            <svg-icon src=\"../../assets/config-ram.svg\" [svgStyle]=\"{ 'width.em': 5 }\"></svg-icon>\n            <div class=\"parts-title\">\n                <span>Memorey</span>\n                <p>Up to 16GB Dual Channel DDR4 at 2666MHz; up to 64GB</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </section>\n  </div>\n  <!-- <div class=\"section\">\n    <h1>Section 4</h1>\n    <button (click)=\"addSection()\">Add sections and change color</button>\n    <button (click)=\"fullpage_api.moveTo('secondPage', 2)\">Move to second page</button>\n    <button (click)=\"removeLast()\">Remove last</button>\n  </div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  width: 100%;\n  padding: 5em;\n  box-sizing: border-box;\n  color: white;\n  font-family: alternate-gothic, sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  -webkit-font-smoothing: antialiased; }\n  section.options {\n    height: 100%;\n    width: 100%;\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    color: #1c1c1c;\n    padding: 0;\n    background-color: #eaeaea; }\n  section.options .result-options, section.options .select-options {\n      width: 50%;\n      height: 100%; }\n  section.options .result-options {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-evenly;\n      align-items: center; }\n  section.options .result-options .configuration {\n        height: 50%;\n        width: 100%;\n        display: flex;\n        justify-content: flex-start;\n        flex-wrap: wrap; }\n  section.options .result-options .configuration .parts {\n          width: 50%;\n          font-size: 0.35em; }\n  section.options .result-options .configuration .parts svg-icon {\n            float: left; }\n  section.options .result-options .configuration .parts .parts-title {\n            float: left;\n            height: 100%;\n            margin-left: 1em; }\n  section.options .result-options .configuration .parts .parts-title span {\n              float: left; }\n  section.options .result-options .configuration .parts .parts-title p {\n              clear: left;\n              width: 15em;\n              font-size: 1.4em;\n              text-align: left; }\n  section.options .select-options {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-evenly;\n      align-items: center; }\n  section.options .select-options .options-container {\n        scroll-behavior: smooth;\n        display: flex;\n        justify-content: center;\n        flex-wrap: wrap;\n        align-items: center;\n        overflow: hidden;\n        height: 50%;\n        width: 100%; }\n  section.options .select-options .options-container select-pill {\n          margin: 0.5em;\n          position: relative; }\n  section.options .btn-card {\n      background-color: #1c1c1c;\n      color: white;\n      margin: 0 auto auto auto;\n      border-radius: 300px;\n      border: none;\n      height: 3.5em;\n      width: 11em;\n      text-align: center;\n      font-size: 0.3em;\n      font-weight: 100;\n      letter-spacing: 0.2em;\n      transition: background-color 0.3s ease;\n      position: absolute;\n      right: 2em;\n      bottom: 2em; }\n  section.options .btn-card:hover {\n        background-color: #c8a175;\n        color: white; }\n  section.options .title {\n      margin: 2em auto 0 auto; }\n  section.options form {\n      width: 10em;\n      margin: auto; }\n  section.options form input {\n        font-size: 0.5em; }\n  section.options form i {\n        font-size: 0.5em;\n        color: #1c1c1c; }\n  section.options .swiper-container {\n      height: 15em;\n      width: 75em;\n      margin: auto calc( 50% - 37.5em) 0 calc( 50% - 37.5em); }\n  section.options .swiper-slide {\n      margin: 0 1.45px;\n      overflow: hidden; }\n  section.options .swiper-slide div {\n        opacity: 0;\n        background-color: white;\n        transition: opacity ease 0.5s;\n        display: flex;\n        align-items: center;\n        justify-content: center; }\n  section.options .swiper-slide div:hover {\n          opacity: 0.7; }\n  section.options .swiper-slide div:nth-of-type(1) {\n        position: absolute;\n        height: calc(50% - 2.5px);\n        width: 100%;\n        top: 0; }\n  section.options .swiper-slide div:nth-of-type(2) {\n        position: absolute;\n        height: 50%;\n        width: 100%;\n        top: 50%; }\n  section.options .swiper-slide img {\n        display: block;\n        margin-left: auto;\n        margin-right: auto; }\n  section.options .swiper-slide img:nth-of-type(1) {\n        height: calc(50% - 2.5px);\n        margin-bottom: 2.5px; }\n  section.options .swiper-slide img:nth-of-type(2) {\n        height: calc(50% - 2.5px);\n        margin-top: 2.5px; }\n  section.about {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    background-color: #eaeaea;\n    padding: 0; }\n  section.about div {\n      width: 24em; }\n  section.about small {\n      font-family: \"utopia-std\";\n      text-transform: none;\n      letter-spacing: 0;\n      font-style: italic;\n      font-size: 0.35em;\n      color: #1c1c1c; }\n  section.about .about-container {\n      margin-top: 1.5em;\n      margin-bottom: 3.5em; }\n  section.about .about-caption {\n      font-size: 0.38em; }\n  section.about .about-title {\n      font-size: 1em;\n      font-weight: 100;\n      font-family: sans-serif;\n      margin-bottom: 0; }\n  section.about p {\n      width: 100%;\n      font-size: 0.5em;\n      line-height: 2em;\n      letter-spacing: 2px;\n      color: #1c1c1c;\n      margin-bottom: 1em; }\n  section.story {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 100vh;\n    font-family: sans-serif;\n    border: 2px solid white;\n    background-image: url('city1.jpg');\n    background-repeat: no-repeat;\n    background-size: cover; }\n  section.story h3 {\n      font-size: 2em;\n      font-weight: 100; }\n  section.story p {\n      font-size: 1.4em;\n      margin: 0;\n      font-weight: bold;\n      opacity: 0.6; }\n  section.story h1 {\n      font-size: 1.5em; }\n  section.story h1 span {\n        border: 0.06em solid;\n        letter-spacing: 0.3em;\n        padding-left: 0.5em; }\n  section.products {\n    background-color: white;\n    z-index: 5;\n    padding-top: 100px;\n    position: absolute;\n    color: #1c1c1c;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap; }\n  section.products .title {\n      width: 100%;\n      height: 100px;\n      text-align: center; }\n  section.products .title h2 {\n        font-weight: 600;\n        font-size: 2.2em; }\n  .section section {\n  border: 0.3em solid white; }\n  .section section.product {\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    padding: 0; }\n  .section section.product .product-card {\n      border: none;\n      width: 50%;\n      height: 100%;\n      margin: 0 1%; }\n  .section section.product .product-card img {\n        margin-top: 30%; }\n  .section section.product .product-card .card-body {\n        margin: 20% 0;\n        padding: 0; }\n  .section section.product .product-card .card-body small {\n          font-family: \"utopia-std\";\n          text-transform: none;\n          letter-spacing: 0;\n          font-style: italic;\n          font-size: 0.35em; }\n  .section section.product .product-card .card-body p {\n          font-size: 0.5em;\n          line-height: 1.5em;\n          letter-spacing: 2px;\n          padding-top: 1em; }\n  .section section.product .product-card .card-body .btn-card {\n          margin-top: 25%;\n          border-radius: 300px;\n          border: none;\n          height: 3.5em;\n          width: 11em;\n          text-align: center;\n          font-size: 0.24em;\n          font-weight: 100;\n          letter-spacing: 0.2em;\n          transition: background-color 0.3s ease; }\n  .section section.product .product-card .card-body .btn-card:hover {\n            background-color: #c8a175;\n            color: white; }\n  .section section.product .left-container {\n      background: #1c1c1c;\n      height: 100%;\n      margin-right: 7.5px;\n      max-width: 50%;\n      flex: 1 1 auto;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n  .section section.product .left-container button {\n        color: #1c1c1c;\n        background-color: white; }\n  .section section.product .right-container {\n      background: #eaeaea;\n      height: 100%;\n      margin-left: 7.5px;\n      max-width: 50%;\n      flex: 1 1 auto;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: #1c1c1c; }\n  .section section.product .right-container button {\n        color: white;\n        background-color: #1c1c1c; }\n  #menu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 70;\n  width: 100%;\n  padding: 0;\n  margin: 0; }\n  header {\n  font-size: 0.33em;\n  height: 8em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #1c1c1c; }\n  header div {\n    min-width: 30px;\n    min-height: 30px;\n    letter-spacing: 0.2em; }\n  header div.top-middle h1 {\n      font-size: 4em; }\n  header div.top-middle h1 span {\n        letter-spacing: -0.16em; }\n  header div span a {\n      color: white;\n      margin: 0.618em;\n      padding: 0.618em;\n      font-size: 0.85em;\n      transition: background-color 0.3s ease; }\n  header div span a:hover {\n        background-color: #c8a175;\n        color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1hbi9EZXNrdG9wL25hbm9EZXNpZ24vc3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLDBDQUF5QztFQUN6QyxtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLG9DQUFtQyxFQXdQcEM7RUFoUUQ7SUFXSSxhQUFZO0lBQ1osWUFBVztJQUNYLG1CQUFrQjtJQUNsQixjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLG9CQUFtQjtJQUNuQix3QkFBdUI7SUFDdkIsZ0JBQWU7SUFDZixlQXZCZTtJQXdCZixXQUFVO0lBQ1YsMEJBMUJVLEVBd0tYO0VBbktIO01BdUJNLFdBQVU7TUFDVixhQUFZLEVBQ2I7RUF6Qkw7TUEyQk0sY0FBYTtNQUNiLHVCQUFzQjtNQUN0Qiw4QkFBNkI7TUFDN0Isb0JBQW1CLEVBNkJwQjtFQTNETDtRQWdDUSxZQUFXO1FBQ1gsWUFBVztRQUNYLGNBQWE7UUFDYiw0QkFBMkI7UUFDM0IsZ0JBQWUsRUFzQmhCO0VBMURQO1VBc0NVLFdBQVU7VUFDVixrQkFBaUIsRUFrQmxCO0VBekRUO1lBeUNZLFlBQVcsRUFDWjtFQTFDWDtZQTRDWSxZQUFXO1lBQ1gsYUFBWTtZQUNaLGlCQUFnQixFQVVqQjtFQXhEWDtjQWdEYyxZQUFXLEVBQ1o7RUFqRGI7Y0FtRGMsWUFBVztjQUNYLFlBQVc7Y0FDWCxpQkFBZ0I7Y0FDaEIsaUJBQWdCLEVBQ2pCO0VBdkRiO01BNkRNLGNBQWE7TUFDYix1QkFBc0I7TUFDdEIsOEJBQTZCO01BQzdCLG9CQUFtQixFQWVwQjtFQS9FTDtRQWtFUSx3QkFBdUI7UUFDdkIsY0FBYTtRQUNiLHdCQUF1QjtRQUN2QixnQkFBZTtRQUNmLG9CQUFtQjtRQUNuQixpQkFBZ0I7UUFDaEIsWUFBVztRQUNYLFlBQVcsRUFLWjtFQTlFUDtVQTJFVSxjQUFhO1VBQ2IsbUJBQWtCLEVBQ25CO0VBN0VUO01BaUZNLDBCQXJGYTtNQXNGYixhQUFZO01BQ1oseUJBQXdCO01BQ3hCLHFCQUFvQjtNQUNwQixhQUFZO01BQ1osY0FBYTtNQUNiLFlBQVc7TUFDWCxtQkFBa0I7TUFDbEIsaUJBQWdCO01BQ2hCLGlCQUFnQjtNQUNoQixzQkFBcUI7TUFDckIsdUNBQXNDO01BQ3RDLG1CQUFrQjtNQUNsQixXQUFVO01BQ1YsWUFBVyxFQUtaO0VBcEdMO1FBaUdRLDBCQXBHWTtRQXFHWixhQUFZLEVBQ2I7RUFuR1A7TUF1R00sd0JBQXVCLEVBQ3hCO0VBeEdMO01BMEdNLFlBQVc7TUFDWCxhQUFZLEVBUWI7RUFuSEw7UUE2R1EsaUJBQWdCLEVBQ2pCO0VBOUdQO1FBZ0hRLGlCQUFnQjtRQUNoQixlQXJIVyxFQXNIWjtFQWxIUDtNQXFITSxhQUFZO01BQ1osWUFBVztNQUNYLHVEQUFzRCxFQUN2RDtFQXhITDtNQTJITSxpQkFBZ0I7TUFDaEIsaUJBQWdCLEVBc0NqQjtFQWxLTDtRQThIUSxXQUFVO1FBQ1Ysd0JBQXVCO1FBQ3ZCLDhCQUE2QjtRQUM3QixjQUFhO1FBQ2Isb0JBQW1CO1FBQ25CLHdCQUF1QixFQUl4QjtFQXZJUDtVQXFJVSxhQUFZLEVBQ2I7RUF0SVQ7UUF5SVEsbUJBQWtCO1FBQ2xCLDBCQUF5QjtRQUN6QixZQUFXO1FBQ1gsT0FBTSxFQUNQO0VBN0lQO1FBK0lRLG1CQUFrQjtRQUNsQixZQUFXO1FBQ1gsWUFBVztRQUNYLFNBQVEsRUFFVDtFQXBKUDtRQXNKUSxlQUFjO1FBQ2Qsa0JBQWlCO1FBQ2pCLG1CQUFrQixFQUNuQjtFQXpKUDtRQTJKUSwwQkFBeUI7UUFDekIscUJBQW9CLEVBQ3JCO0VBN0pQO1FBK0pRLDBCQUF5QjtRQUN6QixrQkFBaUIsRUFDbEI7RUFqS1A7SUFxS0ksYUFBWTtJQUNaLFlBQVc7SUFDWCxjQUFhO0lBQ2IsZ0JBQWU7SUFDZixvQkFBbUI7SUFDbkIsd0JBQXVCO0lBQ3ZCLDBCQWhMVTtJQWlMVixXQUFVLEVBaUNYO0VBN01IO01BOEtNLFlBQVcsRUFDWjtFQS9LTDtNQWlMTSwwQkFBeUI7TUFDekIscUJBQW9CO01BQ3BCLGtCQUFpQjtNQUNqQixtQkFBa0I7TUFDbEIsa0JBQWlCO01BQ2pCLGVBMUxhLEVBMkxkO0VBdkxMO01BeUxNLGtCQUFpQjtNQUNqQixxQkFBb0IsRUFDckI7RUEzTEw7TUE2TE0sa0JBQWlCLEVBQ2xCO0VBOUxMO01BZ01NLGVBQWM7TUFDZCxpQkFBZ0I7TUFDaEIsd0JBQXVCO01BQ3ZCLGlCQUFnQixFQUNqQjtFQXBNTDtNQXNNTSxZQUFXO01BQ1gsaUJBQWdCO01BQ2hCLGlCQUFnQjtNQUNoQixvQkFBbUI7TUFDbkIsZUE5TWE7TUErTWIsbUJBQWtCLEVBQ25CO0VBNU1MO0lBK01JLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsd0JBQXVCO0lBQ3ZCLGtCQUFpQjtJQUNqQix3QkFBdUI7SUFDdkIsd0JBQXVCO0lBbUJ2QixtQ0FBK0M7SUFDL0MsNkJBQTRCO0lBQzVCLHVCQUFzQixFQUN2QjtFQTFPSDtNQXNOTSxlQUFjO01BQ2QsaUJBQWdCLEVBQ2pCO0VBeE5MO01BME5NLGlCQUFnQjtNQUNoQixVQUFTO01BQ1Qsa0JBQWlCO01BQ2pCLGFBQVksRUFDYjtFQTlOTDtNQWdPTSxpQkFBZ0IsRUFNakI7RUF0T0w7UUFrT1EscUJBQW9CO1FBQ3BCLHNCQUFxQjtRQUNyQixvQkFBbUIsRUFDcEI7RUFyT1A7SUE2T0ksd0JBQXVCO0lBQ3ZCLFdBQVU7SUFDVixtQkFBa0I7SUFDbEIsbUJBQWtCO0lBQ2xCLGVBclBlO0lBc1BmLGNBQWE7SUFDYix3QkFBdUI7SUFDdkIsZ0JBQWUsRUFXaEI7RUEvUEg7TUFzUE0sWUFBVTtNQUNWLGNBQWE7TUFDYixtQkFBa0IsRUFLbkI7RUE3UEw7UUEwUFEsaUJBQWdCO1FBQ2hCLGlCQUFnQixFQUNqQjtFQUtQO0VBR0UsMEJBQXlCLEVBa0Z6QjtFQXJGRjtJQU1JLGFBQVk7SUFDWixjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLDhCQUE2QjtJQUM3QixXQUFVLEVBMEVYO0VBcEZIO01BWU0sYUFBWTtNQUNaLFdBQVU7TUFDVixhQUFZO01BSVosYUFBWSxFQWtDYjtFQXBETDtRQWdCUSxnQkFBZSxFQUNoQjtFQWpCUDtRQW9CUSxjQUFhO1FBQ2IsV0FBVSxFQThCWDtFQW5EUDtVQXVCVSwwQkFBeUI7VUFDekIscUJBQW9CO1VBQ3BCLGtCQUFpQjtVQUNqQixtQkFBa0I7VUFDbEIsa0JBQWlCLEVBQ2xCO0VBNUJUO1VBOEJVLGlCQUFnQjtVQUNoQixtQkFBa0I7VUFDbEIsb0JBQW1CO1VBQ25CLGlCQUFnQixFQUNqQjtFQWxDVDtVQW9DVSxnQkFBZTtVQUNmLHFCQUFvQjtVQUNwQixhQUFZO1VBQ1osY0FBYTtVQUNiLFlBQVc7VUFDWCxtQkFBa0I7VUFDbEIsa0JBQWlCO1VBQ2pCLGlCQUFnQjtVQUNoQixzQkFBcUI7VUFDckIsdUNBQXNDLEVBS3ZDO0VBbERUO1lBK0NZLDBCQW5UUTtZQW9UUixhQUFZLEVBQ2I7RUFqRFg7TUFzRE0sb0JBM1RhO01BNFRiLGFBQVk7TUFFWixvQkFBbUI7TUFDbkIsZUFBYztNQUNkLGVBQWM7TUFDZCxjQUFhO01BQ2Isb0JBQW1CO01BQ25CLHdCQUF1QixFQUt4QjtFQW5FTDtRQWdFUSxlQXJVVztRQXNVWCx3QkFDRixFQUFDO0VBbEVQO01BcUVNLG9CQTNVUTtNQTRVUixhQUFZO01BRVosbUJBQWtCO01BQ2xCLGVBQWM7TUFDZCxlQUFjO01BQ2QsY0FBYTtNQUNiLG9CQUFtQjtNQUNuQix3QkFBdUI7TUFDdkIsZUFuVmEsRUF3VmQ7RUFuRkw7UUFnRlEsYUFBWTtRQUNaLDBCQXRWVyxFQXVWWjtFQU1QO0VBQ0MsZ0JBQWM7RUFDZCxPQUFLO0VBQ0wsUUFBTTtFQUNOLFlBQVc7RUFDWCxZQUFXO0VBQ1gsV0FBVTtFQUNULFVBQVMsRUFDVjtFQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCxjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQixlQTdXaUIsRUE0WWpCO0VBckNGO0lBU0ssZ0JBQWU7SUFDZixpQkFBZ0I7SUFDaEIsc0JBQXFCLEVBeUJ0QjtFQXBDSjtNQWdCUyxlQUFjLEVBS2Y7RUFyQlI7UUFrQlcsd0JBQXVCLEVBRXhCO0VBcEJWO01BeUJTLGFBQVk7TUFDWixnQkFBZTtNQUNmLGlCQUFnQjtNQUNoQixrQkFBaUI7TUFDakIsdUNBQXNDLEVBS3ZDO0VBbENSO1FBK0JXLDBCQXJZUztRQXNZVCxhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGdyYXk6ICNlYWVhZWE7XG4kbmF2eV9ibHVlOiAjMWMxYzFjO1xuJHJpY2VfYnJvd246ICNjOGExNzU7XG5cblxuc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1ZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IGFsdGVybmF0ZS1nb3RoaWMsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cbiAgJi5vcHRpb25ze1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGNvbG9yOiAkbmF2eV9ibHVlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXk7XG4gICAgLnJlc3VsdC1vcHRpb25zLCAuc2VsZWN0LW9wdGlvbnN7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICAucmVzdWx0LW9wdGlvbnN7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC5jb25maWd1cmF0aW9ue1xuICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAucGFydHN7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBmb250LXNpemU6IDAuMzVlbTtcbiAgICAgICAgICBzdmctaWNvbntcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGFydHMtdGl0bGV7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICBjbGVhcjogbGVmdDtcbiAgICAgICAgICAgICAgd2lkdGg6IDE1ZW07XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5zZWxlY3Qtb3B0aW9uc3tcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLm9wdGlvbnMtY29udGFpbmVye1xuICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBzZWxlY3QtcGlsbHtcbiAgICAgICAgICBtYXJnaW46IDAuNWVtO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuYnRuLWNhcmR7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2eV9ibHVlO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgbWFyZ2luOiAwIGF1dG8gYXV0byBhdXRvO1xuICAgICAgYm9yZGVyLXJhZGl1czogMzAwcHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBoZWlnaHQ6IDMuNWVtO1xuICAgICAgd2lkdGg6IDExZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDAuM2VtO1xuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDJlbTtcbiAgICAgIGJvdHRvbTogMmVtO1xuICAgICAgJjpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJpY2VfYnJvd247XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGl0bGV7XG4gICAgICBtYXJnaW46IDJlbSBhdXRvIDAgYXV0bztcbiAgICB9XG4gICAgZm9ybXtcbiAgICAgIHdpZHRoOiAxMGVtO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgaW5wdXR7XG4gICAgICAgIGZvbnQtc2l6ZTogMC41ZW07XG4gICAgICB9XG4gICAgICBpe1xuICAgICAgICBmb250LXNpemU6IDAuNWVtO1xuICAgICAgICBjb2xvcjogJG5hdnlfYmx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLnN3aXBlci1jb250YWluZXJ7XG4gICAgICBoZWlnaHQ6IDE1ZW07XG4gICAgICB3aWR0aDogNzVlbTtcbiAgICAgIG1hcmdpbjogYXV0byBjYWxjKCA1MCUgLSAzNy41ZW0pIDAgY2FsYyggNTAlIC0gMzcuNWVtKTtcbiAgICB9XG4gICAgLnN3aXBlci1zbGlkZXtcbiAgICAgIC8vIHdpZHRoOiAyMCU7XG4gICAgICBtYXJnaW46IDAgMS40NXB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGRpdntcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSAwLjVzO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRpdjpudGgtb2YtdHlwZSgxKXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoNTAlIC0gMi41cHgpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgfVxuICAgICAgZGl2Om50aC1vZi10eXBlKDIpe1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdG9wOiA1MCU7XG5cbiAgICAgIH1cbiAgICAgIGltZ3tcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICB9XG4gICAgICBpbWc6bnRoLW9mLXR5cGUoMSl7XG4gICAgICAgIGhlaWdodDogY2FsYyg1MCUgLSAyLjVweCk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIuNXB4O1xuICAgICAgfVxuICAgICAgaW1nOm50aC1vZi10eXBlKDIpe1xuICAgICAgICBoZWlnaHQ6IGNhbGMoNTAlIC0gMi41cHgpO1xuICAgICAgICBtYXJnaW4tdG9wOiAyLjVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJi5hYm91dHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpdntcbiAgICAgIHdpZHRoOiAyNGVtO1xuICAgIH1cbiAgICBzbWFsbHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcInV0b3BpYS1zdGRcIjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBmb250LXNpemU6IDAuMzVlbTtcbiAgICAgIGNvbG9yOiAkbmF2eV9ibHVlO1xuICAgIH1cbiAgICAuYWJvdXQtY29udGFpbmVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDEuNWVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMy41ZW07XG4gICAgfVxuICAgIC5hYm91dC1jYXB0aW9ue1xuICAgICAgZm9udC1zaXplOiAwLjM4ZW07XG4gICAgfVxuICAgIC5hYm91dC10aXRsZXtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgcHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZm9udC1zaXplOiAwLjVlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgY29sb3I6ICRuYXZ5X2JsdWU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgfVxuICB9XG4gICYuc3Rvcnl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgIGgze1xuICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICBmb250LXdlaWdodDogMTAwO1xuICAgIH1cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICB9XG4gICAgaDF7XG4gICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgc3BhbntcbiAgICAgICAgYm9yZGVyOiAwLjA2ZW0gc29saWQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvY2l0eTEuanBnJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG5cbiAgJi5wcm9kdWN0c3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB6LWluZGV4OiA1O1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6ICRuYXZ5X2JsdWU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgLnRpdGxle1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBoMntcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAyLjJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxufVxuLnNlY3Rpb24ge1xuXG4gc2VjdGlvbntcbiAgYm9yZGVyOiAwLjNlbSBzb2xpZCB3aGl0ZTtcblxuICAmLnByb2R1Y3R7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIC5wcm9kdWN0LWNhcmR7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgaW1ne1xuICAgICAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgICB9XG4gICAgICBtYXJnaW46IDAgMSU7XG4gICAgICAuY2FyZC1ib2R5e1xuICAgICAgICBtYXJnaW46IDIwJSAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBzbWFsbHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJ1dG9waWEtc3RkXCI7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC4zNWVtO1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjVlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMWVtO1xuICAgICAgICB9XG4gICAgICAgIC5idG4tY2FyZHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNSU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzAwcHg7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGhlaWdodDogMy41ZW07XG4gICAgICAgICAgd2lkdGg6IDExZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC4yNGVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmljZV9icm93bjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmxlZnQtY29udGFpbmVye1xuICAgICAgYmFja2dyb3VuZDogJG5hdnlfYmx1ZTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIC8vIHdpZHRoOiA1MCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDcuNXB4O1xuICAgICAgbWF4LXdpZHRoOiA1MCU7O1xuICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYnV0dG9ue1xuICAgICAgICBjb2xvcjogJG5hdnlfYmx1ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcbiAgICAgIH1cbiAgICB9XG4gICAgLnJpZ2h0LWNvbnRhaW5lcntcbiAgICAgIGJhY2tncm91bmQ6ICRncmF5O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgLy8gd2lkdGg6IDUwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiA3LjVweDtcbiAgICAgIG1heC13aWR0aDogNTAlOztcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAkbmF2eV9ibHVlO1xuICAgICAgYnV0dG9ue1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZ5X2JsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gfVxufVxuXG4jbWVudXtcblx0cG9zaXRpb246Zml4ZWQ7XG5cdHRvcDowO1xuXHRsZWZ0OjA7XG5cdHotaW5kZXg6IDcwO1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5oZWFkZXIge1xuICBmb250LXNpemU6IDAuMzNlbTtcbiAgaGVpZ2h0OiA4ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogJG5hdnlfYmx1ZTtcblxuICAgZGl2IHtcbiAgICAgbWluLXdpZHRoOiAzMHB4O1xuICAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgICBsZXR0ZXItc3BhY2luZzogMC4yZW07XG4gICAgICYudG9wLW1pZGRsZXtcbiAgICAgICAvLyB3aWR0aDogODBweDtcbiAgICAgIC8vICBtYXJnaW46IDAgMzBlbTtcbiAgICAgICBoMXtcbiAgICAgICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgICAgICAgc3BhbntcbiAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE2ZW07XG5cbiAgICAgICAgIH1cbiAgICAgICB9XG4gICAgIH1cbiAgICAgc3BhbntcbiAgICAgICBhe1xuICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgbWFyZ2luOiAwLjYxOGVtO1xuICAgICAgICAgcGFkZGluZzogMC42MThlbTtcbiAgICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmljZV9icm93bjtcbiAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgfVxuICAgICAgIH1cbiAgICAgfVxuICAgfVxuIH1cbiJdfQ== */"

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
    function HomePageComponent(router, translate) {
        var _this = this;
        this.router = router;
        this.translate = translate;
        this.disableMenu = false;
        this.visible = false;
        this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.orginalList = ['game0', 'game1', 'game2', 'game3', 'game4', 'game5', 'game6', 'game7', 'game8', 'game9'];
        this.swipperConfig = {
            direction: 'horizontal',
            slidesPerView: 5,
            keyboard: true,
            mousewheel: true,
            scrollbar: false,
            navigation: true,
            pagination: false
        };
        this.config = {
            licenseKey: '0FB20392-42234774-8832938C-619D0B0A',
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
            menu: '#menu',
            navigation: true,
            // events callback
            afterLoad: function (origin, destination, direction) {
                // console.log(origin, destination, direction);
                if (destination.anchor === 'firstPage') {
                    _this.disableMenu = true;
                }
                else {
                    _this.disableMenu = false;
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
        this.selectedList = [];
        this.gameList = this.orginalList;
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
        this.translate.use('cn');
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
    HomePageComponent.prototype.convertRemToPixels = function (rem) {
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    };
    HomePageComponent.prototype.scrollToTop = function (el) {
        el.scrollTop = el.scrollTop + this.convertRemToPixels(10);
    };
    HomePageComponent.prototype.scrollToBot = function (el) {
        el.scrollTop = el.scrollTop - this.convertRemToPixels(10);
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
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/home-page/home-page.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('enterAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-20px)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s 0.7s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0)', opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s 0.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
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

module.exports = "<p>\n  select-page works!\n</p>\n"

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

module.exports = "<div class=\"pill-container\" (click)=\"onSelect()\" >\n  <div class=\"overlay\" [ngClass]=\"{'selectedPill': selected}\">\n    <p *ngIf=\"!selected\">SELECT</p>\n    <p *ngIf=\"selected\">SELECTED</p>\n  </div>\n  <img src=\"{{imgLink}}\">\n</div>\n<div class=\"pill-title\">\n  {{pillName}}\n</div>\n"

/***/ }),

/***/ "./src/app/select-pill/select-pill.component.scss":
/*!********************************************************!*\
  !*** ./src/app/select-pill/select-pill.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div, img {\n  height: 3em;\n  width: 3em; }\n\n.pill-title {\n  height: auto;\n  width: auto;\n  font-size: 0.5em; }\n\ndiv .pill-container {\n  position: relative; }\n\ndiv .overlay {\n  opacity: 0;\n  background-color: white;\n  transition: opacity ease 0.5s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute; }\n\ndiv .overlay:hover {\n    opacity: 0.7; }\n\ndiv .overlay p {\n    font-size: 0.7em;\n    margin: 0; }\n\ndiv .selectedPill {\n  opacity: 0.85; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1hbi9EZXNrdG9wL25hbm9EZXNpZ24vc3JjL2FwcC9zZWxlY3QtcGlsbC9zZWxlY3QtcGlsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVc7RUFDWCxXQUFVLEVBQ1g7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osWUFBVztFQUNYLGlCQUFnQixFQUNqQjs7QUFFRDtFQUVJLG1CQUFrQixFQUNuQjs7QUFISDtFQUtJLFdBQVU7RUFDVix3QkFBdUI7RUFDdkIsOEJBQTZCO0VBQzdCLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsd0JBQXVCO0VBQ3ZCLG1CQUFrQixFQVFuQjs7QUFuQkg7SUFhTSxhQUFZLEVBQ2I7O0FBZEw7SUFnQk0saUJBQWdCO0lBQ2hCLFVBQVMsRUFDVjs7QUFsQkw7RUFxQkksY0FBYSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvc2VsZWN0LXBpbGwvc2VsZWN0LXBpbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYsIGltZ3tcbiAgaGVpZ2h0OiAzZW07XG4gIHdpZHRoOiAzZW07XG59XG4ucGlsbC10aXRsZXtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgZm9udC1zaXplOiAwLjVlbTtcbn1cblxuZGl2IHtcbiAgLnBpbGwtY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAub3ZlcmxheXtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSAwLjVzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgJjpob3ZlcntcbiAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG4gICAgcHtcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG4gIC5zZWxlY3RlZFBpbGx7XG4gICAgb3BhY2l0eTogMC44NTtcbiAgfVxufVxuXG4iXX0= */"

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

module.exports = __webpack_require__(/*! /Users/suman/Desktop/nanoDesign/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map