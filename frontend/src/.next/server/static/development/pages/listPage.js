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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/yuya/git/sb-split/frontend/src/components/Header.js";


var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "About")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/MinuteTranscript.js":
/*!****************************************!*\
  !*** ./components/MinuteTranscript.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MinuteTranscript; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-fontawesome */ "react-fontawesome");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/yuya/git/sb-split/frontend/src/components/MinuteTranscript.js";


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







var MinuteTranscript =
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(transcript) {
        var summaryString, summarySentences, url, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(url);

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
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1418521480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css",
        className: "jsx-1418521480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        rel: "stylesheet",
        className: "jsx-1418521480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", {
        className: "jsx-1418521480" + " " + "minuteTranscript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("thead", {
        className: "jsx-1418521480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
        className: "jsx-1418521480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
        className: "jsx-1418521480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Position"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
        className: "jsx-1418521480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Transcript"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
        className: "jsx-1418521480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
        className: "jsx-1418521480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: this.summarize,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default.a, {
        name: "eye",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
        className: "jsx-1418521480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
        in: !(this.state.summary == 'Waiting'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          width: 400
        },
        className: "jsx-1418521480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, this.state.summary)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", {
        className: "jsx-1418521480",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, this.props.data.map(function (each, i) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
          key: i,
          className: "jsx-1418521480",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
          className: "jsx-1418521480",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, each.startSeconds), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
          style: {
            width: 400
          },
          className: "jsx-1418521480",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, each.text));
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "1418521480",
        css: ".minuteTranscript{padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXlhL2dpdC9zYi1zcGxpdC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9NaW51dGVUcmFuc2NyaXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFMkIsQUFHNEIsYUFDakIiLCJmaWxlIjoiL1VzZXJzL3l1eWEvZ2l0L3NiLXNwbGl0L2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL01pbnV0ZVRyYW5zY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uICwgQ29sbGFwc2UgLCBHcmlkICwgUm93IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgRkEgZnJvbSAncmVhY3QtZm9udGF3ZXNvbWUnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWludXRlVHJhbnNjcmlwdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnN0YXRlICAgICA9IHtzdW1tYXJ5IDogJ1dhaXRpbmcnICB9XG4gICAgICB0aGlzLnN1bW1hcml6ZSA9IHRoaXMuc3VtbWFyaXplLmJpbmQodGhpcyk7XG4gIH1cblxuICBhc3luYyBzdW1tYXJpemUodHJhbnNjcmlwdCl7XG4gICAgbGV0IHN1bW1hcnlTdHJpbmcgPSB0aGlzLnByb3BzLmRhdGEubWFwKGZ1bmN0aW9uKGVhY2hMaW5lKXtcbiAgICAgICAgcmV0dXJuIGVhY2hMaW5lLnRleHQ7XG4gICAgfSkuam9pbignLiAnKTtcblxuICAgIGxldCBzdW1tYXJ5U2VudGVuY2VzID0gc3VtbWFyeVN0cmluZ1xuICAgIGNvbnNvbGUubG9nKCdzZW50ZW5jZTogJyxzdW1tYXJ5U2VudGVuY2VzKVxuICAgIGNvbnN0IHVybCA9ICdodHRwczovL3lvdXR1YmUtaW5kZXgtYmFja2VuZC5oZXJva3VhcHAuY29tL3N1bW1hcml6ZS8nKyBlbmNvZGVVUkkoc3VtbWFyeVNlbnRlbmNlcykgKyAnL2VuZ2xpc2gnXG4gICAgY29uc29sZS5sb2codXJsKVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCh1cmwpXG4gICAgdGhpcy5zZXRTdGF0ZSh7c3VtbWFyeTpyZXMuZGF0YX0pXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgICAgY29uc29sZS5sb2coJ3BvbnBvbicsdGhpcy5wcm9wcy5kYXRhKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wLWFscGhhLjYvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cbiAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbnV0ZVRyYW5zY3JpcHRcIj5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5Qb3NpdGlvbjwvdGg+XG4gICAgICAgICAgICAgIDx0aD5UcmFuc2NyaXB0PC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1bW1hcml6ZX0+XG4gICAgICAgICAgICAgICAgPEZBIG5hbWU9XCJleWVcIiAvPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG5cbiAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17ISh0aGlzLnN0YXRlLnN1bW1hcnkgPT0gJ1dhaXRpbmcnKX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6NDAwfX0+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdW1tYXJ5fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge3RoaXMucHJvcHMuZGF0YS5tYXAoKGVhY2gsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8dGQ+e2VhY2guc3RhcnRTZWNvbmRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6NDAwfX0+e2VhY2gudGV4dH08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLm1pbnV0ZVRyYW5zY3JpcHQge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/yuya/git/sb-split/frontend/src/components/MinuteTranscript.js */",
        __self: this
      }));
    }
  }]);

  return MinuteTranscript;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);



/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "/Users/yuya/git/sb-split/frontend/src/components/MyLayout.js";


var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/listPage.js":
/*!***************************!*\
  !*** ./pages/listPage.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _components_MinuteTranscript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MinuteTranscript */ "./components/MinuteTranscript.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/yuya/git/sb-split/frontend/src/pages/listPage.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(
/*#__PURE__*/
function (_React$Component) {
  _inherits(TranscriptLists, _React$Component);

  function TranscriptLists(props, context) {
    var _this;

    _classCallCheck(this, TranscriptLists);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TranscriptLists).call(this, props, context));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "rank", 7);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "regex", /\[\*{7}\s(.*)\]/i);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "regex2", /\[\*{6}\s(.*)\]/i);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "Iterate", function () {
      return _this.state.mainObj.map(function (each1, key1) {
        return each1.content.map(function (each2, key2) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroup"].Item, {
            action: true,
            href: "#".concat(key1, ",").concat(key2),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          }, each2.name);
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "Iterate2", function () {
      return _this.state.mainObj.map(function (each1, key1) {
        return each1.content.map(function (each2, key2) {
          var val = "".concat(each2.name, "\n[\n").concat(each2.content, "\n#").concat(each1.name.toLowerCase().replace(/\s/g, '-'), "\n#humanpose\n");
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Tab"].Pane, {
            eventKey: "#".concat(key1, ",").concat(key2),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
            rows: "24",
            cols: "100",
            defaultValue: val,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("center", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
            onClick: function onClick() {
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("http://127.0.0.1:5000/sb?text=".concat(encodeURIComponent(val))).then(console.log('yay'));
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            },
            __self: this
          }, "POST")));
        });
      }) // this.state.lines.map((each,key)=>{
      //   let val  = this.state.lines[key] + this.state.lines[key+1]
      //       val += '\n #game'
      //   return (
      //     <Tab.Pane eventKey={'#'+key}>
      //     <textarea rows="24" cols="100" defaultValue={val}/>
      //     <center>
      //     <Button onClick={()=>console.log(yo)} > http://127.0.0.1:5000/sb/POST</Button>
      //     </center>
      //     </Tab.Pane>
      //   )
      // })
      ;
    });

    _this.state = {
      url: 'hi',
      lines: [],
      mainObj: {}
    };
    return _this;
  }

  _createClass(TranscriptLists, [{
    key: "escapeRegExp",
    value: function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }
  }, {
    key: "format",
    value: function format(url) {
      var _this2 = this;

      var lines = url.split(/(\[\*{7}\s.*\])/);

      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
      }

      var lines2 = lines.map(function (each, num) {
        var match = each.match(_this2.regex);

        if (match == null) {
          return;
        }

        var name = each.match(_this2.regex)[1];
        var content = lines[num + 1];
        return {
          name: name,
          content: content
        };
      }).filter(Boolean);
      var lines3 = lines2.map(function (each, num) {
        var lines = each.content.split(/(\[\*{6}\s.*\])/);
        var parent = each.name;
        var lines2 = lines.map(function (each, num) {
          var match = each.match(_this2.regex2);

          if (match == null) {
            return;
          }

          var name = each.match(_this2.regex2)[1];
          var content = lines[num + 1];
          return {
            name: name,
            content: content
          };
        }).filter(Boolean);
        return {
          name: each.name,
          literal: each.content,
          content: lines2
        };
      }).filter(Boolean);
      console.log(lines3, 'heha');
      this.setState({
        lines: lines
      });
      this.setState({
        mainObj: lines3
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

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-547003602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        className: "jsx-547003602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Edit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-547003602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://unpkg.com/purecss@0.6.1/build/pure-min.css",
        className: "jsx-547003602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css",
        className: "jsx-547003602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        rel: "stylesheet",
        className: "jsx-547003602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Tab"].Container, {
        id: "list-group-tabs-example",
        defaultActiveKey: "#link1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        sm: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          overflowY: 'scroll',
          height: '700px'
        },
        className: "jsx-547003602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(this.Iterate, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        sm: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Tab"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(this.Iterate2, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "547003602",
        css: ".tableStyle{text-align:center;padding :50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXlhL2dpdC9zYi1zcGxpdC9mcm9udGVuZC9zcmMvcGFnZXMvbGlzdFBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0syQixBQUdpQyxrQkFDRixjQUNwQiIsImZpbGUiOiIvVXNlcnMveXV5YS9naXQvc2Itc3BsaXQvZnJvbnRlbmQvc3JjL3BhZ2VzL2xpc3RQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBNaW51dGVUcmFuc2NyaXB0IGZyb20gJy4uL2NvbXBvbmVudHMvTWludXRlVHJhbnNjcmlwdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCB7IFRhYiAsIENvbCAsIExpc3RHcm91cCAsIFJvdyAsIEJ1dHRvbiAsTGlzdEdyb3VwSXRlbSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoIGNsYXNzIFRyYW5zY3JpcHRMaXN0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJhbmsgPSA3XG5cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgdGhpcy5zdGF0ZSA9e1xuICAgICAgdXJsICAgIDogJ2hpJyxcbiAgICAgIGxpbmVzICA6IFtdLFxuICAgICAgbWFpbk9iajoge31cbiAgICB9XG4gIH1cbiAgZXNjYXBlUmVnRXhwKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTsgLy8gJCYgbWVhbnMgdGhlIHdob2xlIG1hdGNoZWQgc3RyaW5nXG4gIH1cbiAgcmVnZXggPSAvXFxbXFwqezd9XFxzKC4qKVxcXS9pXG4gIHJlZ2V4MiA9IC9cXFtcXCp7Nn1cXHMoLiopXFxdL2lcblxuICBmb3JtYXQodXJsKXtcbiAgICBsZXQgbGluZXMgPSB1cmwuc3BsaXQoLyhcXFtcXCp7N31cXHMuKlxcXSkvKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGxpbmUgPSBsaW5lc1tpXVxuICAgIH1cblxuXG4gICAgbGV0IGxpbmVzMiA9IGxpbmVzLm1hcCgoZWFjaCxudW0pPT57XG4gICAgICBsZXQgbWF0Y2ggPSBlYWNoLm1hdGNoKHRoaXMucmVnZXgpXG4gICAgICBpZihtYXRjaCA9PSBudWxsKXtyZXR1cm59XG4gICAgICBsZXQgbmFtZSAgICA9IGVhY2gubWF0Y2godGhpcy5yZWdleClbMV1cbiAgICAgIGxldCBjb250ZW50ID0gbGluZXNbbnVtKzFdXG4gICAgICByZXR1cm4ge25hbWU6bmFtZSwgY29udGVudDpjb250ZW50fVxuICAgIH0pLmZpbHRlcihCb29sZWFuKTtcblxuXG4gICAgbGV0IGxpbmVzMyA9IGxpbmVzMi5tYXAoKGVhY2gsbnVtKT0+e1xuICAgICAgbGV0IGxpbmVzICA9IGVhY2guY29udGVudC5zcGxpdCgvKFxcW1xcKns2fVxccy4qXFxdKS8pXG4gICAgICBsZXQgcGFyZW50ID0gZWFjaC5uYW1lXG5cbiAgICAgIGxldCBsaW5lczIgPSBsaW5lcy5tYXAoKGVhY2gsbnVtKT0+e1xuICAgICAgICBsZXQgbWF0Y2ggPSBlYWNoLm1hdGNoKHRoaXMucmVnZXgyKVxuICAgICAgICBpZihtYXRjaCA9PSBudWxsKXtyZXR1cm59XG4gICAgICAgIGxldCBuYW1lICAgID0gZWFjaC5tYXRjaCh0aGlzLnJlZ2V4MilbMV1cbiAgICAgICAgbGV0IGNvbnRlbnQgPSBsaW5lc1tudW0rMV1cbiAgICAgICAgcmV0dXJuIHtuYW1lOm5hbWUsIGNvbnRlbnQ6Y29udGVudH1cbiAgICAgIH0pLmZpbHRlcihCb29sZWFuKTtcbiAgICAgIHJldHVybiB7bmFtZTplYWNoLm5hbWUsIGxpdGVyYWw6ZWFjaC5jb250ZW50LCBjb250ZW50OmxpbmVzMn1cbiAgICB9KS5maWx0ZXIoQm9vbGVhbik7XG5cbiAgICBjb25zb2xlLmxvZyhsaW5lczMsICdoZWhhJylcbiAgICB0aGlzLnNldFN0YXRlKHtsaW5lczpsaW5lc30pXG4gICAgdGhpcy5zZXRTdGF0ZSh7bWFpbk9iajpsaW5lczN9KVxuXG4gIH1cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IHsgcm91dGVyIH0gPSB0aGlzLnByb3BzXG4gICAgdGhpcy5zZXRTdGF0ZSgge3VybDpyb3V0ZXIucXVlcnkudXJsfSlcbiAgICB0aGlzLmZvcm1hdChyb3V0ZXIucXVlcnkudXJsKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXt9XG5cbiAgSXRlcmF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zdGF0ZS5tYWluT2JqLm1hcCgoZWFjaDEsa2V5MSk9PntcblxuICAgICAgcmV0dXJuIGVhY2gxLmNvbnRlbnQubWFwKChlYWNoMixrZXkyKT0+e1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8TGlzdEdyb3VwLkl0ZW0gYWN0aW9uIGhyZWY9e2AjJHtrZXkxfSwke2tleTJ9YH0+XG4gICAgICAgIHtlYWNoMi5uYW1lfVxuICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxuICAgICAgICApXG4gICAgICB9XG4gICAgKVxuICAgIH0pXG4gICAgKVxuICB9XG5cbiAgSXRlcmF0ZTIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc3RhdGUubWFpbk9iai5tYXAoKGVhY2gxLGtleTEpPT57XG4gICAgICAgIHJldHVybiBlYWNoMS5jb250ZW50Lm1hcCgoZWFjaDIsa2V5Mik9PntcbiAgICAgICAgICBsZXQgdmFsID0gYCR7ZWFjaDIubmFtZX1cbltcbiR7ZWFjaDIuY29udGVudH1cbiMke2VhY2gxLm5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMvZywnLScpfVxuI2h1bWFucG9zZVxuYFxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9e2AjJHtrZXkxfSwke2tleTJ9YH0+XG4gICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjI0XCIgY29scz1cIjEwMFwiIGRlZmF1bHRWYWx1ZT17dmFsfS8+XG4gICAgICAgICAgICA8Y2VudGVyPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKT0+YXhpb3MuZ2V0KGBodHRwOi8vMTI3LjAuMC4xOjUwMDAvc2I/dGV4dD0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWwpfWApLnRoZW4oY29uc29sZS5sb2coJ3lheScpKX0gPlxuICAgICAgICAgICAgUE9TVDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9jZW50ZXI+XG4gICAgICAgICAgICA8L1RhYi5QYW5lPlxuICAgICAgICAgIClcbiAgICAgIH0pfSlcbiAgICAgIC8vIHRoaXMuc3RhdGUubGluZXMubWFwKChlYWNoLGtleSk9PntcbiAgICAgIC8vICAgbGV0IHZhbCAgPSB0aGlzLnN0YXRlLmxpbmVzW2tleV0gKyB0aGlzLnN0YXRlLmxpbmVzW2tleSsxXVxuICAgICAgLy8gICAgICAgdmFsICs9ICdcXG4gI2dhbWUnXG4gICAgICAvLyAgIHJldHVybiAoXG5cbiAgICAgIC8vICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9eycjJytrZXl9PlxuICAgICAgLy8gICAgIDx0ZXh0YXJlYSByb3dzPVwiMjRcIiBjb2xzPVwiMTAwXCIgZGVmYXVsdFZhbHVlPXt2YWx9Lz5cbiAgICAgIC8vICAgICA8Y2VudGVyPlxuICAgICAgLy8gICAgIDxCdXR0b24gb25DbGljaz17KCk9PmNvbnNvbGUubG9nKHlvKX0gPiBodHRwOi8vMTI3LjAuMC4xOjUwMDAvc2IvUE9TVDwvQnV0dG9uPlxuICAgICAgLy8gICAgIDwvY2VudGVyPlxuICAgICAgLy8gICAgIDwvVGFiLlBhbmU+XG4gICAgICAvLyAgIClcbiAgICAgIC8vIH0pXG4gICAgKVxuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc29sZS5sb2coKVxuXG4gICAgLy8gUmV0dXJuIHByb3BlcnRpZXNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+RWRpdDwvdGl0bGU+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3B1cmVjc3NAMC42LjEvYnVpbGQvcHVyZS1taW4uY3NzXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wLWFscGhhLjYvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cbiAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSd0YWJsZVN0eWxlJz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kYXRhLm1hcCggKGVhY2gpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE1pbnV0ZVRyYW5zY3JpcHQgZGF0YT17ZWFjaH0vPlxuICAgICAgICAgICAgICAgICAgPC9jZW50ZXI+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDxUYWIuQ29udGFpbmVyIGlkPVwibGlzdC1ncm91cC10YWJzLWV4YW1wbGVcIiBkZWZhdWx0QWN0aXZlS2V5PVwiI2xpbmsxXCI+XG5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgPENvbCBzbT17NH0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tvdmVyZmxvd1k6J3Njcm9sbCcsIGhlaWdodDonNzAwcHgnfX0+XG4gICAgICAgICAgICAgIDxMaXN0R3JvdXA+XG4gICAgICAgICAgICAgICAgPHRoaXMuSXRlcmF0ZSAvPlxuICAgICAgICAgICAgICA8L0xpc3RHcm91cD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgc209ezh9PlxuICAgICAgICAgICAgICA8VGFiLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPHRoaXMuSXRlcmF0ZTIvPlxuICAgICAgICAgICAgICA8L1RhYi5Db250ZW50PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvVGFiLkNvbnRhaW5lcj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAudGFibGVTdHlsZSB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgcGFkZGluZyAgIDogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufSlcbiJdfQ== */\n/*@ sourceURL=/Users/yuya/git/sb-split/frontend/src/pages/listPage.js */",
        __self: this
      }));
    }
  }]);

  return TranscriptLists;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)));

/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/listPage.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/listPage.js */"./pages/listPage.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-fontawesome":
/*!************************************!*\
  !*** external "react-fontawesome" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-fontawesome");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=listPage.js.map