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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_Scorecard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Scorecard */ \"./src/components/Scorecard.js\");\n/* harmony import */ var _src_components_Background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Background */ \"./src/components/Background.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Leaderboard(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), leaderboard = ref[0], setLeaderboard = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getLeaderboard();\n    }, []);\n    var getLeaderboard = function() {\n        fetch(\"https://damp-spire-28696.herokuapp.com/api/highscore\").then(function(response) {\n            return response.json();\n        }).then(function(result) {\n            setLeaderboard(result);\n            console.log(leaderboard[0].score);\n        });\n    };\n    var leaderboardList = leaderboard.map(function(score) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    style: {\n                        paddingLeft: \"8px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: \"trophy\",\n                        src: \"/icons/trophy.png\",\n                        alt: \"leaderboard icon\",\n                        width: 55,\n                        height: 60\n                    }, void 0, false, {\n                        fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                        lineNumber: 25,\n                        columnNumber: 52\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: score.username\n                }, void 0, false, {\n                    fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    style: {\n                        textAlign: \"right\",\n                        paddingRight: \"16px\"\n                    },\n                    children: score.score\n                }, void 0, false, {\n                    fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"leaderboard-page \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Background__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"leader-main\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Scorecard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex p-8 pt-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"table-title w-50 ma-auto\",\n                                children: \"Wizard\"\n                            }, void 0, false, {\n                                fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                                lineNumber: 38,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"table-title w-50 ma-auto\",\n                                children: \"High Score\"\n                            }, void 0, false, {\n                                fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                                lineNumber: 39,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        children: leaderboardList\n                    }, void 0, false, {\n                        fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_s(Leaderboard, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Leaderboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Leaderboard);\nvar _c;\n$RefreshReg$(_c, \"Leaderboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sZWFkZXJib2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFDcEI7QUFDcUI7QUFDRTtBQUV0RCxTQUFTTSxXQUFXLENBQUNDLEtBQUssRUFBRTs7O0lBQ3hCLElBQXNDTixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQTNDTyxXQUFXLEdBQW9CUCxHQUFZLEdBQWhDLEVBQUVRLGNBQWMsR0FBSVIsR0FBWSxHQUFoQjtJQUNsQ0MsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1pRLGNBQWMsRUFBRTtLQUNuQixFQUFFLEVBQUUsQ0FBQztJQUVOLElBQU1BLGNBQWMsR0FBRyxXQUFNO1FBQ3pCQyxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FDeERDLElBQUksQ0FBQ0MsU0FBQUEsUUFBUTttQkFBSUEsUUFBUSxDQUFDQyxJQUFJLEVBQUU7U0FBQSxDQUFDLENBQ2pDRixJQUFJLENBQUNHLFNBQUFBLE1BQU0sRUFBSTtZQUNaTixjQUFjLENBQUNNLE1BQU0sQ0FBQztZQUN0QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNULFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQ1UsS0FBSyxDQUFDO1NBQ3BDLENBQ0E7S0FDUjtJQUVELElBQU1DLGVBQWUsR0FBR1gsV0FBVyxDQUFDWSxHQUFHLENBQUMsU0FBQ0YsS0FBSyxFQUFLO1FBQy9DLHFCQUNJLDhEQUFDRyxJQUFFOzs4QkFDQyw4REFBQ0MsSUFBRTtvQkFBQ0MsS0FBSyxFQUFFO3dCQUFFQyxXQUFXLEVBQUUsS0FBSztxQkFBRTs4QkFBRSw0RUFBQ3JCLG1EQUFLO3dCQUFDc0IsU0FBUyxFQUFDLFFBQVE7d0JBQUNDLEdBQUcsRUFBQyxtQkFBbUI7d0JBQUNDLEdBQUcsRUFBQyxrQkFBa0I7d0JBQUNDLEtBQUssRUFBRSxFQUFFO3dCQUFFQyxNQUFNLEVBQUUsRUFBRTs7Ozs7NkJBQUk7Ozs7O3lCQUFLOzhCQUMxSSw4REFBQ1AsSUFBRTs4QkFBRUosS0FBSyxDQUFDWSxRQUFROzs7Ozt5QkFBTTs4QkFDekIsOERBQUNSLElBQUU7b0JBQUNDLEtBQUssRUFBRTt3QkFBRVEsU0FBUyxFQUFFLE9BQU87d0JBQUVDLFlBQVksRUFBRSxNQUFNO3FCQUFFOzhCQUFJZCxLQUFLLENBQUNBLEtBQUs7Ozs7O3lCQUFNOzs7Ozs7aUJBQzNFLENBQ1I7S0FDSixDQUFDO0lBQ0YscUJBQ0ksOERBQUNlLEtBQUc7UUFBQ1IsU0FBUyxFQUFDLG1CQUFtQjs7MEJBQzlCLDhEQUFDcEIsa0VBQVU7Ozs7b0JBQUc7MEJBQ2QsOERBQUM0QixLQUFHO2dCQUFDUixTQUFTLEVBQUMsYUFBYTs7a0NBQzVCLDhEQUFDckIsaUVBQVM7Ozs7NEJBQUc7a0NBRWIsOERBQUM2QixLQUFHO3dCQUFDUixTQUFTLEVBQUMsZUFBZTs7MENBQ2xCLDhEQUFDUSxLQUFHO2dDQUFDUixTQUFTLEVBQUMsMEJBQTBCOzBDQUFDLFFBQU07Ozs7O29DQUFNOzBDQUN0RCw4REFBQ1EsS0FBRztnQ0FBQ1IsU0FBUyxFQUFDLDBCQUEwQjswQ0FBQyxZQUFVOzs7OztvQ0FBTTs7Ozs7OzRCQUN4RDtrQ0FDViw4REFBQ1MsT0FBSztrQ0FFRGYsZUFBZTs7Ozs7NEJBQ1o7Ozs7OztvQkFDTjs7Ozs7O1lBQ0osQ0FDVDtDQUNKO0dBMUNRYixXQUFXO0FBQVhBLEtBQUFBLFdBQVc7QUEyQ3BCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xlYWRlcmJvYXJkLmpzPzc3NmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgU2NvcmVDYXJkIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1Njb3JlY2FyZCc7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9CYWNrZ3JvdW5kJztcblxuZnVuY3Rpb24gTGVhZGVyYm9hcmQocHJvcHMpIHtcbiAgICBjb25zdCBbbGVhZGVyYm9hcmQsIHNldExlYWRlcmJvYXJkXSA9IHVzZVN0YXRlKFtdKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldExlYWRlcmJvYXJkKClcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IGdldExlYWRlcmJvYXJkID0gKCkgPT4ge1xuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9kYW1wLXNwaXJlLTI4Njk2Lmhlcm9rdWFwcC5jb20vYXBpL2hpZ2hzY29yZScpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIHNldExlYWRlcmJvYXJkKHJlc3VsdClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsZWFkZXJib2FyZFswXS5zY29yZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBsZWFkZXJib2FyZExpc3QgPSBsZWFkZXJib2FyZC5tYXAoKHNjb3JlKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjhweFwiIH19PjxJbWFnZSBjbGFzc05hbWU9XCJ0cm9waHlcIiBzcmM9XCIvaWNvbnMvdHJvcGh5LnBuZ1wiIGFsdD1cImxlYWRlcmJvYXJkIGljb25cIiB3aWR0aD17NTV9IGhlaWdodD17NjB9IC8+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3Njb3JlLnVzZXJuYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiLCBwYWRkaW5nUmlnaHQ6IFwiMTZweFwiIH19ID57c2NvcmUuc2NvcmV9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIClcbiAgICB9KVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZWFkZXJib2FyZC1wYWdlICc+XG4gICAgICAgICAgICA8QmFja2dyb3VuZCAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWFkZXItbWFpblwiPlxuICAgICAgICAgICAgPFNjb3JlQ2FyZCAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBwLTggcHQtMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFibGUtdGl0bGUgdy01MCBtYS1hdXRvJz5XaXphcmQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJsZS10aXRsZSB3LTUwIG1hLWF1dG8nPkhpZ2ggU2NvcmU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAge2xlYWRlcmJvYXJkTGlzdH1cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IExlYWRlcmJvYXJkIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIlNjb3JlQ2FyZCIsIkJhY2tncm91bmQiLCJMZWFkZXJib2FyZCIsInByb3BzIiwibGVhZGVyYm9hcmQiLCJzZXRMZWFkZXJib2FyZCIsImdldExlYWRlcmJvYXJkIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInNjb3JlIiwibGVhZGVyYm9hcmRMaXN0IiwibWFwIiwidHIiLCJ0ZCIsInN0eWxlIiwicGFkZGluZ0xlZnQiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInVzZXJuYW1lIiwidGV4dEFsaWduIiwicGFkZGluZ1JpZ2h0IiwiZGl2IiwidGFibGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/leaderboard.js\n"));

/***/ })

});