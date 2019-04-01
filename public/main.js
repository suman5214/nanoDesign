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
    ApiServiceService.prototype.postGames = function (games, works) {
        return this.http.post('https://us-central1-nanodesign-1d2cb.cloudfunctions.net/postResult', { games: games, workstation: works });
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

module.exports = "<svg-icon *ngIf=\"disableLoading\" (click)=\"nextPage()\" [applyCss]=\"true\" class=\"arrow-bot\" src=\"../../assets/arrow-bot.svg\" [svgStyle]=\"{ 'width.em': 2, 'height.em': 1 }\"></svg-icon>\n<header [@enterAnimation] id=\"menu\" [ngClass]=\"{'non-first': !disableMenu}\">\n  <div class=\"top-left\">\n    <span>\n      <a>STORY</a>\n      <a>GALLERY</a>\n    </span>\n  </div>\n  <div [@enterAnimation] *ngIf=\"disableMenu\" class=\"top-middle\">\n    <h1 ><span><svg-icon src=\"../../assets/nano-logo-5.svg\" [applyCss]=\"true\" [svgStyle]=\"{ 'width.em': 5}\"></svg-icon></span> </h1>\n  </div>\n  <div class=\"top-right\">\n    <span>\n      <a>CONTACT</a>\n      <a (click)=\"changeLanguage()\">LANGUAGE\n        <svg-icon *ngIf=\"translate.currentLang === 'en' \" src=\"../../assets/canada.svg\" [svgStyle]=\"{ 'width.em': 2, 'padding-left.em': 0.25, 'padding-bottom.em': 0.25}\"></svg-icon>\n        <svg-icon *ngIf=\"translate.currentLang === 'cn' \" src=\"../../assets/china.svg\" [svgStyle]=\"{ 'width.em': 2, 'padding-left.em': 0.25, 'padding-bottom.em': 0.25}\"></svg-icon>\n      </a>\n    </span>\n  </div>\n</header>\n\n<div fullpage id=\"fullpage\" [options]=\"config\" (ref)=\"getRef($event)\" #fullpageRef>\n  <div class=\"section\">\n    <div>\n\n    </div>\n    <section class=\"story\">\n      <div class=\"fade-in\">\n          <h1><span>Nano Design</span></h1>\n      </div>\n\n\n    </section>\n  </div>\n  <div class=\"section\">\n    <section class=\"about\">\n\n      <div>\n        <div class=\"about-container\">\n            <p class=\"about-title\">- Our Mission -</p>\n            <p class=\"about-caption\">{{ 'STORY_CAPTION' | translate}} </p>\n        </div>\n\n        <!-- <p>        To provide the most unique customize pc for passionate users.\n          </p>\n        <p> Nano design is a group formed by experienced hardware engineer, software developer and customer service. We want to make the whole process transparent, budget efficient and more customize to benefit as many pc lovers as possible. Always remember making the unique feeling for users is one of the most important goals from us.\n          </p> -->\n          <p>{{ 'FIRST_STORY' | translate}}</p>\n          <p>{{ 'SECOND_STORY' | translate}}</p>\n        <small>The NanoDesign Team</small>\n      </div>\n    </section>\n  </div>\n  <div class=\"section\">\n    <section class=\"product\">\n      <div class=\"left-container\">\n        <div class=\"product-card\">\n          <img class=\"card-img-top\" src=\"../assets/gamingPC.jpg\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <small class=\"card-title\">Gaming Computer</small>\n            <p class=\"card-text\">{{ 'GAMING_DES' | translate}}</p>\n            <div class=\"text-center\">\n              <button href=\"#\" class=\"btn-card\" (click)=\"nextGame()\">LEARN MORE</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"right-container\">\n        <div class=\"product-card\">\n          <img class=\"card-img-top\" src=\"../assets/workPC.jpg\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <small class=\"card-title\">Work Station</small>\n            <p class=\"card-text\">{{ 'WORK_DES' | translate}}</p>\n            <div class=\"text-center\">\n              <button href=\"#\" class=\"btn-card\" (click)=\"nextWork()\">LEARN MORE</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n  <div class=\"section\">\n    <section class=\"options\">\n        <div class=\"title\">\n            <p> What Kind of games are you planning to play?</p>\n          </div>\n      <div class=\"select-options\">\n\n        <!-- <div class=\"swiper-container\" [swiper]=\"swipperConfig\">\n\n            <div class=\"swiper-wrapper\">\n              <div class=\"swiper-slide\" *ngFor=\"let game of gameList\">\n                  <select-pill [imgLink]=\"'../../assets/gameLogo/' + game + '.jpg'\" [pillName]=\"game\" [selected]=\"selectedList.includes(game)\" (select)=\"pillSelect($event)\" ></select-pill>\n              </div>\n            </div>\n          </div> -->\n        <div (click)=\"switchTab()\" class=\"switch-tab\">Switch to work</div>\n        <div #container class=\"options-container\">\n          <ng-container *ngFor=\"let game of gameList\">\n            <select-pill [imgLink]=\"'../../assets/gameLogo/' + game.id + '.jpg'\" [pillID]=\"game.id\" [pillName]=\"game.name\"\n              [selected]=\"selectedList.includes(game.id)\" (select)=\"pillSelect($event)\"></select-pill>\n          </ng-container>\n        </div>\n\n        <button [@enterAnimation] (click)=\"getResult()\" *ngIf=\"selectedList.length !== 0\" href=\"#\" class=\"btn-card\">GET RESULT</button>\n        <!-- <button (click)=\"scrollToTop(container)\">scroll to top</button> -->\n        <!-- <button (click)=\"scrollToBot(container)\">scroll to bottom</button> -->\n        <form class=\"custom-form form-inline md-form form-sm\">\n            <div>\n                <svg-icon [applyCss]=\"true\" (click)=\"scrollToBot(container)\" src=\"../../assets/select-up.svg\" [svgStyle]=\"{ 'width.em': 2 }\"></svg-icon>\n                <svg-icon [applyCss]=\"true\" (click)=\"scrollToTop(container)\" src=\"../../assets/select-down.svg\" [svgStyle]=\"{ 'width.em': 2 }\"></svg-icon>\n            </div>\n          <input [formControl]=\"searchField\" class=\"form-control form-control-sm ml-3 w-75\" type=\"text\"\n            placeholder=\"Search\" aria-label=\"Search\">\n          <i class=\"fas fa-search\" aria-hidden=\"true\"></i>\n        </form>\n\n      </div>\n\n      <div *ngIf=\"!mobile\" class=\"result-options\">\n        <svg-icon [@loadAnimation] *ngIf=\"loading === 'load'\" src=\"../../assets/loading.svg\" [svgStyle]=\"{ 'width.em': 1.5 }\"></svg-icon>\n        <div [@loadAnimation] *ngIf=\"loading === 'init'\" class=\"configuration\">\n          <p>Please first select your games !!!!!</p>\n        </div>\n        <div [@loadAnimation] *ngIf=\"loading === 'result'\" class=\"configuration\">\n          <div class=\"parts\">\n            <svg-icon src=\"../../assets/CPU.svg\" [svgStyle]=\"{ 'width.em': 5, 'height.em': 5 }\"></svg-icon>\n            <div class=\"parts-title\">\n                <span>CPU</span>\n                <p>{{result.cpu}}</p>\n            </div>\n          </div>\n          <div class=\"parts\">\n            <svg-icon src=\"../../assets/GPU.svg\" [svgStyle]=\"{ 'width.em': 5 ,'height.em': 5 }\"></svg-icon>\n            <div class=\"parts-title\">\n                <span>Graphics Card</span>\n                <p>{{result.gpu}}</p>\n            </div>\n          </div>\n          <div class=\"parts\">\n            <svg-icon src=\"../../assets/config-ram.svg\" [svgStyle]=\"{ 'width.em': 5 }\"></svg-icon>\n            <div class=\"parts-title\">\n                <span>Case</span>\n                <p>{{result.mem}}</p>\n            </div>\n          </div>\n          <div class=\"parts\">\n            <svg-icon src=\"../../assets/config-ram.svg\" [svgStyle]=\"{ 'width.em': 5 }\"></svg-icon>\n            <div class=\"parts-title\">\n                <span>Memorey</span>\n                <p>{{result.mem}}</p>\n            </div>\n          </div>\n          <div class=\"parts\">\n              <svg-icon src=\"../../assets/config-ram.svg\" [svgStyle]=\"{ 'width.em': 5 }\"></svg-icon>\n              <div class=\"parts-title\">\n                  <span>Memorey</span>\n                  <p>{{result.mem}}</p>\n              </div>\n            </div>\n            <div class=\"parts\">\n                <svg-icon src=\"../../assets/PSU.svg\" [svgStyle]=\"{ 'width.em': 5,'height.em': 5 }\"></svg-icon>\n                <div class=\"parts-title\">\n                    <span>Power Supply</span>\n                    <p>{{result.psu[0]}}</p>\n                    <p>Total Power: {{result.psu[1]}}W</p>\n                </div>\n              </div>\n        </div>\n        <div class=\"estimate\">\n          <h1 *ngIf=\"loading === 'result'\"> ESTIMATE PRICE: ${{result.price}}</h1>\n          <!-- Button trigger modal -->\n          <button type=\"button\" class=\"btn-card\" data-backdrop=\"false\" data-toggle=\"modal\" data-target=\"#myModal\">CONTACT US</button>\n          <div class=\"modal fade\" id=\"myModal\" role=\"dialog\" style=\"position: absolute;;\">\n              <div class=\"modal-dialog\">\n\n                 <!-- Modal content-->\n                 <div class=\"modal-content\">\n                    <div class=\"modal-body\">\n                       <img src=\"../../assets/wechat.jpg\">\n                       <p>Email: xxxxx@gmail.com</p>\n                       <p>Phone: 1-647-782-2427</p>\n                       <div> Follow us on</div>\n                    </div>\n                    <div class=\"modal-footer\">\n                       <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                    </div>\n                 </div>\n              </div>\n           </div>\n    </div>\n      </div>\n\n    </section>\n  </div>\n\n  <div *ngIf=\"mobile\" class=\"section\">\n    <section class=\"options\">\n        <div class=\"title\">\n            <p> What Kind of games are you planning to play?</p>\n          </div>\n\n      <div class=\"result-options\">\n        <svg-icon [@loadAnimation] *ngIf=\"loading === 'load'\" src=\"../../assets/loading.svg\" [svgStyle]=\"{ 'width.em': 1.5 }\"></svg-icon>\n        <div [@loadAnimation] *ngIf=\"loading === 'init'\" class=\"configuration\">\n          <p>Please first select your games !!!!!</p>\n        </div>\n        <div [@loadAnimation] *ngIf=\"loading === 'result'\" class=\"configuration\">\n          <div class=\"parts\">\n            <svg-icon src=\"../../assets/CPU.svg\" [applyCss]=\"true\" [svgStyle]=\"{ 'width.em': 5, 'height.em': 5 }\"></svg-icon>\n            <div class=\"parts-title\">\n                <span>CPU</span>\n                <p>{{result.cpu}}</p>\n            </div>\n          </div>\n          <div class=\"parts\">\n            <svg-icon src=\"../../assets/GPU.svg\" [applyCss]=\"true\" [svgStyle]=\"{ 'width.em': 5 ,'height.em': 5 }\"></svg-icon>\n            <div class=\"parts-title\">\n                <span>Graphics Card</span>\n                <p>{{result.gpu}}</p>\n            </div>\n          </div>\n          <div class=\"parts\">\n            <svg-icon src=\"../../assets/config-ram.svg\" [applyCss]=\"true\" [svgStyle]=\"{ 'width.em': 5 }\"></svg-icon>\n            <div class=\"parts-title\">\n                <span>Case</span>\n                <p>{{result.mem}}</p>\n            </div>\n          </div>\n          <div class=\"parts\">\n            <svg-icon src=\"../../assets/config-ram.svg\" [applyCss]=\"true\" [svgStyle]=\"{ 'width.em': 5 }\"></svg-icon>\n            <div class=\"parts-title\">\n                <span>Memorey</span>\n                <p>{{result.mem}}</p>\n            </div>\n          </div>\n          <div class=\"parts\">\n              <svg-icon src=\"../../assets/config-ram.svg\" [applyCss]=\"true\" [svgStyle]=\"{ 'width.em': 5 }\"></svg-icon>\n              <div class=\"parts-title\">\n                  <span>Memorey</span>\n                  <p>{{result.mem}}</p>\n              </div>\n            </div>\n            <div class=\"parts\">\n                <svg-icon src=\"../../assets/PSU.svg\" [applyCss]=\"true\" [svgStyle]=\"{ 'width.em': 5,'height.em': 5 }\"></svg-icon>\n                <div class=\"parts-title\">\n                    <span>Power Supply</span>\n                    <p>{{result.psu[0]}}</p>\n                    <p>Total Power: {{result.psu[1]}}W</p>\n                </div>\n              </div>\n        </div>\n        <div class=\"estimate\">\n          <h1 *ngIf=\"loading === 'result'\"> ESTIMATE PRICE: ${{result.price}}</h1>\n          <!-- Button trigger modal -->\n          <button type=\"button\" class=\"btn-card\" data-backdrop=\"false\" data-toggle=\"modal\" data-target=\"#myModal\">CONTACT US</button>\n          <div class=\"modal fade\" id=\"myModal\" role=\"dialog\" style=\"position: absolute;;\">\n              <div class=\"modal-dialog\">\n\n                 <!-- Modal content-->\n                 <div class=\"modal-content\">\n                    <div class=\"modal-body\">\n                       <img src=\"../../assets/wechat.jpg\">\n                       <p>Email: xxxxx@gmail.com</p>\n                       <p>Phone: 1-647-782-2427</p>\n                       <div> Follow us on</div>\n                    </div>\n                    <div class=\"modal-footer\">\n                       <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                    </div>\n                 </div>\n              </div>\n           </div>\n    </div>\n      </div>\n\n    </section>\n  </div>\n  <!-- <div class=\"section\">\n    <h1>Section 4</h1>\n    <button (click)=\"addSection()\">Add sections and change color</button>\n    <button (click)=\"fullpage_api.moveTo('secondPage', 2)\">Move to second page</button>\n    <button (click)=\"removeLast()\">Remove last</button>\n  </div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fp-enabled .modal {\n  position: fixed !important; }\n\n.modal-backdrop.show {\n  z-index: -1; }\n\n.arrow-bot {\n  position: absolute;\n  bottom: 0.25em;\n  left: 50%;\n  margin-left: -1.25em;\n  z-index: 100; }\n\n.arrow-bot svg:hover {\n    height: 1.3em !important; }\n\n.fade-in {\n  -webkit-animation: fade-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) 2s both;\n  animation: fade-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) 2s both; }\n\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\nsection {\n  width: 100%;\n  padding: 5em;\n  box-sizing: border-box;\n  color: white;\n  font-family: alternate-gothic, sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  -webkit-font-smoothing: antialiased; }\n\nsection.options {\n    height: 100%;\n    width: 100%;\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    color: #1c1c1c;\n    padding: 0;\n    background-color: #eaeaea; }\n\nsection.options .result-options, section.options .select-options {\n      width: 100%;\n      height: 90%; }\n\n@media screen and (min-width: 500px) {\n        section.options .result-options, section.options .select-options {\n          width: 50%; } }\n\nsection.options .title {\n      height: 10%;\n      width: 100%; }\n\n@media screen and (max-width: 500px) {\n        section.options .title {\n          height: 8%;\n          font-size: 2em; } }\n\nsection.options .result-options {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-evenly;\n      align-items: center; }\n\nsection.options .result-options .estimate {\n        margin: auto; }\n\nsection.options .result-options .modal {\n        top: calc(50% - 7.5em); }\n\nsection.options .result-options .modal .modal-content {\n          height: 15em;\n          width: 13em; }\n\nsection.options .result-options .modal .modal-content .modal-body img {\n            width: 5em; }\n\nsection.options .result-options .configuration {\n        height: 50%;\n        max-width: 100%;\n        display: flex;\n        justify-content: flex-start;\n        flex-wrap: wrap;\n        background-color: #e3e3e3;\n        /* background-color: white; */\n        border-radius: 0.5em;\n        padding: 1em;\n        margin-right: 1em;\n        margin-left: 0.5em;\n        margin-top: 0.8em; }\n\nsection.options .result-options .configuration .parts {\n          width: 50%;\n          font-size: 0.35em; }\n\nsection.options .result-options .configuration .parts svg-icon {\n            float: left; }\n\n@media screen and (max-width: 500px) {\n              section.options .result-options .configuration .parts svg-icon svg {\n                width: 8em !important;\n                height: 8em !important; } }\n\nsection.options .result-options .configuration .parts .parts-title {\n            float: left;\n            height: 100%;\n            margin-left: 1em; }\n\nsection.options .result-options .configuration .parts .parts-title span {\n              float: left; }\n\n@media screen and (max-width: 500px) {\n                section.options .result-options .configuration .parts .parts-title span {\n                  font-size: 3em; } }\n\nsection.options .result-options .configuration .parts .parts-title p {\n              clear: left;\n              margin-bottom: 0;\n              font-size: 1.4em;\n              text-align: left; }\n\n@media screen and (max-width: 500px) {\n                section.options .result-options .configuration .parts .parts-title p {\n                  font-size: 4em; } }\n\nsection.options .select-options {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-evenly;\n      align-items: center; }\n\nsection.options .select-options .custom-form {\n        flex-flow: row; }\n\nsection.options .select-options .custom-form svg-icon {\n          margin: -0.2em; }\n\nsection.options .select-options .switch-tab {\n        background-color: #e3e3e3;\n        border-top-left-radius: 0.5em;\n        border-top-right-radius: 0.5em;\n        border-bottom: none;\n        padding-top: 0em;\n        font-size: 0.5em;\n        padding: 0.1em 2.2em 0 2.2em; }\n\n@media screen and (max-width: 500px) {\n          section.options .select-options .switch-tab {\n            font-size: 1.5em; } }\n\nsection.options .select-options .options-container {\n        scroll-behavior: smooth;\n        display: flex;\n        justify-content: center;\n        flex-wrap: wrap;\n        align-items: center;\n        overflow: hidden;\n        height: 50%;\n        max-width: 100%;\n        background-color: #e3e3e3;\n        /* margin: 0 1em; */\n        border-radius: 0.5em;\n        margin-left: 1em;\n        margin-right: 0.5em; }\n\nsection.options .select-options .options-container select-pill {\n          margin: 0.5em;\n          position: relative; }\n\nsection.options .btn-card {\n      background-color: #1c1c1c;\n      color: white;\n      margin: auto auto -5em auto;\n      border-radius: 300px;\n      border: none;\n      height: 3.5em;\n      width: 11em;\n      text-align: center;\n      font-size: 0.3em;\n      font-weight: 100;\n      letter-spacing: 0.2em;\n      transition: background-color 0.3s ease;\n      right: 2em;\n      bottom: 2em; }\n\nsection.options .btn-card:hover {\n        background-color: #c8a175;\n        color: white; }\n\n@media screen and (max-width: 500px) {\n        section.options .btn-card {\n          font-size: 1em; } }\n\nsection.options .title {\n      margin: 1.5em auto 0 auto; }\n\nsection.options form {\n      width: 12em;\n      margin: auto;\n      background-color: #e3e3e3;\n      border-radius: 0.5em;\n      padding: 0 1em 0 0.5em; }\n\n@media screen and (max-width: 500px) {\n        section.options form {\n          width: 80%; } }\n\n@media screen and (max-width: 500px) {\n        section.options form svg-icon svg {\n          width: 6em !important; } }\n\nsection.options form div {\n        padding-right: 0.5em;\n        border-right: solid 1px white; }\n\nsection.options form input {\n        font-size: 0.5em;\n        padding-bottom: 0;\n        border-bottom: 1px solid #c8c9cb; }\n\n@media screen and (max-width: 500px) {\n          section.options form input {\n            font-size: 1.5em; } }\n\nsection.options form i {\n        font-size: 0.5em;\n        color: #1c1c1c; }\n\n@media screen and (max-width: 500px) {\n          section.options form i {\n            font-size: 1.2em; } }\n\nsection.options .swiper-container {\n      height: 15em;\n      width: 75em;\n      margin: auto calc( 50% - 37.5em) 0 calc( 50% - 37.5em); }\n\nsection.options .swiper-slide {\n      margin: 0 1.45px;\n      overflow: hidden; }\n\nsection.options .swiper-slide div {\n        opacity: 0;\n        background-color: white;\n        transition: opacity ease 0.5s;\n        display: flex;\n        align-items: center;\n        justify-content: center; }\n\nsection.options .swiper-slide div:hover {\n          opacity: 0.7; }\n\nsection.options .swiper-slide div:nth-of-type(1) {\n        position: absolute;\n        height: calc(50% - 2.5px);\n        width: 100%;\n        top: 0; }\n\nsection.options .swiper-slide div:nth-of-type(2) {\n        position: absolute;\n        height: 50%;\n        width: 100%;\n        top: 50%; }\n\nsection.options .swiper-slide img {\n        display: block;\n        margin-left: auto;\n        margin-right: auto; }\n\nsection.options .swiper-slide img:nth-of-type(1) {\n        height: calc(50% - 2.5px);\n        margin-bottom: 2.5px; }\n\nsection.options .swiper-slide img:nth-of-type(2) {\n        height: calc(50% - 2.5px);\n        margin-top: 2.5px; }\n\nsection.about {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    background-color: #eaeaea;\n    padding: 0; }\n\nsection.about div {\n      width: 24em; }\n\n@media screen and (max-width: 500px) {\n        section.about div {\n          width: 32em; } }\n\nsection.about small {\n      font-family: \"utopia-std\";\n      text-transform: none;\n      letter-spacing: 0;\n      font-style: italic;\n      font-size: 0.35em;\n      color: #1c1c1c; }\n\n@media screen and (max-width: 500px) {\n        section.about small {\n          font-size: 1em; } }\n\nsection.about .about-container {\n      margin-top: 1.5em;\n      margin-bottom: 3.5em; }\n\nsection.about .about-caption {\n      font-size: 0.38em; }\n\n@media screen and (max-width: 500px) {\n        section.about .about-caption {\n          font-size: 1.1em; } }\n\nsection.about .about-title {\n      font-size: 1em;\n      font-weight: 100;\n      font-family: sans-serif;\n      margin-bottom: 0; }\n\n@media screen and (max-width: 500px) {\n        section.about .about-title {\n          font-size: 3em; } }\n\nsection.about p {\n      width: 100%;\n      font-size: 0.5em;\n      line-height: 2em;\n      letter-spacing: 2px;\n      color: #1c1c1c;\n      margin-bottom: 1em; }\n\n@media screen and (max-width: 500px) {\n        section.about p {\n          font-size: 1.5em;\n          letter-spacing: 1px; } }\n\nsection.story {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 100vh;\n    font-family: sans-serif;\n    background-image: url('bg.png');\n    background-repeat: no-repeat;\n    background-size: cover; }\n\nsection.story h3 {\n      font-size: 2em;\n      font-weight: 100; }\n\nsection.story p {\n      font-size: 1.4em;\n      margin: 0;\n      font-weight: bold;\n      opacity: 0.6; }\n\nsection.story h1 {\n      font-size: 1.5em; }\n\nsection.story h1 span {\n        color: white;\n        font-size: 1.5em;\n        font-weight: bold; }\n\n@media screen and (max-width: 500px) {\n          section.story h1 span {\n            font-size: 2.5em; } }\n\nsection.products {\n    background-color: white;\n    z-index: 5;\n    padding-top: 100px;\n    position: absolute;\n    color: #1c1c1c;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap; }\n\nsection.products .title {\n      width: 100%;\n      height: 100px;\n      text-align: center; }\n\nsection.products .title h2 {\n        font-weight: 600;\n        font-size: 2.2em; }\n\n.section section.product {\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  padding: 0; }\n\n.section section.product .product-card {\n    border: none;\n    width: 50%;\n    height: 100%;\n    margin: 0 1%; }\n\n.section section.product .product-card img {\n      margin-top: 30%; }\n\n.section section.product .product-card .card-body {\n      margin: 20% 0;\n      padding: 0; }\n\n.section section.product .product-card .card-body small {\n        font-family: \"utopia-std\";\n        text-transform: none;\n        letter-spacing: 0;\n        font-style: italic;\n        font-size: 0.35em; }\n\n.section section.product .product-card .card-body p {\n        font-size: 0.5em;\n        line-height: 1.5em;\n        letter-spacing: 2px;\n        padding-top: 1em; }\n\n.section section.product .product-card .card-body .btn-card {\n        margin-top: 25%;\n        border-radius: 300px;\n        border: none;\n        height: 3.5em;\n        width: 11em;\n        text-align: center;\n        font-size: 0.24em;\n        font-weight: 100;\n        letter-spacing: 0.2em;\n        transition: background-color 0.3s ease; }\n\n.section section.product .product-card .card-body .btn-card:hover {\n          background-color: #c8a175;\n          color: white; }\n\n.section section.product .left-container {\n    background: #1c1c1c;\n    height: 100%;\n    margin-right: 7.5px;\n    max-width: 50%;\n    flex: 1 1 auto;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n\n.section section.product .left-container button {\n      color: #1c1c1c;\n      background-color: white; }\n\n.section section.product .right-container {\n    background: #eaeaea;\n    height: 100%;\n    margin-left: 7.5px;\n    max-width: 50%;\n    flex: 1 1 auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #1c1c1c; }\n\n.section section.product .right-container button {\n      color: white;\n      background-color: #1c1c1c; }\n\n#menu {\n  position: fixed;\n  /* top: 0.9em; */\n  left: 0;\n  z-index: 70;\n  width: 100%;\n  /* padding: 0; */\n  /* margin-left: -1em; */\n  /* margin: 0 -23em 0 1em; */ }\n\nheader.non-first {\n  height: 2em;\n  background-color: #1c1c1c; }\n\nheader.non-first div {\n    min-height: auto; }\n\nheader {\n  font-size: 0.33em;\n  height: 8em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #1c1c1c; }\n\nheader div {\n    min-width: 30px;\n    min-height: 30px;\n    letter-spacing: 0.2em; }\n\nheader div.top-middle h1 {\n      font-size: 4em; }\n\nheader div.top-middle h1 span {\n        letter-spacing: -0.16em; }\n\n@media screen and (max-width: 500px) {\n          header div.top-middle h1 span svg-icon svg {\n            height: 10em !important;\n            width: 10em !important; } }\n\nheader div span a {\n      color: white;\n      margin: 0.618em;\n      padding: 0.618em;\n      font-size: 0.85em;\n      transition: background-color 0.3s ease; }\n\n@media screen and (max-width: 500px) {\n        header div span a {\n          font-size: 1.5em; } }\n\nheader div span a:hover {\n        background-color: #c8a175;\n        color: #1c1c1c; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1hbi9EZXNrdG9wL25hbm9EZXNpZ24vc3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsMkJBQXlCLEVBQzFCOztBQUNEO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxVQUFTO0VBQ1QscUJBQW9CO0VBQ3BCLGFBQVksRUFNYjs7QUFYRDtJQVFNLHlCQUF3QixFQUN6Qjs7QUFHTDtFQUNDLDBFQUE4RTtFQUN0RSxrRUFBc0UsRUFDOUU7O0FBQ0Q7RUFDRTtJQUNFLFdBQVUsRUFBQTtFQUVaO0lBQ0UsV0FBVSxFQUFBLEVBQUE7O0FBR2Q7RUFDRTtJQUNFLFdBQVUsRUFBQTtFQUVaO0lBQ0UsV0FBVSxFQUFBLEVBQUE7O0FBTWQ7RUFDRSxZQUFXO0VBQ1gsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osMENBQXlDO0VBQ3pDLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsb0NBQW1DLEVBc1hwQzs7QUE5WEQ7SUFZSSxhQUFZO0lBQ1osWUFBVztJQUNYLG1CQUFrQjtJQUNsQixjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLG9CQUFtQjtJQUNuQix3QkFBdUI7SUFDdkIsZ0JBQWU7SUFDZixlQW5FZTtJQW9FZixXQUFVO0lBQ1YsMEJBdEVVLEVBMFRYOztBQTFRSDtNQXlCTSxZQUFXO01BQ1gsWUFBVyxFQUlaOztBQUhDO1FBM0JOO1VBNEJRLFdBQVUsRUFFYixFQUFBOztBQTlCTDtNQWdDTSxZQUFXO01BQ1gsWUFBVyxFQUtaOztBQUpDO1FBbENOO1VBbUNRLFdBQVU7VUFDVixlQUFjLEVBRWpCLEVBQUE7O0FBdENMO01Bd0NNLGNBQWE7TUFDYix1QkFBc0I7TUFDdEIsOEJBQTZCO01BQzdCLG9CQUFtQixFQWlFcEI7O0FBNUdMO1FBNkNRLGFBQVksRUFDYjs7QUE5Q1A7UUFnRFEsdUJBQXNCLEVBVXZCOztBQTFEUDtVQWtEVSxhQUFZO1VBQ1osWUFBVyxFQU1aOztBQXpEVDtZQXNEYyxXQUFVLEVBQ1g7O0FBdkRiO1FBNERRLFlBQVc7UUFDWCxnQkFBZTtRQUNmLGNBQWE7UUFDYiw0QkFBMkI7UUFDM0IsZ0JBQWU7UUFDZiwwQkFBeUI7UUFDekIsOEJBQThCO1FBQzlCLHFCQUFvQjtRQUNwQixhQUFZO1FBQ1osa0JBQWlCO1FBQ2pCLG1CQUFrQjtRQUNsQixrQkFBaUIsRUFvQ2xCOztBQTNHUDtVQXlFVSxXQUFVO1VBQ1Ysa0JBQWlCLEVBZ0NsQjs7QUExR1Q7WUE2RVksWUFBVyxFQU9aOztBQUxHO2NBL0VkO2dCQWdGZ0Isc0JBQXFCO2dCQUNyQix1QkFBc0IsRUFFekIsRUFBQTs7QUFuRmI7WUFzRlksWUFBVztZQUNYLGFBQVk7WUFDWixpQkFBZ0IsRUFpQmpCOztBQXpHWDtjQTBGYyxZQUFXLEVBSVo7O0FBSEM7Z0JBM0ZkO2tCQTRGZ0IsZUFBYyxFQUVqQixFQUFBOztBQTlGYjtjQWdHYyxZQUFXO2NBQ1gsaUJBQWdCO2NBRWhCLGlCQUFnQjtjQUNoQixpQkFBZ0IsRUFJakI7O0FBSEM7Z0JBckdkO2tCQXNHZ0IsZUFBYyxFQUVqQixFQUFBOztBQXhHYjtNQThHTSxjQUFhO01BQ2IsdUJBQXNCO01BQ3RCLDhCQUE2QjtNQUM3QixvQkFBbUIsRUF1Q3BCOztBQXhKTDtRQW1IUSxlQUFjLEVBSWY7O0FBdkhQO1VBcUhVLGVBQWMsRUFDZjs7QUF0SFQ7UUF5SFEsMEJBQXlCO1FBQ3pCLDhCQUE2QjtRQUM3QiwrQkFBOEI7UUFDOUIsb0JBQW1CO1FBQ25CLGlCQUFnQjtRQUNoQixpQkFBZ0I7UUFDaEIsNkJBQTRCLEVBSTdCOztBQUhDO1VBaElSO1lBaUlVLGlCQUFnQixFQUVuQixFQUFBOztBQW5JUDtRQXFJUSx3QkFBdUI7UUFDdkIsY0FBYTtRQUNiLHdCQUF1QjtRQUN2QixnQkFBZTtRQUNmLG9CQUFtQjtRQUNuQixpQkFBZ0I7UUFDaEIsWUFBVztRQUNYLGdCQUFlO1FBQ2YsMEJBQXlCO1FBQ3pCLG9CQUFvQjtRQUNwQixxQkFBb0I7UUFDcEIsaUJBQWdCO1FBQ2hCLG9CQUFtQixFQU1wQjs7QUF2SlA7VUFvSlUsY0FBYTtVQUNiLG1CQUFrQixFQUNuQjs7QUF0SlQ7TUEwSk0sMEJBek1hO01BME1iLGFBQVk7TUFDWiw0QkFBMkI7TUFDM0IscUJBQW9CO01BQ3BCLGFBQVk7TUFDWixjQUFhO01BQ2IsWUFBVztNQUNYLG1CQUFrQjtNQUNsQixpQkFBZ0I7TUFDaEIsaUJBQWdCO01BQ2hCLHNCQUFxQjtNQUNyQix1Q0FBc0M7TUFFdEMsV0FBVTtNQUNWLFlBQVcsRUFRWjs7QUFoTEw7UUEwS1EsMEJBeE5ZO1FBeU5aLGFBQVksRUFDYjs7QUFDRDtRQTdLTjtVQThLUSxlQUFjLEVBRWpCLEVBQUE7O0FBaExMO01BbUxNLDBCQUF5QixFQUMxQjs7QUFwTEw7TUF1TE0sWUFBVztNQUNYLGFBQVk7TUFDWiwwQkFBeUI7TUFDekIscUJBQW9CO01BQ3BCLHVCQUFzQixFQStCdkI7O0FBOUJDO1FBNUxOO1VBNkxRLFdBQVUsRUE2QmIsRUFBQTs7QUF6Qks7UUFqTVY7VUFrTVksc0JBQXFCLEVBRXhCLEVBQUE7O0FBcE1UO1FBd01RLHFCQUFvQjtRQUNwQiw4QkFBNkIsRUFDOUI7O0FBMU1QO1FBNE1RLGlCQUFnQjtRQUNoQixrQkFBaUI7UUFDakIsaUNBQWdDLEVBSWpDOztBQUhDO1VBL01SO1lBZ05VLGlCQUFnQixFQUVuQixFQUFBOztBQWxOUDtRQW9OUSxpQkFBZ0I7UUFDaEIsZUFwUVcsRUF3UVo7O0FBSEM7VUF0TlI7WUF1TlUsaUJBQWdCLEVBRW5CLEVBQUE7O0FBek5QO01BNE5NLGFBQVk7TUFDWixZQUFXO01BQ1gsdURBQXNELEVBQ3ZEOztBQS9OTDtNQWtPTSxpQkFBZ0I7TUFDaEIsaUJBQWdCLEVBc0NqQjs7QUF6UUw7UUFxT1EsV0FBVTtRQUNWLHdCQUF1QjtRQUN2Qiw4QkFBNkI7UUFDN0IsY0FBYTtRQUNiLG9CQUFtQjtRQUNuQix3QkFBdUIsRUFJeEI7O0FBOU9QO1VBNE9VLGFBQVksRUFDYjs7QUE3T1Q7UUFnUFEsbUJBQWtCO1FBQ2xCLDBCQUF5QjtRQUN6QixZQUFXO1FBQ1gsT0FBTSxFQUNQOztBQXBQUDtRQXNQUSxtQkFBa0I7UUFDbEIsWUFBVztRQUNYLFlBQVc7UUFDWCxTQUFRLEVBRVQ7O0FBM1BQO1FBNlBRLGVBQWM7UUFDZCxrQkFBaUI7UUFDakIsbUJBQWtCLEVBQ25COztBQWhRUDtRQWtRUSwwQkFBeUI7UUFDekIscUJBQW9CLEVBQ3JCOztBQXBRUDtRQXNRUSwwQkFBeUI7UUFDekIsa0JBQWlCLEVBQ2xCOztBQXhRUDtJQTRRSSxhQUFZO0lBQ1osWUFBVztJQUNYLGNBQWE7SUFDYixnQkFBZTtJQUNmLG9CQUFtQjtJQUNuQix3QkFBdUI7SUFDdkIsMEJBbFVVO0lBbVVWLFdBQVUsRUFpRFg7O0FBcFVIO01BcVJNLFlBQVcsRUFJWjs7QUFIQztRQXRSTjtVQXVSUSxZQUFXLEVBRWQsRUFBQTs7QUF6Ukw7TUEyUk0sMEJBQXlCO01BQ3pCLHFCQUFvQjtNQUNwQixrQkFBaUI7TUFDakIsbUJBQWtCO01BQ2xCLGtCQUFpQjtNQUNqQixlQS9VYSxFQW1WZDs7QUFIQztRQWpTTjtVQWtTUSxlQUFjLEVBRWpCLEVBQUE7O0FBcFNMO01Bc1NNLGtCQUFpQjtNQUNqQixxQkFBb0IsRUFDckI7O0FBeFNMO01BMFNNLGtCQUFpQixFQUlsQjs7QUFIQztRQTNTTjtVQTRTUSxpQkFDRixFQUNELEVBQUE7O0FBOVNMO01BZ1RNLGVBQWM7TUFJZCxpQkFBZ0I7TUFDaEIsd0JBQXVCO01BQ3ZCLGlCQUFnQixFQUNqQjs7QUFOQztRQWpUTjtVQWtUUSxlQUFjLEVBS2pCLEVBQUE7O0FBdlRMO01BeVRNLFlBQVc7TUFDWCxpQkFBZ0I7TUFDaEIsaUJBQWdCO01BQ2hCLG9CQUFtQjtNQUNuQixlQTVXYTtNQTZXYixtQkFBa0IsRUFLbkI7O0FBSkM7UUEvVE47VUFnVVEsaUJBQWdCO1VBQ2hCLG9CQUFtQixFQUV0QixFQUFBOztBQW5VTDtJQXNVSSxjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLHdCQUF1QjtJQUN2QixrQkFBaUI7SUFDakIsd0JBQXVCO0lBMkJ2QixnQ0FBNEM7SUFDNUMsNkJBQTRCO0lBQzVCLHVCQUFzQixFQUN2Qjs7QUF4V0g7TUE2VU0sZUFBYztNQUNkLGlCQUFnQixFQUNqQjs7QUEvVUw7TUFpVk0saUJBQWdCO01BQ2hCLFVBQVM7TUFDVCxrQkFBaUI7TUFDakIsYUFBWSxFQUNiOztBQXJWTDtNQXVWTSxpQkFBZ0IsRUFhakI7O0FBcFdMO1FBMFZRLGFBQVk7UUFDWixpQkFBZ0I7UUFDaEIsa0JBQWlCLEVBT2xCOztBQU5DO1VBN1ZSO1lBOFZVLGlCQUFnQixFQUtuQixFQUFBOztBQW5XUDtJQTJXSSx3QkFBdUI7SUFDdkIsV0FBVTtJQUNWLG1CQUFrQjtJQUNsQixtQkFBa0I7SUFDbEIsZUE5WmU7SUErWmYsY0FBYTtJQUNiLHdCQUF1QjtJQUN2QixnQkFBZSxFQVdoQjs7QUE3WEg7TUFvWE0sWUFBVTtNQUNWLGNBQWE7TUFDYixtQkFBa0IsRUFLbkI7O0FBM1hMO1FBd1hRLGlCQUFnQjtRQUNoQixpQkFBZ0IsRUFDakI7O0FBS1A7RUFNSSxhQUFZO0VBQ1osY0FBYTtFQUNiLG9CQUFtQjtFQUNuQiw4QkFBNkI7RUFDN0IsV0FBVSxFQTBFWDs7QUFwRkg7SUFZTSxhQUFZO0lBQ1osV0FBVTtJQUNWLGFBQVk7SUFJWixhQUFZLEVBa0NiOztBQXBETDtNQWdCUSxnQkFBZSxFQUNoQjs7QUFqQlA7TUFvQlEsY0FBYTtNQUNiLFdBQVUsRUE4Qlg7O0FBbkRQO1FBdUJVLDBCQUF5QjtRQUN6QixxQkFBb0I7UUFDcEIsa0JBQWlCO1FBQ2pCLG1CQUFrQjtRQUNsQixrQkFBaUIsRUFDbEI7O0FBNUJUO1FBOEJVLGlCQUFnQjtRQUNoQixtQkFBa0I7UUFDbEIsb0JBQW1CO1FBQ25CLGlCQUFnQixFQUNqQjs7QUFsQ1Q7UUFvQ1UsZ0JBQWU7UUFDZixxQkFBb0I7UUFDcEIsYUFBWTtRQUNaLGNBQWE7UUFDYixZQUFXO1FBQ1gsbUJBQWtCO1FBQ2xCLGtCQUFpQjtRQUNqQixpQkFBZ0I7UUFDaEIsc0JBQXFCO1FBQ3JCLHVDQUFzQyxFQUt2Qzs7QUFsRFQ7VUErQ1ksMEJBNWRRO1VBNmRSLGFBQVksRUFDYjs7QUFqRFg7SUFzRE0sb0JBcGVhO0lBcWViLGFBQVk7SUFFWixvQkFBbUI7SUFDbkIsZUFBYztJQUNkLGVBQWM7SUFDZCxjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLHdCQUF1QixFQUt4Qjs7QUFuRUw7TUFnRVEsZUE5ZVc7TUErZVgsd0JBQ0YsRUFBQzs7QUFsRVA7SUFxRU0sb0JBcGZRO0lBcWZSLGFBQVk7SUFFWixtQkFBa0I7SUFDbEIsZUFBYztJQUNkLGVBQWM7SUFDZCxjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLHdCQUF1QjtJQUN2QixlQTVmYSxFQWlnQmQ7O0FBbkZMO01BZ0ZRLGFBQVk7TUFDWiwwQkEvZlcsRUFnZ0JaOztBQU1QO0VBQ0MsZ0JBQWU7RUFDWixpQkFBaUI7RUFDakIsUUFBTztFQUNQLFlBQVc7RUFDWCxZQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4Qiw0QkFBNEIsRUFHL0I7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsMEJBQXlCLEVBSTFCOztBQU5EO0lBSUksaUJBQWdCLEVBQ2pCOztBQUdIO0VBRUUsa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCxjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQixlQWxpQmlCLEVBOGtCakI7O0FBbkRGO0lBVUssZ0JBQWU7SUFDZixpQkFBZ0I7SUFDaEIsc0JBQXFCLEVBc0N0Qjs7QUFsREo7TUFpQlMsZUFBYyxFQWNmOztBQS9CUjtRQW1CVyx3QkFBdUIsRUFXeEI7O0FBUEk7VUF2QmQ7WUF3QmdCLHdCQUF1QjtZQUN2Qix1QkFBc0IsRUFFeEIsRUFBQTs7QUEzQmQ7TUFtQ1MsYUFBWTtNQUNaLGdCQUFlO01BQ2YsaUJBQWdCO01BQ2hCLGtCQUFpQjtNQUlqQix1Q0FBc0MsRUFNdkM7O0FBVEM7UUF2Q1Q7VUF3Q1csaUJBQWdCLEVBUW5CLEVBQUE7O0FBaERSO1FBNENVLDBCQXRrQlU7UUF1a0JULGVBeGtCUSxFQTBrQlQiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGdyYXk6ICNlYWVhZWE7XG4kbmF2eV9ibHVlOiAjMWMxYzFjO1xuJHJpY2VfYnJvd246ICNjOGExNzU7XG4kZHVja195ZWxsbzogI2ZmZjQ3MTtcbiRncmF5X2Rhcms6ICNkOGQ3ZDY7XG5cbi5mcC1lbmFibGVkIC5tb2RhbHtcbiAgcG9zaXRpb246Zml4ZWQgIWltcG9ydGFudDtcbn1cbi5tb2RhbC1iYWNrZHJvcC5zaG93e1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmFycm93LWJvdHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDAuMjVlbTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTEuMjVlbTtcbiAgei1pbmRleDogMTAwO1xuICBzdmcge1xuICAgICY6aG92ZXJ7XG4gICAgICBoZWlnaHQ6IDEuM2VtICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4uZmFkZS1pbiB7XG5cdC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlLWluIDFzIGN1YmljLWJlemllcigwLjM5MCwgMC41NzUsIDAuNTY1LCAxLjAwMCkgMnMgYm90aDtcblx0ICAgICAgICBhbmltYXRpb246IGZhZGUtaW4gMXMgY3ViaWMtYmV6aWVyKDAuMzkwLCAwLjU3NSwgMC41NjUsIDEuMDAwKSAycyBib3RoO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cblxuXG5zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogYWx0ZXJuYXRlLWdvdGhpYywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblxuXG4gICYub3B0aW9uc3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBjb2xvcjogJG5hdnlfYmx1ZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5O1xuXG4gICAgLnJlc3VsdC1vcHRpb25zLCAuc2VsZWN0LW9wdGlvbnN7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogOTAlO1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cbiAgICB9XG4gICAgLnRpdGxle1xuICAgICAgaGVpZ2h0OiAxMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcbiAgICAgICAgaGVpZ2h0OiA4JTtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICB9XG4gICAgfVxuICAgIC5yZXN1bHQtb3B0aW9uc3tcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLmVzdGltYXRle1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICB9XG4gICAgICAubW9kYWx7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSA3LjVlbSk7XG4gICAgICAgIC5tb2RhbC1jb250ZW50e1xuICAgICAgICAgIGhlaWdodDogMTVlbTtcbiAgICAgICAgICB3aWR0aDogMTNlbTtcbiAgICAgICAgICAubW9kYWwtYm9keXtcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgd2lkdGg6IDVlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5jb25maWd1cmF0aW9ue1xuICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlMztcbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogMC41ZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDAuOGVtO1xuICAgICAgICAucGFydHN7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBmb250LXNpemU6IDAuMzVlbTtcblxuICAgICAgICAgIHN2Zy1pY29ue1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBzdmd7XG4gICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcbiAgICAgICAgICAgICAgICB3aWR0aDogOGVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4ZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAucGFydHMtdGl0bGV7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgY2xlYXI6IGxlZnQ7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgIC8vIHdpZHRoOiAxMmVtO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNGVtO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0ZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnNlbGVjdC1vcHRpb25ze1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAuY3VzdG9tLWZvcm17XG4gICAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgICAgICBzdmctaWNvbntcbiAgICAgICAgICBtYXJnaW46IC0wLjJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnN3aXRjaC10YWJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNWVtO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41ZW07XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMC41ZW07XG4gICAgICAgIHBhZGRpbmc6IDAuMWVtIDIuMmVtIDAgMi4yZW07XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcbiAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAub3B0aW9ucy1jb250YWluZXJ7XG4gICAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzO1xuICAgICAgICAvKiBtYXJnaW46IDAgMWVtOyAqL1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcblxuICAgICAgICBzZWxlY3QtcGlsbHtcbiAgICAgICAgICBtYXJnaW46IDAuNWVtO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuYnRuLWNhcmR7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2eV9ibHVlO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgbWFyZ2luOiBhdXRvIGF1dG8gLTVlbSBhdXRvOztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgaGVpZ2h0OiAzLjVlbTtcbiAgICAgIHdpZHRoOiAxMWVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAwLjNlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4yZW07XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAyZW07XG4gICAgICBib3R0b206IDJlbTtcbiAgICAgICY6aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyaWNlX2Jyb3duO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50aXRsZXtcbiAgICAgIG1hcmdpbjogMS41ZW0gYXV0byAwIGF1dG87XG4gICAgfVxuICAgIGZvcm17XG5cbiAgICAgIHdpZHRoOiAxMmVtO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlMztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICAgICAgcGFkZGluZzogMCAxZW0gMCAwLjVlbTtcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICB9XG4gICAgICBzdmctaWNvbntcbiAgICAgICAgc3Zne1xuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgICAgICB3aWR0aDogNmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIGRpdntcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC41ZW07XG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHdoaXRlO1xuICAgICAgfVxuICAgICAgaW5wdXR7XG4gICAgICAgIGZvbnQtc2l6ZTogMC41ZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M4YzljYjtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGl7XG4gICAgICAgIGZvbnQtc2l6ZTogMC41ZW07XG4gICAgICAgIGNvbG9yOiAkbmF2eV9ibHVlO1xuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuc3dpcGVyLWNvbnRhaW5lcntcbiAgICAgIGhlaWdodDogMTVlbTtcbiAgICAgIHdpZHRoOiA3NWVtO1xuICAgICAgbWFyZ2luOiBhdXRvIGNhbGMoIDUwJSAtIDM3LjVlbSkgMCBjYWxjKCA1MCUgLSAzNy41ZW0pO1xuICAgIH1cbiAgICAuc3dpcGVyLXNsaWRle1xuICAgICAgLy8gd2lkdGg6IDIwJTtcbiAgICAgIG1hcmdpbjogMCAxLjQ1cHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgZGl2e1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlIDAuNXM7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAmOmhvdmVye1xuICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGl2Om50aC1vZi10eXBlKDEpe1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogY2FsYyg1MCUgLSAyLjVweCk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICB9XG4gICAgICBkaXY6bnRoLW9mLXR5cGUoMil7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0b3A6IDUwJTtcblxuICAgICAgfVxuICAgICAgaW1ne1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgIH1cbiAgICAgIGltZzpudGgtb2YtdHlwZSgxKXtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDUwJSAtIDIuNXB4KTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMi41cHg7XG4gICAgICB9XG4gICAgICBpbWc6bnRoLW9mLXR5cGUoMil7XG4gICAgICAgIGhlaWdodDogY2FsYyg1MCUgLSAyLjVweCk7XG4gICAgICAgIG1hcmdpbi10b3A6IDIuNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLmFib3V0e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGl2e1xuICAgICAgd2lkdGg6IDI0ZW07XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XG4gICAgICAgIHdpZHRoOiAzMmVtO1xuICAgICAgfVxuICAgIH1cbiAgICBzbWFsbHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcInV0b3BpYS1zdGRcIjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBmb250LXNpemU6IDAuMzVlbTtcbiAgICAgIGNvbG9yOiAkbmF2eV9ibHVlO1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tdG9wOiAxLjVlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMuNWVtO1xuICAgIH1cbiAgICAuYWJvdXQtY2FwdGlvbntcbiAgICAgIGZvbnQtc2l6ZTogMC4zOGVtO1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xuICAgICAgICBmb250LXNpemU6IDEuMWVtXG4gICAgICB9XG4gICAgfVxuICAgIC5hYm91dC10aXRsZXtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgIH1cbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgIHB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZvbnQtc2l6ZTogMC41ZW07XG4gICAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgIGNvbG9yOiAkbmF2eV9ibHVlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLnN0b3J5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAvLyBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBoM3tcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICB9XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDEuNGVtO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgfVxuICAgIGgxe1xuICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgIC8vIGJvcmRlci1ib3R0b206IDAuMWVtIHNvbGlkIHdoaXRlO1xuICAgICAgc3BhbntcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgICAgIH1cbiAgICAgICAgLy8gYm9yZGVyOiAwLjA2ZW0gc29saWQ7XG4gICAgICAgIC8vIGxldHRlci1zcGFjaW5nOiAwLjNlbTtcbiAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiAwLjVlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvYmcucG5nJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG5cbiAgJi5wcm9kdWN0c3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB6LWluZGV4OiA1O1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6ICRuYXZ5X2JsdWU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgLnRpdGxle1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBoMntcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAyLjJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxufVxuLnNlY3Rpb24ge1xuXG4gc2VjdGlvbntcbiAgLy8gYm9yZGVyOiAwLjNlbSBzb2xpZCB3aGl0ZTtcblxuICAmLnByb2R1Y3R7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIC5wcm9kdWN0LWNhcmR7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgaW1ne1xuICAgICAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgICB9XG4gICAgICBtYXJnaW46IDAgMSU7XG4gICAgICAuY2FyZC1ib2R5e1xuICAgICAgICBtYXJnaW46IDIwJSAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBzbWFsbHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJ1dG9waWEtc3RkXCI7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC4zNWVtO1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjVlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMWVtO1xuICAgICAgICB9XG4gICAgICAgIC5idG4tY2FyZHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNSU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzAwcHg7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGhlaWdodDogMy41ZW07XG4gICAgICAgICAgd2lkdGg6IDExZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC4yNGVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmljZV9icm93bjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmxlZnQtY29udGFpbmVye1xuICAgICAgYmFja2dyb3VuZDogJG5hdnlfYmx1ZTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIC8vIHdpZHRoOiA1MCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDcuNXB4O1xuICAgICAgbWF4LXdpZHRoOiA1MCU7O1xuICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYnV0dG9ue1xuICAgICAgICBjb2xvcjogJG5hdnlfYmx1ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcbiAgICAgIH1cbiAgICB9XG4gICAgLnJpZ2h0LWNvbnRhaW5lcntcbiAgICAgIGJhY2tncm91bmQ6ICRncmF5O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgLy8gd2lkdGg6IDUwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiA3LjVweDtcbiAgICAgIG1heC13aWR0aDogNTAlOztcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAkbmF2eV9ibHVlO1xuICAgICAgYnV0dG9ue1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZ5X2JsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gfVxufVxuXG4jbWVudXtcblx0cG9zaXRpb246IGZpeGVkO1xuICAgIC8qIHRvcDogMC45ZW07ICovXG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiA3MDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBwYWRkaW5nOiAwOyAqL1xuICAgIC8qIG1hcmdpbi1sZWZ0OiAtMWVtOyAqL1xuICAgIC8qIG1hcmdpbjogMCAtMjNlbSAwIDFlbTsgKi9cbiAgICAvLyBib3JkZXItbGVmdDogc29saWQgMC45ZW0gd2hpdGU7XG4gICAgLy8gYm9yZGVyLXJpZ2h0OiBzb2xpZCAwLjllbSB3aGl0ZTtcbn1cblxuaGVhZGVyLm5vbi1maXJzdHtcbiAgaGVpZ2h0OiAyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzFjMWM7XG4gIGRpdntcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICB9XG59XG5cbmhlYWRlciB7XG5cbiAgZm9udC1zaXplOiAwLjMzZW07XG4gIGhlaWdodDogOGVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICRuYXZ5X2JsdWU7XG5cbiAgIGRpdiB7XG4gICAgIG1pbi13aWR0aDogMzBweDtcbiAgICAgbWluLWhlaWdodDogMzBweDtcbiAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xuICAgICAmLnRvcC1taWRkbGV7XG4gICAgICAgLy8gd2lkdGg6IDgwcHg7XG4gICAgICAvLyAgbWFyZ2luOiAwIDMwZW07XG4gICAgICAgaDF7XG4gICAgICAgICBmb250LXNpemU6IDRlbTtcbiAgICAgICAgIHNwYW57XG4gICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNmVtO1xuXG4gICAgICAgICAgIHN2Zy1pY29ue1xuICAgICAgICAgICAgIHN2Z3tcbiAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTBlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMGVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9XG4gICAgICAgICAgIH1cblxuICAgICAgICAgfVxuICAgICAgIH1cbiAgICAgfVxuICAgICBzcGFue1xuICAgICAgIGF7XG4gICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICBtYXJnaW46IDAuNjE4ZW07XG4gICAgICAgICBwYWRkaW5nOiAwLjYxOGVtO1xuICAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XG4gICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICB9XG4gICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJpY2VfYnJvd247XG4gICAgICAgICAgIGNvbG9yOiAkbmF2eV9ibHVlO1xuICAgICAgICAgIC8vICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgIH1cbiAgICAgICB9XG4gICAgIH1cbiAgIH1cbiB9XG4iXX0= */"

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
        this.disableLoading = true;
        this.visible = false;
        this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.orginalGameList = [];
        this.orginalWorkList = [];
        this.switchStatus = 'game';
        this.swipperConfig = {
            direction: 'horizontal',
            slidesPerView: 5,
            keyboard: true,
            mousewheel: true,
            scrollbar: false,
            navigation: true,
            pagination: false
        };
        this.result = { 'cpu': '', 'gpu': '', 'mem': '', 'price': null, 'psu': [] };
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
                else {
                    _this.disableLoading = true;
                }
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
    HomePageComponent.prototype.switchTab = function () {
        console.log(this.selectedList);
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
        this.loading = 'load';
        console.log(this.selectedList);
        var games = [];
        var works = [];
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
        this.apiService.postGames(games, works).toPromise().then(function (res) {
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
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/home-page/home-page.component.scss")],
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
            providers: [_api_service_service__WEBPACK_IMPORTED_MODULE_7__["ApiServiceService"]]
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

module.exports = "div, img {\n  height: 3em;\n  width: 3em; }\n  @media screen and (max-width: 500px) {\n    div, img {\n      height: 8em;\n      width: 8em; } }\n  .pill-title {\n  height: auto;\n  width: auto;\n  font-size: 0.4em; }\n  @media screen and (max-width: 500px) {\n    .pill-title {\n      font-size: 1em; } }\n  div img {\n  border-radius: 0.5em; }\n  div .pill-container {\n  position: relative; }\n  div .overlay {\n  opacity: 0;\n  border-radius: 0.5em;\n  background-color: white;\n  transition: opacity ease 0.5s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute; }\n  div .overlay:hover {\n    opacity: 0.7; }\n  @media screen and (max-width: 500px) {\n      div .overlay:hover {\n        opacity: 0; } }\n  div .overlay p {\n    font-size: 0.7em;\n    margin: 0; }\n  @media screen and (max-width: 500px) {\n      div .overlay p {\n        font-size: 2em; } }\n  div .selectedPill {\n  opacity: 0.85; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW1hbi9EZXNrdG9wL25hbm9EZXNpZ24vc3JjL2FwcC9zZWxlY3QtcGlsbC9zZWxlY3QtcGlsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVc7RUFDWCxXQUFVLEVBTVg7RUFKQztJQUpGO01BS0ksWUFBVztNQUNYLFdBQVUsRUFFYixFQUFBO0VBQ0Q7RUFDRSxhQUFZO0VBQ1osWUFBVztFQUNYLGlCQUFnQixFQUlqQjtFQUhDO0lBSkY7TUFLSSxlQUFjLEVBRWpCLEVBQUE7RUFFRDtFQUVJLHFCQUFvQixFQUNyQjtFQUhIO0VBS0ksbUJBQWtCLEVBQ25CO0VBTkg7RUFRSSxXQUFVO0VBQ1YscUJBQW9CO0VBQ3BCLHdCQUF1QjtFQUN2Qiw4QkFBNkI7RUFDN0IsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQix3QkFBdUI7RUFDdkIsbUJBQWtCLEVBY25CO0VBN0JIO0lBaUJNLGFBQVksRUFJYjtFQUhDO01BbEJOO1FBbUJRLFdBQVUsRUFFYixFQUFBO0VBckJMO0lBdUJNLGlCQUFnQjtJQUNoQixVQUFTLEVBSVY7RUFIQztNQXpCTjtRQTBCUSxlQUFjLEVBRWpCLEVBQUE7RUE1Qkw7RUErQkksY0FBYSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvc2VsZWN0LXBpbGwvc2VsZWN0LXBpbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYsIGltZ3tcbiAgaGVpZ2h0OiAzZW07XG4gIHdpZHRoOiAzZW07XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICBoZWlnaHQ6IDhlbTtcbiAgICB3aWR0aDogOGVtO1xuICB9XG59XG4ucGlsbC10aXRsZXtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgZm9udC1zaXplOiAwLjRlbTtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxufVxuXG5kaXYge1xuICBpbWd7XG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gIH1cbiAgLnBpbGwtY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAub3ZlcmxheXtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSAwLjVzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgJjpob3ZlcntcbiAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICB9XG4gICAgcHtcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuc2VsZWN0ZWRQaWxse1xuICAgIG9wYWNpdHk6IDAuODU7XG4gIH1cbn1cblxuIl19 */"

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

module.exports = __webpack_require__(/*! /Users/suman/Desktop/nanoDesign/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map