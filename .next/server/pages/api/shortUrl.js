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
exports.id = "pages/api/shortUrl";
exports.ids = ["pages/api/shortUrl"];
exports.modules = {

/***/ "./pages/api/shortUrl.js":
/*!*******************************!*\
  !*** ./pages/api/shortUrl.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  const {\n    url\n  } = req.body;\n  const shortUrl = Math.random().toString(36).substr(2, 5);\n\n  try {\n    const data = await prisma.link.create({\n      data: {\n        url,\n        shortUrl\n      }\n    });\n    return res.status(200).send(data);\n  } catch (error) {\n    return res.status(500).send({\n      error\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2hvcnRVcmwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUVBLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBSixFQUFmO0FBRUEsaUVBQWUsT0FBT0UsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLFFBQU07QUFBQ0MsSUFBQUE7QUFBRCxNQUFRRixHQUFHLENBQUNHLElBQWxCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLE1BQUwsR0FBY0MsUUFBZCxDQUF1QixFQUF2QixFQUEyQkMsTUFBM0IsQ0FBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBakI7O0FBQ0EsTUFBSTtBQUNBLFVBQU1DLElBQUksR0FBRyxNQUFNVixNQUFNLENBQUNXLElBQVAsQ0FBWUMsTUFBWixDQUFtQjtBQUNwQ0YsTUFBQUEsSUFBSSxFQUFFO0FBQUVQLFFBQUFBLEdBQUY7QUFBT0UsUUFBQUE7QUFBUDtBQUQ4QixLQUFuQixDQUFuQjtBQUdBLFdBQU9ILEdBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSixJQUFyQixDQUFQO0FBQ0gsR0FMRCxDQUtFLE9BQU9LLEtBQVAsRUFBYztBQUNiLFdBQU9iLEdBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNDLE1BQUFBO0FBQUQsS0FBckIsQ0FBUDtBQUNGO0FBRUYsQ0FaRCIsInNvdXJjZXMiOlsid2VicGFjazovL3VybC1zaG9ydGVuZS8uL3BhZ2VzL2FwaS9zaG9ydFVybC5qcz9jZTliIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5cbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3Qge3VybH0gPSByZXEuYm9keTtcbiAgY29uc3Qgc2hvcnRVcmwgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgNSk7XG4gIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcHJpc21hLmxpbmsuY3JlYXRlKHtcbiAgICAgICAgZGF0YTogeyB1cmwsIHNob3J0VXJsIH0sXG4gICAgICB9KVxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoe2Vycm9yfSk7XG4gIH1cblxufTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJyZXEiLCJyZXMiLCJ1cmwiLCJib2R5Iiwic2hvcnRVcmwiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHIiLCJkYXRhIiwibGluayIsImNyZWF0ZSIsInN0YXR1cyIsInNlbmQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/shortUrl.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/shortUrl.js"));
module.exports = __webpack_exports__;

})();