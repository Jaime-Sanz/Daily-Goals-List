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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Folder: () => (/* binding */ Folder)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\r\n\r\nclass Folder {\r\n    constructor(name, description, priority) {\r\n        this.name = name;\r\n        this.description = description || '';\r\n        this.priority = priority || '';\r\n        this.todos = [];\r\n    }\r\n\r\n    addTodo(title, description, dueDate, priority) {\r\n        const newTodo = { title, description, dueDate, priority };\r\n        this.todos.push(newTodo);\r\n        return newTodo;\r\n    }\r\n}\r\n\r\nfunction displayFolder(folder) {\r\n    let folderHolder = document.getElementById('folderHolder');\r\n\r\n    let folderDescription = document.createElement('div');\r\n    let folderDescriptionText = document.createElement('p');\r\n\r\n    folderDescription.classList.add('hoverBubble');\r\n\r\n    folderDescription.appendChild(folderDescriptionText);\r\n    folderHolder.appendChild(folderDescription);\r\n\r\n    folderDescriptionText.textContent = folder.description;\r\n  \r\n    // Create elements\r\n    let folderContainer = document.createElement('div');\r\n    let folderIcon = document.createElement('span');\r\n    let folderName = document.createElement('a');\r\n    let folderPlus = document.createElement('a');\r\n    let folderDelete = document.createElement('a');\r\n  \r\n    // Set content and attributes\r\n    folderName.textContent = folder.name;\r\n    folderIcon.textContent = 'folder';\r\n    folderPlus.textContent = 'add';\r\n    folderDelete.textContent = 'delete';\r\n    folderName.href = '#';\r\n    folderPlus.href = '#';\r\n    folderDelete.href = '#';\r\n    folderPlus.classList.add('material-symbols-outlined');\r\n    folderIcon.classList.add('material-symbols-outlined');\r\n    folderDelete.classList.add('material-symbols-outlined');\r\n  \r\n    // Apply color based on priority\r\n    if (folder.priority === 'High') {\r\n      folderIcon.style.color = 'red';\r\n    } else if (folder.priority === 'Normal') {\r\n      folderIcon.style.color = 'green';\r\n    } else {\r\n      folderIcon.style.color = 'blue';\r\n    }\r\n\r\n    folderName.addEventListener('mouseover', function() {\r\n        folderDescription.style.visibility = 'visible';\r\n    });\r\n\r\n    folderName.addEventListener('mouseout', function() {\r\n        folderDescription.style.visibility = 'hidden';\r\n    });\r\n\r\n    folderDelete.addEventListener('click', function() {\r\n        let text = \"Are You Sure You Want to Delete?\";\r\n        if (confirm(text) == true) {\r\n            folderHolder.removeChild(folderContainer);\r\n        }\r\n      });\r\n\r\n    folderPlus.addEventListener('click', function() {\r\n        \r\n    });\r\n  \r\n    // Append elements\r\n    folderHolder.appendChild(folderContainer);\r\n    folderContainer.appendChild(folderIcon);\r\n    folderContainer.appendChild(folderName);\r\n    folderContainer.appendChild(folderPlus);\r\n    folderContainer.appendChild(folderDelete);\r\n\r\n    (0,___WEBPACK_IMPORTED_MODULE_0__.showCreateScreen)();\r\n  }\r\n  \r\n\r\ndocument.getElementById(\"create-folder\").addEventListener(\"submit\", function(event){\r\n    let folderName = document.getElementById(\"folder-name\").value;\r\n    let folderDescription = document.getElementById(\"folder-description\").value;\r\n    let folderPriority = document.getElementById(\"folderPrio\").value;\r\n    let folderForm = document.getElementById(\"create-folder\");\r\n\r\n    const myFolder = new Folder(folderName, folderDescription, folderPriority);\r\n    displayFolder(myFolder);\r\n    folderForm.reset();\r\n    event.preventDefault();});;\n\n//# sourceURL=webpack://lib/./src/folders.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closePanel: () => (/* binding */ closePanel),\n/* harmony export */   openPanel: () => (/* binding */ openPanel),\n/* harmony export */   showCreateScreen: () => (/* binding */ showCreateScreen)\n/* harmony export */ });\n/* harmony import */ var _folders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folders */ \"./src/folders.js\");\n\r\n\r\n//Exported Functions\r\nfunction closePanel() {\r\n    document.getElementById(\"folders-panel\").style.width = \"0%\";\r\n    document.getElementById(\"goals-panel\").style.width = \"100%\";\r\n    document.getElementById(\"three-lines\").style.visibility = \"visible\";\r\n    document.getElementById(\"new-folder\").style.visibility = \"hidden\";\r\n}\r\n\r\nfunction openPanel() {\r\n    document.getElementById(\"new-folder\").style.visibility = \"visible\";\r\n    document.getElementById(\"folders-panel\").style.width = \"20%\";\r\n    document.getElementById(\"goals-panel\").style.width = \"80%\";\r\n    document.getElementById(\"three-lines\").style.visibility = \"hidden\";\r\n    document.getElementById(\"new-folder\").style.visibility = \"visible\";\r\n}\r\n\r\nfunction showCreateScreen() {\r\n    let formVis = document.getElementById(\"create-form\");\r\n    let folderForm = document.getElementById(\"create-folder\");\r\n\r\n    if (formVis.style.visibility === \"visible\"){\r\n        formVis.style.visibility = \"hidden\";\r\n        folderForm.reset();\r\n       } else {\r\n        formVis.style.visibility = \"visible\";\r\n       }\r\n}\r\n//End of Exported Functions\r\n\r\n\n\n//# sourceURL=webpack://lib/./src/index.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	lib = __webpack_exports__;
/******/ 	
/******/ })()
;