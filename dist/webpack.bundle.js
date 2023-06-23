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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ API)\n/* harmony export */ });\nfunction API() {\n  var ListCrypto = document.getElementById('list-crypto');\n  var Loading = document.getElementById('loading');\n  var Notification = document.getElementById('notification');\n  var page = 1;\n  function DataFetch() {\n    Loading.style.display = 'block';\n    fetch(\"https://api.coingecko.com/api/v3/exchange_rates?page=\".concat(page)).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      var rates = data.rates;\n      if (rates.length === 0) {\n        Notification.style.display = 'block';\n      } else {\n        rates.forEach(function (rates) {\n          var ItemList = document.createElement('li');\n          ItemList.textContent = \"\".concat(rates.name, \": \").concat(rates.value);\n          ListCrypto.appendChild(ItemList);\n        });\n        page++;\n        console.log(rates.name);\n        Loading.style.display = 'none';\n      }\n    })[\"catch\"](function (error) {\n      console.log('An error occurred while fetching data:', error);\n      Loading.style.display = 'none';\n    });\n  }\n  function LazyLoading() {\n    var TopScroll = window.pageYOffset || document.documentElement.scrollTop;\n    var WinHeight = window.innerHeight || document.documentElement.clientHeight;\n    var DocHeight = document.documentElement.scrollHeight;\n    if (TopScroll + WinHeight >= DocHeight - 100) {\n      DataFetch();\n    }\n  }\n  window.addEventListener('scroll', LazyLoading);\n  document.getElementById('root').innerHTML = \"\\n     <h1>Crypto Currency Rates</h1>\\n     <ul id=\\\"list-crypto\\\"></ul>\\n     <div id=\\\"loading\\\">Loading...</div>\\n     <div id=\\\"notification\\\">No more records found.</div>\\n   \";\n}\n\n//# sourceURL=webpack://standalone-javascript/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;