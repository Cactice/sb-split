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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "regex", /\[\*{6}\s(.*)\]/i);

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
          value: _this.state.lines[key] + '\nyoyo ha' + _this.state.lines[int(key) + 1],
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
      var lines = this.state.url.split(/(\[\*{7}\s.*\])/);

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
        css: ".tableStyle{text-align:center;padding :50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXlhL2dpdC9zYi1zcGxpdC9mcm9udGVuZC9zcmMvcGFnZXMvbGlzdFBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEcyQixBQUdpQyxrQkFDRixjQUNwQiIsImZpbGUiOiIvVXNlcnMveXV5YS9naXQvc2Itc3BsaXQvZnJvbnRlbmQvc3JjL3BhZ2VzL2xpc3RQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBNaW51dGVUcmFuc2NyaXB0IGZyb20gJy4uL2NvbXBvbmVudHMvTWludXRlVHJhbnNjcmlwdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCB7IFRhYiAsIENvbCAsIExpc3RHcm91cCAsIFJvdyAsIEJ1dHRvbiAsTGlzdEdyb3VwSXRlbSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoIGNsYXNzIFRyYW5zY3JpcHRMaXN0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB0aGlzLnN0YXRlID17XG4gICAgICB1cmwgIDogJ2hpJyxcbiAgICAgIGxpbmVzOiBbXSxcbiAgICB9XG4gIH1cblxuICBmb3JtYXQoKXtcbiAgICBsZXQgbGluZXMgPSB0aGlzLnN0YXRlLnVybC5zcGxpdCgvKFxcW1xcKns3fVxccy4qXFxdKS8pXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbGluZSA9IGxpbmVzW2ldXG5cbiAgICAgIGNvbnNvbGUubG9nKGksbGluZSlcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7bGluZXM6bGluZXN9KVxuXG4gIH1cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IHsgcm91dGVyIH0gPSB0aGlzLnByb3BzXG4gICAgdGhpcy5zZXRTdGF0ZSgge3VybDpyb3V0ZXIucXVlcnkudXJsfSlcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkudXJsKVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCl7dGhpcy5mb3JtYXQoKX1cblxuICByZWdleCA9IC9cXFtcXCp7Nn1cXHMoLiopXFxdL2lcbiAgSXRlcmF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zdGF0ZS5saW5lcy5tYXAoKGVhY2gsa2V5KT0+e1xuICAgICAgICBsZXQgbWF0Y2ggPSBlYWNoLm1hdGNoKHRoaXMucmVnZXgpXG4gICAgICAgIGlmKG1hdGNoID09IG51bGwpe3JldHVybn1cbiAgICAgICAgY29uc29sZS5sb2coJ2hleW8nLG1hdGNoKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8TGlzdEdyb3VwLkl0ZW0gYWN0aW9uIGhyZWY9eycjJytrZXl9PlxuICAgICAgICB7bWF0Y2hbMV19XG4gICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICApKVxuICB9XG5cbiAgSXRlcmF0ZTIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc3RhdGUubGluZXMubWFwKChlYWNoLGtleSk9PntcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8VGFiLlBhbmUgZXZlbnRLZXk9eycjJytrZXl9PlxuICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiMjRcIiBjb2xzPVwiMTAwXCIgdmFsdWU9e3RoaXMuc3RhdGUubGluZXNba2V5XSArICdcXG55b3lvIGhhJyArIHRoaXMuc3RhdGUubGluZXNbaW50KGtleSkrMV19Lz5cbiAgICAgICAgICA8Y2VudGVyPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PmNvbnNvbGUubG9nKHlvKX0gPlBPU1Q8L0J1dHRvbj5cbiAgICAgICAgICA8L2NlbnRlcj5cbiAgICAgICAgICA8L1RhYi5QYW5lPlxuICAgICAgICApXG4gICAgICB9XG4gICAgKSlcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIGNvbnNvbGUubG9nKClcbiAgICAvLyBSZXR1cm4gcHJvcGVydGllc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5FZGl0PC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vcHVyZWNzc0AwLjYuMS9idWlsZC9wdXJlLW1pbi5jc3NcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAtYWxwaGEuNi9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3RhYmxlU3R5bGUnPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLmRhdGEubWFwKCAoZWFjaCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8Y2VudGVyPlxuICAgICAgICAgICAgICAgICAgICA8TWludXRlVHJhbnNjcmlwdCBkYXRhPXtlYWNofS8+XG4gICAgICAgICAgICAgICAgICA8L2NlbnRlcj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPFRhYi5Db250YWluZXIgaWQ9XCJsaXN0LWdyb3VwLXRhYnMtZXhhbXBsZVwiIGRlZmF1bHRBY3RpdmVLZXk9XCIjbGluazFcIj5cblxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sIHNtPXs0fT5cbiAgICAgICAgICAgICAgPExpc3RHcm91cD5cbiAgICAgICAgICAgICAgICA8dGhpcy5JdGVyYXRlIC8+XG4gICAgICAgICAgICAgIDwvTGlzdEdyb3VwPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIHNtPXs4fT5cbiAgICAgICAgICAgICAgPFRhYi5Db250ZW50PlxuICAgICAgICAgICAgICAgIDx0aGlzLkl0ZXJhdGUyLz5cbiAgICAgICAgICAgICAgPC9UYWIuQ29udGVudD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L1RhYi5Db250YWluZXI+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgLnRhYmxlU3R5bGUge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmcgICA6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn0pXG4iXX0= */\n/*@ sourceURL=/Users/yuya/git/sb-split/frontend/src/pages/listPage.js */",
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
//# sourceMappingURL=listPage.js.0d8dbdb8d72ff7fbaefb.hot-update.js.map