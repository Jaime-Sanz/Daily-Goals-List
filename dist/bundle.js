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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Folder: () => (/* binding */ Folder)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\r\n\r\nlet folders = []; // Array to store multiple folders\r\nlet selectedFolder = null; // Variable to track the currently selected folder\r\n\r\nclass Folder {\r\n  constructor(name, description, priority) {\r\n    this.name = name;\r\n    this.description = description || '';\r\n    this.priority = priority || '';\r\n    this.todos = [];\r\n  }\r\n\r\n  addTodo(title, description, dueDate, priority) {\r\n    const newTodo = { title, description, dueDate, priority };\r\n    this.todos.push(newTodo);\r\n    return newTodo;\r\n  }\r\n}\r\n\r\nfunction displayFolder(folder) {\r\n  let folderHolder = document.getElementById('folderHolder');\r\n  let todoGoalsPanel = document.getElementById('goals-panel');\r\n  let todoContainer = document.getElementById('todo-container-panel');\r\n  let folderNameTitlePanel = document.getElementById('folder-name-panel');\r\n\r\n  // Create elements\r\n  let folderContainer = document.createElement('div');\r\n  let folderIcon = document.createElement('span');\r\n  let folderName = document.createElement('a');\r\n  let folderPlus = document.createElement('a');\r\n  let folderDelete = document.createElement('a');\r\n\r\n  let folderDescription = document.createElement('div');\r\n  let folderDescriptionText = document.createElement('p');\r\n\r\n  folderDescription.classList.add('hoverBubble');\r\n\r\n  folderDescription.appendChild(folderDescriptionText);\r\n  folderHolder.appendChild(folderDescription);\r\n\r\n  folderDescriptionText.textContent = folder.description;\r\n\r\n  // Set content and attributes\r\n  folderName.textContent = folder.name;\r\n  folderIcon.textContent = 'folder';\r\n  folderPlus.textContent = 'add';\r\n  folderDelete.textContent = 'delete';\r\n  folderName.href = '#';\r\n  folderPlus.href = '#';\r\n  folderDelete.href = '#';\r\n  folderPlus.classList.add('material-symbols-outlined');\r\n  folderIcon.classList.add('material-symbols-outlined');\r\n  folderDelete.classList.add('material-symbols-outlined');\r\n\r\n  // Apply color based on priority\r\n  if (folder.priority === 'High') {\r\n    folderIcon.style.color = 'red';\r\n  } else if (folder.priority === 'Normal') {\r\n    folderIcon.style.color = 'green';\r\n  } else {\r\n    folderIcon.style.color = 'blue';\r\n  }\r\n\r\n  // Add a click event listener to the folder container for selecting the folder\r\n  folderContainer.addEventListener('click', function () {\r\n    selectedFolder = folder;\r\n    folderNameTitlePanel.textContent = folder.name;\r\n    console.log(\"Selected Folder:\", selectedFolder);\r\n    displayTodos(selectedFolder);\r\n  });\r\n\r\n  folderName.addEventListener('mouseover', function () {\r\n    folderDescription.style.visibility = 'visible';\r\n  });\r\n\r\n  folderName.addEventListener('mouseout', function () {\r\n    folderDescription.style.visibility = 'hidden';\r\n  });\r\n\r\n  folderDelete.addEventListener('click', function () {\r\n    let text = \"Are You Sure You Want to Delete?\";\r\n\r\n    if (confirm(text) == true) {\r\n      // Find the index of the selected folder in the folders array\r\n      const folderIndex = folders.indexOf(folder);\r\n      if (folderIndex !== -1) {\r\n        // Remove the folder from the folders array\r\n        folders.splice(folderIndex, 1);\r\n      }\r\n\r\n      // Remove the folderContainer from the folderHolder\r\n      folderHolder.removeChild(folderContainer);\r\n\r\n      // Remove the todos from the selected folder\r\n      folder.todos = [];\r\n\r\n      // Update the displayTodos function to clear the goalsPanel\r\n      displayTodos(selectedFolder);\r\n\r\n      // Optional: Reset the selectedFolder to null\r\n      selectedFolder = null;\r\n\r\n      saveDataToJson();\r\n    }\r\n  });\r\n\r\n\r\n  folderPlus.addEventListener('click', function () {\r\n    (0,___WEBPACK_IMPORTED_MODULE_0__.showToDoScreen)();\r\n  });\r\n\r\n  // Append elements\r\n  folderHolder.appendChild(folderContainer);\r\n  folderContainer.appendChild(folderIcon);\r\n  folderContainer.appendChild(folderName);\r\n  folderContainer.appendChild(folderPlus);\r\n  folderContainer.appendChild(folderDelete);\r\n\r\n  // Add the current folder to the array\r\n  folders.push(folder);\r\n  if (folders.length < 1 && !selectedFolder) {\r\n    (0,___WEBPACK_IMPORTED_MODULE_0__.showCreateScreen)();\r\n  }\r\n}\r\n\r\nfunction displayTodos(folder) {\r\n  let goalsPanel = document.getElementById('todo-container-panel');\r\n\r\n  goalsPanel.textContent = ''; // Clear the existing todos\r\n\r\n  folder.todos.forEach(todo => {\r\n    let todoContainer = document.createElement('div');\r\n    let todoTitle = document.createElement('h3');\r\n    let todoDescription = document.createElement('p');\r\n    let todoDueDate = document.createElement('p');\r\n    let todoPriority = document.createElement('p');\r\n    let todoErase = document.createElement('button');\r\n\r\n    todoContainer.classList.add('todo-container');\r\n    todoTitle.classList.add('todo-title');\r\n    todoDescription.classList.add('todo-description');\r\n    todoDueDate.classList.add('todo-duedate');\r\n    todoPriority.classList.add('todo-prio');\r\n    todoErase.classList.add('todo-erase');\r\n\r\n\r\n    if(todo.priority === \"High\"){\r\n      todoContainer.style.backgroundColor = \"#fd5c63\";\r\n      todoErase.classList.add('button-bg-red')\r\n    } else if (todo.priority === \"Normal\") {\r\n      todoContainer.style.backgroundColor = \"#00FA9A\";\r\n      todoErase.classList.add('button-bg-green')\r\n    } else {\r\n      todoContainer.style.backgroundColor = \"#89CFF0\";\r\n      todoErase.classList.add('button-bg-blue')\r\n    }\r\n\r\n    console.log(todo.priority);\r\n\r\n    todoTitle.textContent = todo.title;\r\n    todoDescription.textContent = todo.description;\r\n    todoDueDate.textContent = 'Due Date: ' + todo.dueDate;\r\n    todoErase.textContent = \"Erase\";\r\n    todoErase.onclick = function () {\r\n      // Find the index of the todo in the folder's todos array\r\n      const todoIndex = folder.todos.indexOf(todo);\r\n      if (todoIndex !== -1) {\r\n        // Remove the todo from the folder's todos array\r\n        folder.todos.splice(todoIndex, 1);\r\n      }\r\n\r\n      // Remove the todoContainer from the goalsPanel\r\n      goalsPanel.removeChild(todoContainer);\r\n\r\n      saveDataToJson();\r\n    };\r\n\r\n    todoContainer.appendChild(todoTitle);\r\n    todoContainer.appendChild(todoDescription);\r\n    todoContainer.appendChild(todoDueDate);\r\n    todoContainer.appendChild(todoPriority);\r\n    todoContainer.appendChild(todoErase);\r\n\r\n    goalsPanel.appendChild(todoContainer);\r\n  });\r\n}\r\n\r\ndocument.getElementById(\"create-folder\").addEventListener(\"submit\", function (event) {\r\n  let folderName = document.getElementById(\"folder-name\").value;\r\n  let folderDescription = document.getElementById(\"folder-description\").value;\r\n  let folderPriority = document.getElementById(\"folderPrio\").value;\r\n  let folderForm = document.getElementById(\"create-folder\");\r\n\r\n  const newFolder = new Folder(folderName, folderDescription, folderPriority);\r\n  displayFolder(newFolder);\r\n  folderForm.reset();\r\n  saveDataToJson();\r\n  event.preventDefault();\r\n});\r\n\r\ndocument.getElementById(\"create-todo\").addEventListener(\"submit\", function (event) {\r\n  let todoTitle = document.getElementById(\"todo-title\").value;\r\n  let todoDescription = document.getElementById(\"todo-description\").value;\r\n  let todoDate = document.getElementById(\"todo-date\").value;\r\n  let todoPrio = document.getElementById(\"todo-prio\").value;\r\n\r\n  if (selectedFolder) {\r\n    selectedFolder.addTodo(todoTitle, todoDescription, todoDate, todoPrio);\r\n    displayTodos(selectedFolder);\r\n    saveDataToJson();\r\n    (0,___WEBPACK_IMPORTED_MODULE_0__.showToDoScreen)();\r\n  } else {\r\n    console.error(\"No folder selected.\");\r\n  }\r\n  event.preventDefault();\r\n});\r\n\r\n// Function to convert data to JSON string\r\nfunction saveDataToJson() {\r\n  const dataToSave = {\r\n    folders: folders,\r\n    selectedFolder: selectedFolder\r\n  };\r\n\r\n  const jsonString = JSON.stringify(dataToSave);\r\n\r\n  console.log('Saving data to JSON:', jsonString);\r\n\r\n  // Save the JSON string to localStorage\r\n  localStorage.setItem('yourAppData', jsonString);\r\n}\r\n\r\n// Function to load data from JSON string\r\n// Function to load data from JSON string\r\nfunction loadDataFromJson() {\r\n  console.log('Loading data from JSON');\r\n\r\n  const jsonString = localStorage.getItem('yourAppData');\r\n  console.log('Retrieved JSON string:', jsonString);\r\n\r\n  if (jsonString) {\r\n    try {\r\n      const loadedData = JSON.parse(jsonString);\r\n\r\n      // Create a temporary array to store loaded folders\r\n      const loadedFolders = [];\r\n\r\n      // Load the data back into your application variables\r\n      if (loadedData.folders && Array.isArray(loadedData.folders)) {\r\n        loadedData.folders.forEach(folderData => {\r\n          // Check if a folder with the same name already exists\r\n          const existingFolder = loadedFolders.find(folder => folder.name === folderData.name);\r\n\r\n          if (existingFolder) {\r\n            // Folder already exists, update its properties\r\n            existingFolder.description = folderData.description;\r\n            existingFolder.priority = folderData.priority;\r\n\r\n            // Clear existing todos in the folder\r\n            existingFolder.todos = [];\r\n\r\n            // Add todos from loaded data\r\n            folderData.todos.forEach(todoData => {\r\n              existingFolder.addTodo(todoData.title, todoData.description, todoData.dueDate, todoData.priority);\r\n            });\r\n          } else {\r\n            // Folder doesn't exist, create a new one\r\n            const newFolder = new Folder(folderData.name, folderData.description, folderData.priority);\r\n\r\n            // Add todos from loaded data\r\n            folderData.todos.forEach(todoData => {\r\n              newFolder.addTodo(todoData.title, todoData.description, todoData.dueDate, todoData.priority);\r\n            });\r\n\r\n            // Add the new folder to the temporary array\r\n            loadedFolders.push(newFolder);\r\n\r\n            // Display the new folder\r\n            displayFolder(newFolder);\r\n          }\r\n        });\r\n      }\r\n\r\n      // Clear existing folders and update with loaded data\r\n      folders = loadedFolders;\r\n\r\n      selectedFolder = loadedData.selectedFolder || null;\r\n\r\n      // Update the UI as needed\r\n      // For example, you might want to re-render the todos\r\n      if (selectedFolder) {\r\n        displayTodos(selectedFolder);\r\n      }\r\n    } catch (error) {\r\n      console.error('Error parsing JSON:', error);\r\n    }\r\n  }\r\n}\r\n\r\n\r\n// Call the loadDataFromJson function when the page loads\r\nwindow.addEventListener('load', loadDataFromJson);\r\n\r\nwindow.addEventListener('beforeunload', function () {\r\n  saveDataToJson();\r\n});\r\n\n\n//# sourceURL=webpack://lib/./src/folders.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closePanel: () => (/* binding */ closePanel),\n/* harmony export */   openPanel: () => (/* binding */ openPanel),\n/* harmony export */   showCreateScreen: () => (/* binding */ showCreateScreen),\n/* harmony export */   showToDoScreen: () => (/* binding */ showToDoScreen)\n/* harmony export */ });\n/* harmony import */ var _folders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folders */ \"./src/folders.js\");\n\r\n\r\nconst folders = [];\r\nlet selectedFolder = null;\r\n\r\nfunction closePanel() {\r\n    document.getElementById(\"folders-panel\").style.width = \"0%\";\r\n    document.getElementById(\"goals-panel\").style.width = \"100%\";\r\n    document.getElementById(\"three-lines\").style.visibility = \"visible\";\r\n    document.getElementById(\"new-folder\").style.visibility = \"hidden\";\r\n}\r\n\r\nfunction openPanel() {\r\n    document.getElementById(\"new-folder\").style.visibility = \"visible\";\r\n    document.getElementById(\"folders-panel\").style.width = \"20%\";\r\n    document.getElementById(\"goals-panel\").style.width = \"80%\";\r\n    document.getElementById(\"three-lines\").style.visibility = \"hidden\";\r\n    document.getElementById(\"new-folder\").style.visibility = \"visible\";\r\n}\r\n\r\nfunction showCreateScreen() {\r\n    let formVis = document.getElementById(\"create-form\");\r\n    let folderForm = document.getElementById(\"create-folder\");\r\n\r\n    if (formVis.style.visibility === \"visible\") {\r\n        formVis.style.visibility = \"hidden\";\r\n        folderForm.reset();\r\n    } else {\r\n        formVis.style.visibility = \"visible\";\r\n    }\r\n}\r\n\r\nfunction showToDoScreen() {\r\n    let formVis = document.getElementById(\"todo-form\");\r\n    let folderForm = document.getElementById(\"create-todo\");\r\n\r\n    if (formVis.style.visibility === \"visible\") {\r\n        formVis.style.visibility = \"hidden\";\r\n        folderForm.reset();\r\n    } else {\r\n        formVis.style.visibility = \"visible\";\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://lib/./src/index.js?");

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