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
    ApiServiceService.prototype.getWorks = function () {
        return this.http.get('https://us-central1-nanodesign-1d2cb.cloudfunctions.net/get_workstation');
    };
    ApiServiceService.prototype.postGames = function (games, works, requirement) {
        return this.http.post('https://us-central1-nanodesign-1d2cb.cloudfunctions.net/postResult', { games: games, workstation: works, richlvl: [requirement] });
    };
    ApiServiceService.prototype.postMsg = function (name, email, msg) {
        return this.http.post('https://us-central1-nanodesign-1d2cb.cloudfunctions.net/store_info', { info: [name, email, msg] });
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

module.exports = "<svg-icon *ngIf=\"disableLoading\" (click)=\"nextPage()\" [applyCss]=\"true\" class=\"arrow-bot\" src=\"../../assets/arrow-bot.svg\" [svgStyle]=\"{ 'width.em': 2, 'height.em': 1 }\"></svg-icon>\r\n<header [@enterAnimation] id=\"menu\" [ngClass]=\"{'non-first': !disableMenu}\">\r\n  <div *ngIf=\"!mobile && disableMenu\" class=\"top-left\">\r\n    <span>\r\n      <a [ngClass]=\"{'active': activeSlide === 'secondPage'}\" (click)=\"fullpage_api.moveTo(2)\" >{{ \"US\" | translate}}</a>\r\n      <a [ngClass]=\"{'active': activeSlide === 'thirdPage'}\" (click)=\"fullpage_api.moveTo(3)\" >{{\"GALLERY\" | translate}}</a>\r\n    </span>\r\n  </div>\r\n  <div [@enterAnimation] *ngIf=\"disableMenu && !mobile\" class=\"top-middle\">\r\n    <h1 ><span><svg-icon src=\"../../assets/nano-logo-5.svg\" [applyCss]=\"true\" [svgStyle]=\"{ 'width.em': 5}\"></svg-icon></span> </h1>\r\n  </div>\r\n  <div class=\"top-right\" *ngIf=\"!mobile && disableMenu\">\r\n    <span>\r\n      <a [ngClass]=\"{'active': activeSlide === 'fourthPage'}\" (click)=\"fullpage_api.moveTo(4)\">{{\"CONFIG\" | translate}}</a>\r\n      <a (click)=\"changeLanguage()\">LANGUAGE\r\n        <svg-icon *ngIf=\"translate.currentLang === 'en' \" src=\"../../assets/canada.svg\" [svgStyle]=\"{ 'width.em': 2, 'padding-left.em': 0.25, 'padding-bottom.em': 0.25}\"></svg-icon>\r\n        <svg-icon *ngIf=\"translate.currentLang === 'cn' \" src=\"../../assets/china.svg\" [svgStyle]=\"{ 'width.em': 2, 'padding-left.em': 0.25, 'padding-bottom.em': 0.25}\"></svg-icon>\r\n      </a>\r\n    </span>\r\n  </div>\r\n\r\n  <div class=\"top-right\" *ngIf=\"mobile || !disableMenu\">\r\n    <span>\r\n      <a [ngClass]=\"{'active': activeSlide === 'secondPage'}\" (click)=\"fullpage_api.moveTo(2)\" >{{ \"US\" | translate}}</a>\r\n      <a [ngClass]=\"{'active': activeSlide === 'thirdPage'}\" (click)=\"fullpage_api.moveTo(3)\" >{{\"GALLERY\" | translate}}</a>\r\n      <a [ngClass]=\"{'active': activeSlide === 'fourthPage' || activeSlide === 'lastPage'}\" (click)=\"fullpage_api.moveTo(4)\">{{\"CONFIG\" | translate}}</a>\r\n      <a (click)=\"changeLanguage()\">LANGUAGE\r\n        <svg-icon *ngIf=\"translate.currentLang === 'en' \" src=\"../../assets/canada.svg\" [svgStyle]=\"{ 'width.em': 2, 'padding-left.em': 0.25, 'padding-bottom.em': 0.25}\"></svg-icon>\r\n        <svg-icon *ngIf=\"translate.currentLang === 'cn' \" src=\"../../assets/china.svg\" [svgStyle]=\"{ 'width.em': 2, 'padding-left.em': 0.25, 'padding-bottom.em': 0.25}\"></svg-icon>\r\n      </a>\r\n    </span>\r\n  </div>\r\n</header>\r\n\r\n<div fullpage id=\"fullpage\" [options]=\"config\" (ref)=\"getRef($event)\" #fullpageRef>\r\n  <div class=\"section\">\r\n    <div>\r\n\r\n    </div>\r\n    <section class=\"story\">\r\n      <div class=\"fade-in\">\r\n          <h1 *ngIf=\"!mobile\" ><span>Nano Design</span></h1>\r\n          <div [@enterAnimation] *ngIf=\"disableMenu && mobile\" class=\"top-middle\">\r\n            <h1 ><span><svg-icon src=\"../../assets/nano-logo-5.svg\" [applyCss]=\"true\" [svgStyle]=\"{ 'width.em': 5, 'height.em' : 5, 'padding-left.em' : 0.4}\"></svg-icon></span> </h1>\r\n          </div>\r\n      </div>\r\n\r\n\r\n    </section>\r\n  </div>\r\n  <div class=\"section\">\r\n    <section class=\"about\">\r\n\r\n      <div>\r\n        <div class=\"about-container\">\r\n            <p class=\"about-title\">- Our Mission -</p>\r\n            <p class=\"about-caption\">{{ 'STORY_CAPTION' | translate}} </p>\r\n        </div>\r\n\r\n        <!-- <p>        To provide the most unique customize pc for passionate users.\r\n          </p>\r\n        <p> Nano design is a group formed by experienced hardware engineer, software developer and customer service. We want to make the whole process transparent, budget efficient and more customize to benefit as many pc lovers as possible. Always remember making the unique feeling for users is one of the most important goals from us.\r\n          </p> -->\r\n          <p>{{ 'FIRST_STORY' | translate}}</p>\r\n          <p>{{ 'SECOND_STORY' | translate}}</p>\r\n        <small>The NanoDesign Team</small>\r\n      </div>\r\n    </section>\r\n  </div>\r\n  <div class=\"section\">\r\n    <section *ngIf=\"!mobile\" class=\"product\">\r\n      <div class=\"left-container\">\r\n        <div class=\"product-card\">\r\n          <img class=\"card-img-top\" src=\"../assets/gamingPC.jpg\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <small class=\"card-title\">{{'GAMING_COMPUTER' | translate}}</small>\r\n            <p class=\"card-text\">{{ 'GAMING_DES' | translate}}</p>\r\n            <div class=\"text-center\">\r\n              <button href=\"#\" class=\"btn-card\" (click)=\"nextGame()\">{{'LEARN_MORE' | translate}}</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"right-container\">\r\n        <div class=\"product-card\">\r\n          <img class=\"card-img-top\" src=\"../assets/workPC.jpg\" alt=\"Card image cap\">\r\n          <div class=\"card-body\">\r\n            <small class=\"card-title\">{{'Work_Station' | translate}}</small>\r\n            <p class=\"card-text\">{{ 'WORK_DES' | translate}}</p>\r\n            <div class=\"text-center\">\r\n              <button href=\"#\" class=\"btn-card\" (click)=\"nextWork()\">{{'LEARN_MORE' | translate}}</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <section *ngIf=\"mobile\" class=\"product-mobile\">\r\n      <div class=\"left-container\">\r\n        <div class=\"product-card\">\r\n          <div class=\"img-container\">\r\n              <small class=\"card-title\">{{'GAMING_COMPUTER' | translate}}</small>\r\n            <img class=\"card-img-top\" src=\"../assets/gamingPC.jpg\" alt=\"Card image cap\">\r\n            <button href=\"#\" class=\"btn-card\" (click)=\"nextGame()\">{{'LEARN_MORE' | translate}}</button>\r\n\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <p class=\"card-text\">{{ 'GAMING_DES' | translate}}</p>\r\n            <div class=\"text-center\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"right-container\">\r\n        <div class=\"product-card\">\r\n          <div class=\"card-body\">\r\n            <p class=\"card-text\">{{ 'WORK_DES' | translate}}</p>\r\n            <div class=\"text-center\">\r\n            </div>\r\n          </div>\r\n          <div class=\"img-container\">\r\n              <small class=\"card-title\">{{ 'Work_Station' | translate}}</small>\r\n              <img class=\"card-img-top\" src=\"../assets/workPC.jpg\" alt=\"Card image cap\">\r\n              <button href=\"#\" class=\"btn-card\" (click)=\"nextWork()\">{{'LEARN_MORE' | translate}}</button>\r\n\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n  </div>\r\n  <div class=\"section\">\r\n    <section class=\"options\">\r\n        <div class=\"title\">\r\n            <p> {{'DISPLAY_SOFTWARE_NAME' | translate}}</p>\r\n          </div>\r\n      <div class=\"select-options\">\r\n\r\n        <!-- <div class=\"swiper-container\" [swiper]=\"swipperConfig\">\r\n\r\n            <div class=\"swiper-wrapper\">\r\n              <div class=\"swiper-slide\" *ngFor=\"let game of gameList\">\r\n                  <select-pill [imgLink]=\"'../../assets/gameLogo/' + game + '.jpg'\" [pillName]=\"game\" [selected]=\"selectedList.includes(game)\" (select)=\"pillSelect($event)\" ></select-pill>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n        <div class=\"switch-tab\">\r\n          <div (click)=\"switchTab()\" [ngClass]=\"{'onSwitch': switchStatus === 'game'}\" >{{'GAME_LIST' | translate}}</div>\r\n          <div (click)=\"switchTab()\" [ngClass]=\"{'onSwitch': switchStatus === 'work'}\">{{'OFFICE_LIST' | translate}}</div>\r\n        </div>\r\n\r\n        <div class=\"switch-container\">\r\n            <div class=\"options-scroll\">\r\n                <svg-icon [applyCss]=\"true\" (click)=\"scrollToBot(container)\" src=\"../../assets/select-up.svg\" [svgStyle]=\"{ 'width.em': 2 }\"></svg-icon>\r\n                <svg-icon [applyCss]=\"true\" (click)=\"scrollToTop(container)\" src=\"../../assets/select-down.svg\" [svgStyle]=\"{ 'width.em': 2 }\"></svg-icon>\r\n            </div>\r\n            <div #container class=\"options-container\">\r\n                <ng-container *ngFor=\"let game of gameList\">\r\n                  <select-pill [imgLink]=\"'../../assets/gameLogo/' + game.id + '.jpg'\" [pillID]=\"game.id\" [pillName]=\"game.name\"\r\n                    [selected]=\"selectedList.includes(game.id)\" (select)=\"pillSelect($event)\"></select-pill>\r\n                </ng-container>\r\n                <p *ngIf=\"gameList.length === 0\">{{'SEARCH_ERROR' | translate}}</p>\r\n              </div>\r\n        </div>\r\n\r\n\r\n        <button [@enterAnimation] (click)=\"getResult()\" *ngIf=\"selectedList.length !== 0\" href=\"#\" class=\"btn-card\">{{'GET_RESULT' | translate}}</button>\r\n        <!-- <button (click)=\"scrollToTop(container)\">scroll to top</button> -->\r\n        <!-- <button (click)=\"scrollToBot(container)\">scroll to bottom</button> -->\r\n        <form class=\"custom-form form-inline md-form form-sm\">\r\n\r\n          <input [formControl]=\"searchField\" class=\"form-control form-control-sm ml-3 w-75\" type=\"text\"\r\n            placeholder=\"Search\" aria-label=\"Search\">\r\n          <i class=\"fas fa-search\" aria-hidden=\"true\"></i>\r\n        </form>\r\n\r\n      </div>\r\n\r\n      <div *ngIf=\"!mobile\" class=\"result-options\">\r\n        <div class=\"switch-tab\">\r\n              <div (click)=\"changeRequire('basic')\" [ngClass]=\"{'onSwitch': requirement === 'basic'}\" >{{'MINIMUN' | translate}}</div>\r\n              <div (click)=\"changeRequire('Premium')\" [ngClass]=\"{'onSwitch': requirement === 'Premium'}\" >{{'RECOMEND' | translate}}</div>\r\n              <div (click)=\"changeRequire('Esports')\" [ngClass]=\"{'onSwitch': requirement === 'Esports'}\">{{'PREMIUM' | translate}}</div>\r\n        </div>\r\n\r\n        <svg-icon [@loadAnimation] *ngIf=\"loading === 'load'\" src=\"../../assets/loading.svg\" [svgStyle]=\"{ 'width.em': 3, 'height.em': 3, 'margin-top.em': 5 }\"></svg-icon>\r\n        <div [@loadAnimation] *ngIf=\"loading === 'init'\" class=\"configuration\">\r\n            <div class=\"parts\">\r\n            <svg-icon src=\"../../assets/CPU.svg\" [svgStyle]=\"{ 'width.em': 5, 'height.em': 5 }\"></svg-icon>\r\n            <div class=\"parts-title\">\r\n                <span>{{'CPU' | translate}}</span>\r\n                <p>???</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"parts\">\r\n            <svg-icon src=\"../../assets/GPU.svg\" [svgStyle]=\"{ 'width.em': 5 ,'height.em': 5 }\"></svg-icon>\r\n            <div class=\"parts-title\">\r\n                <span>{{'Graphic_card' | translate}}</span>\r\n                <p>???</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"parts\">\r\n            <svg-icon src=\"../../assets/MB.svg\" [svgStyle]=\"{ 'width.em': 5,'height.em': 5 }\"></svg-icon>\r\n            <div class=\"parts-title\">\r\n                <span>{{'MOTHERBOARD' | translate}}</span>\r\n                <p>???</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"parts\">\r\n            <svg-icon src=\"../../assets/MEM.svg\" [svgStyle]=\"{ 'width.em': 5,'height.em': 5 }\"></svg-icon>\r\n            <div class=\"parts-title\">\r\n                <span>{{'MEM' | translate}}</span>\r\n                <p>???</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"parts\">\r\n              <svg-icon src=\"../../assets/SSD.svg\" [svgStyle]=\"{ 'width.em': 5,'height.em': 5 }\"></svg-icon>\r\n              <div class=\"parts-title\">\r\n                  <span>{{'Storage' | translate}}</span>\r\n                  <p>???</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"parts\">\r\n                <svg-icon src=\"../../assets/PSU.svg\" [svgStyle]=\"{ 'width.em': 5,'height.em': 5 }\"></svg-icon>\r\n                <div class=\"parts-title\">\r\n                    <span>{{'Power_Supply' | translate}}</span>\r\n                    <p>???</p>\r\n                </div>\r\n              </div>\r\n        </div>\r\n        <div [@loadAnimation] *ngIf=\"loading === 'result'\" class=\"configuration\">\r\n          <div class=\"parts\">\r\n            <svg-icon src=\"../../assets/CPU.svg\" [svgStyle]=\"{ 'width.em': 5, 'height.em': 5 }\"></svg-icon>\r\n            <div class=\"parts-title\">\r\n                <span>{{'CPU' | translate}}</span>\r\n                <p>{{result.cpu}}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"parts\">\r\n            <svg-icon src=\"../../assets/GPU.svg\" [svgStyle]=\"{ 'width.em': 5 ,'height.em': 5 }\"></svg-icon>\r\n            <div class=\"parts-title\">\r\n                <span>{{'Graphic_card' | translate}}</span>\r\n                <p>{{result.gpu}}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"parts\">\r\n            <svg-icon src=\"../../assets/MB.svg\" [svgStyle]=\"{ 'width.em': 5,'height.em': 5 }\"></svg-icon>\r\n            <div class=\"parts-title\">\r\n                <span>{{'MOTHERBOARD' | translate}}</span>\r\n                <p>{{result.mb}}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"parts\">\r\n            <svg-icon src=\"../../assets/MEM.svg\" [svgStyle]=\"{ 'width.em': 5,'height.em': 5 }\"></svg-icon>\r\n            <div class=\"parts-title\">\r\n                <span>{{'MEM' | translate}}</span>\r\n                <p>{{result.mem}}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"parts\">\r\n              <svg-icon src=\"../../assets/SSD.svg\" [svgStyle]=\"{ 'width.em': 5,'height.em': 5 }\"></svg-icon>\r\n              <div class=\"parts-title\">\r\n                  <span>{{'Storage' | translate}}</span>\r\n                  <p>{{result.ssd}}</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"parts\">\r\n                <svg-icon src=\"../../assets/PSU.svg\" [svgStyle]=\"{ 'width.em': 5,'height.em': 5 }\"></svg-icon>\r\n                <div class=\"parts-title\">\r\n                    <span>{{'Power_Supply' | translate}}</span>\r\n                    <p>{{result.psu[0]}}</p>\r\n                    <p>Total Power: {{result.psu[1]}}W</p>\r\n                </div>\r\n              </div>\r\n        </div>\r\n        <div class=\"estimate\">\r\n          <h1 *ngIf=\"loading === 'result'\"> {{'ESTIMATE_PRICE' | translate}}: ${{result.price[0]}}</h1>\r\n          <!-- Button trigger modal -->\r\n          <button type=\"button\" class=\"btn-card\" data-backdrop=\"false\" data-toggle=\"modal\" data-target=\"#myModal\">{{'CONTACT_US' | translate}}</button>\r\n          <div class=\"modal fade\" id=\"myModal\" role=\"dialog\" style=\"position: absolute;;\">\r\n              <div class=\"modal-dialog\">\r\n\r\n                 <!-- Modal content-->\r\n                 <div class=\"modal-content\">\r\n                    <div class=\"modal-body\">\r\n                      <div class=\"title\"> Get in touch with us</div>\r\n                      <form class=\"form-inline md-form form-sm\">\r\n                        <input [formControl]=\"name\" placeholder=\"name\" class=\"form-control form-control-sm ml-3 w-75\" type=\"text\">\r\n                        <input [formControl]=\"email\" placeholder=\"E-mail\" class=\"form-control form-control-sm ml-3 w-75\" type=\"text\">\r\n                        <input [formControl]=\"msg\" placeholder=\"Message\" class=\"form-control form-control-sm ml-3 w-75\" type=\"text\">\r\n                      </form>\r\n                      <div>\r\n                          <button class=\"btn\" (click)=\"sendMsg()\">send</button>\r\n                      </div>\r\n\r\n                      <div class=\"contact\">\r\n                          <p>Email: nanodesign666@gmail.com</p>\r\n                          <p>Phone: 1-647-782-2427</p>\r\n                      </div>\r\n                       \r\n                       <div class=\"wechat\">\r\n                          <svg-icon src=\"../../assets/wechat.svg\" [svgStyle]=\"{ 'width.em': 0.7,'height.em':  0.7 }\"></svg-icon>\r\n                         <img src=\"../../assets/wechat.jpg\">\r\n                       </div>\r\n                       <div class=\"instagram\">\r\n                          <svg-icon src=\"../../assets/instagram.svg\" [svgStyle]=\"{ 'width.em':  0.7,'height.em':  0.7 }\"></svg-icon>\r\n                          <p>nanopcdesign</p>\r\n                       </div>\r\n                       <div>\r\n                          <button class=\"btn\" data-dismiss=\"modal\">Close</button>\r\n                      </div>                       \r\n                    </div>\r\n                 </div>\r\n              </div>\r\n           </div>\r\n    </div>\r\n      </div>\r\n\r\n    </section>\r\n  </div>\r\n\r\n  <div *ngIf=\"mobile\" class=\"section\">\r\n    <section class=\"options\">\r\n      <div class=\"result-options\">\r\n          <div class=\"switch-tab\">\r\n              <div (click)=\"changeRequire('basic')\" [ngClass]=\"{'onSwitch': requirement === 'basic'}\" >{{'MINIMUN' | translate}}</div>\r\n              <div (click)=\"changeRequire('Premium')\" [ngClass]=\"{'onSwitch': requirement === 'Premium'}\" >{{'RECOMEND' | translate}}</div>\r\n              <div (click)=\"changeRequire('Esports')\" [ngClass]=\"{'onSwitch': requirement === 'Esports'}\">{{'PREMIUM' | translate}}</div>\r\n        </div>\r\n\r\n        <svg-icon [@loadAnimation] *ngIf=\"loading === 'load'\" src=\"../../assets/loading.svg\" [svgStyle]=\"{ 'width.em': 3, 'height.em': 3, 'margin-top.em': 5 }\"></svg-icon>\r\n        <div [@loadAnimation] *ngIf=\"loading === 'init'\" class=\"configuration\">\r\n            <div class=\"parts\">\r\n                <svg-icon src=\"../../assets/CPU.svg\" [applyCss]=\"true\" [svgStyle]=\"{ 'width.em': 8, 'height.em': 8 }\"></svg-icon>\r\n                <div class=\"parts-title\">\r\n                    <span>{{'CPU' | translate}}</span>\r\n                    <p>???</p>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"parts\">\r\n                <svg-icon src=\"../../assets/GPU.svg\" [svgStyle]=\"{ 'width.em': 9 ,'height.em': 9 }\"></svg-icon>\r\n                <div class=\"parts-title\">\r\n                    <span>{{'Graphic_card' | translate}}</span>\r\n                    <p>???</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"parts\">\r\n                <svg-icon src=\"../../assets/MB.svg\" [applyCss]=\"true\" [svgStyle]=\"{ 'width.em': 5 , 'height.em': 5 }\"></svg-icon>\r\n                <div class=\"parts-title\">\r\n                    <span>{{'MOTHERBOARD' | translate}}</span>\r\n                    <p>???</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"parts\">\r\n                <svg-icon src=\"../../assets/MEM.svg\" [applyCss]=\"true\" [svgStyle]=\"{ 'width.em': 5 }\"></svg-icon>\r\n                <div class=\"parts-title\">\r\n                  <span>{{'MEM' | translate}}</span>\r\n                  <p>???</p>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"parts\">\r\n                  <svg-icon src=\"../../assets/SSD.svg\" [applyCss]=\"true\" [svgStyle]=\"{ 'width.em': 5 }\"></svg-icon>\r\n                  <div class=\"parts-title\">\r\n                      <span>{{'Storage' | translate}}</span>\r\n                      <p>???</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"parts\">\r\n                    <svg-icon src=\"../../assets/PSU.svg\" [applyCss]=\"true\" [svgStyle]=\"{ 'width.em': 5,'height.em': 5 }\"></svg-icon>\r\n                    <div class=\"parts-title\">\r\n                        <span>{{'Power_Supply' | translate}}</span>\r\n                        <p>???</p>\r\n                    </div>\r\n                  </div>\r\n        </div>\r\n        <div [@loadAnimation] *ngIf=\"loading === 'result'\" class=\"configuration\">\r\n            <div class=\"parts\">\r\n              <svg-icon src=\"../../assets/CPU.svg\" [applyCss]=\"true\" [svgStyle]=\"{ 'width.em': 8, 'height.em': 8 }\"></svg-icon>\r\n              <div class=\"parts-title\">\r\n                  <span>{{'CPU' | translate}}</span>\r\n                  <p>{{result.cpu}}</p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"parts\">\r\n              <svg-icon src=\"../../assets/GPU.svg\" [svgStyle]=\"{ 'width.em': 9 ,'height.em': 9 }\"></svg-icon>\r\n              <div class=\"parts-title\">\r\n                  <span>{{'Graphic_card' | translate}}</span>\r\n                  <p>{{result.gpu}}</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"parts\">\r\n              <svg-icon src=\"../../assets/MB.svg\" [applyCss]=\"true\" [svgStyle]=\"{ 'width.em': 5 , 'height.em': 5 }\"></svg-icon>\r\n              <div class=\"parts-title\">\r\n                  <span>{{'MOTHERBOARD' | translate}}</span>\r\n                  <p>{{result.mb}}</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"parts\">\r\n              <svg-icon src=\"../../assets/MEM.svg\" [applyCss]=\"true\" [svgStyle]=\"{ 'width.em': 5 }\"></svg-icon>\r\n              <div class=\"parts-title\">\r\n                <span>{{'MEM' | translate}}</span>\r\n                <p>{{result.mem}}</p>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"parts\">\r\n                <svg-icon src=\"../../assets/SSD.svg\" [applyCss]=\"true\" [svgStyle]=\"{ 'width.em': 5 }\"></svg-icon>\r\n                <div class=\"parts-title\">\r\n                    <span>{{'Storage' | translate}}</span>\r\n                    <p>{{result.ssd}}</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"parts\">\r\n                  <svg-icon src=\"../../assets/PSU.svg\" [applyCss]=\"true\" [svgStyle]=\"{ 'width.em': 5,'height.em': 5 }\"></svg-icon>\r\n                  <div class=\"parts-title\">\r\n                      <span>{{'Power_Supply' | translate}}</span>\r\n                      <p>{{result.psu[0]}}</p>\r\n                      <p>Total Power: {{result.psu[1]}}W</p>\r\n                  </div>\r\n                </div>\r\n          </div>\r\n\r\n        <div class=\"estimate\">\r\n          <h1 *ngIf=\"loading === 'result'\"> {{'ESTIMATE_PRICE' | translate}}: ${{result.price[0]}}</h1>\r\n          <!-- Button trigger modal -->\r\n\r\n<button type=\"button\" class=\"btn-card\" data-backdrop=\"false\" data-toggle=\"modal\" data-target=\"#myModal\">{{'CONTACT_US' | translate}}</button>\r\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\" style=\"position: absolute;;\">\r\n    <div class=\"modal-dialog\">\r\n\r\n       <!-- Modal content-->\r\n       <div class=\"modal-content\">\r\n          <div class=\"modal-body\">\r\n            <div class=\"title\"> Get in touch with us</div>\r\n            <form class=\"form-inline md-form form-sm\">\r\n              <input [formControl]=\"name\" placeholder=\"name\" class=\"form-control form-control-sm ml-3 w-75\" type=\"text\">\r\n              <input [formControl]=\"email\" placeholder=\"E-mail\" class=\"form-control form-control-sm ml-3 w-75\" type=\"text\">\r\n              <input [formControl]=\"msg\" placeholder=\"Message\" class=\"form-control form-control-sm ml-3 w-75\" type=\"text\">\r\n            </form>\r\n            <div>\r\n                <button class=\"btn\" (click)=\"sendMsg()\">send</button>\r\n            </div>\r\n\r\n            <div class=\"contact\">\r\n                <p>Email: nanodesign666@gmail.com</p>\r\n                <p>Phone: 1-647-782-2427</p>\r\n            </div>\r\n             \r\n             <div class=\"wechat\">\r\n                <svg-icon src=\"../../assets/wechat.svg\" [svgStyle]=\"{ 'width.em': 0.7,'height.em':  0.7 }\"></svg-icon>\r\n               <img src=\"../../assets/wechat.jpg\">\r\n             </div>\r\n             <div class=\"instagram\">\r\n                <svg-icon src=\"../../assets/instagram.svg\" [svgStyle]=\"{ 'width.em':  0.7,'height.em':  0.7 }\"></svg-icon>\r\n                <p>nanopcdesign</p>\r\n             </div>\r\n             <div>\r\n                <button class=\"btn\" data-dismiss=\"modal\">Close</button>\r\n            </div>                       \r\n          </div>\r\n       </div>\r\n    </div>\r\n </div>\r\n    </div>\r\n      </div>\r\n\r\n    </section>\r\n  </div>\r\n  <!-- <div class=\"section\">\r\n    <h1>Section 4</h1>\r\n    <button (click)=\"addSection()\">Add sections and change color</button>\r\n    <button (click)=\"fullpage_api.moveTo('secondPage', 2)\">Move to second page</button>\r\n    <button (click)=\"removeLast()\">Remove last</button>\r\n  </div> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fp-enabled .modal {\n  position: fixed !important; }\n\n.modal-backdrop.show {\n  z-index: -1; }\n\n.arrow-bot {\n  position: absolute;\n  bottom: 0.25em;\n  left: 50%;\n  margin-left: -1em;\n  z-index: 100; }\n\n@media screen and (min-width: 500px) {\n    .arrow-bot svg:hover {\n      height: 1.3em !important; } }\n\n@media screen and (max-width: 500px) {\n    .arrow-bot svg {\n      width: 2.5em !important;\n      height: 2.5em !important; } }\n\n.fade-in {\n  -webkit-animation: fade-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) 2s both;\n  animation: fade-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) 2s both; }\n\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\nsection {\n  width: 100%;\n  padding: 5em;\n  box-sizing: border-box;\n  color: white;\n  font-family: alternate-gothic, sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  -webkit-font-smoothing: antialiased; }\n\nsection.options {\n    height: 100%;\n    width: 100%;\n    font-family: dosis;\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    color: #313840;\n    padding: 0;\n    background-color: #eaeaea; }\n\nsection.options .result-options, section.options .select-options {\n      width: 100%;\n      height: 90%; }\n\n@media screen and (min-width: 500px) {\n        section.options .result-options, section.options .select-options {\n          width: 50%; } }\n\nsection.options .title {\n      height: 10%;\n      width: 100%;\n      margin: 1.5em auto 0 auto; }\n\n@media screen and (max-width: 500px) {\n        section.options .title {\n          height: 8%;\n          font-size: 1.2em;\n          margin: 2.5em auto 0 auto; }\n          section.options .title p {\n            margin-bottom: 0;\n            margin-top: 0.5em; } }\n\nsection.options .result-options {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-evenly;\n      align-items: center; }\n\nsection.options .result-options .switch-tab {\n        border-bottom: none;\n        padding-top: 0em;\n        font-size: 0.5em;\n        padding: 0.1em 0 0 0;\n        display: flex;\n        flex-direction: row;\n        flex-wrap: nowrap;\n        margin-left: auto;\n        margin-right: 3.5em; }\n\n@media screen and (max-width: 500px) {\n          section.options .result-options .switch-tab {\n            margin-right: 1.5em;\n            font-size: 1.4em; } }\n\nsection.options .result-options .switch-tab div {\n          padding: 0 1em;\n          border-top-left-radius: 0.5em;\n          border-top-right-radius: 0.5em;\n          border-right: 2px solid #acacac;\n          border-top: 1px solid #c7c3c3;\n          background-color: #bdbdbd; }\n\nsection.options .result-options .switch-tab .onSwitch {\n          background-color: #e3e3e3; }\n\n@media screen and (max-width: 500px) {\n          section.options .result-options .switch-tab {\n            font-size: 1.5em; } }\n\nsection.options .result-options .estimate {\n        margin: auto; }\n\nsection.options .result-options .modal {\n        top: calc(50% - 7.5em); }\n\n@media screen and (max-width: 500px) {\n          section.options .result-options .modal {\n            top: calc(50% - 15.5em); } }\n\nsection.options .result-options .modal .modal-content {\n          height: 15em;\n          width: 13em;\n          background-color: #313840;\n          color: #8a8a8a;\n          font-family: dosis; }\n\n@media screen and (max-width: 500px) {\n            section.options .result-options .modal .modal-content {\n              height: 35em;\n              width: 28em; } }\n\nsection.options .result-options .modal .modal-content .modal-body {\n            display: flex;\n            flex-direction: row;\n            justify-content: flex-start;\n            flex-wrap: wrap; }\n\nsection.options .result-options .modal .modal-content .modal-body div {\n              width: 100%; }\n\nsection.options .result-options .modal .modal-content .modal-body div button {\n                background-color: #313840;\n                border: none;\n                border: 2px solid #8a8a8a;\n                color: #8a8a8a;\n                font-size: 0.4em;\n                padding: 0;\n                margin: 0;\n                height: unset;\n                width: 4em; }\n\n@media screen and (max-width: 500px) {\n                  section.options .result-options .modal .modal-content .modal-body div button {\n                    font-size: 1em; } }\n\nsection.options .result-options .modal .modal-content .modal-body .title {\n              width: 100%;\n              margin: 0; }\n\n@media screen and (max-width: 500px) {\n                section.options .result-options .modal .modal-content .modal-body .title {\n                  font-size: 1.8em; } }\n\nsection.options .result-options .modal .modal-content .modal-body .contact {\n              display: flex;\n              flex-direction: row;\n              justify-content: space-evenly; }\n\nsection.options .result-options .modal .modal-content .modal-body .contact p {\n                width: auto; }\n\n@media screen and (max-width: 500px) {\n                section.options .result-options .modal .modal-content .modal-body .contact {\n                  font-size: 2em;\n                  flex-wrap: wrap; }\n                  section.options .result-options .modal .modal-content .modal-body .contact p {\n                    width: 100%;\n                    text-align: center; } }\n\nsection.options .result-options .modal .modal-content .modal-body .wechat {\n              width: 50%;\n              display: flex;\n              flex-direction: row;\n              align-items: center; }\n\n@media screen and (max-width: 500px) {\n                section.options .result-options .modal .modal-content .modal-body .wechat {\n                  font-size: 2em; } }\n\nsection.options .result-options .modal .modal-content .modal-body .wechat svg-icon {\n                margin-left: auto; }\n\nsection.options .result-options .modal .modal-content .modal-body .wechat p {\n                width: auto; }\n\nsection.options .result-options .modal .modal-content .modal-body .wechat img {\n                width: 2.5em;\n                margin-left: 0.8em;\n                margin-right: auto; }\n\nsection.options .result-options .modal .modal-content .modal-body .instagram {\n              width: 50%;\n              display: flex;\n              flex-direction: row;\n              align-items: center; }\n\n@media screen and (max-width: 500px) {\n                section.options .result-options .modal .modal-content .modal-body .instagram {\n                  font-size: 2em; } }\n\nsection.options .result-options .modal .modal-content .modal-body .instagram svg-icon {\n                margin-left: auto; }\n\nsection.options .result-options .modal .modal-content .modal-body .instagram p {\n                width: auto;\n                margin: 0;\n                margin-left: 1em;\n                margin-top: 7px;\n                margin-right: auto; }\n\nsection.options .result-options .modal .modal-content .modal-body p {\n              font-size: 0.6em;\n              width: 100%;\n              text-align: left; }\n\nsection.options .result-options .modal .modal-content .modal-body img {\n              width: 5em; }\n\nsection.options .result-options .modal .modal-content .modal-body form {\n              width: auto;\n              margin: 0;\n              background-color: #313840;\n              border-radius: 0;\n              padding: 0; }\n\nsection.options .result-options .configuration {\n        height: 50%;\n        max-width: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n        background-color: #e3e3e3;\n        /* background-color: white; */\n        border-radius: 0.5em;\n        padding: 1em;\n        margin-right: 1em;\n        margin-left: 0.5em; }\n\n@media screen and (max-width: 500px) {\n          section.options .result-options .configuration {\n            margin-left: 1em;\n            width: 90%; } }\n\nsection.options .result-options .configuration .parts {\n          width: 50%;\n          font-size: 0.35em; }\n\nsection.options .result-options .configuration .parts svg-icon {\n            float: left; }\n\n@media screen and (max-width: 500px) {\n              section.options .result-options .configuration .parts svg-icon svg {\n                width: 8em !important;\n                height: 8em !important; } }\n\nsection.options .result-options .configuration .parts .parts-title {\n            float: left;\n            height: 100%;\n            margin-left: 1em;\n            margin-top: 0.5em; }\n\nsection.options .result-options .configuration .parts .parts-title span {\n              float: left; }\n\n@media screen and (max-width: 500px) {\n                section.options .result-options .configuration .parts .parts-title span {\n                  font-size: 3em; } }\n\nsection.options .result-options .configuration .parts .parts-title p {\n              clear: left;\n              margin-bottom: 0;\n              font-size: 1.4em;\n              text-align: left; }\n\n@media screen and (max-width: 500px) {\n                section.options .result-options .configuration .parts .parts-title p {\n                  font-size: 3.4em; } }\n\nsection.options .select-options {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-evenly;\n      align-items: center; }\n\nsection.options .select-options .custom-form {\n        flex-flow: row; }\n\nsection.options .select-options .custom-form svg-icon {\n          margin: -0.2em; }\n\nsection.options .select-options .switch-tab {\n        border-bottom: none;\n        padding-top: 0em;\n        font-size: 0.5em;\n        padding: 0.1em 0 0 0;\n        display: flex;\n        flex-direction: row;\n        flex-wrap: nowrap;\n        margin-left: auto;\n        margin-right: 1.5em; }\n\nsection.options .select-options .switch-tab div {\n          padding: 0 1em;\n          border-top-left-radius: 0.5em;\n          border-top-right-radius: 0.5em;\n          border-right: 2px solid #acacac;\n          border-top: 1px solid #c7c3c3;\n          background-color: #bdbdbd; }\n\nsection.options .select-options .switch-tab .onSwitch {\n          background-color: #e3e3e3; }\n\n@media screen and (max-width: 500px) {\n          section.options .select-options .switch-tab {\n            font-size: 1.5em; } }\n\nsection.options .select-options .switch-container {\n        height: 50%;\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n        flex-wrap: nowrap; }\n\nsection.options .select-options .options-scroll {\n        width: auto;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        background-color: #e3e3e3;\n        border-radius: 3.5em;\n        margin-left: 1em;\n        margin-right: 0.5em; }\n\n@media screen and (max-width: 500px) {\n          section.options .select-options .options-scroll svg-icon svg {\n            width: 4em !important;\n            height: 4em !important; } }\n\nsection.options .select-options .options-scroll svg-icon:nth-of-type(2) {\n          margin-top: auto; }\n\nsection.options .select-options .options-container {\n        scroll-behavior: smooth;\n        display: flex;\n        justify-content: center;\n        flex-wrap: wrap;\n        align-items: center;\n        overflow: hidden;\n        height: 100%;\n        flex-grow: 1;\n        background-color: #e3e3e3;\n        /* margin: 0 1em; */\n        border-radius: 0.5em; }\n\n@media screen and (max-width: 500px) {\n          section.options .select-options .options-container {\n            margin-right: 1em; } }\n\nsection.options .select-options .options-container select-pill {\n          margin: 0.5em;\n          position: relative; }\n\nsection.options .select-options .options-container p {\n          width: 70%; }\n\nsection.options .btn-card {\n      background-color: #313840;\n      color: white;\n      margin: auto auto -5em auto;\n      border-radius: 300px;\n      border: none;\n      height: 3.5em;\n      width: 11em;\n      text-align: center;\n      font-size: 0.3em;\n      font-weight: 100;\n      letter-spacing: 0.2em;\n      transition: background-color 0.3s ease;\n      right: 2em;\n      bottom: 2em; }\n\n@media screen and (min-width: 500px) {\n        section.options .btn-card:hover {\n          background-color: #c8a175;\n          color: white; } }\n\n@media screen and (max-width: 500px) {\n        section.options .btn-card {\n          font-size: 0.6em;\n          margin-bottom: 0; } }\n\nsection.options form {\n      width: 12em;\n      margin: auto;\n      background-color: #e3e3e3;\n      border-radius: 0.5em;\n      padding: 0 1em 0 0.5em; }\n\n@media screen and (max-width: 500px) {\n        section.options form {\n          width: 80%; } }\n\n@media screen and (max-width: 500px) {\n        section.options form svg-icon svg {\n          width: 6em !important; } }\n\nsection.options form div {\n        padding-right: 0.5em;\n        border-right: solid 1px white; }\n\nsection.options form input {\n        font-size: 0.5em;\n        padding-bottom: 0;\n        border-bottom: 1px solid #c8c9cb;\n        width: auto !important;\n        flex-grow: 1; }\n\n@media screen and (max-width: 500px) {\n          section.options form input {\n            font-size: 1.5em; } }\n\nsection.options form i {\n        font-size: 0.5em;\n        color: #313840;\n        margin-left: 0.5em; }\n\n@media screen and (max-width: 500px) {\n          section.options form i {\n            font-size: 1.2em; } }\n\nsection.options .swiper-container {\n      height: 15em;\n      width: 75em;\n      margin: auto calc( 50% - 37.5em) 0 calc( 50% - 37.5em); }\n\nsection.options .swiper-slide {\n      margin: 0 1.45px;\n      overflow: hidden; }\n\nsection.options .swiper-slide div {\n        opacity: 0;\n        background-color: white;\n        transition: opacity ease 0.5s;\n        display: flex;\n        align-items: center;\n        justify-content: center; }\n\nsection.options .swiper-slide div:hover {\n          opacity: 0.7; }\n\nsection.options .swiper-slide div:nth-of-type(1) {\n        position: absolute;\n        height: calc(50% - 2.5px);\n        width: 100%;\n        top: 0; }\n\nsection.options .swiper-slide div:nth-of-type(2) {\n        position: absolute;\n        height: 50%;\n        width: 100%;\n        top: 50%; }\n\nsection.options .swiper-slide img {\n        display: block;\n        margin-left: auto;\n        margin-right: auto; }\n\nsection.options .swiper-slide img:nth-of-type(1) {\n        height: calc(50% - 2.5px);\n        margin-bottom: 2.5px; }\n\nsection.options .swiper-slide img:nth-of-type(2) {\n        height: calc(50% - 2.5px);\n        margin-top: 2.5px; }\n\nsection.about {\n    font-family: dosis;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    background-color: #eaeaea;\n    padding: 0; }\n\nsection.about div {\n      width: 24em; }\n\n@media screen and (max-width: 500px) {\n        section.about div {\n          width: 26em; } }\n\nsection.about small {\n      font-family: \"utopia-std\";\n      text-transform: none;\n      letter-spacing: 0;\n      font-style: italic;\n      font-size: 0.35em;\n      color: #313840; }\n\n@media screen and (max-width: 500px) {\n        section.about small {\n          font-size: 1em; } }\n\nsection.about .about-container {\n      margin-top: 1.5em;\n      margin-bottom: 3.5em; }\n\nsection.about .about-caption {\n      font-size: 0.38em; }\n\n@media screen and (max-width: 500px) {\n        section.about .about-caption {\n          font-size: 1.1em; } }\n\nsection.about .about-title {\n      font-size: 1em;\n      font-weight: 100;\n      font-family: sans-serif;\n      margin-bottom: 0; }\n\n@media screen and (max-width: 500px) {\n        section.about .about-title {\n          font-size: 3em; } }\n\nsection.about p {\n      width: 100%;\n      font-size: 0.5em;\n      line-height: 2em;\n      letter-spacing: 2px;\n      color: #313840;\n      margin-bottom: 1em; }\n\n@media screen and (max-width: 500px) {\n        section.about p {\n          font-size: 1.2em;\n          letter-spacing: 1px; } }\n\nsection.story {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 100vh;\n    font-family: sans-serif;\n    background-image: url('bg.png');\n    background-repeat: no-repeat;\n    background-size: cover; }\n\n@media screen and (max-width: 500px) {\n      section.story {\n        padding: 3.5em; } }\n\n@media screen and (max-width: 500px) {\n      section.story svg-icon svg {\n        padding-bottom: 4rem; } }\n\nsection.story h3 {\n      font-size: 2em;\n      font-weight: 100; }\n\nsection.story p {\n      font-size: 1.4em;\n      margin: 0;\n      font-weight: bold;\n      opacity: 0.6; }\n\nsection.story h1 {\n      font-size: 1.5em; }\n\nsection.story h1 span {\n        color: white;\n        font-size: 1.5em;\n        font-weight: bold; }\n\n@media screen and (max-width: 500px) {\n          section.story h1 span {\n            font-size: 2em; } }\n\nsection.products {\n    background-color: white;\n    z-index: 5;\n    padding-top: 100px;\n    position: absolute;\n    color: #313840;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap; }\n\nsection.products .title {\n      width: 100%;\n      height: 100px;\n      text-align: center; }\n\nsection.products .title h2 {\n        font-weight: 600;\n        font-size: 2.2em; }\n\n.section section.product-mobile {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  font-family: dosis;\n  padding: 0; }\n\n.section section.product-mobile .product-card {\n    border: none;\n    width: 50%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-evenly;\n    height: 100%;\n    margin: 0 1%; }\n\n@media screen and (max-width: 500px) {\n      .section section.product-mobile .product-card {\n        width: 100%; } }\n\n.section section.product-mobile .product-card .img-container {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center; }\n\n.section section.product-mobile .product-card .img-container .card-title {\n        font-size: 1.5em;\n        margin-bottom: 0.2em; }\n\n.section section.product-mobile .product-card .img-container .btn-card {\n        margin-top: 25%;\n        border-radius: 300px;\n        border: none;\n        height: 3.5em;\n        width: 11em;\n        text-align: center;\n        font-size: 0.7em;\n        font-weight: 100;\n        letter-spacing: 0.2em;\n        transition: background-color 0.3s ease; }\n\n@media screen and (min-width: 500px) {\n          .section section.product-mobile .product-card .img-container .btn-card:hover {\n            background-color: #c8a175;\n            color: white; } }\n\n.section section.product-mobile .product-card img {\n      width: 9em;\n      height: 9em; }\n\n.section section.product-mobile .product-card .card-body {\n      margin: 1em 1em;\n      padding: 0; }\n\n.section section.product-mobile .product-card .card-body small {\n        font-family: \"utopia-std\";\n        text-transform: none;\n        letter-spacing: 0;\n        font-style: italic;\n        font-size: 0.35em; }\n\n.section section.product-mobile .product-card .card-body p {\n        font-size: 0.5em;\n        line-height: 1.5em;\n        letter-spacing: 2px;\n        padding-top: 1em; }\n\n@media screen and (max-width: 500px) {\n          .section section.product-mobile .product-card .card-body p {\n            font-size: 1.2em;\n            letter-spacing: 1px; } }\n\n.section section.product-mobile .left-container {\n    background: #c3c2c2;\n    height: 50%;\n    flex: 1 1 auto;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n\n.section section.product-mobile .left-container button {\n      color: #313840;\n      background-color: white; }\n\n.section section.product-mobile .left-container .card-body {\n      margin-top: 2em; }\n\n.section section.product-mobile .right-container {\n    background: #eaeaea;\n    height: 50%;\n    flex: 1 1 auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #313840; }\n\n.section section.product-mobile .right-container button {\n      color: white;\n      background-color: #313840; }\n\n.section section.product-mobile .right-container .card-body {\n      margin-top: 2em; }\n\n.section section.product {\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  font-family: dosis;\n  padding: 0; }\n\n.section section.product .product-card {\n    border: none;\n    width: 50%;\n    height: 100%;\n    margin: 0 1%; }\n\n@media screen and (max-width: 500px) {\n      .section section.product .product-card {\n        width: 90%; } }\n\n.section section.product .product-card img {\n      margin-top: 15%; }\n\n.section section.product .product-card .card-body {\n      margin: 5% 0;\n      padding: 0; }\n\n@media screen and (min-width: 2300px) {\n        .section section.product .product-card .card-body {\n          margin: 15% 0; } }\n\n.section section.product .product-card .card-body small {\n        font-family: \"utopia-std\";\n        text-transform: none;\n        letter-spacing: 0;\n        font-style: italic;\n        font-size: 0.35em; }\n\n.section section.product .product-card .card-body p {\n        font-size: 0.5em;\n        line-height: 1.5em;\n        letter-spacing: 2px;\n        padding-top: 1em; }\n\n@media screen and (max-width: 500px) {\n          .section section.product .product-card .card-body p {\n            font-size: 1.3em;\n            letter-spacing: 1px; } }\n\n.section section.product .product-card .card-body .btn-card {\n        margin-top: 25%;\n        border-radius: 300px;\n        border: none;\n        height: 3.5em;\n        width: 11em;\n        text-align: center;\n        font-size: 0.24em;\n        font-weight: 100;\n        letter-spacing: 0.2em;\n        transition: background-color 0.3s ease; }\n\n@media screen and (min-width: 500px) {\n          .section section.product .product-card .card-body .btn-card:hover {\n            background-color: #c8a175;\n            color: white; } }\n\n.section section.product .left-container {\n    background: #c3c2c2;\n    height: 100%;\n    max-width: 50%;\n    flex: 1 1 auto;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n\n.section section.product .left-container button {\n      color: #313840;\n      background-color: white; }\n\n.section section.product .right-container {\n    background: #eaeaea;\n    height: 100%;\n    max-width: 50%;\n    flex: 1 1 auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #313840; }\n\n.section section.product .right-container button {\n      color: white;\n      background-color: #313840; }\n\n#menu {\n  position: fixed;\n  /* top: 0.9em; */\n  left: 0;\n  z-index: 70;\n  width: 100%;\n  /* padding: 0; */\n  /* margin-left: -1em; */\n  /* margin: 0 -23em 0 1em; */ }\n\n@media screen and (max-width: 500px) {\n    #menu {\n      margin-top: 1em; } }\n\nheader.non-first {\n  height: 2em;\n  background-color: #313840; }\n\n@media screen and (max-width: 500px) {\n    header.non-first {\n      height: 5.5em;\n      margin-top: 0  !important; } }\n\nheader.non-first div {\n    min-height: auto; }\n\nheader {\n  font-size: 0.33em;\n  height: 8em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #313840; }\n\n@media screen and (max-width: 500px) {\n    header {\n      height: 5em; } }\n\nheader div {\n    min-width: 30px;\n    min-height: 30px;\n    letter-spacing: 0.2em; }\n\nheader div.top-middle h1 {\n      font-size: 4em; }\n\nheader div.top-middle h1 span {\n        letter-spacing: -0.16em; }\n\n@media screen and (max-width: 500px) {\n          header div.top-middle h1 span svg-icon svg {\n            height: 10em !important;\n            width: 10em !important; } }\n\nheader div span a {\n      color: white;\n      margin: 0.618em;\n      padding: 0.618em;\n      font-size: 0.85em;\n      transition: background-color 0.3s ease; }\n\n@media screen and (max-width: 500px) {\n        header div span a {\n          font-size: 2.5em;\n          padding: 0; } }\n\n@media screen and (min-width: 500px) {\n        header div span a:hover {\n          background-color: #c8a175;\n          color: #313840; } }\n\nheader div span a.active {\n      border-bottom: 2px solid #c8a175;\n      padding-bottom: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL0M6XFxVc2Vyc1xcc3VtYW5cXERlc2t0b3BcXG5hbm9EZXNpZ24vc3JjXFxhcHBcXGhvbWUtcGFnZVxcaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsMEJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTs7QUFFVjtJQVBKO01BU00sd0JBQXdCLEVBQUEsRUFDekI7O0FBRUQ7SUFaSjtNQWFNLHVCQUF1QjtNQUN2Qix3QkFBd0IsRUFBQSxFQUUzQjs7QUFFSDtFQUNDLHlFQUE4RTtFQUN0RSxpRUFBc0UsRUFBQTs7QUFFL0U7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVSxFQUFBLEVBQUE7O0FBR2Q7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVSxFQUFBLEVBQUE7O0FBTWQ7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUNBQW1DLEVBQUE7O0FBUnJDO0lBWUksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsY0ExRWU7SUEyRWYsVUFBVTtJQUNWLHlCQTdFVSxFQUFBOztBQXNEZDtNQTBCTSxXQUFXO01BQ1gsV0FBVyxFQUFBOztBQUNYO1FBNUJOO1VBNkJRLFVBQVUsRUFBQSxFQUViOztBQS9CTDtNQWlDTSxXQUFXO01BQ1gsV0FBVztNQUNYLHlCQUF5QixFQUFBOztBQUN6QjtRQXBDTjtVQXFDUSxVQUFVO1VBQ1YsZ0JBQWdCO1VBQ2hCLHlCQUF5QixF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Ijoic3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGdyYXk6ICNlYWVhZWE7XHJcbiRuYXZ5X2JsdWU6ICMzMTM4NDA7XHJcbiRyaWNlX2Jyb3duOiAjYzhhMTc1O1xyXG4kZHVja195ZWxsbzogI2ZmZjQ3MTtcclxuJGdyYXlfZGFyazogI2Q4ZDdkNjtcclxuXHJcbi5mcC1lbmFibGVkIC5tb2RhbHtcclxuICBwb3NpdGlvbjpmaXhlZCAhaW1wb3J0YW50O1xyXG59XHJcbi5tb2RhbC1iYWNrZHJvcC5zaG93e1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uYXJyb3ctYm90e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDAuMjVlbTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xZW07XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIHN2ZyB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCl7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICBoZWlnaHQ6IDEuM2VtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAgIHdpZHRoOiAyLjVlbSAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDIuNWVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5mYWRlLWluIHtcclxuXHQtd2Via2l0LWFuaW1hdGlvbjogZmFkZS1pbiAxcyBjdWJpYy1iZXppZXIoMC4zOTAsIDAuNTc1LCAwLjU2NSwgMS4wMDApIDJzIGJvdGg7XHJcblx0ICAgICAgICBhbmltYXRpb246IGZhZGUtaW4gMXMgY3ViaWMtYmV6aWVyKDAuMzkwLCAwLjU3NSwgMC41NjUsIDEuMDAwKSAycyBib3RoO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlLWluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5zZWN0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA1ZW07XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IGFsdGVybmF0ZS1nb3RoaWMsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcblxyXG5cclxuICAmLm9wdGlvbnN7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBkb3NpcztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgY29sb3I6ICRuYXZ5X2JsdWU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXk7XHJcblxyXG4gICAgLnJlc3VsdC1vcHRpb25zLCAuc2VsZWN0LW9wdGlvbnN7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudGl0bGV7XHJcbiAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luOiAxLjVlbSBhdXRvIDAgYXV0bztcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgICAgIGhlaWdodDogOCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICBtYXJnaW46IDIuNWVtIGF1dG8gMCBhdXRvO1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucmVzdWx0LW9wdGlvbnN7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAuc3dpdGNoLXRhYntcclxuXHJcbiAgICAgICAgLy8gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41ZW07XHJcbiAgICAgICAgLy8gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNWVtO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDBlbTtcclxuICAgICAgICBmb250LXNpemU6IDAuNWVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMWVtIDAgMCAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMuNWVtO1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMS41ZW07XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXZ7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDFlbTtcclxuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNWVtO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNWVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2FjYWNhYztcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzdjM2MzO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JkYmRiZFxyXG4gICAgICAgIH1cclxuICAgICAgICAub25Td2l0Y2h7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmVzdGltYXRle1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgfVxyXG4gICAgICAubW9kYWx7XHJcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDcuNWVtKTtcclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDE1LjVlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbC1jb250ZW50e1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNWVtO1xyXG4gICAgICAgICAgd2lkdGg6IDEzZW07XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDI4ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzODQwO1xyXG4gICAgICAgICAgY29sb3I6ICM4YThhOGE7O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IGRvc2lzO1xyXG4gICAgICAgICAgLm1vZGFsLWJvZHl7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzg0MDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM4YThhOGE7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzhhOGE4YTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC40ZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB1bnNldDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0ZW07XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb250YWN0e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLndlY2hhdHtcclxuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBzdmctaWNvbntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyLjVlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjhlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmluc3RhZ3JhbXtcclxuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBzdmctaWNvbntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDVlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3Jte1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzODQwO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuY29uZmlndXJhdGlvbntcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzO1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC41ZW07XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgICAgICAgIHdpZHRoOiA5MCVcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogMC44ZW07XHJcbiAgICAgICAgLnBhcnRze1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC4zNWVtO1xyXG5cclxuICAgICAgICAgIHN2Zy1pY29ue1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4ZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOGVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucGFydHMtdGl0bGV7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBjbGVhcjogbGVmdDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgIC8vIHdpZHRoOiAxMmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuNGVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlbGVjdC1vcHRpb25ze1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLmN1c3RvbS1mb3Jte1xyXG4gICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgIHN2Zy1pY29ue1xyXG4gICAgICAgICAgbWFyZ2luOiAtMC4yZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5zd2l0Y2gtdGFie1xyXG5cclxuICAgICAgICAvLyBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVlbTtcclxuICAgICAgICAvLyBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41ZW07XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMGVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC41ZW07XHJcbiAgICAgICAgcGFkZGluZzogMC4xZW0gMCAwIDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMS41ZW07XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IC0yZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdntcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMWVtO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41ZW07XHJcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41ZW07XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjYWNhY2FjO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjN2MzYzM7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiZGJkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vblN3aXRjaHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5zd2l0Y2gtY29udGFpbmVye1xyXG4gICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgfVxyXG4gICAgICAub3B0aW9ucy1zY3JvbGx7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlMztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzLjVlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XHJcbiAgICAgICAgc3ZnLWljb257XHJcbiAgICAgICAgICBzdmd7XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDRlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNGVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc3ZnLWljb246bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgLm9wdGlvbnMtY29udGFpbmVye1xyXG4gICAgICAgIC8vIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XHJcbiAgICAgICAgLyogbWFyZ2luOiAwIDFlbTsgKi9cclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAgICAgICAvLyBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgICAgIC8vIG1hcmdpbi1yaWdodDogMC41ZW07XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGVjdC1waWxse1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjVlbTtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnRuLWNhcmR7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZ5X2JsdWU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luOiBhdXRvIGF1dG8gLTVlbSBhdXRvOztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzAwcHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgaGVpZ2h0OiAzLjVlbTtcclxuICAgICAgd2lkdGg6IDExZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAwLjNlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMmVtO1xyXG4gICAgICBib3R0b206IDJlbTtcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpe1xyXG4gICAgICAmOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyaWNlX2Jyb3duO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjZlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybXtcclxuXHJcbiAgICAgIHdpZHRoOiAxMmVtO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xyXG4gICAgICBwYWRkaW5nOiAwIDFlbSAwIDAuNWVtO1xyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIH1cclxuICAgICAgc3ZnLWljb257XHJcbiAgICAgICAgc3Zne1xyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDZlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgICAgZGl2e1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIGlucHV0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC41ZW07XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjOGM5Y2I7XHJcbiAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaXtcclxuICAgICAgICBmb250LXNpemU6IDAuNWVtO1xyXG4gICAgICAgIGNvbG9yOiAkbmF2eV9ibHVlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN3aXBlci1jb250YWluZXJ7XHJcbiAgICAgIGhlaWdodDogMTVlbTtcclxuICAgICAgd2lkdGg6IDc1ZW07XHJcbiAgICAgIG1hcmdpbjogYXV0byBjYWxjKCA1MCUgLSAzNy41ZW0pIDAgY2FsYyggNTAlIC0gMzcuNWVtKTtcclxuICAgIH1cclxuICAgIC5zd2lwZXItc2xpZGV7XHJcbiAgICAgIC8vIHdpZHRoOiAyMCU7XHJcbiAgICAgIG1hcmdpbjogMCAxLjQ1cHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGRpdntcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSAwLjVzO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBkaXY6bnRoLW9mLXR5cGUoMSl7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGhlaWdodDogY2FsYyg1MCUgLSAyLjVweCk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIGRpdjpudGgtb2YtdHlwZSgyKXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGltZ3tcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIH1cclxuICAgICAgaW1nOm50aC1vZi10eXBlKDEpe1xyXG4gICAgICAgIGhlaWdodDogY2FsYyg1MCUgLSAyLjVweCk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMi41cHg7XHJcbiAgICAgIH1cclxuICAgICAgaW1nOm50aC1vZi10eXBlKDIpe1xyXG4gICAgICAgIGhlaWdodDogY2FsYyg1MCUgLSAyLjVweCk7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMi41cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJi5hYm91dHtcclxuICAgIGZvbnQtZmFtaWx5OiBkb3NpcztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpdntcclxuICAgICAgd2lkdGg6IDI0ZW07XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAgICAgICB3aWR0aDogMjZlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc21hbGx7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcInV0b3BpYS1zdGRcIjtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC4zNWVtO1xyXG4gICAgICBjb2xvcjogJG5hdnlfYmx1ZTtcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWJvdXQtY29udGFpbmVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogMS41ZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMuNWVtO1xyXG4gICAgfVxyXG4gICAgLmFib3V0LWNhcHRpb257XHJcbiAgICAgIGZvbnQtc2l6ZTogMC4zOGVtO1xyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFlbVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWJvdXQtdGl0bGV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgIH1cclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAwLjVlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDJlbTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgY29sb3I6ICRuYXZ5X2JsdWU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAmLnN0b3J5e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAgIHBhZGRpbmc6IDMuNWVtO1xyXG4gICAgfVxyXG4gICAgc3ZnLWljb257XHJcbiAgICAgIHN2Z3tcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgaDN7XHJcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAvLyBib3JkZXItYm90dG9tOiAwLjFlbSBzb2xpZCB3aGl0ZTtcclxuICAgICAgc3BhbntcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAvLyBmb250LWZhbWlseTogJ2JyZWFrJztcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gYm9yZGVyOiAwLjA2ZW0gc29saWQ7XHJcbiAgICAgICAgLy8gbGV0dGVyLXNwYWNpbmc6IDAuM2VtO1xyXG4gICAgICAgIC8vIHBhZGRpbmctbGVmdDogMC41ZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2JnLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG5cclxuICAmLnByb2R1Y3Rze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6ICRuYXZ5X2JsdWU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAudGl0bGV7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgaDJ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDIuMmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4uc2VjdGlvbiB7XHJcblxyXG4gc2VjdGlvbntcclxuICAvLyBib3JkZXI6IDAuM2VtIHNvbGlkIHdoaXRlO1xyXG5cclxuICAmLnByb2R1Y3QtbW9iaWxle1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGZvbnQtZmFtaWx5OiBkb3NpcztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAucHJvZHVjdC1jYXJke1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgLmltZy1jb250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLmNhcmQtdGl0bGV7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tY2FyZHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDI1JTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzLjVlbTtcclxuICAgICAgICAgIHdpZHRoOiAxMWVtO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yZW07XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KXtcclxuICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyaWNlX2Jyb3duO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgICAgaW1ne1xyXG4gICAgICAgIC8vIG1hcmdpbi10b3A6IDMwJTtcclxuICAgICAgICB3aWR0aDogOWVtO1xyXG4gICAgICAgIGhlaWdodDogOWVtO1xyXG4gICAgICB9XHJcbiAgICAgIG1hcmdpbjogMCAxJTtcclxuICAgICAgLmNhcmQtYm9keXtcclxuICAgICAgICBtYXJnaW46IDFlbSAxZW07XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBzbWFsbHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcInV0b3BpYS1zdGRcIjtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuMzVlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC41ZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDFlbTtcclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubGVmdC1jb250YWluZXJ7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNjM2MyYzI7XHJcbiAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAvLyB3aWR0aDogNTAlO1xyXG4gICAgICAvLyBtYXgtd2lkdGg6IDUwJTs7XHJcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYnV0dG9ue1xyXG4gICAgICAgIGNvbG9yOiAkbmF2eV9ibHVlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXHJcbiAgICAgIH1cclxuICAgICAgLmNhcmQtYm9keXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5yaWdodC1jb250YWluZXJ7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRncmF5O1xyXG4gICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgLy8gd2lkdGg6IDUwJTtcclxuICAgICAgLy8gbWF4LXdpZHRoOiA1MCU7O1xyXG4gICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAkbmF2eV9ibHVlO1xyXG4gICAgICBidXR0b257XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZ5X2JsdWU7XHJcbiAgICAgIH1cclxuICAgICAgLmNhcmQtYm9keXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYucHJvZHVjdHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBmb250LWZhbWlseTogZG9zaXM7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLnByb2R1Y3QtY2FyZHtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgfVxyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGltZ3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICAgIH1cclxuICAgICAgbWFyZ2luOiAwIDElO1xyXG4gICAgICAuY2FyZC1ib2R5e1xyXG4gICAgICAgIG1hcmdpbjogNSUgMDtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMzAwcHgpe1xyXG4gICAgICAgICAgbWFyZ2luOiAxNSUgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBzbWFsbHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcInV0b3BpYS1zdGRcIjtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuMzVlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC41ZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDFlbTtcclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bi1jYXJke1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjUlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzAwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMuNWVtO1xyXG4gICAgICAgICAgd2lkdGg6IDExZW07XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuMjRlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yZW07XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KXtcclxuICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyaWNlX2Jyb3duO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxlZnQtY29udGFpbmVye1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjYzNjMmMyO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIC8vIHdpZHRoOiA1MCU7XHJcbiAgICAgIG1heC13aWR0aDogNTAlOztcclxuICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBidXR0b257XHJcbiAgICAgICAgY29sb3I6ICRuYXZ5X2JsdWU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJpZ2h0LWNvbnRhaW5lcntcclxuICAgICAgYmFja2dyb3VuZDogJGdyYXk7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgLy8gd2lkdGg6IDUwJTtcclxuICAgICAgbWF4LXdpZHRoOiA1MCU7O1xyXG4gICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAkbmF2eV9ibHVlO1xyXG4gICAgICBidXR0b257XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZ5X2JsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiB9XHJcbn1cclxuXHJcbiNtZW51e1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIC8qIHRvcDogMC45ZW07ICovXHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogNzA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIHBhZGRpbmc6IDA7ICovXHJcbiAgICAvKiBtYXJnaW4tbGVmdDogLTFlbTsgKi9cclxuICAgIC8qIG1hcmdpbjogMCAtMjNlbSAwIDFlbTsgKi9cclxuICAgIC8vIGJvcmRlci1sZWZ0OiBzb2xpZCAwLjllbSB3aGl0ZTtcclxuICAgIC8vIGJvcmRlci1yaWdodDogc29saWQgMC45ZW0gd2hpdGU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbmhlYWRlci5ub24tZmlyc3R7XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgaGVpZ2h0OiA1LjVlbTtcclxuICAgIG1hcmdpbi10b3A6IDAgICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGJhY2tncm91bmQtY29sb3I6ICRuYXZ5X2JsdWU7XHJcbiAgZGl2e1xyXG4gICAgbWluLWhlaWdodDogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcblxyXG4gIGZvbnQtc2l6ZTogMC4zM2VtO1xyXG4gIGhlaWdodDogOGVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogJG5hdnlfYmx1ZTtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICBoZWlnaHQ6IDVlbTtcclxuICB9XHJcbiAgIGRpdiB7XHJcbiAgICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xyXG4gICAgLy8gICYudG9wLXJpZ2h0e1xyXG4gICAgLy8gICAgc3ZnLWljb257XHJcbiAgICAvLyAgICB9XHJcbiAgICAvLyAgfVxyXG4gICAgICYudG9wLW1pZGRsZXtcclxuICAgICAgIC8vIHdpZHRoOiA4MHB4O1xyXG4gICAgICAvLyAgbWFyZ2luOiAwIDMwZW07XHJcbiAgICAgICBoMXtcclxuICAgICAgICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE2ZW07XHJcblxyXG4gICAgICAgICAgIHN2Zy1pY29ue1xyXG4gICAgICAgICAgICAgc3Zne1xyXG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTBlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICAgIH1cclxuICAgICBzcGFue1xyXG5cclxuICAgICAgIGF7XHJcbiAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgbWFyZ2luOiAwLjYxOGVtO1xyXG4gICAgICAgICBwYWRkaW5nOiAwLjYxOGVtO1xyXG4gICAgICAgICBmb250LXNpemU6IDAuODVlbTtcclxuICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpe1xyXG4gICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJpY2VfYnJvd247XHJcbiAgICAgICAgICAgY29sb3I6ICRuYXZ5X2JsdWU7XHJcbiAgICAgICAgICAvLyAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICAgICBhLmFjdGl2ZXtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHJpY2VfYnJvd247XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDFweDtcclxuICAgICAgIH1cclxuICAgICB9XHJcbiAgIH1cclxuIH1cclxuIl19 */"

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
    function HomePageComponent(router, translate, apiService, cdf) {
        var _this = this;
        this.router = router;
        this.translate = translate;
        this.apiService = apiService;
        this.cdf = cdf;
        this.disableMenu = false;
        this.disableLoading = true;
        this.visible = false;
        this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.msg = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.orginalGameList = [];
        this.gameList = [];
        this.orginalWorkList = [];
        this.switchStatus = 'game';
        this.lastSection = false;
        this.activeSlide = '';
        this.requirement = 'basic';
        this.swipperConfig = {
            direction: 'horizontal',
            slidesPerView: 5,
            keyboard: true,
            mousewheel: true,
            scrollbar: false,
            navigation: true,
            pagination: false
        };
        this.result = { 'cpu': '', 'gpu': '', 'mem': '', 'price': null, 'psu': [], 'mb': '', 'ssd': '', 'hdd': '' };
        this.loading = 'init';
        this.config = {
            licenseKey: '0FB20392-42234774-8832938C-619D0B0A',
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
            menu: '#menu',
            navigation: true,
            onLeave: function (origin, destination, direction) {
                _this.disableMenu = false;
                if (destination.anchor === 'fourthPage') {
                    _this.disableLoading = false;
                }
                else if (destination.anchor === 'lastPage') {
                    _this.disableLoading = false;
                }
                else {
                    _this.disableLoading = true;
                }
                _this.activeSlide = destination.anchor;
            },
            // events callback
            afterLoad: function (origin, destination, direction) {
                // console.log(origin, destination, direction);
                if (destination.anchor === 'firstPage') {
                    _this.disableMenu = true;
                }
                // if (destination.anchor === 'fourthPage' && this.mobile) {
                //   this.fullpage_api.setAutoScrolling(false);
                // }
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
        this.screenWidth = window.innerWidth;
        this.mobile = this.screenWidth <= 500 ? true : false;
        this.apiService.getGames().subscribe(function (res) {
            res.forEach(function (data) {
                _this.orginalGameList.push(data);
                _this.gameList = _this.orginalGameList;
            });
        });
        this.apiService.getWorks().subscribe(function (res) {
            res.forEach(function (data) {
                _this.orginalWorkList.push(data);
            });
            // this.workList = this.orginalWorkList;
        });
        this.selectedList = [];
        // this.gameList = this.orginalGameList;
        this.searchField.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500))
            .subscribe(function (term) {
            console.log(term);
            if (term === '') {
                if (_this.switchStatus === 'game') {
                    _this.gameList = _this.orginalGameList;
                }
                else {
                    _this.gameList = _this.orginalWorkList;
                }
            }
            if (_this.switchStatus === 'game') {
                _this.gameList = _this.orginalGameList.filter(function (game) {
                    return game.name.toLowerCase().includes(term.toLowerCase());
                });
            }
            else {
                _this.gameList = _this.orginalWorkList.filter(function (game) {
                    return game.name.toLowerCase().includes(term.toLowerCase());
                });
            }
            // this.directiveRef.update();
        });
    };
    HomePageComponent.prototype.ngAfterViewChecked = function () {
        this.cdf.detectChanges();
    };
    HomePageComponent.prototype.switchTab = function () {
        console.log(this.selectedList);
        this.searchField.setValue('');
        if (this.switchStatus === 'game') {
            this.switchStatus = 'work';
            this.gameList = this.orginalWorkList;
        }
        else {
            this.switchStatus = 'game';
            this.gameList = this.orginalGameList;
        }
    };
    HomePageComponent.prototype.getRef = function (fullPageRef) {
        this.fullpage_api = fullPageRef;
    };
    HomePageComponent.prototype.handleSelect = function (type) {
        this.router.navigate(['/select', { type: type }]);
    };
    HomePageComponent.prototype.pillSelect = function (event) {
        console.log(this.selectedList, event);
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
    HomePageComponent.prototype.nextGame = function () {
        this.gameList = this.orginalGameList;
        this.switchStatus = 'game';
        this.fullpage_api.moveSectionDown();
    };
    HomePageComponent.prototype.nextWork = function () {
        this.gameList = this.orginalWorkList;
        this.switchStatus = 'work';
        this.fullpage_api.moveSectionDown();
    };
    HomePageComponent.prototype.changeRequire = function (require) {
        this.requirement = require;
        if (this.selectedList.length > 0) {
            this.getResult();
        }
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
    HomePageComponent.prototype.sendMsg = function () {
        var name;
        var email;
        var msg;
        this.name.value === null ? name = '' : name = this.name.value;
        this.email.value === null ? email = '' : email = this.email.value;
        this.msg.value === null ? msg = '' : msg = this.msg.value;
        this.apiService.postMsg(name, email, msg).subscribe(function (res) {
            console.log(res);
        });
    };
    HomePageComponent.prototype.onFocus = function () {
        this.fullpage_api.rebuild();
    };
    HomePageComponent.prototype.onBlur = function () {
        this.fullpage_api.rebuild();
    };
    HomePageComponent.prototype.getResult = function () {
        var _this = this;
        this.loading = 'load';
        console.log(this.selectedList);
        var games = [];
        var works = [];
        if (this.mobile) {
            this.lastSection = true;
            this.fullpage_api.moveSectionDown();
        }
        this.orginalGameList.forEach(function (data) {
            if (_this.selectedList.includes(data.id)) {
                games.push(data.id);
            }
        });
        this.orginalWorkList.forEach(function (data) {
            if (_this.selectedList.includes(data.id)) {
                works.push(data.id);
            }
        });
        this.apiService.postGames(games, works, this.requirement).toPromise().then(function (res) {
            console.log(res);
            Object.keys(res).forEach(function (key) {
                if (key === 'price') {
                    _this.result[key] = res[key];
                }
                else if (key === 'psu') {
                    _this.result[key] = [res[key][0], res[key][2]];
                }
                else {
                    _this.result[key] = res[key][0];
                }
            });
            console.log(_this.result);
            _this.loading = 'result';
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
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s 0.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0)', opacity: 1 }))
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
            _api_service_service__WEBPACK_IMPORTED_MODULE_7__["ApiServiceService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
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

module.exports = "div, img {\n  height: 3em;\n  width: 3em; }\n  @media screen and (max-width: 500px) {\n    div, img {\n      height: 5em;\n      width: 5em; } }\n  .pill-title {\n  height: auto;\n  width: auto;\n  font-size: 0.4em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n  @media screen and (max-width: 500px) {\n    .pill-title {\n      font-size: 0.7em;\n      width: 100%; } }\n  div img {\n  border-radius: 0.5em; }\n  div .pill-container {\n  position: relative; }\n  div .overlay {\n  opacity: 0;\n  border-radius: 0.45em;\n  background-color: white;\n  transition: opacity ease 0.5s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute; }\n  @media screen and (min-width: 500px) {\n    div .overlay:hover {\n      opacity: 0.7; } }\n  div .overlay p {\n    font-size: 0.7em;\n    margin: 0; }\n  @media screen and (max-width: 500px) {\n      div .overlay p {\n        font-size: 1.4em; } }\n  div .selectedPill {\n  opacity: 0.85; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0LXBpbGwvQzpcXFVzZXJzXFxzdW1hblxcRGVza3RvcFxcbmFub0Rlc2lnbi9zcmNcXGFwcFxcc2VsZWN0LXBpbGxcXHNlbGVjdC1waWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFVBQVUsRUFBQTtFQUNWO0lBSEY7TUFJSSxXQUFXO01BQ1gsVUFBVSxFQUFBLEVBRWI7RUFDRDtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtFQUNyQjtJQVBGO01BUUksZ0JBQWdCO01BQ2hCLFdBQVcsRUFBQSxFQUVkO0VBRUQ7RUFFSSxvQkFBb0IsRUFBQTtFQUZ4QjtFQUtJLGtCQUFrQixFQUFBO0VBTHRCO0VBUUksVUFBVTtFQUNWLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQixFQUFBO0VBQ2xCO0lBaEJKO01Ba0JVLFlBQVksRUFBQSxFQUNiO0VBbkJUO0lBdUJNLGdCQUFnQjtJQUNoQixTQUFTLEVBQUE7RUFDVDtNQXpCTjtRQTBCUSxnQkFBZ0IsRUFBQSxFQUVuQjtFQTVCTDtFQStCSSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWxlY3QtcGlsbC9zZWxlY3QtcGlsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiwgaW1ne1xyXG4gIGhlaWdodDogM2VtO1xyXG4gIHdpZHRoOiAzZW07XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIGhlaWdodDogNWVtO1xyXG4gICAgd2lkdGg6IDVlbTtcclxuICB9XHJcbn1cclxuLnBpbGwtdGl0bGV7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMC40ZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuZGl2IHtcclxuICBpbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICB9XHJcbiAgLnBpbGwtY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAub3ZlcmxheXtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjQ1ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSAwLjVzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KXtcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwe1xyXG4gICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAgICAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zZWxlY3RlZFBpbGx7XHJcbiAgICBvcGFjaXR5OiAwLjg1O1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"

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
        console.log(this.pillID);
        this.select.emit(this.pillID);
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
        __metadata("design:type", String)
    ], SelectPillComponent.prototype, "pillID", void 0);
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