"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/background",{

/***/ "./pages/background.js":
/*!*****************************!*\
  !*** ./pages/background.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_BrandonTaft_Desktop_QuizWiz_PWA_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_BrandonTaft_Desktop_QuizWiz_PWA_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_BrandonTaft_Desktop_QuizWiz_PWA_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tsparticles */ \"./node_modules/react-tsparticles/esm/index.js\");\n/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsparticles */ \"./node_modules/tsparticles/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Background() {\n    _s();\n    var particlesInit = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_BrandonTaft_Desktop_QuizWiz_PWA_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(engine) {\n            return _Users_BrandonTaft_Desktop_QuizWiz_PWA_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(engine);\n                        _ctx.next = 3;\n                        return (0,tsparticles__WEBPACK_IMPORTED_MODULE_3__.loadFull)(engine);\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function(engine) {\n            return _ref.apply(this, arguments);\n        };\n    }(), []);\n    var particlesLoaded = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_BrandonTaft_Desktop_QuizWiz_PWA_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(container) {\n            return _Users_BrandonTaft_Desktop_QuizWiz_PWA_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return console.log(container);\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function(container) {\n            return _ref.apply(this, arguments);\n        };\n    }(), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_tsparticles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        id: \"tsparticles\",\n        init: particlesInit,\n        loaded: particlesLoaded,\n        options: {\n            background: {\n                color: {\n                    value: \"#121212\"\n                }\n            },\n            fpsLimit: 120,\n            interactivity: {\n                events: {\n                    onClick: {\n                        enable: false,\n                        mode: \"push\"\n                    },\n                    onHover: {\n                        enable: false,\n                        mode: \"repulse\"\n                    },\n                    resize: true\n                },\n                modes: {\n                    push: {\n                        quantity: 4\n                    },\n                    repulse: {\n                        distance: 200,\n                        duration: 0.4\n                    }\n                }\n            },\n            particles: {\n                color: {\n                    value: \"#ffffff\"\n                },\n                links: {\n                    color: \"#ffffff\",\n                    distance: 150,\n                    enable: false,\n                    opacity: 0.5,\n                    width: 1\n                },\n                collisions: {\n                    enable: false\n                },\n                move: {\n                    directions: \"left\",\n                    enable: true,\n                    outModes: {\n                        default: \"out\"\n                    },\n                    random: true,\n                    speed: 6,\n                    straight: true\n                },\n                number: {\n                    density: {\n                        enable: true,\n                        area: 800\n                    },\n                    value: 80\n                },\n                opacity: {\n                    value: 0.5\n                },\n                shape: {\n                    type: [\n                        \"star\",\n                        \"circle\"\n                    ]\n                },\n                size: {\n                    value: {\n                        min: 1,\n                        max: 5\n                    }\n                }\n            },\n            detectRetina: true\n        }\n    }, void 0, false, {\n        fileName: \"/Users/BrandonTaft/Desktop/QuizWiz-PWA/pages/background.js\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_s(Background, \"PjleD03JXt5mR6AE5+SxrsWvXBc=\");\n_c = Background;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Background);\nvar _c;\n$RefreshReg$(_c, \"Background\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9iYWNrZ3JvdW5kLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUEwQztBQUNIO0FBQ0g7QUFFcEMsU0FBU0csVUFBVSxHQUFHOztJQUNsQixJQUFNQyxhQUFhLEdBQUdGLGtEQUFXO21CQUFDLHVQQUFPRyxNQUFNLEVBQUs7Ozs7d0JBQ2hEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDLENBQUM7OytCQUlkSixxREFBUSxDQUFDSSxNQUFNLENBQUM7Ozs7OztTQUN6Qjt3QkFOd0NBLE1BQU07OztTQU01QyxFQUFFLENBQUM7SUFFTixJQUFNRyxlQUFlLEdBQUdOLGtEQUFXO21CQUFDLHVQQUFPTyxTQUFTLEVBQUs7Ozs7OytCQUMvQ0gsT0FBTyxDQUFDQyxHQUFHLENBQUNFLFNBQVMsQ0FBQzs7Ozs7O1NBQy9CO3dCQUYwQ0EsU0FBUzs7O1NBRWpELEVBQUUsQ0FBQztJQUVOLHFCQUNJLDhEQUFDVCx5REFBUztRQUNOVSxFQUFFLEVBQUMsYUFBYTtRQUNoQkMsSUFBSSxFQUFFUCxhQUFhO1FBQ25CUSxNQUFNLEVBQUVKLGVBQWU7UUFDdkJLLE9BQU8sRUFBRTtZQUNMQyxVQUFVLEVBQUU7Z0JBQ1JDLEtBQUssRUFBRTtvQkFDSEMsS0FBSyxFQUFFLFNBQVM7aUJBQ25CO2FBQ0o7WUFDREMsUUFBUSxFQUFFLEdBQUc7WUFDYkMsYUFBYSxFQUFFO2dCQUNYQyxNQUFNLEVBQUU7b0JBQ0pDLE9BQU8sRUFBRTt3QkFDTEMsTUFBTSxFQUFFLEtBQUs7d0JBQ2JDLElBQUksRUFBRSxNQUFNO3FCQUNmO29CQUNEQyxPQUFPLEVBQUU7d0JBQ0xGLE1BQU0sRUFBRSxLQUFLO3dCQUNiQyxJQUFJLEVBQUUsU0FBUztxQkFDbEI7b0JBQ0RFLE1BQU0sRUFBRSxJQUFJO2lCQUNmO2dCQUNEQyxLQUFLLEVBQUU7b0JBQ0hDLElBQUksRUFBRTt3QkFDRkMsUUFBUSxFQUFFLENBQUM7cUJBQ2Q7b0JBQ0RDLE9BQU8sRUFBRTt3QkFDTEMsUUFBUSxFQUFFLEdBQUc7d0JBQ2JDLFFBQVEsRUFBRSxHQUFHO3FCQUNoQjtpQkFDSjthQUNKO1lBQ0RDLFNBQVMsRUFBRTtnQkFDUGhCLEtBQUssRUFBRTtvQkFDSEMsS0FBSyxFQUFFLFNBQVM7aUJBQ25CO2dCQUNEZ0IsS0FBSyxFQUFFO29CQUNIakIsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCYyxRQUFRLEVBQUUsR0FBRztvQkFDYlIsTUFBTSxFQUFFLEtBQUs7b0JBQ2JZLE9BQU8sRUFBRSxHQUFHO29CQUNaQyxLQUFLLEVBQUUsQ0FBQztpQkFDWDtnQkFDREMsVUFBVSxFQUFFO29CQUNSZCxNQUFNLEVBQUUsS0FBSztpQkFDaEI7Z0JBQ0RlLElBQUksRUFBRTtvQkFDRkMsVUFBVSxFQUFFLE1BQU07b0JBQ2xCaEIsTUFBTSxFQUFFLElBQUk7b0JBQ1ppQixRQUFRLEVBQUU7d0JBQ05DLE9BQU8sRUFBRSxLQUFLO3FCQUNqQjtvQkFFREMsTUFBTSxFQUFFLElBQUk7b0JBQ1pDLEtBQUssRUFBRSxDQUFDO29CQUNSQyxRQUFRLEVBQUUsSUFBSTtpQkFDakI7Z0JBQ0RDLE1BQU0sRUFBRTtvQkFDSkMsT0FBTyxFQUFFO3dCQUNMdkIsTUFBTSxFQUFFLElBQUk7d0JBQ1p3QixJQUFJLEVBQUUsR0FBRztxQkFDWjtvQkFDRDdCLEtBQUssRUFBRSxFQUFFO2lCQUNaO2dCQUNEaUIsT0FBTyxFQUFFO29CQUNMakIsS0FBSyxFQUFFLEdBQUc7aUJBQ2I7Z0JBQ0Q4QixLQUFLLEVBQUU7b0JBQ0hDLElBQUksRUFBRTt3QkFBQyxNQUFNO3dCQUFFLFFBQVE7cUJBQUM7aUJBQzNCO2dCQUNEQyxJQUFJLEVBQUU7b0JBQ0ZoQyxLQUFLLEVBQUU7d0JBQUVpQyxHQUFHLEVBQUUsQ0FBQzt3QkFBRUMsR0FBRyxFQUFFLENBQUM7cUJBQUU7aUJBQzVCO2FBQ0o7WUFDREMsWUFBWSxFQUFFLElBQUk7U0FDckI7Ozs7O1lBQ0gsQ0FDSjtDQUNMO0dBN0ZRaEQsVUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBK0ZuQiwrREFBZUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9iYWNrZ3JvdW5kLmpzP2M2ODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhcnRpY2xlcyBmcm9tIFwicmVhY3QtdHNwYXJ0aWNsZXNcIjtcbmltcG9ydCB7IGxvYWRGdWxsIH0gZnJvbSBcInRzcGFydGljbGVzXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBCYWNrZ3JvdW5kKCkge1xuICAgIGNvbnN0IHBhcnRpY2xlc0luaXQgPSB1c2VDYWxsYmFjayhhc3luYyAoZW5naW5lKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVuZ2luZSk7XG4gICAgICAgIC8vIHlvdSBjYW4gaW5pdGlhdGUgdGhlIHRzUGFydGljbGVzIGluc3RhbmNlIChlbmdpbmUpIGhlcmUsIGFkZGluZyBjdXN0b20gc2hhcGVzIG9yIHByZXNldHNcbiAgICAgICAgLy8gdGhpcyBsb2FkcyB0aGUgdHNwYXJ0aWNsZXMgcGFja2FnZSBidW5kbGUsIGl0J3MgdGhlIGVhc2llc3QgbWV0aG9kIGZvciBnZXR0aW5nIGV2ZXJ5dGhpbmcgcmVhZHlcbiAgICAgICAgLy8gc3RhcnRpbmcgZnJvbSB2MiB5b3UgY2FuIGFkZCBvbmx5IHRoZSBmZWF0dXJlcyB5b3UgbmVlZCByZWR1Y2luZyB0aGUgYnVuZGxlIHNpemVcbiAgICAgICAgYXdhaXQgbG9hZEZ1bGwoZW5naW5lKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBwYXJ0aWNsZXNMb2FkZWQgPSB1c2VDYWxsYmFjayhhc3luYyAoY29udGFpbmVyKSA9PiB7XG4gICAgICAgIGF3YWl0IGNvbnNvbGUubG9nKGNvbnRhaW5lcik7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBhcnRpY2xlc1xuICAgICAgICAgICAgaWQ9XCJ0c3BhcnRpY2xlc1wiXG4gICAgICAgICAgICBpbml0PXtwYXJ0aWNsZXNJbml0fVxuICAgICAgICAgICAgbG9hZGVkPXtwYXJ0aWNsZXNMb2FkZWR9XG4gICAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiIzEyMTIxMlwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnBzTGltaXQ6IDEyMCxcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGl2aXR5OiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJwdXNoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb25Ib3Zlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJyZXB1bHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2Rlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHVzaDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcHVsc2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZTogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFydGljbGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZTogMTUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb3ZlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb25zOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dE1vZGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogXCJvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiA2LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyYWlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG51bWJlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVuc2l0eToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmVhOiA4MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDgwLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMC41LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogW1wic3RhclwiLCBcImNpcmNsZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHsgbWluOiAxLCBtYXg6IDUgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRldGVjdFJldGluYTogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZCJdLCJuYW1lcyI6WyJQYXJ0aWNsZXMiLCJsb2FkRnVsbCIsInVzZUNhbGxiYWNrIiwiQmFja2dyb3VuZCIsInBhcnRpY2xlc0luaXQiLCJlbmdpbmUiLCJjb25zb2xlIiwibG9nIiwicGFydGljbGVzTG9hZGVkIiwiY29udGFpbmVyIiwiaWQiLCJpbml0IiwibG9hZGVkIiwib3B0aW9ucyIsImJhY2tncm91bmQiLCJjb2xvciIsInZhbHVlIiwiZnBzTGltaXQiLCJpbnRlcmFjdGl2aXR5IiwiZXZlbnRzIiwib25DbGljayIsImVuYWJsZSIsIm1vZGUiLCJvbkhvdmVyIiwicmVzaXplIiwibW9kZXMiLCJwdXNoIiwicXVhbnRpdHkiLCJyZXB1bHNlIiwiZGlzdGFuY2UiLCJkdXJhdGlvbiIsInBhcnRpY2xlcyIsImxpbmtzIiwib3BhY2l0eSIsIndpZHRoIiwiY29sbGlzaW9ucyIsIm1vdmUiLCJkaXJlY3Rpb25zIiwib3V0TW9kZXMiLCJkZWZhdWx0IiwicmFuZG9tIiwic3BlZWQiLCJzdHJhaWdodCIsIm51bWJlciIsImRlbnNpdHkiLCJhcmVhIiwic2hhcGUiLCJ0eXBlIiwic2l6ZSIsIm1pbiIsIm1heCIsImRldGVjdFJldGluYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/background.js\n"));

/***/ })

});