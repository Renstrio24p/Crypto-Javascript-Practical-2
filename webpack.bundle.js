/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/api */ \"./src/js/api.js\");\n\n(0,_js_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\ndocument.getElementById('root').innerHTML = \"\\n     <h1>Crypto Currency Rates</h1>\\n     <ul id=\\\"list-crypto\\\"></ul>\\n     <div id=\\\"loading\\\">Loading...</div>\\n     <div id=\\\"notification\\\">No more records found.</div>\\n   \";\n\n//# sourceURL=webpack://standalone-javascript/./src/index.js?");

/***/ }),

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ API)\n/* harmony export */ });\nfunction API() {\n  var ListCrypto = document.getElementById('list-crypto');\n  var Loading = document.getElementById('loading');\n  var Notification = document.getElementById('notification');\n  var page = 1;\n  function DataFetch() {\n    Loading.style.display = 'block';\n    fetch(\"https://api.coingecko.com/api/v3/exchange_rates?page=\".concat(page)).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      var rates = data.rates;\n\n      // Tenary IF Else\n      {\n        rates.length === 0 ? Notification.style.display = 'block' : rates.forEach(function (rates) {\n          var ItemList = document.createElement('li');\n          ItemList.textContent = \"\".concat(rates.name, \": \").concat(rates.value);\n          ListCrypto.appendChild(ItemList);\n        });\n        page++;\n        console.log(rates);\n        Loading.style.display = 'none';\n      }\n    })[\"catch\"](function (error) {\n      console.log('An error occurred while fetching data:', error);\n      Loading.style.display = 'none';\n    });\n  }\n  function LazyLoading() {\n    var TopScroll = window.pageYOffset || document.documentElement.scrollTop;\n    var WinHeight = window.innerHeight || document.documentElement.clientHeight;\n    var DocHeight = document.documentElement.scrollHeight;\n    {\n      TopScroll + WinHeight >= DocHeight - 100 && DataFetch();\n    }\n  }\n  window.addEventListener('scroll', LazyLoading);\n}\n\n//# sourceURL=webpack://standalone-javascript/./src/js/api.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;