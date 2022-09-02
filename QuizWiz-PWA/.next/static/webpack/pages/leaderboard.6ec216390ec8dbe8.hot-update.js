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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_Scorecard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Scorecard */ \"./src/components/Scorecard.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Leaderboard(props) {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), leaderboard = ref[0], setLeaderboard = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getLeaderboard();\n    }, []);\n    var getLeaderboard = function() {\n        fetch(\"https://damp-spire-28696.herokuapp.com/api/highscore\").then(function(response) {\n            return response.json();\n        }).then(function(result) {\n            setLeaderboard(result);\n            console.log(leaderboard[0].score);\n        });\n    };\n    var leaderboardList = leaderboard.map(function(score) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: \"trophy\",\n                        src: \"/icons/trophy.png\",\n                        alt: \"leaderboard icon\",\n                        width: 55,\n                        height: 60\n                    }, void 0, false, {\n                        fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: score.username\n                }, void 0, false, {\n                    fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    style: {\n                        textAlign: \"right\"\n                    },\n                    children: score.score\n                }, void 0, false, {\n                    fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"leaderboard-page \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Scorecard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {}, void 0, false, {\n                                    fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Wizard\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"High Score\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, this),\n                        leaderboardList\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/leaderboard.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(Leaderboard, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Leaderboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Leaderboard);\nvar _c;\n$RefreshReg$(_c, \"Leaderboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sZWFkZXJib2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFtRDtBQUNwQjtBQUNxQjtBQUVwRCxTQUFTSyxXQUFXLENBQUNDLEtBQUssRUFBRTs7O0lBQ3hCLElBQXNDTCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQTNDTSxXQUFXLEdBQW9CTixHQUFZLEdBQWhDLEVBQUVPLGNBQWMsR0FBSVAsR0FBWSxHQUFoQjtJQUNsQ0MsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1pPLGNBQWMsRUFBRTtLQUNuQixFQUFFLEVBQUUsQ0FBQztJQUVOLElBQU1BLGNBQWMsR0FBRyxXQUFNO1FBQ3pCQyxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FDeERDLElBQUksQ0FBQ0MsU0FBQUEsUUFBUTttQkFBSUEsUUFBUSxDQUFDQyxJQUFJLEVBQUU7U0FBQSxDQUFDLENBQ2pDRixJQUFJLENBQUNHLFNBQUFBLE1BQU0sRUFBSTtZQUNaTixjQUFjLENBQUNNLE1BQU0sQ0FBQztZQUN0QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNULFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQ1UsS0FBSyxDQUFDO1NBQ3BDLENBQ0E7S0FDUjtJQUVELElBQU1DLGVBQWUsR0FBR1gsV0FBVyxDQUFDWSxHQUFHLENBQUMsU0FBQ0YsS0FBSyxFQUFLO1FBQy9DLHFCQUNJLDhEQUFDRyxJQUFFOzs4QkFDQyw4REFBQ0MsSUFBRTs4QkFBQyw0RUFBQ2xCLG1EQUFLO3dCQUFDbUIsU0FBUyxFQUFDLFFBQVE7d0JBQUNDLEdBQUcsRUFBQyxtQkFBbUI7d0JBQUNDLEdBQUcsRUFBQyxrQkFBa0I7d0JBQUNDLEtBQUssRUFBRSxFQUFFO3dCQUFFQyxNQUFNLEVBQUUsRUFBRTs7Ozs7NkJBQUk7Ozs7O3lCQUFLOzhCQUMzRyw4REFBQ0wsSUFBRTs4QkFBRUosS0FBSyxDQUFDVSxRQUFROzs7Ozt5QkFBTTs4QkFDekIsOERBQUNOLElBQUU7b0JBQUNPLEtBQUssRUFBRTt3QkFBQ0MsU0FBUyxFQUFFLE9BQU87cUJBQUM7OEJBQUlaLEtBQUssQ0FBQ0EsS0FBSzs7Ozs7eUJBQU07Ozs7OztpQkFDbkQsQ0FDUjtLQUNKLENBQUM7SUFDRixxQkFDSSw4REFBQ2EsS0FBRztRQUFDUixTQUFTLEVBQUMsbUJBQW1COzswQkFDOUIsOERBQUNsQixpRUFBUzs7OztvQkFBRzswQkFDYiw4REFBQzBCLEtBQUc7MEJBQ0EsNEVBQUNDLE9BQUs7O3NDQUVGLDhEQUFDWCxJQUFFOzs4Q0FDQyw4REFBQ1ksSUFBRTs7Ozt3Q0FBTTs4Q0FDVCw4REFBQ0EsSUFBRTs4Q0FBQyxRQUFNOzs7Ozt3Q0FBSzs4Q0FDZiw4REFBQ0EsSUFBRTs4Q0FBQyxZQUFVOzs7Ozt3Q0FBSzs7Ozs7O2dDQUNsQjt3QkFDSmQsZUFBZTs7Ozs7O3dCQUNaOzs7OztvQkFDTjs7Ozs7O1lBQ0osQ0FDVDtDQUNKO0dBekNRYixXQUFXO0FBQVhBLEtBQUFBLFdBQVc7QUEwQ3BCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xlYWRlcmJvYXJkLmpzPzc3NmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgU2NvcmVDYXJkIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1Njb3JlY2FyZCc7XG5cbmZ1bmN0aW9uIExlYWRlcmJvYXJkKHByb3BzKSB7XG4gICAgY29uc3QgW2xlYWRlcmJvYXJkLCBzZXRMZWFkZXJib2FyZF0gPSB1c2VTdGF0ZShbXSlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRMZWFkZXJib2FyZCgpXG4gICAgfSwgW10pXG5cbiAgICBjb25zdCBnZXRMZWFkZXJib2FyZCA9ICgpID0+IHtcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZGFtcC1zcGlyZS0yODY5Ni5oZXJva3VhcHAuY29tL2FwaS9oaWdoc2NvcmUnKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBzZXRMZWFkZXJib2FyZChyZXN1bHQpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobGVhZGVyYm9hcmRbMF0uc2NvcmUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbGVhZGVyYm9hcmRMaXN0ID0gbGVhZGVyYm9hcmQubWFwKChzY29yZSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD48SW1hZ2UgY2xhc3NOYW1lPVwidHJvcGh5XCIgc3JjPVwiL2ljb25zL3Ryb3BoeS5wbmdcIiBhbHQ9XCJsZWFkZXJib2FyZCBpY29uXCIgd2lkdGg9ezU1fSBoZWlnaHQ9ezYwfSAvPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntzY29yZS51c2VybmFtZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3RleHRBbGlnbjogXCJyaWdodFwifX0gPntzY29yZS5zY29yZX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKVxuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xlYWRlcmJvYXJkLXBhZ2UgJz5cbiAgICAgICAgICAgIDxTY29yZUNhcmQgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+V2l6YXJkPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5IaWdoIFNjb3JlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAge2xlYWRlcmJvYXJkTGlzdH1cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IExlYWRlcmJvYXJkIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIlNjb3JlQ2FyZCIsIkxlYWRlcmJvYXJkIiwicHJvcHMiLCJsZWFkZXJib2FyZCIsInNldExlYWRlcmJvYXJkIiwiZ2V0TGVhZGVyYm9hcmQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwic2NvcmUiLCJsZWFkZXJib2FyZExpc3QiLCJtYXAiLCJ0ciIsInRkIiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJ1c2VybmFtZSIsInN0eWxlIiwidGV4dEFsaWduIiwiZGl2IiwidGFibGUiLCJ0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/leaderboard.js\n"));

/***/ })

});