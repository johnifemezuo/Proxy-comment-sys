/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_data_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/data/db */ \"./src/modules/data/db.js\");\n/* harmony import */ var _modules_elements_commentElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/elements/commentElements */ \"./src/modules/elements/commentElements.js\");\n/* harmony import */ var _modules_comments_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/comments/controller */ \"./src/modules/comments/controller.js\");\n// Imported comment database\n // Import all elements\n\n //import controller\n\n\n_modules_elements_commentElements__WEBPACK_IMPORTED_MODULE_1__[\"SUBMITBUTTON\"].addEventListener('click', _modules_comments_controller__WEBPACK_IMPORTED_MODULE_2__[\"appendComment\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIEltcG9ydGVkIGNvbW1lbnQgZGF0YWJhc2VcbmltcG9ydCBDT01NRU5UREIgZnJvbSAnLi9tb2R1bGVzL2RhdGEvZGInO1xuXG4vLyBJbXBvcnQgYWxsIGVsZW1lbnRzXG5pbXBvcnQgKiBhcyBlbGUgIGZyb20gJy4vbW9kdWxlcy9lbGVtZW50cy9jb21tZW50RWxlbWVudHMnO1xuXG4vL2ltcG9ydCBjb250cm9sbGVyXG5pbXBvcnQge2FwcGVuZENvbW1lbnR9IGZyb20gJy4vbW9kdWxlcy9jb21tZW50cy9jb250cm9sbGVyJztcblxuXG5cblxuXG5lbGUuU1VCTUlUQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwZW5kQ29tbWVudCk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/modules/comments/controller.js":
/*!********************************************!*\
  !*** ./src/modules/comments/controller.js ***!
  \********************************************/
/*! exports provided: appendComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendComment\", function() { return appendComment; });\n/* harmony import */ var _elements_commentElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements/commentElements */ \"./src/modules/elements/commentElements.js\");\n/* harmony import */ var _data_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/db */ \"./src/modules/data/db.js\");\n/* harmony import */ var _dates_dates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dates/dates */ \"./src/modules/dates/dates.js\");\n/* harmony import */ var _elements_createViews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/createViews */ \"./src/modules/elements/createViews.js\");\n// import all elements\n // import comment database \n\n // import date object\n\n // imported view\n\n // exporting appendchild function\n\nfunction appendComment(e) {\n  e.preventDefault(); // message input value and name value set\n\n  var msg_value = _elements_commentElements__WEBPACK_IMPORTED_MODULE_0__[\"MESSAGE\"].value;\n  var name_value = _elements_commentElements__WEBPACK_IMPORTED_MODULE_0__[\"USERNAME\"].value; // object that holds the comment values and later append to the comment database\n\n  var obj = {\n    msg_value: msg_value,\n    name_value: name_value,\n    holdDate: _dates_dates__WEBPACK_IMPORTED_MODULE_2__[\"holdDate\"],\n    currentTime: _dates_dates__WEBPACK_IMPORTED_MODULE_2__[\"currentTime\"]\n  }; // checking the inputs for values\n\n  if (msg_value.length < 1 || name_value.length < 1) {\n    return;\n  } else if (msg_value.length < 1 || name_value.length > 1) {\n    // ele.USERNAME.classList.add('red_border');\n    _elements_commentElements__WEBPACK_IMPORTED_MODULE_0__[\"COMMENT_ERR\"].style.display = \"block\";\n  } else {\n    // append to the DOM \n    _elements_commentElements__WEBPACK_IMPORTED_MODULE_0__[\"CONTAINER\"].insertAdjacentHTML('beforeend', Object(_elements_createViews__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(obj)); // reset all styles\n\n    _elements_commentElements__WEBPACK_IMPORTED_MODULE_0__[\"NAME_ERR\"].style.display = 'none';\n    _elements_commentElements__WEBPACK_IMPORTED_MODULE_0__[\"USERNAME\"].classList.remove('red_border'); // reset inputs    \n\n    _elements_commentElements__WEBPACK_IMPORTED_MODULE_0__[\"FOAM\"].reset();\n  } // sets the comment to the localStorage\n\n\n  localStorage.setItem('comments', _elements_commentElements__WEBPACK_IMPORTED_MODULE_0__[\"CONTAINER\"].innerHTML);\n} // gets the comment from the localStorage\n\nvar getFromLocalStorage = localStorage.getItem('comments'); // if(getFromLocalStorage) ele.CONTAINER.innerHTML = getFromLocalStorage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9jb21tZW50cy9jb250cm9sbGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvY29tbWVudHMvY29udHJvbGxlci5qcz8xNDJhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBhbGwgZWxlbWVudHNcbmltcG9ydCAqIGFzIGVsZSBmcm9tICAnLi4vZWxlbWVudHMvY29tbWVudEVsZW1lbnRzJztcblxuLy8gaW1wb3J0IGNvbW1lbnQgZGF0YWJhc2UgXG5pbXBvcnQgQ09NTUVOVERCIGZyb20gJy4uL2RhdGEvZGInO1xuXG4vLyBpbXBvcnQgZGF0ZSBvYmplY3RcbmltcG9ydCB7aG9sZERhdGUsIGN1cnJlbnRUaW1lfSBmcm9tICcuLi9kYXRlcy9kYXRlcyc7XG5cbi8vIGltcG9ydGVkIHZpZXdcbmltcG9ydCBWSUVXIGZyb20gJy4uL2VsZW1lbnRzL2NyZWF0ZVZpZXdzJ1xuXG5cblxuXG5cblxuLy8gZXhwb3J0aW5nIGFwcGVuZGNoaWxkIGZ1bmN0aW9uXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ29tbWVudCAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuXG4vLyBtZXNzYWdlIGlucHV0IHZhbHVlIGFuZCBuYW1lIHZhbHVlIHNldFxuICAgIGxldCAgbXNnX3ZhbHVlID0gZWxlLk1FU1NBR0UudmFsdWVcbiAgICBsZXQgIG5hbWVfdmFsdWUgPSBlbGUuVVNFUk5BTUUudmFsdWVcblxuLy8gb2JqZWN0IHRoYXQgaG9sZHMgdGhlIGNvbW1lbnQgdmFsdWVzIGFuZCBsYXRlciBhcHBlbmQgdG8gdGhlIGNvbW1lbnQgZGF0YWJhc2VcbiAgICBsZXQgb2JqID0ge1xuICAgICAgICBtc2dfdmFsdWUsXG4gICAgICAgIG5hbWVfdmFsdWUsXG4gICAgICAgIGhvbGREYXRlLFxuICAgICAgICBjdXJyZW50VGltZVxuICAgIH1cblxuLy8gY2hlY2tpbmcgdGhlIGlucHV0cyBmb3IgdmFsdWVzXG4gICAgaWYobXNnX3ZhbHVlLmxlbmd0aCA8IDEgfHwgbmFtZV92YWx1ZS5sZW5ndGggPCAxKSB7XG4gICAgICAgIHJldHVyblxuICAgIH0gIFxuICAgIGVsc2UgaWYgKG1zZ192YWx1ZS5sZW5ndGggPCAxIHx8IG5hbWVfdmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyBlbGUuVVNFUk5BTUUuY2xhc3NMaXN0LmFkZCgncmVkX2JvcmRlcicpO1xuICAgICAgICBlbGUuQ09NTUVOVF9FUlIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgIH1cbiAgICBlbHNlIHtcbi8vIGFwcGVuZCB0byB0aGUgRE9NIFxuICAgIGVsZS5DT05UQUlORVIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCAgVklFVyhvYmopICk7XG5cblxuLy8gcmVzZXQgYWxsIHN0eWxlc1xuICAgZWxlLk5BTUVfRVJSLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IFxuICAgZWxlLlVTRVJOQU1FLmNsYXNzTGlzdC5yZW1vdmUoJ3JlZF9ib3JkZXInKTtcblxuXG4vLyByZXNldCBpbnB1dHMgICAgXG4gICAgZWxlLkZPQU0ucmVzZXQoKVxuXG5cbn1cblxuXG5cbi8vIHNldHMgdGhlIGNvbW1lbnQgdG8gdGhlIGxvY2FsU3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb21tZW50cycsIGVsZS5DT05UQUlORVIuaW5uZXJIVE1MKTtcblxufVxuXG5cblxuLy8gZ2V0cyB0aGUgY29tbWVudCBmcm9tIHRoZSBsb2NhbFN0b3JhZ2VcbmxldCBnZXRGcm9tTG9jYWxTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbW1lbnRzJylcblxuLy8gaWYoZ2V0RnJvbUxvY2FsU3RvcmFnZSkgZWxlLkNPTlRBSU5FUi5pbm5lckhUTUwgPSBnZXRGcm9tTG9jYWxTdG9yYWdlO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBSUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/comments/controller.js\n");

/***/ }),

/***/ "./src/modules/data/db.js":
/*!********************************!*\
  !*** ./src/modules/data/db.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar COMMENTDB = [{\n  message: \"this is a comment\",\n  userName: \"Micheal\",\n  date: '2 december 2222',\n  currentTime: '12:45pm'\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (COMMENTDB);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9kYXRhL2RiLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZGF0YS9kYi5qcz9hYjc0Il0sInNvdXJjZXNDb250ZW50IjpbIlxuXG4gY29uc3QgQ09NTUVOVERCID0gW1xuXG4gICAge1xuICAgICAgICBtZXNzYWdlIDogXCJ0aGlzIGlzIGEgY29tbWVudFwiLFxuICAgICAgICB1c2VyTmFtZSA6IFwiTWljaGVhbFwiLFxuICAgICAgICBkYXRlOiAgJzIgZGVjZW1iZXIgMjIyMicsXG4gICAgICAgIGN1cnJlbnRUaW1lIDogJzEyOjQ1cG0nXG4gICAgfVxuXG5dXG5cbmV4cG9ydCBkZWZhdWx0IENPTU1FTlREQjtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/data/db.js\n");

/***/ }),

/***/ "./src/modules/dates/dates.js":
/*!************************************!*\
  !*** ./src/modules/dates/dates.js ***!
  \************************************/
/*! exports provided: holdDate, currentTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"holdDate\", function() { return holdDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"currentTime\", function() { return currentTime; });\n//  date/time\nvar dt = new Date();\nvar minute = dt.getMinutes();\nvar hour = dt.getHours();\nvar prepend = hour >= 12 ? \"PM\" : \"AM\";\nvar currentTime = hour + \":\" + minute + \" \" + prepend; //get day and month\n\nvar month = dt.getMonth();\nvar year = dt.getFullYear();\nvar todayDate = dt.getDate();\nvar months = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\nvar holdDate = \"\".concat(todayDate, \" \").concat(months[month], \"  \").concat(year);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9kYXRlcy9kYXRlcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2RhdGVzL2RhdGVzLmpzPzUwYTQiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLy8gIGRhdGUvdGltZVxuICAgIGNvbnN0IGR0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IG1pbnV0ZSA9IGR0LmdldE1pbnV0ZXMoKTtcbiAgICAgICAgbGV0IGhvdXIgPSBkdC5nZXRIb3VycygpXG4gICAgICAgIGxldCBwcmVwZW5kID0gaG91ciA+PSAxMj8gXCJQTVwiOlwiQU1cIjtcbiAgICAgICAgbGV0IGN1cnJlbnRUaW1lID0gaG91ciArIFwiOlwiICsgbWludXRlICsgXCIgXCIgKyBwcmVwZW5kO1xuICAgICAgICBcbiAgICAgICAgLy9nZXQgZGF5IGFuZCBtb250aFxuICAgICAgICBsZXQgbW9udGggPSBkdC5nZXRNb250aCgpO1xuICAgICAgICBsZXQgeWVhciA9IGR0LmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGxldCB0b2RheURhdGUgPSBkdC5nZXREYXRlKCk7XG4gICAgXG4gICAgICAgIGxldCBtb250aHMgPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXTtcbiAgICAgICAgbGV0IGhvbGREYXRlID0gYCR7dG9kYXlEYXRlfSAke21vbnRoc1ttb250aF19ICAke3llYXJ9YDtcbiAgXG4gIGV4cG9ydCB7aG9sZERhdGUsIGN1cnJlbnRUaW1lfTtcblxuXG5cbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/dates/dates.js\n");

/***/ }),

/***/ "./src/modules/elements/commentElements.js":
/*!*************************************************!*\
  !*** ./src/modules/elements/commentElements.js ***!
  \*************************************************/
/*! exports provided: USERNAME, MESSAGE, SUBMITBUTTON, CONTAINER, FOAM, NAME_ERR, COMMENT_ERR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USERNAME\", function() { return USERNAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MESSAGE\", function() { return MESSAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SUBMITBUTTON\", function() { return SUBMITBUTTON; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CONTAINER\", function() { return CONTAINER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOAM\", function() { return FOAM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NAME_ERR\", function() { return NAME_ERR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COMMENT_ERR\", function() { return COMMENT_ERR; });\nvar USERNAME = document.querySelector('#name_field');\nvar MESSAGE = document.querySelector('#comment_box'); // BUTTON\n\nvar SUBMITBUTTON = document.querySelector('.submit'); // COMMENT WRAPPER\n\nvar CONTAINER = document.querySelector('.comments');\nvar FOAM = document.querySelector('.form'); // ERROR MESSAGE\n\nvar NAME_ERR = document.querySelector('.err');\nvar COMMENT_ERR = document.querySelector('.err_2');\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9lbGVtZW50cy9jb21tZW50RWxlbWVudHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9lbGVtZW50cy9jb21tZW50RWxlbWVudHMuanM/YzZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3QgVVNFUk5BTUUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZV9maWVsZCcpO1xuY29uc3QgTUVTU0FHRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50X2JveCcpO1xuXG4vLyBCVVRUT05cbmNvbnN0IFNVQk1JVEJVVFRPTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKVxuXG4vLyBDT01NRU5UIFdSQVBQRVJcbmNvbnN0IENPTlRBSU5FUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cycpXG5cbmNvbnN0IEZPQU0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuXG4vLyBFUlJPUiBNRVNTQUdFXG5jb25zdCBOQU1FX0VSUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnInKTtcbmNvbnN0IENPTU1FTlRfRVJSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycl8yJyk7XG5cblxuZXhwb3J0IHtcbiAgICAgICAgICAgICAgVVNFUk5BTUUsIFxuICAgICAgICAgICAgICBNRVNTQUdFLCBcbiAgICAgICAgICAgICAgU1VCTUlUQlVUVE9OLFxuICAgICAgICAgICAgICBDT05UQUlORVIsXG4gICAgICAgICAgICAgIEZPQU0sXG4gICAgICAgICAgICAgIE5BTUVfRVJSLFxuICAgICAgICAgICAgICBDT01NRU5UX0VSUlxuICAgICAgICAgICAgfVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/elements/commentElements.js\n");

/***/ }),

/***/ "./src/modules/elements/createViews.js":
/*!*********************************************!*\
  !*** ./src/modules/elements/createViews.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar VIEW = function VIEW(commentObj) {\n  return \"\\n    <div class=\\\"comment legpad\\\">\\n            <div class=\\\"avater\\\">\\n                <img src=\\\"./assert/img/man-avatar.jpg\\\" alt=\\\"\\\" class=\\\"user-pic\\\">\\n                <p class=\\\"name\\\">\".concat(commentObj.name_value, \"</p>\\n            </div>\\n\\n            <div class=\\\"text\\\">\\n                <p class=\\\"comment_text\\\"> \").concat(commentObj.msg_value, \"</p>\\n                    <div class=\\\"replay-box\\\">\\n                        <span class=\\\"replay\\\">Replay</span>\\n                        <span class=\\\"date\\\">\").concat(commentObj.holdDate, \"</span>\\n                        <span class=\\\"time\\\">\").concat(commentObj.currentTime, \"</span>\\n                    </div>\\n            </div>\\n    </div>\\n    \");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VIEW);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9lbGVtZW50cy9jcmVhdGVWaWV3cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2VsZW1lbnRzL2NyZWF0ZVZpZXdzLmpzPzYxYWMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuY29uc3QgVklFVyA9IChjb21tZW50T2JqKSA9PiB7XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwiY29tbWVudCBsZWdwYWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdmF0ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXJ0L2ltZy9tYW4tYXZhdGFyLmpwZ1wiIGFsdD1cIlwiIGNsYXNzPVwidXNlci1waWNcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5hbWVcIj4ke2NvbW1lbnRPYmoubmFtZV92YWx1ZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbW1lbnRfdGV4dFwiPiAke2NvbW1lbnRPYmoubXNnX3ZhbHVlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlcGxheS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVwbGF5XCI+UmVwbGF5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlXCI+JHtjb21tZW50T2JqLmhvbGREYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGltZVwiPiR7Y29tbWVudE9iai5jdXJyZW50VGltZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVklFVztcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJtYXBwaW5ncyI6IkFBR0E7QUFBQTtBQUNBO0FBaUJBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/elements/createViews.js\n");

/***/ })

/******/ });