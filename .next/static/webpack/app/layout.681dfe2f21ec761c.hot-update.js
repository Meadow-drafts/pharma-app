"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"5254a4df9bf1\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NmY0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjUyNTRhNGRmOWJmMVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/redux/modules/reservations/reservationActions.ts":
/*!**************************************************************!*\
  !*** ./src/redux/modules/reservations/reservationActions.ts ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var src_api_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/api/route */ \"(app-pages-browser)/./src/api/route.ts\");\n\n\nconst getReservations = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"reservations/getReservations\", async ()=>{\n    return await (0,src_api_route__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/reservations\", \"GET\");\n});\nconst createReservation = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"reservations/createReservation\", async (data)=>{\n    return await (0,src_api_route__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/reservations\", \"POST\", data);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    getReservations,\n    createReservation\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9tb2R1bGVzL3Jlc2VydmF0aW9ucy9yZXNlcnZhdGlvbkFjdGlvbnMudHMiLCJtYXBwaW5ncyI6Ijs7O0FBQW9EO0FBQ2Q7QUFHdEMsTUFBTUUsa0JBQWtCRixrRUFBZ0JBLENBQUMsZ0NBQWdDO0lBQ3ZFLE9BQU8sTUFBTUMseURBQVNBLENBQUMsaUJBQWlCO0FBRTFDO0FBRUEsTUFBTUUsb0JBQW9CSCxrRUFBZ0JBLENBQUMsa0NBQWtDLE9BQU9JO0lBQ2hGLE9BQU8sTUFBTUgseURBQVNBLENBQUMsaUJBQWlCLFFBQVFHO0FBRWxEO0FBRUYsK0RBQWU7SUFDWEY7SUFDQUM7QUFDSCxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L21vZHVsZXMvcmVzZXJ2YXRpb25zL3Jlc2VydmF0aW9uQWN0aW9ucy50cz9mODlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IGFwaUNsaWVudCBmcm9tICdzcmMvYXBpL3JvdXRlJztcclxuXHJcblxyXG5jb25zdCBnZXRSZXNlcnZhdGlvbnMgPSBjcmVhdGVBc3luY1RodW5rKCdyZXNlcnZhdGlvbnMvZ2V0UmVzZXJ2YXRpb25zJywgYXN5bmMgKCkgPT4ge1xyXG4gIHJldHVybiBhd2FpdCBhcGlDbGllbnQoJy9yZXNlcnZhdGlvbnMnLCAnR0VUJyk7XHJcbiAgXHJcbn0pO1xyXG5cclxuY29uc3QgY3JlYXRlUmVzZXJ2YXRpb24gPSBjcmVhdGVBc3luY1RodW5rKCdyZXNlcnZhdGlvbnMvY3JlYXRlUmVzZXJ2YXRpb24nLCBhc3luYyAoZGF0YT86YW55KSA9PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgYXBpQ2xpZW50KCcvcmVzZXJ2YXRpb25zJywgJ1BPU1QnLCBkYXRhKTsgICAgXHJcbiAgICBcclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgXHJcbiAgICBnZXRSZXNlcnZhdGlvbnMsXHJcbiAgICBjcmVhdGVSZXNlcnZhdGlvblxyXG4gfTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUFzeW5jVGh1bmsiLCJhcGlDbGllbnQiLCJnZXRSZXNlcnZhdGlvbnMiLCJjcmVhdGVSZXNlcnZhdGlvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/modules/reservations/reservationActions.ts\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/redux/modules/reservations/reservationReducer.ts":
/*!**************************************************************!*\
  !*** ./src/redux/modules/reservations/reservationReducer.ts ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ReservationState: function() { return /* binding */ ReservationState; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _reservationActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reservationActions */ \"(app-pages-browser)/./src/redux/modules/reservations/reservationActions.ts\");\n\n\nconst ReservationState = {\n    reservations: {\n        loading: false,\n        data: [],\n        error:  false || {}\n    },\n    reservation: {},\n    error:  false || {},\n    creating: false\n};\nconst reservationReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createReducer)(ReservationState, (builder)=>{\n    builder.addCase(_reservationActions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getReservations.pending, (state)=>{\n        state.reservations.loading = true;\n    }).addCase(_reservationActions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getReservations.fulfilled, (state, action)=>{\n        state.reservations.data = action.payload.data;\n        state.reservations.loading = false;\n    }).addCase(_reservationActions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getReservations.rejected, (state, action)=>{\n        state.reservations.loading = false;\n        state.reservations.error = action.error;\n    }).addCase(_reservationActions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createReservation.pending, (state)=>{\n        state.creating = true;\n    }).addCase(_reservationActions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createReservation.fulfilled, (state, action)=>{\n        state.creating = false;\n        state.reservation = action.payload;\n    }).addCase(_reservationActions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createReservation.rejected, (state, action)=>{\n        state.creating = false;\n        state.error = action.error;\n    });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (reservationReducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9tb2R1bGVzL3Jlc2VydmF0aW9ucy9yZXNlcnZhdGlvblJlZHVjZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBQ0s7QUFFL0MsTUFBTUUsbUJBQW1CO0lBQzVCQyxjQUFjO1FBQ1pDLFNBQVM7UUFDVEMsTUFBTSxFQUFFO1FBQ1JDLE9BQU8sTUFBSSxJQUFJLENBQUM7SUFDbEI7SUFDQUMsYUFBWSxDQUFDO0lBQ2JELE9BQU8sTUFBSSxJQUFJLENBQUM7SUFDaEJFLFVBQVM7QUFDYixFQUFFO0FBRUYsTUFBTUMscUJBQXFCVCwrREFBYUEsQ0FBQ0Usa0JBQWtCLENBQUNRO0lBQ3hEQSxRQUNHQyxPQUFPLENBQUNWLDJEQUFrQkEsQ0FBQ1csZUFBZSxDQUFDQyxPQUFPLEVBQUUsQ0FBQ0M7UUFDcERBLE1BQU1YLFlBQVksQ0FBQ0MsT0FBTyxHQUFHO0lBQy9CLEdBQ0NPLE9BQU8sQ0FBQ1YsMkRBQWtCQSxDQUFDVyxlQUFlLENBQUNHLFNBQVMsRUFBRSxDQUFDRCxPQUFPRTtRQUM3REYsTUFBTVgsWUFBWSxDQUFDRSxJQUFJLEdBQUdXLE9BQU9DLE9BQU8sQ0FBQ1osSUFBSTtRQUM3Q1MsTUFBTVgsWUFBWSxDQUFDQyxPQUFPLEdBQUc7SUFDL0IsR0FDQ08sT0FBTyxDQUFDViwyREFBa0JBLENBQUNXLGVBQWUsQ0FBQ00sUUFBUSxFQUFFLENBQUNKLE9BQU9FO1FBQzVERixNQUFNWCxZQUFZLENBQUNDLE9BQU8sR0FBRztRQUM3QlUsTUFBTVgsWUFBWSxDQUFDRyxLQUFLLEdBQUdVLE9BQU9WLEtBQUs7SUFDekMsR0FDQ0ssT0FBTyxDQUFDViwyREFBa0JBLENBQUNrQixpQkFBaUIsQ0FBQ04sT0FBTyxFQUFFLENBQUNDO1FBQ3REQSxNQUFNTixRQUFRLEdBQUc7SUFDbkIsR0FDQ0csT0FBTyxDQUFDViwyREFBa0JBLENBQUNrQixpQkFBaUIsQ0FBQ0osU0FBUyxFQUFFLENBQUNELE9BQU9FO1FBQy9ERixNQUFNTixRQUFRLEdBQUc7UUFDakJNLE1BQU1QLFdBQVcsR0FBR1MsT0FBT0MsT0FBTztJQUNwQyxHQUNDTixPQUFPLENBQUNWLDJEQUFrQkEsQ0FBQ2tCLGlCQUFpQixDQUFDRCxRQUFRLEVBQUUsQ0FBQ0osT0FBT0U7UUFDOURGLE1BQU1OLFFBQVEsR0FBRztRQUNqQk0sTUFBTVIsS0FBSyxHQUFHVSxPQUFPVixLQUFLO0lBQzVCO0FBQ0o7QUFFQSwrREFBZUcsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9tb2R1bGVzL3Jlc2VydmF0aW9ucy9yZXNlcnZhdGlvblJlZHVjZXIudHM/OTJmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCByZXNlcnZhdGlvbkFjdGlvbnMgZnJvbSAnLi9yZXNlcnZhdGlvbkFjdGlvbnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlc2VydmF0aW9uU3RhdGUgPSB7XHJcbiAgICByZXNlcnZhdGlvbnM6IHtcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGRhdGE6IFtdLFxyXG4gICAgICBlcnJvcjogbnVsbCB8fCB7fSxcclxuICAgIH0sXHJcbiAgICByZXNlcnZhdGlvbjp7fSxcclxuICAgIGVycm9yOiBudWxsIHx8IHt9LFxyXG4gICAgY3JlYXRpbmc6ZmFsc2VcclxufTtcclxuXHJcbmNvbnN0IHJlc2VydmF0aW9uUmVkdWNlciA9IGNyZWF0ZVJlZHVjZXIoUmVzZXJ2YXRpb25TdGF0ZSwgKGJ1aWxkZXIpID0+IHtcclxuICAgIGJ1aWxkZXJcclxuICAgICAgLmFkZENhc2UocmVzZXJ2YXRpb25BY3Rpb25zLmdldFJlc2VydmF0aW9ucy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcclxuICAgICAgICBzdGF0ZS5yZXNlcnZhdGlvbnMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hZGRDYXNlKHJlc2VydmF0aW9uQWN0aW9ucy5nZXRSZXNlcnZhdGlvbnMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHN0YXRlLnJlc2VydmF0aW9ucy5kYXRhID0gYWN0aW9uLnBheWxvYWQuZGF0YTsgIFxyXG4gICAgICAgIHN0YXRlLnJlc2VydmF0aW9ucy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hZGRDYXNlKHJlc2VydmF0aW9uQWN0aW9ucy5nZXRSZXNlcnZhdGlvbnMucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3RhdGUucmVzZXJ2YXRpb25zLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBzdGF0ZS5yZXNlcnZhdGlvbnMuZXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hZGRDYXNlKHJlc2VydmF0aW9uQWN0aW9ucy5jcmVhdGVSZXNlcnZhdGlvbi5wZW5kaW5nLCAoc3RhdGUpID0+IHtcclxuICAgICAgICBzdGF0ZS5jcmVhdGluZyA9IHRydWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hZGRDYXNlKHJlc2VydmF0aW9uQWN0aW9ucy5jcmVhdGVSZXNlcnZhdGlvbi5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3RhdGUuY3JlYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICBzdGF0ZS5yZXNlcnZhdGlvbiA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICB9KVxyXG4gICAgICAuYWRkQ2FzZShyZXNlcnZhdGlvbkFjdGlvbnMuY3JlYXRlUmVzZXJ2YXRpb24ucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3RhdGUuY3JlYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgcmVzZXJ2YXRpb25SZWR1Y2VyOyJdLCJuYW1lcyI6WyJjcmVhdGVSZWR1Y2VyIiwicmVzZXJ2YXRpb25BY3Rpb25zIiwiUmVzZXJ2YXRpb25TdGF0ZSIsInJlc2VydmF0aW9ucyIsImxvYWRpbmciLCJkYXRhIiwiZXJyb3IiLCJyZXNlcnZhdGlvbiIsImNyZWF0aW5nIiwicmVzZXJ2YXRpb25SZWR1Y2VyIiwiYnVpbGRlciIsImFkZENhc2UiLCJnZXRSZXNlcnZhdGlvbnMiLCJwZW5kaW5nIiwic3RhdGUiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVqZWN0ZWQiLCJjcmVhdGVSZXNlcnZhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/modules/reservations/reservationReducer.ts\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/redux/store.ts":
/*!****************************!*\
  !*** ./src/redux/store.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: function() { return /* binding */ store; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux */ \"(app-pages-browser)/./node_modules/redux/dist/redux.mjs\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist */ \"(app-pages-browser)/./node_modules/redux-persist/es/index.js\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist/lib/storage */ \"(app-pages-browser)/./node_modules/redux-persist/lib/storage/index.js\");\n/* harmony import */ var _middlewares_redirectMiddleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middlewares/redirectMiddleware */ \"(app-pages-browser)/./src/redux/middlewares/redirectMiddleware.ts\");\n/* harmony import */ var _modules_auth_authReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/auth/authReducer */ \"(app-pages-browser)/./src/redux/modules/auth/authReducer.ts\");\n/* harmony import */ var _modules_services_serviceReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/services/serviceReducer */ \"(app-pages-browser)/./src/redux/modules/services/serviceReducer.tsx\");\n/* harmony import */ var _modules_transactions_transactionReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/transactions/transactionReducer */ \"(app-pages-browser)/./src/redux/modules/transactions/transactionReducer.tsx\");\n/* harmony import */ var _modules_accounts_accountReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/accounts/accountReducer */ \"(app-pages-browser)/./src/redux/modules/accounts/accountReducer.ts\");\n/* harmony import */ var _modules_users_userReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/users/userReducer */ \"(app-pages-browser)/./src/redux/modules/users/userReducer.ts\");\n/* harmony import */ var _modules_clients_clientReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/clients/clientReducer */ \"(app-pages-browser)/./src/redux/modules/clients/clientReducer.ts\");\n/* harmony import */ var _modules_organisations_organisationReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/organisations/organisationReducer */ \"(app-pages-browser)/./src/redux/modules/organisations/organisationReducer.ts\");\n/* harmony import */ var _modules_drugs_drugReducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/drugs/drugReducer */ \"(app-pages-browser)/./src/redux/modules/drugs/drugReducer.ts\");\n/* harmony import */ var _modules_reservations_reservationReducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/reservations/reservationReducer */ \"(app-pages-browser)/./src/redux/modules/reservations/reservationReducer.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst persistConfig = {\n    key: \"root\",\n    storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    whitelist: [\n        \"auth\"\n    ]\n};\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_12__.combineReducers)({\n    auth: _modules_auth_authReducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    service: _modules_services_serviceReducer__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    transaction: _modules_transactions_transactionReducer__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    account: _modules_accounts_accountReducer__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    user: _modules_users_userReducer__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    client: _modules_clients_clientReducer__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    organisation: _modules_organisations_organisationReducer__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    drug: _modules_drugs_drugReducer__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    reservation: _modules_reservations_reservationReducer__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n});\nconst persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, rootReducer);\nconst makeConfiguredStore = ()=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_13__.configureStore)({\n        reducer: persistedReducer,\n        middleware: (getDefaultMiddleware)=>getDefaultMiddleware({\n                serializableCheck: false,\n                immutableCheck: false\n            }).concat(_middlewares_redirectMiddleware__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n    });\nconst store = ()=>{\n    const isServer = \"object\" === \"undefined\";\n    if (isServer) {\n        return makeConfiguredStore();\n    } else {\n        const persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, rootReducer);\n        let store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_13__.configureStore)({\n            reducer: persistedReducer\n        });\n        store.__persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistStore)(store);\n        return store;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC9zdG9yZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDVjtBQUNxQjtBQUNiO0FBQ2tCO0FBQ2I7QUFDVTtBQUNZO0FBQ1o7QUFDVDtBQUNNO0FBQ2tCO0FBQ3hCO0FBQ3FCO0FBRTNFLE1BQU1lLGdCQUFnQjtJQUNwQkMsS0FBSztJQUNMWixTQUFTQSxpRUFBT0E7SUFDaEJhLFdBQVc7UUFBQztLQUFPO0FBQ3JCO0FBRUEsTUFBTUMsY0FBY2pCLHVEQUFlQSxDQUFDO0lBQ2xDa0IsTUFBTWIsaUVBQVdBO0lBQ2pCYyxTQUFTYix3RUFBY0E7SUFDdkJjLGFBQWFiLGdGQUFrQkE7SUFDL0JjLFNBQVNiLHdFQUFjQTtJQUN2QmMsTUFBTWIsa0VBQVdBO0lBQ2pCYyxRQUFRYixzRUFBYUE7SUFDckJjLGNBQWNiLGtGQUFtQkE7SUFDakNjLE1BQUtiLG1FQUFXQTtJQUNoQmMsYUFBWWIsaUZBQWtCQTtBQUNoQztBQUVBLE1BQU1jLG1CQUFtQnpCLDZEQUFjQSxDQUFDWSxlQUFlRztBQUV2RCxNQUFNVyxzQkFBc0IsSUFDMUI3QixpRUFBY0EsQ0FBQztRQUNiOEIsU0FBU0Y7UUFDVEcsWUFBWSxDQUFDQyx1QkFDWEEscUJBQXFCO2dCQUFFQyxtQkFBbUI7Z0JBQU9DLGdCQUFnQjtZQUFNLEdBQUdDLE1BQU0sQ0FBQzlCLHVFQUFrQkE7SUFDdkc7QUFFSyxNQUFNK0IsUUFBUTtJQUNuQixNQUFNQyxXQUFXLGFBQWtCO0lBQ25DLElBQUlBLFVBQVU7UUFDWixPQUFPUjtJQUNULE9BQU87UUFDTCxNQUFNRCxtQkFBbUJ6Qiw2REFBY0EsQ0FBQ1ksZUFBZUc7UUFDdkQsSUFBSWtCLFFBQWFwQyxpRUFBY0EsQ0FBQztZQUM5QjhCLFNBQVNGO1FBQ1g7UUFDQVEsTUFBTUUsV0FBVyxHQUFHcEMsMkRBQVlBLENBQUNrQztRQUNqQyxPQUFPQTtJQUNUO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvc3RvcmUudHM/YTViMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgcGVyc2lzdFN0b3JlLCBwZXJzaXN0UmVkdWNlciB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSc7XG5pbXBvcnQgcmVkaXJlY3RNaWRkbGV3YXJlIGZyb20gJy4vbWlkZGxld2FyZXMvcmVkaXJlY3RNaWRkbGV3YXJlJztcbmltcG9ydCBhdXRoUmVkdWNlciBmcm9tICcuL21vZHVsZXMvYXV0aC9hdXRoUmVkdWNlcic7XG5pbXBvcnQgc2VydmljZVJlZHVjZXIgZnJvbSAnLi9tb2R1bGVzL3NlcnZpY2VzL3NlcnZpY2VSZWR1Y2VyJztcbmltcG9ydCB0cmFuc2FjdGlvblJlZHVjZXIgZnJvbSAnLi9tb2R1bGVzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvblJlZHVjZXInO1xuaW1wb3J0IGFjY291bnRSZWR1Y2VyIGZyb20gJy4vbW9kdWxlcy9hY2NvdW50cy9hY2NvdW50UmVkdWNlcic7XG5pbXBvcnQgdXNlclJlZHVjZXIgZnJvbSAnLi9tb2R1bGVzL3VzZXJzL3VzZXJSZWR1Y2VyJztcbmltcG9ydCBjbGllbnRSZWR1Y2VyIGZyb20gJy4vbW9kdWxlcy9jbGllbnRzL2NsaWVudFJlZHVjZXInO1xuaW1wb3J0IG9yZ2FuaXNhdGlvblJlZHVjZXIgZnJvbSAnLi9tb2R1bGVzL29yZ2FuaXNhdGlvbnMvb3JnYW5pc2F0aW9uUmVkdWNlcic7XG5pbXBvcnQgZHJ1Z1JlZHVjZXIgZnJvbSAnLi9tb2R1bGVzL2RydWdzL2RydWdSZWR1Y2VyJztcbmltcG9ydCByZXNlcnZhdGlvblJlZHVjZXIgZnJvbSAnLi9tb2R1bGVzL3Jlc2VydmF0aW9ucy9yZXNlcnZhdGlvblJlZHVjZXInO1xuXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xuICBrZXk6ICdyb290JyxcbiAgc3RvcmFnZTogc3RvcmFnZSxcbiAgd2hpdGVsaXN0OiBbJ2F1dGgnXSwgLy8/IFNwZWNpZnkgd2hpY2ggcmVkdWNlcnMgdG8gcGVyc2lzdFxufTtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBhdXRoOiBhdXRoUmVkdWNlcixcbiAgc2VydmljZTogc2VydmljZVJlZHVjZXIsXG4gIHRyYW5zYWN0aW9uOiB0cmFuc2FjdGlvblJlZHVjZXIsXG4gIGFjY291bnQ6IGFjY291bnRSZWR1Y2VyLFxuICB1c2VyOiB1c2VyUmVkdWNlcixcbiAgY2xpZW50OiBjbGllbnRSZWR1Y2VyLFxuICBvcmdhbmlzYXRpb246IG9yZ2FuaXNhdGlvblJlZHVjZXIsXG4gIGRydWc6ZHJ1Z1JlZHVjZXIsXG4gIHJlc2VydmF0aW9uOnJlc2VydmF0aW9uUmVkdWNlcixcbn0pO1xuXG5jb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgcm9vdFJlZHVjZXIpO1xuXG5jb25zdCBtYWtlQ29uZmlndXJlZFN0b3JlID0gKCkgPT5cbiAgY29uZmlndXJlU3RvcmUoe1xuICAgIHJlZHVjZXI6IHBlcnNpc3RlZFJlZHVjZXIsXG4gICAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PlxuICAgICAgZ2V0RGVmYXVsdE1pZGRsZXdhcmUoeyBzZXJpYWxpemFibGVDaGVjazogZmFsc2UsIGltbXV0YWJsZUNoZWNrOiBmYWxzZSB9KS5jb25jYXQocmVkaXJlY3RNaWRkbGV3YXJlKSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9ICgpID0+IHtcbiAgY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcbiAgaWYgKGlzU2VydmVyKSB7XG4gICAgcmV0dXJuIG1ha2VDb25maWd1cmVkU3RvcmUoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgcm9vdFJlZHVjZXIpO1xuICAgIGxldCBzdG9yZTogYW55ID0gY29uZmlndXJlU3RvcmUoe1xuICAgICAgcmVkdWNlcjogcGVyc2lzdGVkUmVkdWNlcixcbiAgICB9KTtcbiAgICBzdG9yZS5fX3BlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShzdG9yZSk7XG4gICAgcmV0dXJuIHN0b3JlO1xuICB9XG59O1xuXG5leHBvcnQgdHlwZSBBcHBTdG9yZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlPjtcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8QXBwU3RvcmVbJ2dldFN0YXRlJ10+O1xuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSBBcHBTdG9yZVsnZGlzcGF0Y2gnXTtcbiJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsImNvbWJpbmVSZWR1Y2VycyIsInBlcnNpc3RTdG9yZSIsInBlcnNpc3RSZWR1Y2VyIiwic3RvcmFnZSIsInJlZGlyZWN0TWlkZGxld2FyZSIsImF1dGhSZWR1Y2VyIiwic2VydmljZVJlZHVjZXIiLCJ0cmFuc2FjdGlvblJlZHVjZXIiLCJhY2NvdW50UmVkdWNlciIsInVzZXJSZWR1Y2VyIiwiY2xpZW50UmVkdWNlciIsIm9yZ2FuaXNhdGlvblJlZHVjZXIiLCJkcnVnUmVkdWNlciIsInJlc2VydmF0aW9uUmVkdWNlciIsInBlcnNpc3RDb25maWciLCJrZXkiLCJ3aGl0ZWxpc3QiLCJyb290UmVkdWNlciIsImF1dGgiLCJzZXJ2aWNlIiwidHJhbnNhY3Rpb24iLCJhY2NvdW50IiwidXNlciIsImNsaWVudCIsIm9yZ2FuaXNhdGlvbiIsImRydWciLCJyZXNlcnZhdGlvbiIsInBlcnNpc3RlZFJlZHVjZXIiLCJtYWtlQ29uZmlndXJlZFN0b3JlIiwicmVkdWNlciIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsInNlcmlhbGl6YWJsZUNoZWNrIiwiaW1tdXRhYmxlQ2hlY2siLCJjb25jYXQiLCJzdG9yZSIsImlzU2VydmVyIiwiX19wZXJzaXN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/store.ts\n"));

/***/ })

});