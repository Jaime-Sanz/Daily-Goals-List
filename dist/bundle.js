/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var lib;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/folders.js":
/*!************************!*\
  !*** ./src/folders.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Folder: () => (/* binding */ Folder)\n/* harmony export */ });\nclass Folder {\r\n    constructor(name, description, priority) {\r\n        this.name = name;\r\n        this.description = description || '';\r\n        this.priority = priority || '';\r\n        this.todos = [];\r\n    }\r\n\r\n    addTodo(title, description, dueDate, priority) {\r\n        const newTodo = { title, description, dueDate, priority };\r\n        this.todos.push(newTodo);\r\n        return newTodo;\r\n    }\r\n\r\n    deleteTodoByTitle(title) {\r\n        const index = this.todos.findIndex(todo => todo.title === title);\r\n        if (index !== -1) {\r\n          const deletedTodo = this.todos.splice(index, 1)[0];\r\n          return deletedTodo;\r\n        } else {\r\n          return null; \r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://lib/./src/folders.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closePanel: () => (/* binding */ closePanel),\n/* harmony export */   openPanel: () => (/* binding */ openPanel),\n/* harmony export */   showCreateScreen: () => (/* binding */ showCreateScreen)\n/* harmony export */ });\n/* harmony import */ var _folders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folders */ \"./src/folders.js\");\n\r\n\r\n//Exported Functions\r\nfunction closePanel() {\r\n    document.getElementById(\"folders-panel\").style.width = \"0%\";\r\n    document.getElementById(\"goals-panel\").style.width = \"100%\";\r\n    document.getElementById(\"three-lines\").style.visibility = \"visible\";\r\n    document.getElementById(\"new-folder\").style.visibility = \"hidden\";\r\n}\r\n\r\nfunction openPanel() {\r\n    document.getElementById(\"new-folder\").style.visibility = \"visible\";\r\n    document.getElementById(\"folders-panel\").style.width = \"20%\";\r\n    document.getElementById(\"goals-panel\").style.width = \"80%\";\r\n    document.getElementById(\"three-lines\").style.visibility = \"hidden\";\r\n    document.getElementById(\"new-folder\").style.visibility = \"visible\";\r\n}\r\n\r\nfunction showCreateScreen() {\r\n    let formVis = document.getElementById(\"create-form\");\r\n    let folderForm = document.getElementById(\"create-folder\");\r\n\r\n    if (formVis.style.visibility === \"visible\"){\r\n        formVis.style.visibility = \"hidden\";\r\n        folderForm.reset();\r\n       } else {\r\n        formVis.style.visibility = \"visible\";\r\n       }\r\n}\r\n//End of Exported Functions\r\n\n\n//# sourceURL=webpack://lib/./src/index.js?");

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
/******/ 	lib = __webpack_exports__;
/******/ 	
/******/ })()
;