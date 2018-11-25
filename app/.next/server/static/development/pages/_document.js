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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyDocument; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "@babel/runtime/helpers/objectSpread");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/document */ "next/document");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles */ "./styles/index.js");
/* harmony import */ var _utils_errorBoundary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/errorBoundary */ "./utils/errorBoundary.js");
/* harmony import */ var _styles_cssIncludes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/cssIncludes */ "./styles/cssIncludes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constants */ "./constants/index.js");










 // eslint-disable-line no-unused-vars





var MyDocument =
/*#__PURE__*/
function (_Document) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(MyDocument, _Document);

  function MyDocument() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, MyDocument);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(MyDocument).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(MyDocument, [{
    key: "render",
    value: function render() {
      var Content = Object(_utils_errorBoundary__WEBPACK_IMPORTED_MODULE_10__["default"])(next_document__WEBPACK_IMPORTED_MODULE_7__["Main"]);
      var styleTags = this.props.styleTags;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("html", {
        lang: "en"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_7__["Head"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=Edge"
      }), _styles_cssIncludes__WEBPACK_IMPORTED_MODULE_11__["default"].map(function (css) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
          key: "fragment-".concat(css.id)
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
          type: "text/css",
          rel: "stylesheet",
          href: css.src
        }));
      }), styleTags), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("body", {
        className: "app"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Content, null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_7__["NextScript"], null)));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage,
          req = _ref.req;
      var deviceType = req.device.type === _constants__WEBPACK_IMPORTED_MODULE_12__["PHONE"] ? _constants__WEBPACK_IMPORTED_MODULE_12__["MOBILE"] : _constants__WEBPACK_IMPORTED_MODULE_12__["DESKTOP"];
      var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_8__["ServerStyleSheet"]();
      var page = renderPage(function (App) {
        return function (props) {
          return sheet.collectStyles(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(App, props));
        };
      });
      var styleTags = sheet.getStyleElement();
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, page, {
        styleTags: styleTags,
        deviceType: deviceType
      });
    }
  }]);

  return MyDocument;
}(next_document__WEBPACK_IMPORTED_MODULE_7___default.a);



/***/ }),

/***/ "./styles/cssIncludes.js":
/*!*******************************!*\
  !*** ./styles/cssIncludes.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cssIncludes = [];

if (true) {
  cssIncludes.push('/static/styles/font-awesome.min.css', '/static/styles/main.css');
}

/* harmony default export */ __webpack_exports__["default"] = (cssIncludes.map(function (src, index) {
  return {
    id: "css-include-".concat(index),
    src: src
  };
}));

/***/ }),

/***/ "./styles/globalStyles.js":
/*!********************************!*\
  !*** ./styles/globalStyles.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ "./styles/theme/index.js");

/* harmony default export */ __webpack_exports__["default"] = ("\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: ".concat(_theme__WEBPACK_IMPORTED_MODULE_0__["default"].primaryFontFamily, ";\n    font-size: ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__["default"].baseFontSize, ";\n    font-weight: ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__["default"].fontNormal, ";\n    letter-spacing: ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__["default"].letterSpacing, "\n    @media (max-width: 767px){\n        &.modal-open {\n            position:fixed;\n        }\n    }\n    -webkit-tap-highlight-color:rgba(0,0,0,0);\n}\n\n\nbody.drawer-open {\n    overflow-y: hidden;\n}\n\ninput[type=text]::-ms-clear {\n    display: none;\n}\n\n.select-box {\n  .checkmark {\n    &::before {\n      content: '';\n    }\n  }\n}\n\n.right {\n    float: right;\n}\n\n.select-box{\n    position:relative;\n    width:100%;\n}\n\n.select-box .arrow-down4{\n    position:absolute;\n    right: 8px;\n    top: 14px;\n}\n\nselect{\n    -webkit-appearance: none;\n    -moz-appearance: radio-container;\n    appearance: none;\n    background: transparent;\n    padding: 12px;\n    padding-right: 40px;\n    border-radius: 0;\n    border: 1px solid;\n    width:100%;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    border-radius: 0;\n    font-family: ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__["default"].primaryFontFamily, ";\n    letter-spacing: inherit;\n    -webkit-appearance: none;\n}\n\n.is-hidden {\n    display: none !important;\n}\n\n.is-visible {\n    display: block;\n}\n\n.visually-hidden {\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  border: 0;\n  padding: 0;\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n}\n\n.success-tick::after {\n    border: solid ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__["default"].successColor, ";\n    border-width: 0 2px 2px 0;\n}\n\n/* overriding the grid padding and margin values defined in flexboxgrid.css to 1rem = 20px instead of 16px */\n\n.row.full {\n    margin-left: -1.25rem;\n    margin-right: -1.25rem;\n}\n\n.row {\n    margin-right: -0.625rem;\n    margin-left: -0.625rem;\n}\n\n.col {\n    margin-right: -0.625rem;\n    margin-left: -0.625rem;\n}\n\n.col-xs,\n.col-xs-1,\n.col-xs-2,\n.col-xs-3,\n.col-xs-4,\n.col-xs-5,\n.col-xs-6,\n.col-xs-7,\n.col-xs-8,\n.col-xs-9,\n.col-xs-10,\n.col-xs-11,\n.col-xs-12,\n.col-xs-offset-0,\n.col-xs-offset-1,\n.col-xs-offset-2,\n.col-xs-offset-3,\n.col-xs-offset-4,\n.col-xs-offset-5,\n.col-xs-offset-6,\n.col-xs-offset-7,\n.col-xs-offset-8,\n.col-xs-offset-9,\n.col-xs-offset-10,\n.col-xs-offset-11,\n.col-xs-offset-12 {\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n}\n\n@media only screen and (min-width: 768px) {\n    .container {\n        width: 784px;\n    }\n\n    .col-sm,\n    .col-sm-1,\n    .col-sm-2,\n    .col-sm-3,\n    .col-sm-4,\n    .col-sm-5,\n    .col-sm-6,\n    .col-sm-7,\n    .col-sm-8,\n    .col-sm-9,\n    .col-sm-10,\n    .col-sm-11,\n    .col-sm-12,\n    .col-sm-offset-0,\n    .col-sm-offset-1,\n    .col-sm-offset-2,\n    .col-sm-offset-3,\n    .col-sm-offset-4,\n    .col-sm-offset-5,\n    .col-sm-offset-6,\n    .col-sm-offset-7,\n    .col-sm-offset-8,\n    .col-sm-offset-9,\n    .col-sm-offset-10,\n    .col-sm-offset-11,\n    .col-sm-offset-12 {\n        padding-right: 0.625rem;\n        padding-left: 0.625rem;\n    }\n}\n\n.nullify-gutters {\n    margin: 0;\n    padding: 0;\n}\n\n.pac-container {\n    z-index: ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__["default"].zIndex.zPlacesAutocomplete, ";\n    top: 100% !important;\n    left: 0 !important;\n}\n\n.sr-only {\n  position: absolute !important;\n  clip: rect(1px, 1px, 1px, 1px);\n  top: auto;\n  width: auto;\n  height: 20px;\n  overflow: hidden;\n  &.no-focusable{\n      width:1px;\n      visibility:hidden;\n      &:focus{\n          outline:none;\n          border:none;\n      }\n  }\n}\n\n.icon-atf-tooltip {\n    border: 0;\n    padding: 0;\n    background: none;\n    cursor: pointer;\n}\n\n.icon-atf-tooltip::before {\n    font-size: 16px;\n}\n\n.tooltip-parent {\n    background-color: transparent;\n}\n\n.main-layout{\n  &:focus{\n    outline:none;\n  }\n  &.focus-visible {\n    outline: 1px dashed ").concat(_theme__WEBPACK_IMPORTED_MODULE_0__["default"].secondary_textColor, ";\n  }\n}\n"));

/***/ }),

/***/ "./styles/index.js":
/*!*************************!*\
  !*** ./styles/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "@babel/runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globalStyles */ "./styles/globalStyles.js");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typography */ "./styles/typography.js");


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



 // eslint-disable-next-line no-unused-expressions

Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["injectGlobal"])(_templateObject(), _typography__WEBPACK_IMPORTED_MODULE_3__["default"], _globalStyles__WEBPACK_IMPORTED_MODULE_2__["default"]);

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

/***/ "./styles/typography.js":
/*!******************************!*\
  !*** ./styles/typography.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nh1 {\n    font-size: 20px;\n}\n\nh2 {\n    font-size: 18px;\n}\n\nh3 {\n    font-size: 16px;\n}\n\nh4 {\n    font-size: 14px;\n}\n\nh5 {\n    font-size: 12px;\n}\n\nh6 {\n    font-size: 10px;\n}\n");

/***/ }),

/***/ "./utils/errorBoundary.js":
/*!********************************!*\
  !*** ./utils/errorBoundary.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logger */ "./utils/logger.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_logger__WEBPACK_IMPORTED_MODULE_6__);








/* harmony default export */ __webpack_exports__["default"] = (function (WrappedComponent) {
  return (
    /*#__PURE__*/
    function (_Component) {
      _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(errorBoundaryComponent, _Component);

      function errorBoundaryComponent() {
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, errorBoundaryComponent);

        return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(errorBoundaryComponent).apply(this, arguments));
      }

      _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(errorBoundaryComponent, [{
        key: "componentDidCatch",

        /* eslint-disable class-methods-use-this */
        // cors check from reviewer
        value: function componentDidCatch(error, info) {
          _logger__WEBPACK_IMPORTED_MODULE_6___default.a.error('error', JSON.stringify("App failed to load with errors: ".concat(error)));
          _logger__WEBPACK_IMPORTED_MODULE_6___default.a.info('info', JSON.stringify(info));
        }
        /* eslint-enable class-methods-use-this */

      }, {
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(WrappedComponent, this.props);
        }
      }]);

      return errorBoundaryComponent;
    }(react__WEBPACK_IMPORTED_MODULE_5__["Component"])
  );
});

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

/***/ 0:
/*!**********************************!*\
  !*** multi ./pages/_document.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_document.js */"./pages/_document.js");


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

/***/ "@babel/runtime/helpers/taggedTemplateLiteral":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/taggedTemplateLiteral" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),

/***/ "next/document":
/*!********************************!*\
  !*** external "next/document" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/document");

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
//# sourceMappingURL=_document.js.map