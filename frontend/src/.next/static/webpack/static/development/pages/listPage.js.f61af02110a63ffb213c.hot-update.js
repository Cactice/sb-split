webpackHotUpdate("static/development/pages/listPage.js",{

/***/ "./pages/listPage.js":
/*!***************************!*\
  !*** ./pages/listPage.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _components_MinuteTranscript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MinuteTranscript */ "./components/MinuteTranscript.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "../node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "../node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "../node_modules/react-bootstrap/es/index.js");
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "regex", /\[\*{6,}\s(.*)\]/i);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "Iterate", function () {
      return _this.state.lines.map(function (each, key) {
        var match = each.match(_this.regex);

        if (match == null) {
          return;
        }

        console.log('heyo', match);
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroup"].Item, {
          action: true,
          href: '#' + key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, match[1]);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "Iterate2", function () {
      return _this.state.lines.map(function (each, key) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Tab"].Pane, {
          eventKey: '#' + key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
          rows: "24",
          cols: "100",
          value: _this.state.lines[key] + '\n yoyo ha' + _this.state.lines[key + 1],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("center", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          onClick: function onClick() {
            return console.log(yo);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, "POST")));
      });
    });

    _this.state = {
      url: 'hi',
      lines: []
    };
    return _this;
  }

  _createClass(TranscriptLists, [{
    key: "format",
    value: function format() {
      var lines = this.state.url.split(this.regex);

      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        console.log(i, line);
      }

      this.setState({
        lines: lines
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var router = this.props.router;
      this.setState({
        url: router.query.url
      });
      console.log(router.query.url);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.format();
    }
  }, {
    key: "render",
    value: function render() {
      console.log(); // Return properties

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-547003602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        className: "jsx-547003602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Edit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-547003602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://unpkg.com/purecss@0.6.1/build/pure-min.css",
        className: "jsx-547003602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css",
        className: "jsx-547003602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        rel: "stylesheet",
        className: "jsx-547003602",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Tab"].Container, {
        id: "list-group-tabs-example",
        defaultActiveKey: "#link1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        sm: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(this.Iterate, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        sm: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Tab"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(this.Iterate2, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "547003602",
        css: ".tableStyle{text-align:center;padding :50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXlhL2dpdC9zYi1zcGxpdC9mcm9udGVuZC9zcmMvcGFnZXMvbGlzdFBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEcyQixBQUdpQyxrQkFDRixjQUNwQiIsImZpbGUiOiIvVXNlcnMveXV5YS9naXQvc2Itc3BsaXQvZnJvbnRlbmQvc3JjL3BhZ2VzL2xpc3RQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBNaW51dGVUcmFuc2NyaXB0IGZyb20gJy4uL2NvbXBvbmVudHMvTWludXRlVHJhbnNjcmlwdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCB7IFRhYiAsIENvbCAsIExpc3RHcm91cCAsIFJvdyAsIEJ1dHRvbiAsTGlzdEdyb3VwSXRlbSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoIGNsYXNzIFRyYW5zY3JpcHRMaXN0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB0aGlzLnN0YXRlID17XG4gICAgICB1cmwgIDogJ2hpJyxcbiAgICAgIGxpbmVzOiBbXSxcbiAgICB9XG4gIH1cblxuICByZWdleCA9IC9cXFtcXCp7Nix9XFxzKC4qKVxcXS9pXG4gIGZvcm1hdCgpe1xuICAgIGxldCBsaW5lcyA9IHRoaXMuc3RhdGUudXJsLnNwbGl0KHRoaXMucmVnZXgpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbGluZSA9IGxpbmVzW2ldXG5cbiAgICAgIGNvbnNvbGUubG9nKGksbGluZSlcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7bGluZXM6bGluZXN9KVxuXG4gIH1cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IHsgcm91dGVyIH0gPSB0aGlzLnByb3BzXG4gICAgdGhpcy5zZXRTdGF0ZSgge3VybDpyb3V0ZXIucXVlcnkudXJsfSlcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkudXJsKVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCl7dGhpcy5mb3JtYXQoKX1cblxuICBJdGVyYXRlID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnN0YXRlLmxpbmVzLm1hcCgoZWFjaCxrZXkpPT57XG4gICAgICAgIGxldCBtYXRjaCA9IGVhY2gubWF0Y2godGhpcy5yZWdleClcbiAgICAgICAgaWYobWF0Y2ggPT0gbnVsbCl7cmV0dXJufVxuICAgICAgICBjb25zb2xlLmxvZygnaGV5bycsbWF0Y2gpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDxMaXN0R3JvdXAuSXRlbSBhY3Rpb24gaHJlZj17JyMnK2tleX0+XG4gICAgICAgIHttYXRjaFsxXX1cbiAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICkpXG4gIH1cblxuICBJdGVyYXRlMiA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zdGF0ZS5saW5lcy5tYXAoKGVhY2gsa2V5KT0+e1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxUYWIuUGFuZSBldmVudEtleT17JyMnK2tleX0+XG4gICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCIyNFwiIGNvbHM9XCIxMDBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5saW5lc1trZXldICsgJ1xcbiB5b3lvIGhhJyArIHRoaXMuc3RhdGUubGluZXNba2V5KzFdfS8+XG4gICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5jb25zb2xlLmxvZyh5byl9ID5QT1NUPC9CdXR0b24+XG4gICAgICAgICAgPC9jZW50ZXI+XG4gICAgICAgICAgPC9UYWIuUGFuZT5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICkpXG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zb2xlLmxvZygpXG4gICAgLy8gUmV0dXJuIHByb3BlcnRpZXNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+RWRpdDwvdGl0bGU+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3B1cmVjc3NAMC42LjEvYnVpbGQvcHVyZS1taW4uY3NzXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wLWFscGhhLjYvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cbiAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSd0YWJsZVN0eWxlJz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kYXRhLm1hcCggKGVhY2gpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE1pbnV0ZVRyYW5zY3JpcHQgZGF0YT17ZWFjaH0vPlxuICAgICAgICAgICAgICAgICAgPC9jZW50ZXI+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDxUYWIuQ29udGFpbmVyIGlkPVwibGlzdC1ncm91cC10YWJzLWV4YW1wbGVcIiBkZWZhdWx0QWN0aXZlS2V5PVwiI2xpbmsxXCI+XG5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgPENvbCBzbT17NH0+XG4gICAgICAgICAgICAgIDxMaXN0R3JvdXA+XG4gICAgICAgICAgICAgICAgPHRoaXMuSXRlcmF0ZSAvPlxuICAgICAgICAgICAgICA8L0xpc3RHcm91cD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCBzbT17OH0+XG4gICAgICAgICAgICAgIDxUYWIuQ29udGVudD5cbiAgICAgICAgICAgICAgICA8dGhpcy5JdGVyYXRlMi8+XG4gICAgICAgICAgICAgIDwvVGFiLkNvbnRlbnQ+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9UYWIuQ29udGFpbmVyPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIC50YWJsZVN0eWxlIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBwYWRkaW5nICAgOiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59KVxuIl19 */\n/*@ sourceURL=/Users/yuya/git/sb-split/frontend/src/pages/listPage.js */",
        __self: this
      }));
    }
  }]);

  return TranscriptLists;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/listPage")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=listPage.js.f61af02110a63ffb213c.hot-update.js.map