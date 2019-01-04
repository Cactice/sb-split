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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle
  }, "About")));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: layoutStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-fontawesome");

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(27);


/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(6);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(3);

// EXTERNAL MODULE: ./components/MyLayout.js
var MyLayout = __webpack_require__(5);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(9);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(1);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(7);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(8);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "react-fontawesome"
var external_react_fontawesome_ = __webpack_require__(11);
var external_react_fontawesome_default = /*#__PURE__*/__webpack_require__.n(external_react_fontawesome_);

// CONCATENATED MODULE: ./components/MinuteTranscript.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var MinuteTranscript_MinuteTranscript =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MinuteTranscript, _React$Component);

  function MinuteTranscript(props) {
    var _this;

    _classCallCheck(this, MinuteTranscript);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MinuteTranscript).call(this, props));
    _this.state = {
      summary: 'Waiting'
    };
    _this.summarize = _this.summarize.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(MinuteTranscript, [{
    key: "summarize",
    value: function () {
      var _summarize = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(transcript) {
        var summaryString, summarySentences, url, res;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                summaryString = this.props.data.map(function (eachLine) {
                  return eachLine.text;
                }).join('. ');
                summarySentences = summaryString;
                console.log('sentence: ', summarySentences);
                url = 'https://youtube-index-backend.herokuapp.com/summarize/' + encodeURI(summarySentences) + '/english';
                console.log(url);
                _context.next = 7;
                return external_axios_default.a.get(url);

              case 7:
                res = _context.sent;
                this.setState({
                  summary: res.data
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function summarize(_x) {
        return _summarize.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      console.log('ponpon', this.props.data);
      return external_react_default.a.createElement("div", {
        className: "jsx-1418521480"
      }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css",
        className: "jsx-1418521480"
      }), external_react_default.a.createElement("link", {
        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        rel: "stylesheet",
        className: "jsx-1418521480"
      })), external_react_default.a.createElement("table", {
        className: "jsx-1418521480" + " " + "minuteTranscript"
      }, external_react_default.a.createElement("thead", {
        className: "jsx-1418521480"
      }, external_react_default.a.createElement("tr", {
        className: "jsx-1418521480"
      }, external_react_default.a.createElement("th", {
        className: "jsx-1418521480"
      }, "Position"), external_react_default.a.createElement("th", {
        className: "jsx-1418521480"
      }, "Transcript"))), external_react_default.a.createElement("tr", {
        className: "jsx-1418521480"
      }, external_react_default.a.createElement("td", {
        className: "jsx-1418521480"
      }, external_react_default.a.createElement(external_react_bootstrap_["Button"], {
        onClick: this.summarize
      }, external_react_default.a.createElement(external_react_fontawesome_default.a, {
        name: "eye"
      }))), external_react_default.a.createElement("td", {
        className: "jsx-1418521480"
      }, external_react_default.a.createElement(external_react_bootstrap_["Collapse"], {
        in: !(this.state.summary == 'Waiting')
      }, external_react_default.a.createElement("div", {
        style: {
          width: 400
        },
        className: "jsx-1418521480"
      }, this.state.summary)))), external_react_default.a.createElement("tbody", {
        className: "jsx-1418521480"
      }, this.props.data.map(function (each, i) {
        return external_react_default.a.createElement("tr", {
          key: i,
          className: "jsx-1418521480"
        }, external_react_default.a.createElement("td", {
          className: "jsx-1418521480"
        }, each.startSeconds), external_react_default.a.createElement("td", {
          style: {
            width: 400
          },
          className: "jsx-1418521480"
        }, each.text));
      }))), external_react_default.a.createElement(style_default.a, {
        styleId: "1418521480",
        css: [".minuteTranscript{padding:20px;}"]
      }));
    }
  }]);

  return MinuteTranscript;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/listPage.js



function listPage_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { listPage_typeof = function _typeof(obj) { return typeof obj; }; } else { listPage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return listPage_typeof(obj); }

function listPage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function listPage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function listPage_createClass(Constructor, protoProps, staticProps) { if (protoProps) listPage_defineProperties(Constructor.prototype, protoProps); if (staticProps) listPage_defineProperties(Constructor, staticProps); return Constructor; }

function listPage_possibleConstructorReturn(self, call) { if (call && (listPage_typeof(call) === "object" || typeof call === "function")) { return call; } return listPage_assertThisInitialized(self); }

function listPage_getPrototypeOf(o) { listPage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return listPage_getPrototypeOf(o); }

function listPage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) listPage_setPrototypeOf(subClass, superClass); }

function listPage_setPrototypeOf(o, p) { listPage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return listPage_setPrototypeOf(o, p); }

function listPage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/* harmony default export */ var listPage = __webpack_exports__["default"] = (Object(router_["withRouter"])(
/*#__PURE__*/
function (_React$Component) {
  listPage_inherits(TranscriptLists, _React$Component);

  function TranscriptLists(props, context) {
    var _this;

    listPage_classCallCheck(this, TranscriptLists);

    _this = listPage_possibleConstructorReturn(this, listPage_getPrototypeOf(TranscriptLists).call(this, props, context));

    _defineProperty(listPage_assertThisInitialized(listPage_assertThisInitialized(_this)), "rank", 7);

    _defineProperty(listPage_assertThisInitialized(listPage_assertThisInitialized(_this)), "regex", /\[\*{7}\s(.*)\]/i);

    _defineProperty(listPage_assertThisInitialized(listPage_assertThisInitialized(_this)), "titleRegex", function (rank) {
      return new RegExp("\\*{".concat(rank, "}\\s(.*)\\]"));
    });

    _defineProperty(listPage_assertThisInitialized(listPage_assertThisInitialized(_this)), "regex2", /\[\*{6}\s(.*)\]/i);

    _defineProperty(listPage_assertThisInitialized(listPage_assertThisInitialized(_this)), "splitRegex", function (rank) {
      return new RegExp("(\\[\\*{".concat(rank, "}\\s.*\\])"));
    });

    _defineProperty(listPage_assertThisInitialized(listPage_assertThisInitialized(_this)), "Iterate", function () {
      return _this.state.mainObj.map(function (each1, key1) {
        return each1.children.map(function (each2, key2) {
          return external_react_default.a.createElement(external_react_bootstrap_["ListGroup"].Item, {
            action: true,
            href: "#".concat(key1, ",").concat(key2)
          }, each2.title);
        });
      });
    });

    _defineProperty(listPage_assertThisInitialized(listPage_assertThisInitialized(_this)), "Iterate2", function () {
      return _this.state.mainObj.map(function (each1, key1) {
        return each1.children.map(function (each2, key2) {
          var val = "".concat(each2.title, "\n").concat(each2.content, "\n#").concat(each1.title.toLowerCase().replace(/\s/g, '-'), "\n#humanpose\n");
          return external_react_default.a.createElement(external_react_bootstrap_["Tab"].Pane, {
            eventKey: "#".concat(key1, ",").concat(key2)
          }, external_react_default.a.createElement("textarea", {
            rows: "24",
            cols: "100",
            defaultValue: val,
            onChange: function onChange(event) {
              val = event.target.value;
            }
          }), external_react_default.a.createElement("center", null, external_react_default.a.createElement(external_react_bootstrap_["Button"], {
            onClick: function onClick() {
              return window.open("http://scrapbox.io/artresearch/new?body=".concat(encodeURIComponent(val)));
            }
          }, "POST")));
        });
      });
    });

    _this.state = {
      url: 'hi',
      lines: [],
      mainObj: {}
    };
    return _this;
  }

  listPage_createClass(TranscriptLists, [{
    key: "escapeRegExp",
    value: function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }
  }, {
    key: "splitByAsterisk",
    value: function splitByAsterisk(target, asteriskRank, parentList) {
      var _this2 = this;

      var children = target.split(this.splitRegex(asteriskRank));

      if (children == 'undefined') {
        return;
      }

      var childrenMap = children.map(function (child, num) {
        var titleRegex = _this2.titleRegex(asteriskRank);

        var match = child.match(titleRegex);

        if (match == null) {
          return;
        }

        var title = child.match(titleRegex)[1];
        var content = children[num + 1];
        var newParentList = parentList.slice();
        newParentList.push(title);

        var childrenOfThis = _this2.splitByAsterisk(content, asteriskRank - 1, newParentList);

        return {
          title: title,
          content: content,
          children: childrenOfThis,
          parentList: parentList
        };
      });
      return childrenMap.filter(Boolean);
    }
  }, {
    key: "format",
    value: function format(url) {
      var formatted = this.splitByAsterisk(url, 7, []);
      console.log(formatted);
      this.setState({
        mainObj: formatted
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var router = this.props.router;
      this.setState({
        url: router.query.url
      });
      this.format(router.query.url);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      console.log(); // Return properties

      return external_react_default.a.createElement("div", {
        className: "jsx-547003602"
      }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", {
        className: "jsx-547003602"
      }, "Edit"), external_react_default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-547003602"
      }), external_react_default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://unpkg.com/purecss@0.6.1/build/pure-min.css",
        className: "jsx-547003602"
      }), external_react_default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css",
        className: "jsx-547003602"
      }), external_react_default.a.createElement("link", {
        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        rel: "stylesheet",
        className: "jsx-547003602"
      })), external_react_default.a.createElement(external_react_bootstrap_["Tab"].Container, {
        id: "list-group-tabs-example",
        defaultActiveKey: "#link1"
      }, external_react_default.a.createElement(external_react_bootstrap_["Row"], null, external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 4
      }, external_react_default.a.createElement("div", {
        style: {
          overflowY: 'scroll',
          height: '700px'
        },
        className: "jsx-547003602"
      }, external_react_default.a.createElement(external_react_bootstrap_["ListGroup"], null, external_react_default.a.createElement(this.Iterate, null)))), external_react_default.a.createElement(external_react_bootstrap_["Col"], {
        sm: 8
      }, external_react_default.a.createElement(external_react_bootstrap_["Tab"].Content, null, external_react_default.a.createElement(this.Iterate2, null))))), external_react_default.a.createElement(style_default.a, {
        styleId: "547003602",
        css: [".tableStyle{text-align:center;padding :50px;}"]
      }));
    }
  }]);

  return TranscriptLists;
}(external_react_default.a.Component)));

/***/ })
/******/ ]);