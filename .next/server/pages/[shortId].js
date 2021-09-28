"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[shortId]";
exports.ids = ["pages/[shortId]"];
exports.modules = {

/***/ "./pages/[shortId].js":
/*!****************************!*\
  !*** ./pages/[shortId].js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ShortIdPage),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/marlonfalcon/Documents/Cusos/url-shortene/pages/[shortId].js\";\n\n\n\nfunction ShortIdPage() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: \"ShortId Redirect\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, this);\n}\nasync function getServerSideProps({\n  params\n}) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\n  const {\n    shortId\n  } = params;\n  const data = await prisma.link.findUnique({\n    where: {\n      shortUrl: shortId\n    }\n  });\n\n  if (!data) {\n    return {\n      redirect: {\n        destination: '/'\n      }\n    };\n  }\n\n  return {\n    redirect: {\n      destination: data.url\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bc2hvcnRJZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFZSxTQUFTRSxXQUFULEdBQXVCO0FBQ2xDLHNCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSDtBQUVNLGVBQWVDLGtCQUFmLENBQWtDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBbEMsRUFBOEM7QUFDakQsUUFBTUMsTUFBTSxHQUFJLElBQUlKLHdEQUFKLEVBQWhCO0FBQ0EsUUFBTTtBQUFFSyxJQUFBQTtBQUFGLE1BQWNGLE1BQXBCO0FBRUEsUUFBTUcsSUFBSSxHQUFHLE1BQU1GLE1BQU0sQ0FBQ0csSUFBUCxDQUFZQyxVQUFaLENBQXVCO0FBQ3RDQyxJQUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsUUFBUSxFQUFFTDtBQUFaO0FBRCtCLEdBQXZCLENBQW5COztBQUlBLE1BQUcsQ0FBQ0MsSUFBSixFQUFVO0FBQ04sV0FBTztBQUFFSyxNQUFBQSxRQUFRLEVBQUU7QUFBRUMsUUFBQUEsV0FBVyxFQUFFO0FBQWY7QUFBWixLQUFQO0FBQ0g7O0FBRUQsU0FBTztBQUFFRCxJQUFBQSxRQUFRLEVBQUU7QUFBRUMsTUFBQUEsV0FBVyxFQUFFTixJQUFJLENBQUNPO0FBQXBCO0FBQVosR0FBUDtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXJsLXNob3J0ZW5lLy4vcGFnZXMvW3Nob3J0SWRdLmpzPzkwNjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50ICAgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3J0SWRQYWdlKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBTaG9ydElkIFJlZGlyZWN0XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XG4gICAgY29uc3QgcHJpc21hICA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgICBjb25zdCB7IHNob3J0SWQgfSA9IHBhcmFtcztcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBwcmlzbWEubGluay5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHsgc2hvcnRVcmw6IHNob3J0SWQgfSxcbiAgICB9KTtcblxuICAgIGlmKCFkYXRhKSB7XG4gICAgICAgIHJldHVybiB7IHJlZGlyZWN0OiB7IGRlc3RpbmF0aW9uOiAnLycgfX07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcmVkaXJlY3Q6IHsgZGVzdGluYXRpb246IGRhdGEudXJsIH19XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcmlzbWFDbGllbnQiLCJTaG9ydElkUGFnZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInBhcmFtcyIsInByaXNtYSIsInNob3J0SWQiLCJkYXRhIiwibGluayIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInNob3J0VXJsIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[shortId].js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[shortId].js"));
module.exports = __webpack_exports__;

})();