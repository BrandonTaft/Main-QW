"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/leaderboard",{

/***/ "./pages/leaderboard.js":
/*!******************************!*\
  !*** ./pages/leaderboard.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_Scorecard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Scorecard */ \"./src/components/Scorecard.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Leaderboard(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), leaderboard = ref[0], setLeaderboard = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getLeaderboard();\n    }, []);\n    var getLeaderboard = function() {\n        fetch(\"https://damp-spire-28696.herokuapp.com/api/highscore\").then(function(response) {\n            return response.json();\n        }).then(function(result) {\n            setLeaderboard(result);\n            console.log(leaderboard[0].score);\n        });\n    };\n    var leaderboardList = leaderboard.map(function(score) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    style: {\n                        paddingLeft: \"8px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: \"trophy\",\n                        src: \"/icons/trophy.png\",\n                        alt: \"leaderboard icon\",\n                        width: 55,\n                        height: 60\n                    }, void 0, false, {\n                        fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                        lineNumber: 24,\n                        columnNumber: 52\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: score.username\n                }, void 0, false, {\n                    fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    style: {\n                        textAlign: \"right\",\n                        paddingRight: \"16px\"\n                    },\n                    children: score.score\n                }, void 0, false, {\n                    fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"leaderboard-page \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Scorecard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Wizard\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"High Score\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, this),\n                        leaderboardList\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(Leaderboard, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Leaderboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Leaderboard);\nvar _c;\n$RefreshReg$(_c, \"Leaderboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sZWFkZXJib2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFtRDtBQUNwQjtBQUNxQjtBQUVwRCxTQUFTSyxXQUFXLENBQUNDLEtBQUssRUFBRTs7O0lBQ3hCLElBQXNDTCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQTNDTSxXQUFXLEdBQW9CTixHQUFZLEdBQWhDLEVBQUVPLGNBQWMsR0FBSVAsR0FBWSxHQUFoQjtJQUNsQ0MsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1pPLGNBQWMsRUFBRTtLQUNuQixFQUFFLEVBQUUsQ0FBQztJQUVOLElBQU1BLGNBQWMsR0FBRyxXQUFNO1FBQ3pCQyxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FDeERDLElBQUksQ0FBQ0MsU0FBQUEsUUFBUTttQkFBSUEsUUFBUSxDQUFDQyxJQUFJLEVBQUU7U0FBQSxDQUFDLENBQ2pDRixJQUFJLENBQUNHLFNBQUFBLE1BQU0sRUFBSTtZQUNaTixjQUFjLENBQUNNLE1BQU0sQ0FBQztZQUN0QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNULFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQ1UsS0FBSyxDQUFDO1NBQ3BDLENBQ0E7S0FDUjtJQUVELElBQU1DLGVBQWUsR0FBR1gsV0FBVyxDQUFDWSxHQUFHLENBQUMsU0FBQ0YsS0FBSyxFQUFLO1FBQy9DLHFCQUNJLDhEQUFDRyxJQUFFOzs4QkFDQyw4REFBQ0MsSUFBRTtvQkFBQ0MsS0FBSyxFQUFFO3dCQUFFQyxXQUFXLEVBQUUsS0FBSztxQkFBRTs4QkFBRSw0RUFBQ3BCLG1EQUFLO3dCQUFDcUIsU0FBUyxFQUFDLFFBQVE7d0JBQUNDLEdBQUcsRUFBQyxtQkFBbUI7d0JBQUNDLEdBQUcsRUFBQyxrQkFBa0I7d0JBQUNDLEtBQUssRUFBRSxFQUFFO3dCQUFFQyxNQUFNLEVBQUUsRUFBRTs7Ozs7NkJBQUk7Ozs7O3lCQUFLOzhCQUMxSSw4REFBQ1AsSUFBRTs4QkFBRUosS0FBSyxDQUFDWSxRQUFROzs7Ozt5QkFBTTs4QkFDekIsOERBQUNSLElBQUU7b0JBQUNDLEtBQUssRUFBRTt3QkFBRVEsU0FBUyxFQUFFLE9BQU87d0JBQUVDLFlBQVksRUFBRSxNQUFNO3FCQUFFOzhCQUFJZCxLQUFLLENBQUNBLEtBQUs7Ozs7O3lCQUFNOzs7Ozs7aUJBQzNFLENBQ1I7S0FDSixDQUFDO0lBQ0YscUJBQ0ksOERBQUNlLEtBQUc7UUFBQ1IsU0FBUyxFQUFDLG1CQUFtQjs7MEJBQzlCLDhEQUFDcEIsaUVBQVM7Ozs7b0JBQUc7MEJBQ2IsOERBQUM0QixLQUFHOzBCQUNBLDRFQUFDQyxPQUFLOztzQ0FDRiw4REFBQ2IsSUFBRTs7OENBQ0MsOERBQUNjLElBQUU7OENBQUMsUUFBTTs7Ozs7d0NBQUs7OENBQ2YsOERBQUNBLElBQUU7OENBQUMsWUFBVTs7Ozs7d0NBQUs7Ozs7OztnQ0FDbEI7d0JBQ0poQixlQUFlOzs7Ozs7d0JBQ1o7Ozs7O29CQUNOOzs7Ozs7WUFDSixDQUNUO0NBQ0o7R0F2Q1FiLFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQXdDcEIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGVhZGVyYm9hcmQuanM/Nzc2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBTY29yZUNhcmQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvU2NvcmVjYXJkJztcblxuZnVuY3Rpb24gTGVhZGVyYm9hcmQocHJvcHMpIHtcbiAgICBjb25zdCBbbGVhZGVyYm9hcmQsIHNldExlYWRlcmJvYXJkXSA9IHVzZVN0YXRlKFtdKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldExlYWRlcmJvYXJkKClcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IGdldExlYWRlcmJvYXJkID0gKCkgPT4ge1xuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9kYW1wLXNwaXJlLTI4Njk2Lmhlcm9rdWFwcC5jb20vYXBpL2hpZ2hzY29yZScpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIHNldExlYWRlcmJvYXJkKHJlc3VsdClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsZWFkZXJib2FyZFswXS5zY29yZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBsZWFkZXJib2FyZExpc3QgPSBsZWFkZXJib2FyZC5tYXAoKHNjb3JlKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjhweFwiIH19PjxJbWFnZSBjbGFzc05hbWU9XCJ0cm9waHlcIiBzcmM9XCIvaWNvbnMvdHJvcGh5LnBuZ1wiIGFsdD1cImxlYWRlcmJvYXJkIGljb25cIiB3aWR0aD17NTV9IGhlaWdodD17NjB9IC8+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3Njb3JlLnVzZXJuYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiLCBwYWRkaW5nUmlnaHQ6IFwiMTZweFwiIH19ID57c2NvcmUuc2NvcmV9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIClcbiAgICB9KVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZWFkZXJib2FyZC1wYWdlICc+XG4gICAgICAgICAgICA8U2NvcmVDYXJkIC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPldpemFyZDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+SGlnaCBTY29yZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIHtsZWFkZXJib2FyZExpc3R9XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBMZWFkZXJib2FyZCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJTY29yZUNhcmQiLCJMZWFkZXJib2FyZCIsInByb3BzIiwibGVhZGVyYm9hcmQiLCJzZXRMZWFkZXJib2FyZCIsImdldExlYWRlcmJvYXJkIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInNjb3JlIiwibGVhZGVyYm9hcmRMaXN0IiwibWFwIiwidHIiLCJ0ZCIsInN0eWxlIiwicGFkZGluZ0xlZnQiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInVzZXJuYW1lIiwidGV4dEFsaWduIiwicGFkZGluZ1JpZ2h0IiwiZGl2IiwidGFibGUiLCJ0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/leaderboard.js\n"));

/***/ })

});