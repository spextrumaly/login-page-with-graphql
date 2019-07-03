webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PostList.js":
/*!********************************!*\
  !*** ./components/PostList.js ***!
  \********************************/
/*! exports provided: allPostsQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allPostsQuery", function() { return allPostsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostList; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");

var _jsxFileName = "/Users/tanapon/graphql-test/login-page-with-graphql/components/PostList.js";



function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query {\n    posts {\n      id\n      title\n      UserId\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var allPostsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
function PostList() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
    query: allPostsQuery,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, function (_ref) {
    var loading = _ref.loading,
        error = _ref.error;
    if (error) return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
      message: "Error loading posts.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    });
    if (loading) return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Loading");
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
      className: "jsx-3530367944",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
      className: "jsx-3530367944",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3530367944",
      __self: this
    }, "section.jsx-3530367944{padding-bottom:20px;}li.jsx-3530367944{display:block;margin-bottom:10px;}div.jsx-3530367944{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}a.jsx-3530367944{font-size:14px;margin-right:10px;-webkit-text-decoration:none;text-decoration:none;padding-bottom:0;border:0;}span.jsx-3530367944{font-size:14px;margin-right:5px;}ul.jsx-3530367944{margin:0;padding:0;}button.jsx-3530367944:before{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-style:solid;border-width:6px 4px 0 4px;border-color:#ffffff transparent transparent transparent;content:'';height:0;margin-right:5px;width:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YW5hcG9uL2dyYXBocWwtdGVzdC9sb2dpbi1wYWdlLXdpdGgtZ3JhcGhxbC9jb21wb25lbnRzL1Bvc3RMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCd0IsQUFHcUMsQUFHTixBQUlLLEFBSUosQUFPQSxBQUlOLEFBSVMsU0FIUixLQW5CUyxDQVFELEFBT0QsSUFLbkIsQ0F2QkEsWUFtQkEsQ0FmQSxBQVF1QixzQ0FjRixZQWJGLE9BY1UsR0FwQmQsT0FPSixTQUNYLFFBYTJELGtEQXBCM0QsT0FxQmEsV0FDRixTQUNRLGlCQUNULFFBQ1YiLCJmaWxlIjoiL1VzZXJzL3RhbmFwb24vZ3JhcGhxbC10ZXN0L2xvZ2luLXBhZ2Utd2l0aC1ncmFwaHFsL2NvbXBvbmVudHMvUG9zdExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4vRXJyb3JNZXNzYWdlJ1xuXG5cbmV4cG9ydCBjb25zdCBhbGxQb3N0c1F1ZXJ5ID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgcG9zdHMge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBVc2VySWRcbiAgICB9XG4gIH1cbmBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RMaXN0ICgpIHtcbiAgcmV0dXJuIChcbiAgICA8UXVlcnkgcXVlcnk9e2FsbFBvc3RzUXVlcnl9PlxuICAgICAgeyh7IGxvYWRpbmcsIGVycm9yIH0pID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yTWVzc2FnZSBtZXNzYWdlPSdFcnJvciBsb2FkaW5nIHBvc3RzLicgLz5cbiAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj5cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJ1dHRvbjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogNnB4IDRweCAwIDRweDtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmZmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApXG4gICAgICB9fVxuICAgIDwvUXVlcnk+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/tanapon/graphql-test/login-page-with-graphql/components/PostList.js */"));
  });
}

/***/ })

})
//# sourceMappingURL=index.js.41b7a6d337e6d411c696.hot-update.js.map