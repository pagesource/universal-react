module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../API_HOST.json":
/*!************************!*\
  !*** ../API_HOST.json ***!
  \************************/
/*! exports provided: default */
/***/ (function(module) {

module.exports = {};

/***/ }),

/***/ "../node_modules/next/node_modules/webpack/buildin/harmony-module.js":
/*!***************************************************************************!*\
  !*** ../node_modules/next/node_modules/webpack/buildin/harmony-module.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "../server/utils/proxyAgent.js":
/*!*************************************!*\
  !*** ../server/utils/proxyAgent.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Agent = __webpack_require__(/*! agentkeepalive */ "agentkeepalive");

const keepAliveSettings = {
  maxSockets: +process.env.MAX_SOCKETS,
  keepAlive: true,
  maxFreeSockets: +process.env.MAX_FREE_SOCKETS,
  keepAliveMsecs: +process.env.KEEP_ALIVE_MSECS,
  timeout: +process.env.API_TIMEOUT,
  keepAliveTimeout: +process.env.KEEP_ALIVE_TIMEOUT,
};

module.exports = {
  http: new Agent(keepAliveSettings),
  https: new Agent.HttpsAgent(keepAliveSettings),
};


/***/ }),

/***/ "./components/atoms/HeadTag/HeadTag.config.js":
/*!****************************************************!*\
  !*** ./components/atoms/HeadTag/HeadTag.config.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  META_KEYS: [{
    key: 'author',
    id: 1
  }, {
    key: 'description',
    id: 2
  }, {
    id: 3,
    key: 'title',
    prefix: ['twitter', 'og']
  }, {
    id: 4,
    key: 'description',
    prefix: ['twitter', 'og']
  }, {
    id: 5,
    key: 'url',
    prefix: ['twitter', 'og']
  }, {
    id: 6,
    key: 'image',
    prefix: ['twitter', 'og']
  }, {
    id: 7,
    key: 'card',
    prefix: ['twitter']
  }, {
    id: 8,
    key: 'type',
    prefix: ['twitter', 'og']
  }, {
    id: 9,
    key: 'site_name',
    serverKey: 'siteName',
    prefix: ['og']
  }],
  LINK: ['canonical']
});

/***/ }),

/***/ "./components/atoms/HeadTag/HeadTag.js":
/*!*********************************************!*\
  !*** ./components/atoms/HeadTag/HeadTag.js ***!
  \*********************************************/
/*! exports provided: MetaTag, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaTag", function() { return MetaTag; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _HeadTag_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HeadTag.config */ "./components/atoms/HeadTag/HeadTag.config.js");









var MetaTag = function MetaTag(props) {
  var attrs = {
    content: props.content
  }; // eslint-disable-next-line

  attrs[props.prefix && props.prefix === 'og' ? 'property' : 'name'] = props.prefix ? "".concat(props.prefix, ":").concat(props.meta.key) : props.meta.key;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", attrs);
};

var HeadTag =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(HeadTag, _PureComponent);

  function HeadTag() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, HeadTag);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(HeadTag).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(HeadTag, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          title = _this$props.title,
          schema = _this$props.schema;
      var META_KEYS = _HeadTag_config__WEBPACK_IMPORTED_MODULE_7__["default"].META_KEYS,
          LINK = _HeadTag_config__WEBPACK_IMPORTED_MODULE_7__["default"].LINK;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", null, title), META_KEYS.map(function (meta) {
        var content = _this.props[meta.serverKey || meta.key];

        if (!content) {
          return null;
        }

        return meta.prefix ? meta.prefix.map(function (prefix) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(MetaTag, {
            key: "meta-".concat(prefix, "-").concat(meta.id),
            prefix: prefix,
            meta: meta,
            content: content
          });
        }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(MetaTag, {
          key: "meta-".concat(meta.id),
          meta: meta,
          content: content
        });
      }), LINK.map(function (key) {
        return _this.props[key] ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("link", {
          rel: key,
          href: _this.props[key],
          key: key
        }) : null;
      }), schema ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(schema)
        },
        type: "application/ld+json"
      }) : null);
    }
  }]);

  return HeadTag;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);

HeadTag.defaultProps = {
  title: '',
  schema: undefined
};
MetaTag.defaultProps = {
  prefix: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (HeadTag);

/***/ }),

/***/ "./components/atoms/HeadTag/index.js":
/*!*******************************************!*\
  !*** ./components/atoms/HeadTag/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeadTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeadTag */ "./components/atoms/HeadTag/HeadTag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _HeadTag__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/molecules/Highlights/Highlights.js":
/*!*******************************************************!*\
  !*** ./components/molecules/Highlights/Highlights.js ***!
  \*******************************************************/
/*! exports provided: default, Highlights */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Highlights", function() { return Highlights; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Highlights_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Highlights.style */ "./components/molecules/Highlights/Highlights.style.js");
/* harmony import */ var _lib_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../lib/withStyles */ "./lib/withStyles/index.js");







/** * * Highlights * */




var Highlights =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Highlights, _PureComponent);

  function Highlights() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Highlights);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Highlights).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Highlights, [{
    key: "render",
    value: function render() {
      var className = this.props.className;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "wrapper ".concat(className)
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "inner"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "special"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, "Sem turpis amet semper"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "highlights"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/dummy",
        className: "icon fa-vcard-o"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "label"
      }, "Icon")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Feugiat consequat")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/dummy",
        className: "icon fa-files-o"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "label"
      }, "Icon")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Ante sem integer")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/dummy",
        className: "icon fa-floppy-o"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "label"
      }, "Icon")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Ipsum consequat")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/dummy",
        className: "icon fa-line-chart"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "label"
      }, "Icon")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Interdum gravida")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/dummy",
        className: "icon fa-paper-plane-o"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "label"
      }, "Icon")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Faucibus consequat")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus."))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/dummy",
        className: "icon fa-qrcode"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "label"
      }, "Icon")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Accumsan viverra")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus."))))));
    }
  }]);

  return Highlights;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);

Highlights.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(Highlights, _Highlights_style__WEBPACK_IMPORTED_MODULE_6__["default"]));


/***/ }),

/***/ "./components/molecules/Highlights/Highlights.style.js":
/*!*************************************************************!*\
  !*** ./components/molecules/Highlights/Highlights.style.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])([""]));

/***/ }),

/***/ "./components/molecules/Highlights/index.js":
/*!**************************************************!*\
  !*** ./components/molecules/Highlights/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Highlights__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Highlights */ "./components/molecules/Highlights/Highlights.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Highlights__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/molecules/NavBar/NavBar.js":
/*!***********************************************!*\
  !*** ./components/molecules/NavBar/NavBar.js ***!
  \***********************************************/
/*! exports provided: default, NavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBar", function() { return NavBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavBar_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar.style */ "./components/molecules/NavBar/NavBar.style.js");
/* harmony import */ var _lib_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/withStyles */ "./lib/withStyles/index.js");





var NavBar = function NavBar(_ref) {
  var className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: className
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/error"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Hello")));
};

NavBar.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withStyles__WEBPACK_IMPORTED_MODULE_3__["default"])(NavBar, _NavBar_style__WEBPACK_IMPORTED_MODULE_2__["default"]));


/***/ }),

/***/ "./components/molecules/NavBar/NavBar.style.js":
/*!*****************************************************!*\
  !*** ./components/molecules/NavBar/NavBar.style.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])([" "]));

/***/ }),

/***/ "./components/molecules/NavBar/index.js":
/*!**********************************************!*\
  !*** ./components/molecules/NavBar/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar */ "./components/molecules/NavBar/NavBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _NavBar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/molecules/Testimonials/Testimonials.js":
/*!***********************************************************!*\
  !*** ./components/molecules/Testimonials/Testimonials.js ***!
  \***********************************************************/
/*! exports provided: default, Testimonials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Testimonials", function() { return Testimonials; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Testimonials_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Testimonials.style */ "./components/molecules/Testimonials/Testimonials.style.js");
/* harmony import */ var _lib_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../lib/withStyles */ "./lib/withStyles/index.js");







/** * * Testimonials * */




var Testimonials =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Testimonials, _PureComponent);

  function Testimonials() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Testimonials);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Testimonials).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Testimonials, [{
    key: "render",
    value: function render() {
      var className = this.props.className;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "wrapper ".concat(className)
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "inner"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "special"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, "Faucibus consequat lorem"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "testimonials"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("blockquote", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "author"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "image"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/pic01.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "credit"
      }, "- ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, "Jane Doe"), " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "CEO - ABC Inc."))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("blockquote", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "author"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "image"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/pic03.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "credit"
      }, "- ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, "John Doe"), " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "CEO - ABC Inc."))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("blockquote", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "author"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "image"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/images/pic02.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "credit"
      }, "- ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, "Janet Smith"), " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "CEO - ABC Inc."))))))));
    }
  }]);

  return Testimonials;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);

Testimonials.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(Testimonials, _Testimonials_style__WEBPACK_IMPORTED_MODULE_6__["default"]));


/***/ }),

/***/ "./components/molecules/Testimonials/Testimonials.style.js":
/*!*****************************************************************!*\
  !*** ./components/molecules/Testimonials/Testimonials.style.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])([" "]));

/***/ }),

/***/ "./components/molecules/Testimonials/index.js":
/*!****************************************************!*\
  !*** ./components/molecules/Testimonials/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Testimonials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Testimonials */ "./components/molecules/Testimonials/Testimonials.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Testimonials__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/molecules/TopBanner/TopBanner.js":
/*!*****************************************************!*\
  !*** ./components/molecules/TopBanner/TopBanner.js ***!
  \*****************************************************/
/*! exports provided: default, TopBanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBanner", function() { return TopBanner; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TopBanner_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TopBanner.style */ "./components/molecules/TopBanner/TopBanner.style.js");
/* harmony import */ var _lib_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../lib/withStyles */ "./lib/withStyles/index.js");







/**
 *
 * TopBanner
 *
 *  */




var TopBanner =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(TopBanner, _PureComponent);

  function TopBanner() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TopBanner);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TopBanner).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TopBanner, [{
    key: "render",
    value: function render() {
      var className = this.props.className;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: className,
        id: "banner"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "inner"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, this.props.title || 'Not available'), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, this.props.banner)));
    }
  }]);

  return TopBanner;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);

TopBanner.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(TopBanner, _TopBanner_style__WEBPACK_IMPORTED_MODULE_6__["default"]));


/***/ }),

/***/ "./components/molecules/TopBanner/TopBanner.style.js":
/*!***********************************************************!*\
  !*** ./components/molecules/TopBanner/TopBanner.style.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])([" "]));

/***/ }),

/***/ "./components/molecules/TopBanner/index.js":
/*!*************************************************!*\
  !*** ./components/molecules/TopBanner/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopBanner */ "./components/molecules/TopBanner/TopBanner.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TopBanner__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/organisms/Footer/Footer.js":
/*!***********************************************!*\
  !*** ./components/organisms/Footer/Footer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Footer = function Footer(_ref) {
  var className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: className,
    id: "footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Accumsan montes viverra"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Sem turpis amet semper"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "alt"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/link1"
  }, "Dolor pulvinar sed etiam.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/link2"
  }, "Etiam vel lorem sed amet.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/link3"
  }, "Felis enim feugiat viverra.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/link4"
  }, "Dolor pulvinar magna etiam."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "copyright"
  }, "\xA9 Untitled. Photos ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://unsplash.co"
  }, "Unsplash"), ", Video", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://coverr.co"
  }, "Coverr"), ".")));
};

Footer.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/organisms/Footer/index.js":
/*!**********************************************!*\
  !*** ./components/organisms/Footer/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ "./components/organisms/Footer/Footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Footer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/organisms/Header/Header.js":
/*!***********************************************!*\
  !*** ./components/organisms/Header/Header.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _molecules_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../molecules/NavBar */ "./components/molecules/NavBar/index.js");




var Header = function Header(_ref) {
  var className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    id: "header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "logo"
  }, "Sample Logo")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_molecules_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};

Header.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/organisms/Header/index.js":
/*!**********************************************!*\
  !*** ./components/organisms/Header/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./components/organisms/Header/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/templates/HomePage/HomePage.actions.js":
/*!***********************************************************!*\
  !*** ./components/templates/HomePage/HomePage.actions.js ***!
  \***********************************************************/
/*! exports provided: loadHomeFailure, loadHomeSeo, loadHomeSeoSuccess, loadHomePageEditorial, loadHomePageEditorialSuccess, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHomeFailure", function() { return loadHomeFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHomeSeo", function() { return loadHomeSeo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHomeSeoSuccess", function() { return loadHomeSeoSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHomePageEditorial", function() { return loadHomePageEditorial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHomePageEditorialSuccess", function() { return loadHomePageEditorialSuccess; });
/* harmony import */ var _HomePage_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.constants */ "./components/templates/HomePage/HomePage.constants.js");

var loadHomeFailure = function loadHomeFailure(error) {
  return {
    type: _HomePage_constants__WEBPACK_IMPORTED_MODULE_0__["LOAD_HOME_FAILURE"],
    error: error
  };
};
var loadHomeSeo = function loadHomeSeo() {
  return {
    type: _HomePage_constants__WEBPACK_IMPORTED_MODULE_0__["LOAD_HOME_SEO"]
  };
};
var loadHomeSeoSuccess = function loadHomeSeoSuccess(data) {
  return {
    type: _HomePage_constants__WEBPACK_IMPORTED_MODULE_0__["LOAD_HOME_SEO_SUCCESS"],
    data: data
  };
};
var loadHomePageEditorial = function loadHomePageEditorial() {
  return {
    type: _HomePage_constants__WEBPACK_IMPORTED_MODULE_0__["LOAD_HOME_EDITORIAL_DATA"],
    slotId: 'homePageSlot'
  };
};
var loadHomePageEditorialSuccess = function loadHomePageEditorialSuccess(data) {
  return {
    type: _HomePage_constants__WEBPACK_IMPORTED_MODULE_0__["LOAD_HOME_EDITORIAL_DATA_SUCCESS"],
    data: data
  };
};
/* harmony default export */ __webpack_exports__["default"] = ([loadHomeSeo, loadHomePageEditorial]);

/***/ }),

/***/ "./components/templates/HomePage/HomePage.constants.js":
/*!*************************************************************!*\
  !*** ./components/templates/HomePage/HomePage.constants.js ***!
  \*************************************************************/
/*! exports provided: LOAD_HOME_FAILURE, LOAD_HOME_SEO, LOAD_HOME_SEO_SUCCESS, LOAD_HOME_EDITORIAL_DATA, LOAD_HOME_EDITORIAL_DATA_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HOME_FAILURE", function() { return LOAD_HOME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HOME_SEO", function() { return LOAD_HOME_SEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HOME_SEO_SUCCESS", function() { return LOAD_HOME_SEO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HOME_EDITORIAL_DATA", function() { return LOAD_HOME_EDITORIAL_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HOME_EDITORIAL_DATA_SUCCESS", function() { return LOAD_HOME_EDITORIAL_DATA_SUCCESS; });
var LOAD_HOME_FAILURE = 'LOAD_HOME_FAILURE';
var LOAD_HOME_SEO = 'LOAD_HOME_SEO';
var LOAD_HOME_SEO_SUCCESS = 'LOAD_HOME_SEO_SUCCESS';
var LOAD_HOME_EDITORIAL_DATA = 'LOAD_HOME_EDITORIAL_DATA';
var LOAD_HOME_EDITORIAL_DATA_SUCCESS = 'LOAD_HOME_EDITORIAL_DATA_SUCCESS';

/***/ }),

/***/ "./components/templates/HomePage/HomePage.js":
/*!***************************************************!*\
  !*** ./components/templates/HomePage/HomePage.js ***!
  \***************************************************/
/*! exports provided: default, HomePageDisconnected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageDisconnected", function() { return HomePage; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Layout */ "./components/templates/Layout/index.js");
/* harmony import */ var _lib_dynamicStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../lib/dynamicStore */ "./lib/dynamicStore/index.js");
/* harmony import */ var _HomePage_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HomePage.actions */ "./components/templates/HomePage/HomePage.actions.js");
/* harmony import */ var _atoms_HeadTag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../atoms/HeadTag */ "./components/atoms/HeadTag/index.js");
/* harmony import */ var _HomePage_saga__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HomePage.saga */ "./components/templates/HomePage/HomePage.saga.js");
/* harmony import */ var _HomePage_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./HomePage.reducer */ "./components/templates/HomePage/HomePage.reducer.js");
/* harmony import */ var _molecules_Highlights__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../molecules/Highlights */ "./components/molecules/Highlights/index.js");
/* harmony import */ var _molecules_Testimonials__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../molecules/Testimonials */ "./components/molecules/Testimonials/index.js");
/* harmony import */ var _molecules_TopBanner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../molecules/TopBanner */ "./components/molecules/TopBanner/index.js");


















var HomePage =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(HomePage, _PureComponent);

  function HomePage() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, HomePage);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(HomePage).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(HomePage, [{
    key: "render",
    value: function render() {
      var editorialData = this.props.editorialData;
      var title = editorialData.get('title');
      var banner = editorialData.get('banner');
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "home",
        className: "row",
        id: "content-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_HeadTag__WEBPACK_IMPORTED_MODULE_10__["default"], {
        description: "Home Page Description",
        title: "Home page"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_TopBanner__WEBPACK_IMPORTED_MODULE_15__["default"], {
        title: title,
        banner: banner
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_Highlights__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_Testimonials__WEBPACK_IMPORTED_MODULE_14__["default"], null));
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);
/* istanbul ignore next */


HomePage.defaultProps = {
  seoData: {
    homePageMetaDesc: '',
    homePagePageTitle: '',
    seoMetaDesc: undefined
  },
  editorialData: {}
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    editorialData: state.getIn(['homePage', 'layout', 'editorialData'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_dynamicStore__WEBPACK_IMPORTED_MODULE_8__["default"])(HomePage, {
  mapStateToProps: mapStateToProps,
  mapDispatchToProps: mapDispatchToProps,
  saga: _HomePage_saga__WEBPACK_IMPORTED_MODULE_11__["default"],
  reducer: _HomePage_reducer__WEBPACK_IMPORTED_MODULE_12__["default"],
  key: 'homePage',
  initialActions: _HomePage_actions__WEBPACK_IMPORTED_MODULE_9__["default"],
  criticalState: [['homePage', 'layout', 'editorialData']]
}));


/***/ }),

/***/ "./components/templates/HomePage/HomePage.reducer.js":
/*!***********************************************************!*\
  !*** ./components/templates/HomePage/HomePage.reducer.js ***!
  \***********************************************************/
/*! exports provided: getFailure, addLayoutData, addHomeEditorialData, layout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFailure", function() { return getFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLayoutData", function() { return addLayoutData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHomeEditorialData", function() { return addHomeEditorialData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HomePage_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomePage.constants */ "./components/templates/HomePage/HomePage.constants.js");



var getFailure = function getFailure(state, action) {
  return state.set('error', action.error);
};
var addLayoutData = function addLayoutData(state, data) {
  return state.set('seoData', data);
};
var addHomeEditorialData = function addHomeEditorialData(state, data) {
  return state.set('editorialData', Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])(data));
};
var layout = function layout() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({});
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _HomePage_constants__WEBPACK_IMPORTED_MODULE_2__["LOAD_HOME_FAILURE"]:
      return getFailure(state, action);

    case _HomePage_constants__WEBPACK_IMPORTED_MODULE_2__["LOAD_HOME_SEO_SUCCESS"]:
      return addLayoutData(state, action.data);

    case _HomePage_constants__WEBPACK_IMPORTED_MODULE_2__["LOAD_HOME_EDITORIAL_DATA_SUCCESS"]:
      return addHomeEditorialData(state, action.data);

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  layout: layout
}));

/***/ }),

/***/ "./components/templates/HomePage/HomePage.saga.js":
/*!********************************************************!*\
  !*** ./components/templates/HomePage/HomePage.saga.js ***!
  \********************************************************/
/*! exports provided: loadHomeEditorialDataSaga, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHomeEditorialDataSaga", function() { return loadHomeEditorialDataSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return homeLayoutSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HomePage_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomePage.actions */ "./components/templates/HomePage/HomePage.actions.js");
/* harmony import */ var _HomePage_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomePage.constants */ "./components/templates/HomePage/HomePage.constants.js");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/fetch */ "./utils/fetch.js");


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadHomeEditorialDataSaga),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(homeLayoutSaga);





function loadHomeEditorialDataSaga(action) {
  var data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadHomeEditorialDataSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_utils_fetch__WEBPACK_IMPORTED_MODULE_4__["default"].fetch, '/b/5b613c757b2129536787da96/1', action);

        case 3:
          data = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_HomePage_actions__WEBPACK_IMPORTED_MODULE_2__["loadHomePageEditorialSuccess"])(data));

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _context.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_HomePage_actions__WEBPACK_IMPORTED_MODULE_2__["loadHomeFailure"])(_context.t0));

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 8]]);
}
function homeLayoutSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function homeLayoutSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_HomePage_constants__WEBPACK_IMPORTED_MODULE_3__["LOAD_HOME_EDITORIAL_DATA"], loadHomeEditorialDataSaga)]);

        case 3:
          _context2.next = 9;
          break;

        case 5:
          _context2.prev = 5;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_HomePage_actions__WEBPACK_IMPORTED_MODULE_2__["loadHomeFailure"])(_context2.t0));

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this, [[0, 5]]);
}

/***/ }),

/***/ "./components/templates/HomePage/index.js":
/*!************************************************!*\
  !*** ./components/templates/HomePage/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage */ "./components/templates/HomePage/HomePage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _HomePage__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/templates/Layout/Layout.js":
/*!***********************************************!*\
  !*** ./components/templates/Layout/Layout.js ***!
  \***********************************************/
/*! exports provided: default, Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_theme___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/theme/ */ "./styles/theme/index.js");
/* harmony import */ var _organisms_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../organisms/Header */ "./components/organisms/Header/index.js");
/* harmony import */ var _organisms_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../organisms/Footer */ "./components/organisms/Footer/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants */ "./constants/index.js");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/fetch */ "./utils/fetch.js");










var Layout = function Layout(_ref) {
  var children = _ref.children,
      deviceType = _ref.deviceType,
      hasRightGutter = _ref.hasRightGutter;
  // `deviceType` is now accessible to all component styles using `props.theme.deviceType`
  _styles_theme___WEBPACK_IMPORTED_MODULE_4__["default"].deviceType = deviceType;
  /**
   * isTabletCheckout Setting for theming at component level
   * for all checkout pages loading on tablet device.
   */

  _styles_theme___WEBPACK_IMPORTED_MODULE_4__["default"].hasRightGutter = hasRightGutter;
  _utils_fetch__WEBPACK_IMPORTED_MODULE_8__["default"].setDeviceType(deviceType);
  var isMobile = deviceType === _constants__WEBPACK_IMPORTED_MODULE_7__["MOBILE"];
  /**
   * check whether on checkout pages to have right Space/gutter in the window,
   * for chat Icon overlaping issue in Ipad.
   */

  var width = hasRightGutter ? 1100 : 1000;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: _styles_theme___WEBPACK_IMPORTED_MODULE_4__["default"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, isMobile ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width, shrink-to-fit=no"
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=".concat(width)
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_organisms_Header__WEBPACK_IMPORTED_MODULE_5__["default"], null), children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_organisms_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
};

Layout.defaultProps = {
  hasRightGutter: false
};
/* istanbul ignore next */

var mapDispatchToProps = function mapDispatchToProps() {
  return {};
};

var mapStateToProps
/* istanbul ignore next */
= function mapStateToProps(state) {
  return {
    deviceType: state.getIn(['global', 'globalData', 'deviceType']),
    isNavigationDrawerOpen: state.getIn(['global', 'header', 'isNavigationDrawerOpen']),
    topBanner: state.getIn(['global', 'header', 'topBanner']),
    isTablet: state.getIn(['global', 'globalData', 'isTablet']),
    topBannerModalContent: state.getIn(['global', 'header', 'topBannerModalContent'])
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Layout));


/***/ }),

/***/ "./components/templates/Layout/index.js":
/*!**********************************************!*\
  !*** ./components/templates/Layout/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout */ "./components/templates/Layout/Layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Layout__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/*! exports provided: DESKTOP, PHONE, TABLET, MOBILE, STATIC_IMAGE, IMAGE_PLACEHOLDER, API_PROXY_PATH, ENV_DEVELOPMENT, ENV_PRODUCTION, KEY_ESCAPE, KEY_ENTER, KEY_TAB, KEY_SPACE, KEY_UP_CODE, KEY_LEFT_CODE, KEY_RIGHT_CODE, KEY_DOWN_CODE, API_ERROR_HANDLER_PAGE, STATUS_ERROR, STATUS_SUCCESS, RESPONSE_OK, RESPONSE_SERVER_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESKTOP", function() { return DESKTOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHONE", function() { return PHONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLET", function() { return TABLET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOBILE", function() { return MOBILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATIC_IMAGE", function() { return STATIC_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_PLACEHOLDER", function() { return IMAGE_PLACEHOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_PROXY_PATH", function() { return API_PROXY_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENV_DEVELOPMENT", function() { return ENV_DEVELOPMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENV_PRODUCTION", function() { return ENV_PRODUCTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_ESCAPE", function() { return KEY_ESCAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_ENTER", function() { return KEY_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_TAB", function() { return KEY_TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_SPACE", function() { return KEY_SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_UP_CODE", function() { return KEY_UP_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_LEFT_CODE", function() { return KEY_LEFT_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_RIGHT_CODE", function() { return KEY_RIGHT_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_DOWN_CODE", function() { return KEY_DOWN_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_ERROR_HANDLER_PAGE", function() { return API_ERROR_HANDLER_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_ERROR", function() { return STATUS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_SUCCESS", function() { return STATUS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSE_OK", function() { return RESPONSE_OK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSE_SERVER_ERROR", function() { return RESPONSE_SERVER_ERROR; });
// Devices
var DESKTOP = 'desktop';
var PHONE = 'phone';
var TABLET = 'tablet';
var MOBILE = 'mobile'; // Paths

var STATIC_IMAGE = '/static/images';
var IMAGE_PLACEHOLDER = '/static/images/image-placeholder.png';
var API_PROXY_PATH = '/api'; // Environments

var ENV_DEVELOPMENT = 'development';
var ENV_PRODUCTION = 'production'; // Key Codes

var KEY_ESCAPE = 27;
var KEY_ENTER = 13;
var KEY_TAB = 9;
var KEY_SPACE = 32;
var KEY_UP_CODE = 38;
var KEY_LEFT_CODE = 37;
var KEY_RIGHT_CODE = 39;
var KEY_DOWN_CODE = 40;
var API_ERROR_HANDLER_PAGE = '/error'; // HTTP Status

var STATUS_ERROR = 'ERROR';
var STATUS_SUCCESS = 'SUCCESS';
var RESPONSE_OK = 200;
var RESPONSE_SERVER_ERROR = 500;

/***/ }),

/***/ "./global/actions/index.js":
/*!*********************************!*\
  !*** ./global/actions/index.js ***!
  \*********************************/
/*! exports provided: pageActions, default, serverActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageActions", function() { return pageActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverActions", function() { return serverActions; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./global/constants/index.js");
 // Page-level actions go here

var pageActions = []; // All default actions go here

/* harmony default export */ __webpack_exports__["default"] = ([]);
var serverActions = {
  addDeviceType: function addDeviceType(deviceType) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["DEVICE_TYPE"],
      deviceType: deviceType
    };
  },
  addIsTablet: function addIsTablet(isTablet) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["IS_TABLET"],
      isTablet: isTablet
    };
  },
  setCurrentRoute: function setCurrentRoute(pathname) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["CURRENT_ROUTE"],
      pathname: pathname
    };
  },
  setPageUrl: function setPageUrl(pageUrl) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["PAGE_URL"],
      pageUrl: pageUrl
    };
  },
  setPageQuery: function setPageQuery(pageQuery) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["PAGE_QUERY"],
      pageQuery: pageQuery
    };
  },
  setPageOrigin: function setPageOrigin(origin) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["PAGE_ORIGIN"],
      origin: origin
    };
  }
};

/***/ }),

/***/ "./global/constants/index.js":
/*!***********************************!*\
  !*** ./global/constants/index.js ***!
  \***********************************/
/*! exports provided: DEVICE_TYPE, IS_TABLET, REGION_TYPE, CONFIG_KEYS, CURRENT_ROUTE, PAGE_URL, PAGE_QUERY, GLOBAL_DATA_FAILURE, CHECK_AUTH, CHECK_AUTH_SUCCESS, SET_USER_STATE, PAGE_ORIGIN, USER_STATE_LOGGED_IN, USER_STATE_RECOGNIZED, USER_STATE_ANONYMOUS, UPDATE_SESSION_EMAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEVICE_TYPE", function() { return DEVICE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_TABLET", function() { return IS_TABLET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGION_TYPE", function() { return REGION_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG_KEYS", function() { return CONFIG_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_ROUTE", function() { return CURRENT_ROUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_URL", function() { return PAGE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_QUERY", function() { return PAGE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL_DATA_FAILURE", function() { return GLOBAL_DATA_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_AUTH", function() { return CHECK_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_AUTH_SUCCESS", function() { return CHECK_AUTH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER_STATE", function() { return SET_USER_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_ORIGIN", function() { return PAGE_ORIGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_STATE_LOGGED_IN", function() { return USER_STATE_LOGGED_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_STATE_RECOGNIZED", function() { return USER_STATE_RECOGNIZED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_STATE_ANONYMOUS", function() { return USER_STATE_ANONYMOUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SESSION_EMAIL", function() { return UPDATE_SESSION_EMAIL; });
/* TODO: Remove lint exception */

/* eslint-disable import/prefer-default-export */
var DEVICE_TYPE = 'DEVICE_TYPE';
var IS_TABLET = 'IS_TABLET';
var REGION_TYPE = 'REGION_TYPE';
var CONFIG_KEYS = 'CONFIG_KEYS';
var CURRENT_ROUTE = 'CURRENT_ROUTE';
var PAGE_URL = 'PAGE_URL';
var PAGE_QUERY = 'PAGE_QUERY';
var GLOBAL_DATA_FAILURE = 'GLOBAL_DATA_FAILURE';
var CHECK_AUTH = 'CHECK_AUTH';
var CHECK_AUTH_SUCCESS = 'CHECK_AUTH_SUCCESS';
var SET_USER_STATE = 'SET_USER_STATE';
var PAGE_ORIGIN = 'PAGE_ORIGIN';
var USER_STATE_LOGGED_IN = 'LOGGED_IN';
var USER_STATE_RECOGNIZED = 'RECOGNIZED';
var USER_STATE_ANONYMOUS = 'ANONYMOUS';
var UPDATE_SESSION_EMAIL = 'UPDATE_SESSION_EMAIL';

/***/ }),

/***/ "./global/reducer/globalData.js":
/*!**************************************!*\
  !*** ./global/reducer/globalData.js ***!
  \**************************************/
/*! exports provided: initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./global/constants/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/utils */ "./utils/utils.js");




var initState = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])({
  deviceType: '',
  activeRegion: ''
});

var setDevice = function setDevice(state, _ref) {
  var deviceType = _ref.deviceType;
  return state.set('deviceType', deviceType);
};

var setIsTablet = function setIsTablet(state, _ref2) {
  var isTablet = _ref2.isTablet;
  return state.set('isTablet', isTablet);
};

var setConfigKeys = function setConfigKeys(state, _ref3) {
  var configKeys = _ref3.configKeys;
  return state.set('configKeys', configKeys);
};

var setRegion = function setRegion(state, _ref4) {
  var activeRegion = _ref4.activeRegion;
  return state.set('activeRegion', activeRegion);
};

var setPageUrl = function setPageUrl(state, _ref5) {
  var pageUrl = _ref5.pageUrl;
  return state.set('pageUrl', pageUrl);
};

var setRoute = function setRoute(state, _ref6) {
  var pathname = _ref6.pathname;
  return state.set('route', pathname);
};

var setPageQuery = function setPageQuery(state, _ref7) {
  var pageQuery = _ref7.pageQuery;
  return state.set('pageQuery', Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])(pageQuery));
};

var setAuthentication = function setAuthentication(state, _ref8) {
  var sessionInfo = _ref8.sessionInfo;
  return state.set('sessionInfo', Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])(sessionInfo));
};

var setSessionEmail = function setSessionEmail(state, email) {
  var sessionInfo = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state.get('sessionInfo').toJS(), {
    email: email
  }));
  return state.set('sessionInfo', sessionInfo);
};

var setUserState = function setUserState(state, _ref9) {
  var userState = _ref9.userState;
  if (userState === _constants__WEBPACK_IMPORTED_MODULE_2__["USER_STATE_LOGGED_IN"]) Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["setCookie"])('lastLogin', new Date());
  return state.set('userState', userState);
};

var setPageOrigin = function setPageOrigin(state, _ref10) {
  var origin = _ref10.origin;
  return state.set('pageOrigin', origin);
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_2__["DEVICE_TYPE"]:
      return setDevice(state, action);

    case _constants__WEBPACK_IMPORTED_MODULE_2__["IS_TABLET"]:
      return setIsTablet(state, action);

    case _constants__WEBPACK_IMPORTED_MODULE_2__["REGION_TYPE"]:
      return setRegion(state, action);

    case _constants__WEBPACK_IMPORTED_MODULE_2__["CONFIG_KEYS"]:
      return setConfigKeys(state, action);

    case _constants__WEBPACK_IMPORTED_MODULE_2__["CURRENT_ROUTE"]:
      return setRoute(state, action);

    case _constants__WEBPACK_IMPORTED_MODULE_2__["PAGE_URL"]:
      return setPageUrl(state, action);

    case _constants__WEBPACK_IMPORTED_MODULE_2__["PAGE_QUERY"]:
      return setPageQuery(state, action);

    case _constants__WEBPACK_IMPORTED_MODULE_2__["CHECK_AUTH_SUCCESS"]:
      return setAuthentication(state, action);

    case _constants__WEBPACK_IMPORTED_MODULE_2__["UPDATE_SESSION_EMAIL"]:
      return setSessionEmail(state, action.email);

    case _constants__WEBPACK_IMPORTED_MODULE_2__["SET_USER_STATE"]:
      return setUserState(state, action);

    case _constants__WEBPACK_IMPORTED_MODULE_2__["PAGE_ORIGIN"]:
      return setPageOrigin(state, action);

    default:
      return state;
  }
});

/***/ }),

/***/ "./global/reducer/index.js":
/*!*********************************!*\
  !*** ./global/reducer/index.js ***!
  \*********************************/
/*! exports provided: default, globalDataStructure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalDataStructure", function() { return globalDataStructure; });
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globalData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globalData */ "./global/reducer/globalData.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  globalData: _globalData__WEBPACK_IMPORTED_MODULE_1__["default"]
}));
var globalDataStructure = [['global', 'globalData', 'deviceType']];

/***/ }),

/***/ "./global/saga/index.js":
/*!******************************!*\
  !*** ./global/saga/index.js ***!
  \******************************/
/*! exports provided: testSaga, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testSaga", function() { return testSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return globalSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);


var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(testSaga),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(globalSaga);


function testSaga(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function testSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return "example - ".concat(action);

        case 3:
          _context.next = 7;
          break;

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 5]]);
}
function globalSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function globalSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])('TEST', testSaga)]);

        case 3:
          _context2.next = 7;
          break;

        case 5:
          _context2.prev = 5;
          _context2.t0 = _context2["catch"](0);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this, [[0, 5]]);
}

/***/ }),

/***/ "./lib/dynamicStore/checkStore.js":
/*!****************************************!*\
  !*** ./lib/dynamicStore/checkStore.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkStore; });
/* harmony import */ var lodash_conformsTo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/conformsTo */ "lodash/conformsTo");
/* harmony import */ var lodash_conformsTo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_conformsTo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isFunction */ "lodash/isFunction");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isObject */ "lodash/isObject");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! invariant */ "invariant");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_3__);




/**
 * Validate the shape of redux store
 *  @param {Object} store The store to verify
 */

function checkStore(store) {
  var shape = {
    dispatch: lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default.a,
    subscribe: lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default.a,
    getState: lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default.a,
    replaceReducer: lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default.a,
    runSaga: lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default.a,
    injectedReducers: lodash_isObject__WEBPACK_IMPORTED_MODULE_2___default.a,
    injectedSagas: lodash_isObject__WEBPACK_IMPORTED_MODULE_2___default.a
  };
  invariant__WEBPACK_IMPORTED_MODULE_3___default()(lodash_conformsTo__WEBPACK_IMPORTED_MODULE_0___default()(store, shape), 'checkStore: Expected a valid redux store');
}

/***/ }),

/***/ "./lib/dynamicStore/configureStore.js":
/*!********************************************!*\
  !*** ./lib/dynamicStore/configureStore.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "@babel/runtime/helpers/typeof");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducers */ "./lib/dynamicStore/reducers.js");
/* harmony import */ var _global_saga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../global/saga */ "./global/saga/index.js");










var sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_6___default()();
var middlewares = [sagaMiddleware];
var enhancers = [redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"].apply(void 0, middlewares)]; // Choose compose method depending upon environment and platform

var composeEnhancers = "development" !== 'production' && (typeof window === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(window)) === 'object' ? redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__["composeWithDevTools"] : redux__WEBPACK_IMPORTED_MODULE_3__["compose"];
/**
 * Create redux store with the middlewares and enhancers
 *
 * @param {Object} options
 * @param {Object} options.key - Unique key to recognize the page component
 * @param {Object} options.reducer - Reducers associated with the page commponent
 * @param {Object} options.saga - Sagas associated with the page commponent
 */

/* harmony default export */ __webpack_exports__["default"] = (function (options) {
  return function (BaseComponent) {
    var hasKey = !!options.key;
    if (!hasKey) throw new Error("".concat(BaseComponent.displayName, " needs to be passed with a key"));
    var hasReducer = !!options.reducer;
    var hasSaga = !!options.saga;
    var reducer = hasKey && hasReducer ? _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, options.key, options.reducer) : {};

    var configureStore = function configureStore() {
      var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(Object(_reducers__WEBPACK_IMPORTED_MODULE_8__["default"])(reducer), Object(immutable__WEBPACK_IMPORTED_MODULE_5__["fromJS"])(initialState), composeEnhancers.apply(void 0, enhancers)); // Keep access to 'run' method of saga task in store so thats its available globally with store

      store.runSaga = sagaMiddleware.run; // Keep record of reducer injected in store associated with unique key

      store.injectedReducers = reducer;

      if (_global_saga__WEBPACK_IMPORTED_MODULE_9__["default"]) {
        // Run global saga and keep the task returned by running saga to access later while cancelling
        store.globalSaga = {
          globalSaga: _global_saga__WEBPACK_IMPORTED_MODULE_9__["default"],
          task: store.runSaga(_global_saga__WEBPACK_IMPORTED_MODULE_9__["default"])
        };
      } // Keep record of saga injected in store associated with unique key


      store.injectedSagas = {};

      if (hasSaga) {
        // Run saga and keep the task returned by running saga to access later while cancelling
        store.injectedSagas[options.key] = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, options.saga, {
          task: store.runSaga(options.saga)
        });
      }

      return store;
    };

    return next_redux_wrapper__WEBPACK_IMPORTED_MODULE_7___default()(configureStore)(BaseComponent);
  };
});

/***/ }),

/***/ "./lib/dynamicStore/constants.js":
/*!***************************************!*\
  !*** ./lib/dynamicStore/constants.js ***!
  \***************************************/
/*! exports provided: RESTART_ON_REMOUNT, DAEMON, ONCE_TILL_UNMOUNT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESTART_ON_REMOUNT", function() { return RESTART_ON_REMOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAEMON", function() { return DAEMON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONCE_TILL_UNMOUNT", function() { return ONCE_TILL_UNMOUNT; });
var RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
var DAEMON = '@@saga-injector/daemon';
var ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

/***/ }),

/***/ "./lib/dynamicStore/enhance.js":
/*!*************************************!*\
  !*** ./lib/dynamicStore/enhance.js ***!
  \*************************************/
/*! exports provided: getWrapperComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWrapperComponent", function() { return getWrapperComponent; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _configureStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./configureStore */ "./lib/dynamicStore/configureStore.js");
/* harmony import */ var _monitorSagas__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./monitorSagas */ "./lib/dynamicStore/monitorSagas.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/logger */ "./utils/logger.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_utils_logger__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../constants */ "./constants/index.js");
/* harmony import */ var _global_actions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../global/actions */ "./global/actions/index.js");
/* harmony import */ var _global_reducer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../global/reducer */ "./global/reducer/index.js");
/* harmony import */ var _injectSagaAndReducer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./injectSagaAndReducer */ "./lib/dynamicStore/injectSagaAndReducer.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../utils/utils */ "./utils/utils.js");











/**
 * Enhance is a one of the crucial utility methods that this framework provides.
 * All page level component need to be wrapped within this method.
 *
 * - "enhance" function is used here which creates a High Order Component over the provided
 * page level component and connects itself to a Redux store.
 * - It internally has the definition of the "getInitialProps" function which will synchronously
 * be called by Next.js which has access to store and request objects from server.
 * - The High Order Component which injects the global reducer and saga (if any) that are
 * associated with that page level component in its "getInitialProps" lifecycle hook.
 * - It also then waits for the page level sagas to yield. We have a "monitorSagas"
 * function which will wait till the done property of all running sagas are resolved/rejected.
 * - "enhance" function basically creates a High Order Component and connects it to the redux store
 * taking in "mapStateToProps" and "mapDispatchToProps".
 *
 * Details: [docs/PageLevelComponents_Enhance.md]
 */













var logger = _utils_logger__WEBPACK_IMPORTED_MODULE_16___default.a.getLogger(); // List of headers to be extracted before forwarding to the respective
// endpoints from the application

var headerExclusionList = ['host', 'accept', 'content-length', 'content-type', 'connection', 'cookie'];
/**
 * Method to remove the headers present in the "headerExclusionList"
 *
 * @param {Object} requestHeaders Headers object received from the request
 */

var cleanupRequestHeaders = function cleanupRequestHeaders(requestHeaders) {
  if (!requestHeaders) {
    return null;
  }

  var requestHeadersCopy = Object.assign({}, requestHeaders);
  headerExclusionList.forEach(function (header) {
    delete requestHeadersCopy[header];
  }); // Alternative header for user agent

  requestHeadersCopy['x-ua-browser'] = requestHeaders['user-agent'];
  return requestHeadersCopy;
};

var getWrapperComponent = function getWrapperComponent(WrappedComponent, _ref) {
  var key = _ref.key,
      reducer = _ref.reducer,
      saga = _ref.saga,
      initialActions = _ref.initialActions,
      useQuery = _ref.useQuery,
      criticalState = _ref.criticalState,
      preExecuteGetInitialProps = _ref.preExecuteGetInitialProps;
  return (
    /*#__PURE__*/
    function (_Component) {
      _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(WrapperComponent, _Component);

      function WrapperComponent() {
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, WrapperComponent);

        return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(WrapperComponent).apply(this, arguments));
      }

      _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(WrapperComponent, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(WrappedComponent, this.props);
        }
      }], [{
        key: "addRequestDetails",

        /**
         * Method to add the request details to the action object
         *
         * @param {Object} action Action object
         * @param {Object} requestDetails Request object of incoming request
         */
        value: function addRequestDetails(action, requestDetails) {
          return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({}, action, {
            requestDetails: requestDetails
          });
        }
        /**
         * Method to validate if critical data required for the page is present based on which
         * page is rendered or user redirected to an error page
         *
         * @param {Object} storeStruct Structure of the critical data required for page
         * @param {Object} res Response object from incoming request for necessary redirects etc.
         * @param {Object} store Redux store of the application
         * @param {boolean} isServer Flag to indicate server/client
         */

      }, {
        key: "validatePageData",
        value: function validatePageData(storeStruct, res, store, isServer) {
          if (storeStruct && storeStruct.length > 0) {
            var currentState = store.getState();
            var missingDataList = [];

            _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(storeStruct).concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(_global_reducer__WEBPACK_IMPORTED_MODULE_19__["globalDataStructure"])).forEach(function (requiredDataPath) {
              try {
                if (!currentState.getIn(requiredDataPath)) {
                  missingDataList.push(requiredDataPath);
                }
              } catch (e) {
                missingDataList.push(requiredDataPath);
              }
            });

            if (missingDataList.length > 0) {
              logger.error("".concat(WrapperComponent.displayName, " - Component failed to recieve critical data"), JSON.stringify(missingDataList));

              if (isServer) {
                res.redirect(_constants__WEBPACK_IMPORTED_MODULE_17__["API_ERROR_HANDLER_PAGE"]);
              } else {
                next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push(_constants__WEBPACK_IMPORTED_MODULE_17__["API_ERROR_HANDLER_PAGE"]);
              }
            }
          }
        }
        /**
         * Method to dispatch all page level actions provided to the "enhance" method
         *
         * @param {Array} param.actions Array of action objects at page level
         * @param {Object} param.store Redux store object
         * @param {boolean} param.needQuery Flag to indicate if the actions need the query params
         * @param {Object} param.query Query params of the incoming request
         * @param {Object} param.requestDetails Object containing details of incoming request
         */

      }, {
        key: "dispatchActions",
        value: function dispatchActions(_ref2) {
          var actions = _ref2.actions,
              store = _ref2.store,
              needQuery = _ref2.needQuery,
              query = _ref2.query,
              requestDetails = _ref2.requestDetails;
          actions.map(function (action) {
            return store.dispatch(typeof action === 'function' ? WrapperComponent.addRequestDetails(action(needQuery ? query : undefined), requestDetails) : WrapperComponent.addRequestDetails({
              type: action,
              query: needQuery ? query : undefined
            }, requestDetails));
          });
        }
      }, {
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
            var initialParams,
                store,
                isServer,
                req,
                query,
                res,
                pathname,
                asPath,
                requestDetails,
                clientParams,
                deviceType,
                isTablet,
                combinedPageActions,
                _args = arguments;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    initialParams = _args.length <= 0 ? undefined : _args[0];
                    store = initialParams.store, isServer = initialParams.isServer, req = initialParams.req, query = initialParams.query, res = initialParams.res, pathname = initialParams.pathname, asPath = initialParams.asPath;
                    Object(_injectSagaAndReducer__WEBPACK_IMPORTED_MODULE_20__["default"])(key, store, saga, reducer);
                    store.dispatch(_global_actions__WEBPACK_IMPORTED_MODULE_18__["serverActions"].setCurrentRoute(pathname));
                    clientParams = {};

                    if (isServer) {
                      deviceType = req.device.type === _constants__WEBPACK_IMPORTED_MODULE_17__["PHONE"] ? _constants__WEBPACK_IMPORTED_MODULE_17__["MOBILE"] : _constants__WEBPACK_IMPORTED_MODULE_17__["DESKTOP"];
                      isTablet = req.device.type === _constants__WEBPACK_IMPORTED_MODULE_17__["TABLET"];
                      store.dispatch(_global_actions__WEBPACK_IMPORTED_MODULE_18__["serverActions"].addIsTablet(isTablet));
                      store.dispatch(_global_actions__WEBPACK_IMPORTED_MODULE_18__["serverActions"].addDeviceType(deviceType));
                      store.dispatch(_global_actions__WEBPACK_IMPORTED_MODULE_18__["serverActions"].setPageUrl(req.url));
                      store.dispatch(_global_actions__WEBPACK_IMPORTED_MODULE_18__["serverActions"].setPageQuery(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({}, req.query, query)));
                      store.dispatch(_global_actions__WEBPACK_IMPORTED_MODULE_18__["serverActions"].setPageOrigin("".concat(req.protocol, "://").concat(req.headers.host)));
                      requestDetails = {
                        deviceType: deviceType,
                        cookies: req.cookies.cookieList,
                        logger: req.perfLogger,
                        whitelistedHeaders: cleanupRequestHeaders(req.headers)
                      };
                    } else {
                      clientParams = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_21__["parseQueryParams"])(asPath);
                      store.dispatch(_global_actions__WEBPACK_IMPORTED_MODULE_18__["serverActions"].setPageQuery(clientParams));
                      requestDetails = {
                        deviceType: store.getState().getIn(['global', 'globalData', 'deviceType'])
                      };
                    }

                    if (!(preExecuteGetInitialProps && WrappedComponent.getInitialProps)) {
                      _context.next = 9;
                      break;
                    }

                    _context.next = 9;
                    return WrappedComponent.getInitialProps.apply(WrappedComponent, _args);

                  case 9:
                    if (isServer && _global_actions__WEBPACK_IMPORTED_MODULE_18__["default"] instanceof Array) {
                      WrapperComponent.dispatchActions({
                        actions: _global_actions__WEBPACK_IMPORTED_MODULE_18__["default"],
                        store: store,
                        needQuery: useQuery,
                        query: query,
                        requestDetails: requestDetails
                      });
                    }

                    combinedPageActions = initialActions instanceof Array ? _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(_global_actions__WEBPACK_IMPORTED_MODULE_18__["pageActions"]).concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(initialActions)) : _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(_global_actions__WEBPACK_IMPORTED_MODULE_18__["pageActions"]);
                    WrapperComponent.dispatchActions({
                      actions: combinedPageActions,
                      store: store,
                      needQuery: useQuery,
                      query: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({}, query, clientParams),
                      requestDetails: requestDetails
                    }); // Wait till all sagas are done

                    _context.next = 14;
                    return Object(_monitorSagas__WEBPACK_IMPORTED_MODULE_15__["default"])(store, isServer);

                  case 14:
                    WrapperComponent.validatePageData(criticalState, res, store, isServer);

                    if (!(!preExecuteGetInitialProps && WrappedComponent.getInitialProps)) {
                      _context.next = 18;
                      break;
                    }

                    _context.next = 18;
                    return WrappedComponent.getInitialProps.apply(WrappedComponent, _args);

                  case 18:
                    return _context.abrupt("return", {
                      isServer: isServer
                    });

                  case 19:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function getInitialProps() {
            return _getInitialProps.apply(this, arguments);
          };
        }()
      }]);

      return WrapperComponent;
    }(react__WEBPACK_IMPORTED_MODULE_9__["Component"])
  );
};
/**
 * Create a high order component to initialize store with reducers and sagas
 * for the page level component
 *
 * @param {Object} WrappedComponent Page level component to be wrapped with HOC
 * @param {Object} config Configuration
 * @param {function} config.mapStateToProps Map properties from state to props
 * @param {function} config.mapDispatchToProps Map dispatch method for the component
 * @param {string} config.key Unique key identifying the page level component and
 * hence its saga and reducer
 * @param {Objext} config.reducer Root reducer for the given page level component
 * @param {Objext} config.saga Root saga for the given page level component
 */

/* harmony default export */ __webpack_exports__["default"] = (function (WrappedComponent, _ref3) {
  var mapStateToProps = _ref3.mapStateToProps,
      mapDispatchToProps = _ref3.mapDispatchToProps,
      key = _ref3.key,
      reducer = _ref3.reducer,
      saga = _ref3.saga,
      initialActions = _ref3.initialActions,
      useQuery = _ref3.useQuery,
      criticalState = _ref3.criticalState;
  var WrapperComponent = getWrapperComponent(WrappedComponent, {
    key: key,
    reducer: reducer,
    saga: saga,
    initialActions: initialActions,
    useQuery: useQuery,
    criticalState: criticalState
  }); // Move all non react specific static properties from WrappedComponent to WrapperComponent

  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_12___default()(WrapperComponent, WrappedComponent, {
    getInitialProps: true
  }); // Give a unique identifier to the new high horder component

  WrapperComponent.displayName = "enhanced(".concat(WrappedComponent.displayName || WrappedComponent.name || 'Component', ")");
  var withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps);
  var withRedux = Object(_configureStore__WEBPACK_IMPORTED_MODULE_14__["default"])({
    key: key,
    reducer: reducer,
    saga: saga
  });
  return Object(redux__WEBPACK_IMPORTED_MODULE_11__["compose"])(withRedux, withConnect)(WrapperComponent);
});

/***/ }),

/***/ "./lib/dynamicStore/index.js":
/*!***********************************!*\
  !*** ./lib/dynamicStore/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enhance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enhance */ "./lib/dynamicStore/enhance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _enhance__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./lib/dynamicStore/injectSagaAndReducer.js":
/*!**************************************************!*\
  !*** ./lib/dynamicStore/injectSagaAndReducer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "@babel/runtime/helpers/typeof");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "invariant");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isString */ "lodash/isString");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/each */ "lodash/each");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sagaInjectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sagaInjectors */ "./lib/dynamicStore/sagaInjectors.js");
/* harmony import */ var _reducerInjectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducerInjectors */ "./lib/dynamicStore/reducerInjectors.js");






/* harmony default export */ __webpack_exports__["default"] = (function (key, store, saga, reducer) {
  invariant__WEBPACK_IMPORTED_MODULE_1___default()(lodash_isString__WEBPACK_IMPORTED_MODULE_2___default()(key), "injectSagaAndReducer.js: Expected \"key\" to be a string, found it to be ".concat(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(key)));

  var _getReducerInjectors = Object(_reducerInjectors__WEBPACK_IMPORTED_MODULE_5__["default"])(store),
      injectReducer = _getReducerInjectors.injectReducer;

  var _getSagaInjectors = Object(_sagaInjectors__WEBPACK_IMPORTED_MODULE_4__["default"])(store),
      injectSaga = _getSagaInjectors.injectSaga,
      ejectSaga = _getSagaInjectors.ejectSaga;

  lodash_each__WEBPACK_IMPORTED_MODULE_3___default()(store.injectedSagas, function (sagas, sagaName) {
    ejectSaga(sagaName); // eslint-disable-next-line no-param-reassign

    delete store.injectedSagas[sagaName];
  });
  if (reducer) injectReducer(key, reducer);
  if (saga) injectSaga(key, {
    saga: saga
  });
});

/***/ }),

/***/ "./lib/dynamicStore/monitorSagas.js":
/*!******************************************!*\
  !*** ./lib/dynamicStore/monitorSagas.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return monitorSagas; });
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "lodash/each");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sagaInjectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sagaInjectors */ "./lib/dynamicStore/sagaInjectors.js");



/**
 * @function monitorSagas - Wait till all sagas have been done
 * @param {Object} store
 * @returns {Promise}
 */

function monitorSagas(store, isServer) {
  var shouldDispatchEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var allTasks = [store.globalSaga.task];
  if (shouldDispatchEnd) store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_1__["END"]);
  lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(store.injectedSagas, function (saga) {
    allTasks.push(saga.task);
  });
  return Promise.all(allTasks.map(function (t) {
    return t.done;
  })).then(function () {
    if (!isServer && shouldDispatchEnd) {
      var _getSagaInjectors = Object(_sagaInjectors__WEBPACK_IMPORTED_MODULE_2__["default"])(store),
          injectSaga = _getSagaInjectors.injectSaga;

      lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(store.injectedSagas, function (descriptor, key) {
        var saga = descriptor.saga;
        injectSaga(key, {
          saga: saga
        });
      });
      store.runSaga(store.globalSaga.globalSaga);
    }
  });
}

/***/ }),

/***/ "./lib/dynamicStore/reducerInjectors.js":
/*!**********************************************!*\
  !*** ./lib/dynamicStore/reducerInjectors.js ***!
  \**********************************************/
/*! exports provided: injectReducerFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectReducerFactory", function() { return injectReducerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getInjectors; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "invariant");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "lodash/isEmpty");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isFunction */ "lodash/isFunction");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isString */ "lodash/isString");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _checkStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkStore */ "./lib/dynamicStore/checkStore.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "./lib/dynamicStore/reducers.js");






/**
 * @function injectReducerFactory
 * @param {Object} store
 * @param {boolean} isValid - Prechecked if store is valid
 * @returns {function}
 */

function injectReducerFactory(store, isValid) {
  /**
   * @function injectReducer
   * @param {string} key - Unique key saga
   * @param {Object} reducer
   */
  function injectReducer(key, reducer) {
    if (!isValid) Object(_checkStore__WEBPACK_IMPORTED_MODULE_4__["default"])(store);
    invariant__WEBPACK_IMPORTED_MODULE_0___default()(lodash_isString__WEBPACK_IMPORTED_MODULE_3___default()(key) && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(key) && lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()(reducer), 'reducerInjector.js: Expected `reducer` to be a reducer function'); // Check `store.injectedReducers[key] === reducer` for hot
    // reloading when a key is the same but a reducer is different

    if (Object.prototype.hasOwnProperty.call(store.injectedReducers, key) && store.injectedReducers[key] === reducer) {
      return;
    }

    store.injectedReducers[key] = reducer; // eslint-disable-line no-param-reassign

    store.replaceReducer(Object(_reducers__WEBPACK_IMPORTED_MODULE_5__["default"])(store.injectedReducers));
  }

  return injectReducer;
}
/**
 * @typedef {Object} ReducerInjectors
 * @property {function} injectReducer
 * @property {function} ejectSaga
 */

/**
 * @function getInjectors
 * @param {Object} store
 * @returns {ReducerInjectors}
 */

function getInjectors(store) {
  Object(_checkStore__WEBPACK_IMPORTED_MODULE_4__["default"])(store);
  return {
    injectReducer: injectReducerFactory(store, true)
  };
}

/***/ }),

/***/ "./lib/dynamicStore/reducers.js":
/*!**************************************!*\
  !*** ./lib/dynamicStore/reducers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createReducer; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/reducer */ "./global/reducer/index.js");



/**
 * @function createReducer - Combine reducer for given page level component with global ones
 * @param {Object} injectedReducers
 * @returns {function}
 */

function createReducer(injectedReducers) {
  return Object(redux_immutable__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
    global: _global_reducer__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, injectedReducers));
}

/***/ }),

/***/ "./lib/dynamicStore/sagaInjectors.js":
/*!*******************************************!*\
  !*** ./lib/dynamicStore/sagaInjectors.js ***!
  \*******************************************/
/*! exports provided: injectSagaFactory, ejectSagaFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectSagaFactory", function() { return injectSagaFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ejectSagaFactory", function() { return ejectSagaFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getInjectors; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "lodash/isEmpty");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isFunction */ "lodash/isFunction");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isString */ "lodash/isString");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! invariant */ "invariant");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_conformsTo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/conformsTo */ "lodash/conformsTo");
/* harmony import */ var lodash_conformsTo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_conformsTo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _checkStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkStore */ "./lib/dynamicStore/checkStore.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./lib/dynamicStore/constants.js");








var allowedModes = [_constants__WEBPACK_IMPORTED_MODULE_7__["RESTART_ON_REMOUNT"], _constants__WEBPACK_IMPORTED_MODULE_7__["DAEMON"], _constants__WEBPACK_IMPORTED_MODULE_7__["ONCE_TILL_UNMOUNT"]];
/**
 * Check if key is empty
 * @param {string} key
 */

var checkKey = function checkKey(key) {
  return invariant__WEBPACK_IMPORTED_MODULE_4___default()(lodash_isString__WEBPACK_IMPORTED_MODULE_3___default()(key) && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(key), 'sagaInjector.js : Expected `key` to be a non empty string');
};
/**
 * Check if the saga is a function and the mode for that saga is the ones from allowedModes
 * @param {Object} descriptor
 * @param {function} descriptor.saga - The saga to be verified
 * @param {string} descriptor.mode - The mode passed for the given saga
 */


var checkDescriptor = function checkDescriptor(descriptor) {
  var shape = {
    saga: lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default.a,
    mode: function mode(_mode) {
      return lodash_isString__WEBPACK_IMPORTED_MODULE_3___default()(_mode) && allowedModes.indexOf(_mode) > -1;
    }
  };
  invariant__WEBPACK_IMPORTED_MODULE_4___default()(lodash_conformsTo__WEBPACK_IMPORTED_MODULE_5___default()(descriptor, shape), 'sagaInjector.js : Expected a valid saga descriptor');
};
/**
 * @function injectSagaFactory
 * @param {Object} store
 * @param {boolean} isValid - Prechecked if store is valid
 * @returns {function}
 */


function injectSagaFactory(store, isValid) {
  /**
   * @function injectSaga
   * @param {string} key - Unique key saga
   * @param {Object} descriptor
   * @param {Object} descriptor.saga
   * @param {string} descriptor.mode
   * @param {Object} args
   */
  function injectSaga(key) {
    var descriptor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var args = arguments.length > 2 ? arguments[2] : undefined;
    if (!isValid) Object(_checkStore__WEBPACK_IMPORTED_MODULE_6__["default"])(store); // if mode is not present then default is RESTART_ON_REMOUNT

    var newDescriptor = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, descriptor, {
      mode: descriptor.mode || _constants__WEBPACK_IMPORTED_MODULE_7__["RESTART_ON_REMOUNT"]
    });

    var saga = newDescriptor.saga,
        mode = newDescriptor.mode;
    checkKey(key);
    checkDescriptor(newDescriptor);
    var hasSaga = Object.prototype.hasOwnProperty.call(store.injectedSagas, key); // When the environment is development then we need to cancel daemon and once-till-unmount sagas

    if (true) {
      var oldDescriptor = store.injectedSagas[key]; // enable hot reloading of daemon and once-till-unmount sagas

      if (hasSaga && oldDescriptor.saga !== saga) {
        oldDescriptor.task.cancel();
        hasSaga = false;
      }
    }

    if (!hasSaga || hasSaga && mode !== _constants__WEBPACK_IMPORTED_MODULE_7__["DAEMON"] && mode !== _constants__WEBPACK_IMPORTED_MODULE_7__["ONCE_TILL_UNMOUNT"]) {
      // eslint-disable-next-line no-param-reassign
      store.injectedSagas[key] = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, newDescriptor, {
        task: store.runSaga(saga, args)
      });
    }
  }

  return injectSaga;
}
/**
 * @function ejectSagaFactory
 * @param {Object} store
 * @param {boolean} isValid - Prechecked if store is valid
 * @returns {function}
 */

function ejectSagaFactory(store, isValid) {
  /**
   * @function ejectSaga
   * @param {string} key - Unique key saga
   */
  function ejectSaga(key) {
    if (!isValid) Object(_checkStore__WEBPACK_IMPORTED_MODULE_6__["default"])(store);
    checkKey(key);

    if (Object.prototype.hasOwnProperty.call(store.injectedSagas, key)) {
      var descriptor = store.injectedSagas[key]; // We do not cancel Daemon tasks

      if (descriptor.mode !== _constants__WEBPACK_IMPORTED_MODULE_7__["DAEMON"]) {
        descriptor.task.cancel(); // Clean up in production; in development we need `descriptor.saga` for hot reloading

        if (false) {}
      }
    }
  }

  return ejectSaga;
}
/**
 * @typedef {Object} SagaInjectors
 * @property {function} injectSaga
 * @property {function} ejectSaga
 */

/**
 * @function getInjectors
 * @param {Object} store
 * @returns {SagaInjectors}
 */

function getInjectors(store) {
  Object(_checkStore__WEBPACK_IMPORTED_MODULE_6__["default"])(store);
  return {
    injectSaga: injectSagaFactory(store, true),
    ejectSaga: ejectSagaFactory(store, true)
  };
}

/***/ }),

/***/ "./lib/withStyles/index.js":
/*!*********************************!*\
  !*** ./lib/withStyles/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* The component send styles in form of an object
e.g. withStyles(WrappedComponent, {
  [DESKTOP] : <desktop styles>
  [MOBILE] : <mobile styles>
});

Note: Keys are defined in constants

If the component doesn't want to send 2 styles, it can send styles directly and not as keyed object.
*/

/* harmony default export */ __webpack_exports__["default"] = (function (WrappedComponent, styles) {
  return styled_components__WEBPACK_IMPORTED_MODULE_0___default()(WrappedComponent).withConfig({
    displayName: "withStyles",
    componentId: "sc-4wveuc-0"
  })(["", ";", ";"], function (props) {
    return styles ? styles[props.theme.deviceType] || styles : '';
  }, function (props) {
    if (!props.inheritedStyles) return '';
    if (props.inheritedStyles instanceof Array) return props.inheritedStyles;
    return props.inheritedStyles[props.theme.deviceType] || props.inheritedStyles || '';
  });
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_templates_HomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/templates/HomePage */ "./components/templates/HomePage/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _components_templates_HomePage__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./styles/theme/colors.js":
/*!********************************!*\
  !*** ./styles/theme/colors.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Region Colors
/* harmony default export */ __webpack_exports__["default"] = ({
  BLUE: 'blue',
  GREY: 'grey',
  WHITE_SMOKE: 'whitesmoke',
  YELLOW: 'yellow',
  RED: 'red',
  BLACK: '#000000',
  BLACK_2: '#100000',
  WHITE: '#ffffff',
  PURPLE: '#bd10e0',
  LIGHT_GREY_1: '#717171',
  LIGHT_GREY_2: '#f5f5f5',
  LIGHT_GREY_3: '#d8d8d8',
  LIGHT_GREY_4: '#aeaeae',
  LIGHT_GREY_5: '#eeeeee',
  LIGHT_GREY_6: '#ececec',
  LIGHT_GREY_7: '#979797',
  LIGHT_GREY_8: '#cccccc',
  LIGHT_GREY_9: '#f3f3f3',
  LIGHT_GREY_10: '#cdcdcd',
  LIGHT_GREY_11: '#f4f4f4',
  LIGHT_GREY_12: '#757575',
  DARK_GREY_1: '#c2c2c2',
  DARK_GREY_2: '#d6d6d6',
  DARK_GREY_3: '#484848',
  DARK_GREY_4: '#888888',
  DARK_GREY_5: '#bebebe',
  DARK_GREY_6: '#404040',
  ERROR_RED: '#c44f4f',
  SUCCESS_GREEN: '#2e993a',
  SUCCESS_GREEN_1: '#009600',
  SUCCESS_GREEN_2: '#00ad99',
  SUCCESS_GREEN_3: '#009000',
  PPH_BACKGROUND: '#95a8af',
  PPH_TEXT: '#ffffff',
  TEXT_FIELD_BORDER: '#717171',
  BACKGROUND_DARK_GREY: '#4e565f',
  BORDER_LIGHT_GREY: '#bfbfbf',
  BORDER_LIGHT_GREY_2: '#c4c4c4',
  INPUT_PLACEHOLDER: '#aaaaaa',
  INPUT_PLACEHOLDER_2: '#767676',
  BACKGROUND_LIGHT_GREY: '#efefef',
  DARK_PRIMARY_GREY: '#666',
  LIGHTEST_PRIMARY_GREY: '#999',
  DARKEST_SECONDARY_GREY: '#ccc',
  MEDIUM_SECONDARY_GREY: '#eee',
  SALE: '#ff6666',
  ERROR_MESSAGE_RED: '#c60e0e',
  PROMO_RED: '#c44f4f',
  HEADER_SHADOW_GREY: 'rgba(145,145,145,0.4)',
  DISABLE_COLOR: '#cfcfcf'
});

/***/ }),

/***/ "./styles/theme/index.js":
/*!*******************************!*\
  !*** ./styles/theme/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./styles/theme/colors.js");
/* harmony import */ var _zIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zIndex */ "./styles/theme/zIndex.js");


var theme = {
  primaryColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].WHITE_SMOKE
};
var themes = {
  zIndex: _zIndex__WEBPACK_IMPORTED_MODULE_1__["default"],
  theme: theme
};
/* harmony default export */ __webpack_exports__["default"] = (themes);

/***/ }),

/***/ "./styles/theme/zIndex.js":
/*!********************************!*\
  !*** ./styles/theme/zIndex.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// z-index
/* harmony default export */ __webpack_exports__["default"] = ({
  zLoader: 1000,
  zOverlay: 900,
  zMenu: 800,
  zSticky: 700,
  zFilterList: 150,
  zFilterActions: 400,
  zFlyout: 200,
  zFilter: 100,
  zNativeTickSelectIcon: 50,
  zPlacesAutocomplete: 1100
});

/***/ }),

/***/ "./utils/cacheableServices.js":
/*!************************************!*\
  !*** ./utils/cacheableServices.js ***!
  \************************************/
/*! exports provided: CACHEABLE_SERVICES_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CACHEABLE_SERVICES_LIST", function() { return CACHEABLE_SERVICES_LIST; });
/* harmony import */ var _servicesCache_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./servicesCache.config */ "./utils/servicesCache.config.js");
 // Array for quick loop if the service is cacheable

/* eslint-disable-next-line import/prefer-default-export */

var CACHEABLE_SERVICES_LIST = _servicesCache_config__WEBPACK_IMPORTED_MODULE_0__["default"].map(function (service) {
  return service.url;
});

/***/ }),

/***/ "./utils/fetch.js":
/*!************************!*\
  !*** ./utils/fetch.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! es6-promise */ "es6-promise");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _server_utils_proxyAgent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../server/utils/proxyAgent */ "../server/utils/proxyAgent.js");
/* harmony import */ var _server_utils_proxyAgent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_server_utils_proxyAgent__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/logger */ "./utils/logger.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_logger__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constants */ "./constants/index.js");
/* harmony import */ var _cacheableServices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cacheableServices */ "./utils/cacheableServices.js");













var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_7___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var API_HOSTS = __webpack_require__(/*! ../../API_HOST */ "../API_HOST.json").environment;

var logger = _utils_logger__WEBPACK_IMPORTED_MODULE_9___default.a.getLogger();
es6_promise__WEBPACK_IMPORTED_MODULE_6___default.a.polyfill();

var ServiceUtils =
/*#__PURE__*/
function () {
  function ServiceUtils() {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, ServiceUtils);

    this.fetch =
    /*#__PURE__*/
    function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url, actionObject, additionalFetchOptions) {
        var headers, fetchUrl, start, perfLogger, response, responseData, isCacheableService, apiTimeout, isClient, cachedResponse, reqOptions;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                headers = {};
                start = Date.now();
                response = {};
                isCacheableService = _cacheableServices__WEBPACK_IMPORTED_MODULE_11__["CACHEABLE_SERVICES_LIST"].indexOf(url.split('?')[0]) !== -1 && publicRuntimeConfig.isCachingEnabled;
                apiTimeout = +process.env.API_TIMEOUT;
                isClient = typeof window !== 'undefined';

                if (!isClient) {
                  _context.next = 10;
                  break;
                }

                // Client-side call
                fetchUrl = ServiceUtils.appendParams("".concat(_this.clientPathPrefix).concat(url));
                _context.next = 28;
                break;

              case 10:
                if (actionObject && actionObject.type) {
                  _context.next = 14;
                  break;
                }

                throw new Error("Oh oh, maybe you forgot adding your action object to your fetch in your saga with url ".concat(url, "?"));

              case 14:
                // Server-side call with proper action object from initial actions
                headers = {
                  // Cookie: actionObject.requestDetails.cookies || '',
                  'secret-key': '$2a$10$f43a7fmsIv/2DNbFTzfiyeGv1mORmjYNbTqqCM.BJ/JuaIxFHZ.Ou' // ...actionObject.requestDetails.whitelistedHeaders,

                };
                perfLogger = actionObject.requestDetails.logger;
                fetchUrl = ServiceUtils.appendParams("".concat(_this.serverPathPrefix).concat(url), actionObject.requestDetails);
                _context.prev = 17;

                if (!isCacheableService) {
                  _context.next = 23;
                  break;
                }

                cachedResponse = global.servicesCache.get("".concat(fetchUrl));

                if (!(cachedResponse !== null)) {
                  _context.next = 23;
                  break;
                }

                perfLogger.log('error', "[PERFLOG] [CACHE: HIT] URL: ".concat(fetchUrl, " Elapsed Time: ").concat(Date.now() - start, "ms"));
                return _context.abrupt("return", cachedResponse);

              case 23:
                _context.next = 28;
                break;

              case 25:
                _context.prev = 25;
                _context.t0 = _context["catch"](17);
                logger.error("[CACHE] Failed to fetch from cache: ".concat(fetchUrl), _context.t0);

              case 28:
                // Request options in axios format
                reqOptions = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({
                  url: fetchUrl,
                  headers: headers,
                  timeout: apiTimeout,
                  withCredentials: true
                }, additionalFetchOptions); // Add https agent for requests that start with https protocol in url

                if (fetchUrl.startsWith('https')) {
                  reqOptions.agent = _server_utils_proxyAgent__WEBPACK_IMPORTED_MODULE_8___default.a.https;
                }

                _context.prev = 30;
                _context.next = 33;
                return axios__WEBPACK_IMPORTED_MODULE_5___default()(reqOptions);

              case 33:
                response = _context.sent;
                responseData = response.data;
                _context.next = 40;
                break;

              case 37:
                _context.prev = 37;
                _context.t1 = _context["catch"](30);
                responseData = {
                  status: _constants__WEBPACK_IMPORTED_MODULE_10__["RESPONSE_SERVER_ERROR"],
                  error: _context.t1.message
                };

              case 40:
                try {
                  if (!isClient && response.status === _constants__WEBPACK_IMPORTED_MODULE_10__["RESPONSE_OK"] && isCacheableService) {
                    global.servicesCache.put( // Cache in the form "service_cache:<url>"
                    "".concat(fetchUrl), // Cacheable response data
                    responseData);
                  }
                } catch (err) {
                  logger.error("[CACHE] Failed to cache: ".concat(fetchUrl), err);
                }

                if (perfLogger) {
                  perfLogger.log('error', "[PERFLOG] [SERVICE] ".concat(isCacheableService ? '[CACHE: MISS]' : '', " Status: ").concat(response.status, " Method: ").concat(reqOptions.method || 'GET', " URL: ").concat(fetchUrl, " Elapsed Time: ").concat(Date.now() - start, "ms"));
                }

                return _context.abrupt("return", responseData);

              case 43:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[17, 25], [30, 37]]);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }();

    this.envApiKey = process.env.ENV_API_KEY || '';
    this.environment = "development" || _constants__WEBPACK_IMPORTED_MODULE_10__["ENV_DEVELOPMENT"];
    this.clientPathPrefix = "/api" || '';
    this.serverPathPrefix = "https://api.jsonbin.io" || '';
    this.currentDevice = _constants__WEBPACK_IMPORTED_MODULE_10__["DESKTOP"];
    /**
     * Condition checks:
     * 1. API hosts map is available on the root
     * 2. environment variable defined for <host_datacenter>
     * 3. <host_datacenter> entry available in hosts file
     */

    if (typeof API_HOSTS !== 'undefined' && this.envApiKey && typeof API_HOSTS[this.envApiKey] !== 'undefined') {
      this.serverPathPrefix = API_HOSTS[this.envApiKey];
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(ServiceUtils, [{
    key: "setDeviceType",
    value: function setDeviceType(device) {
      this.currentDevice = device;
    }
  }, {
    key: "getServerPathPrefix",
    value: function getServerPathPrefix() {
      return this.serverPathPrefix;
    }
  }], [{
    key: "appendParams",
    value: function appendParams(url, requestData) {
      var appendedURL = url;

      if (requestData) {
        if (url.indexOf('?') < 0) appendedURL = url.concat('?');
        appendedURL = appendedURL.concat("device=".concat(requestData.deviceType));
      }

      return appendedURL;
    }
  }]);

  return ServiceUtils;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ServiceUtils());

/***/ }),

/***/ "./utils/logger.js":
/*!*************************!*\
  !*** ./utils/logger.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var LoggerClass = __webpack_require__(/*! ./loggerFactory */ "./utils/loggerFactory.js");

module.exports = new LoggerClass();

/***/ }),

/***/ "./utils/loggerFactory.js":
/*!********************************!*\
  !*** ./utils/loggerFactory.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



/* eslint-disable import/no-mutable-exports, class-methods-use-this */
var LoggerClass;

if (false) {} else {
  /* eslint-disable global-require */
  var os = __webpack_require__(/*! os */ "os");

  var Winston = __webpack_require__(/*! winston */ "winston");

  var _require = __webpack_require__(/*! winston-logrotate */ "winston-logrotate"),
      Rotate = _require.Rotate;
  /* eslint-enable global-require */

  /**
   * Logger class to fetch instances for logging with custom formatting enabled
   */


  LoggerClass =
  /*#__PURE__*/
  function () {
    function Logger() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$fileName = _ref.fileName,
          fileName = _ref$fileName === void 0 ? 'logs/error.log' : _ref$fileName;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Logger);

      this.fileName = fileName;
      this.logPrefix = this.getLogPrefix();
    }
    /**
     * Get the prefix for the log statement containing the log
     * prefix from environment (if available) and the hostname
     *
     * @returns {String} Prefix for the logging statement
     */


    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Logger, [{
      key: "getLogPrefix",
      value: function getLogPrefix() {
        var hostName = os.hostname().toUpperCase();
        var logPrefix = process.env.LOG_PREFIX || 'DEFAULT_PREFIX';
        return "".concat(logPrefix, "|").concat(hostName);
      }
      /**
       * Get the request identifier string for the log statement
       * consisting of the session id and the request id
       *
       * @param {Object} requestIdentifiers Request identifiers as received in the constructor
       * @returns {String} String consisting of session id and request id as available
       */

    }, {
      key: "getRequestIdentifierString",
      value: function getRequestIdentifierString() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            sessionId = _ref2.sessionId;

        return sessionId ? " [SESSION ID: ".concat(sessionId, "]") : '';
      }
      /**
       * Achieve the following format for timestamp:
       * 2017-05-23 11:35:43.673
       *
       * @returns {String} Formatted Date string
       */

    }, {
      key: "getTimeStampFormat",
      value: function getTimeStampFormat() {
        var date = new Date();
        return "".concat(date.toLocaleString(), ".").concat(date.getMilliseconds());
      }
      /**
       * Achieve the following format for the log statement:
       * 2017-05-23 12:25:54.292 [<LOG_PREFIX>] [SESSION ID: <SESSION_ID>]
       * [REQUEST ID: <REQUEST_ID>] [<LOG_LEVEL>] [<LOGGER_NAME>] - <MESSAGE>
       *
       * @param {Object} options Winston options for custom formatting
       * @returns {String} Custom logging format
       */

    }, {
      key: "getFormatterString",
      value: function getFormatterString(options) {
        // TODO: add request identifier string post discussion on format (removed as
        // currently undefined)
        var sessionId = this.sessionId;
        var logLine = "|LOG_LINE| ".concat(this.timestampFormat(), " [").concat(options.level.toUpperCase(), "] [").concat(this.logPrefix, "] ").concat(this.getRequestIdentifierString({
          sessionId: sessionId
        }), " [").concat(this.loggerName, "] - ").concat(options.message ? options.message : '');
        return logLine;
      }
      /**
       * Get the logger instance with request identifiers as part of formatter
       *
       * @param {String} loggerName Name to identify the log initiator
       */

    }, {
      key: "getLogger",
      value: function getLogger() {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            sessionId = _ref3.sessionId,
            _ref3$loggerName = _ref3.loggerName,
            loggerName = _ref3$loggerName === void 0 ? 'default' : _ref3$loggerName;

        var self = this;
        var loggerInstance = Winston.createLogger({
          transports: [new Rotate({
            file: self.fileName,
            colorize: false,
            timestamp: true,
            size: '500m',
            keep: 5,
            json: false,
            compress: false,
            tailable: true,
            formatter: self.getFormatterString.bind(Object.assign(self, {
              loggerName: loggerName,
              timestampFormat: self.getTimeStampFormat.bind(self),
              level: process.env.LOG_LEVEL || 'error',
              sessionId: sessionId
            }))
          })]
        });
        return loggerInstance;
      }
    }]);

    return Logger;
  }();
}

module.exports = LoggerClass;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/servicesCache.config.js":
/*!***************************************!*\
  !*** ./utils/servicesCache.config.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Cachable Services List
 * (note: to remain in the object-in-array format for adding further config options)
 *
 * Example configuration:
 * {
 *    url: '/test/example',
 *    ...future configs (like individual timeout etc.)
 * }
 */
/* harmony default export */ __webpack_exports__["default"] = ([]);

/***/ }),

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/*! exports provided: convertObjectToArray, pushQueryToHistory, parseQueryParams, cleanObject, setCookie, getCookie, createUrlSearchParams, buildUrl, removeChar, elementOffset, redirectInactiveUser, stopTrackingInactiveUser, isIOS, escapeHtml, addDecimal, removeDecimal, debounce, throttle, getIsProd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertObjectToArray", function() { return convertObjectToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushQueryToHistory", function() { return pushQueryToHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseQueryParams", function() { return parseQueryParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanObject", function() { return cleanObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUrlSearchParams", function() { return createUrlSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildUrl", function() { return buildUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeChar", function() { return removeChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementOffset", function() { return elementOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectInactiveUser", function() { return redirectInactiveUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopTrackingInactiveUser", function() { return stopTrackingInactiveUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIOS", function() { return isIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeHtml", function() { return escapeHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDecimal", function() { return addDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDecimal", function() { return removeDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsProd", function() { return getIsProd; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "@babel/runtime/helpers/typeof");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);






var convertObjectToArray = function convertObjectToArray(obj, takeKeys) {
  return Array.prototype.concat.apply([], takeKeys ? Object.keys(obj) : Object.values(obj));
};
var pushQueryToHistory = function pushQueryToHistory(_ref) {
  var route = _ref.route,
      asUrl = _ref.asUrl,
      routeQuery = _ref.routeQuery,
      pageQuery = _ref.pageQuery,
      newQuery = _ref.newQuery,
      shallow = _ref.shallow,
      replace = _ref.replace;
  var query = pageQuery ? _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({}, pageQuery.toJS(), newQuery) : _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({}, newQuery);
  var pathname = window.location.href.split('?')[0];
  var queryString = Object.keys(query).reduce(function (accumulator, currentValue) {
    return query[currentValue] ? "".concat(accumulator).concat(currentValue, "=").concat(query[currentValue] !== decodeURIComponent(query[currentValue]) ? query[currentValue] : encodeURIComponent(query[currentValue]), "&") : accumulator;
  }, '?');
  var search = queryString.substr(0, queryString.length - 1);
  search = search !== '?' ? search : undefined;
  var url = asUrl || pathname + search;
  var promise = replace ? next_router__WEBPACK_IMPORTED_MODULE_5___default.a.replace({
    pathname: route,
    query: routeQuery
  }, url, {
    shallow: !!shallow
  }) : next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push({
    pathname: route,
    query: routeQuery
  }, url, {
    shallow: !!shallow
  });
  return {
    newPageUrl: url,
    newPageQuery: query,
    promise: promise
  };
};
var parseQueryParams = function parseQueryParams(pathname) {
  var search = pathname.split('?')[1];

  if (search) {
    var queryList = search.split('&');
    return queryList.reduce(function (accu, curr) {
      var _curr$split = curr.split('='),
          _curr$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_curr$split, 2),
          key = _curr$split2[0],
          value = _curr$split2[1];

      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({}, accu, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, key, value.split('#')[0]));
    }, {});
  }

  return {};
};
var cleanObject = function cleanObject(obj) {
  var newObj = {};
  Object.keys(obj).forEach(function (key) {
    if (obj[key]) newObj[key] = obj[key];
  });
  return newObj;
};
var setCookie = function setCookie(cookieName, cookieValue, expiryDays) {
  if (typeof window === 'undefined') return;
  var expires = '';

  if (expiryDays) {
    var d = new Date();
    d.setTime((d.getTime() + expiryDays) * (24 * 60 * 60 * 1000));
    expires = "expires=".concat(d.toUTCString(), ";");
  }

  document.cookie = "".concat(cookieName, "=").concat(cookieValue, ";").concat(expires, "path=/");
};
var getCookie = function getCookie(key) {
  if (typeof window === 'undefined') return '';
  return document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)".concat(key, "\\s*\\=\\s*([^;]*).*$)|^.*$")), '$1');
};
var createUrlSearchParams = function createUrlSearchParams() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var queryParams = [];
  var keys = Object.keys(query);

  for (var i = 0, l = keys.length; i < l; i += 1) {
    queryParams.push("".concat(keys[i], "=").concat(query[keys[i]]));
  }

  return queryParams.join('&');
};
var buildUrl = function buildUrl(options) {
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(options) === 'object') {
    var pathname = options.pathname,
        query = options.query;
    var url = pathname;

    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(query) === 'object') {
      url += "?".concat(createUrlSearchParams(query));
    }

    return url;
  }

  return options;
};
var removeChar = function removeChar(str, ch) {
  if (!str || !ch) return str;
  var reg = new RegExp("\\".concat(ch, "{1,}"), 'gi');
  return str.replace(reg, function (x) {
    return x === ch ? ' ' : " ".concat(ch, " ");
  });
};
var elementOffset = function elementOffset(el) {
  var rect = el.getBoundingClientRect();
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
};
var redirectInactiveUser = function redirectInactiveUser(_ref2) {
  var pathname = _ref2.pathname,
      shallow = _ref2.shallow,
      isUserLoggedIn = _ref2.isUserLoggedIn,
      signOutUser = _ref2.signOutUser;

  if (typeof window !== 'undefined') {
    var IDLE_TIMEOUT = process.env.INACTIVE_USER_TIMEOUT_MINUTES;
    var idleSecondsCounter = 0;
    var checkIdleTimeMiliseconds = 10000;
    var idealTime;
    var eventTypes = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'];

    var resetTimer = function resetTimer() {
      idleSecondsCounter = 0;
    };

    var checkIdleTime = function checkIdleTime() {
      idleSecondsCounter += checkIdleTimeMiliseconds / 1000;

      if (idleSecondsCounter >= IDLE_TIMEOUT * 60) {
        if (isUserLoggedIn) {
          signOutUser({
            pathname: pathname
          }, true);
        } else {
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push({
            pathname: pathname
          }, pathname, {
            shallow: shallow
          }).then(function () {
            return window.scrollTo(0, 0);
          });
        }

        clearInterval(idealTime);
      }
    };

    idealTime = window.setInterval(checkIdleTime, checkIdleTimeMiliseconds);
    eventTypes.forEach(function (event) {
      window.addEventListener(event, resetTimer);
    });
  }
};
var stopTrackingInactiveUser = function stopTrackingInactiveUser() {
  if (typeof window !== 'undefined') {
    var eventTypes = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'];
    clearInterval(window.idealTime);
    eventTypes.forEach(function (event) {
      window.removeEventListener(event, null, true);
    });
  }
};
var isIOS = function isIOS() {
  if (typeof window !== 'undefined') {
    return /iPhone|iPad|iPod/i.test(window.navigator.userAgent);
  }

  return false;
};
var escapeHtml = function escapeHtml() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return text.replace(/&#039;/g, "'").replace(/%2C;/g, ',');
};
var addDecimal = function addDecimal(value) {
  var price = value;

  if (typeof price === 'string') {
    price = parseFloat(value);
  }

  return price.toFixed(2);
};
var removeDecimal = function removeDecimal(value) {
  return +value % 1 === 0 ? parseInt(value, 10) : value;
};
var debounce = function debounce(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var debounceTimer;

  window.onscroll = function () {
    if (debounceTimer) {
      window.clearTimeout(debounceTimer);
    }

    debounceTimer = window.setTimeout(function () {
      fn();
    }, wait);
  };
};
/* eslint-disable no-mixed-operators */

var throttle = function throttle(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
};
/* eslint-enable no-mixed-operators */

var getIsProd = function getIsProd() {
  var nextConfig = next_config__WEBPACK_IMPORTED_MODULE_4___default()();

  if (nextConfig) {
    var publicRuntimeConfig = nextConfig.publicRuntimeConfig;
    return publicRuntimeConfig.metricsKey || 'dev';
  }

  return 'dev';
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "@babel/runtime/helpers/objectSpread":
/*!******************************************************!*\
  !*** external "@babel/runtime/helpers/objectSpread" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectSpread");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),

/***/ "@babel/runtime/helpers/typeof":
/*!************************************************!*\
  !*** external "@babel/runtime/helpers/typeof" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "agentkeepalive":
/*!*********************************!*\
  !*** external "agentkeepalive" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("agentkeepalive");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "es6-promise":
/*!******************************!*\
  !*** external "es6-promise" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "invariant":
/*!****************************!*\
  !*** external "invariant" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("invariant");

/***/ }),

/***/ "lodash/conformsTo":
/*!************************************!*\
  !*** external "lodash/conformsTo" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/conformsTo");

/***/ }),

/***/ "lodash/each":
/*!******************************!*\
  !*** external "lodash/each" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/each");

/***/ }),

/***/ "lodash/isEmpty":
/*!*********************************!*\
  !*** external "lodash/isEmpty" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ "lodash/isFunction":
/*!************************************!*\
  !*** external "lodash/isFunction" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isFunction");

/***/ }),

/***/ "lodash/isObject":
/*!**********************************!*\
  !*** external "lodash/isObject" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isObject");

/***/ }),

/***/ "lodash/isString":
/*!**********************************!*\
  !*** external "lodash/isString" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isString");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-immutable":
/*!**********************************!*\
  !*** external "redux-immutable" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),

/***/ "winston-logrotate":
/*!************************************!*\
  !*** external "winston-logrotate" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("winston-logrotate");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map