/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	//This global JS provided to all aps

	console.log("logging from the ustils.js file");


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	// we use the following command  to bundle our file to bundle.js:
	// webpack ./fileName.js bundle.js  
	// or if you have webpack configuration file, just execute in terminal:
	// webpack
	__webpack_require__(3);

	document.write("Welcome,  to Big Hair Concerts!!");

	console.log("App loaded");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	//console.log("login loaded");

	var login = function login(username, password) {
	    if (username !== "admin" || password !== "radical") {
	        console.log("incorrect login");
	    }
	};

	login("admin", "idunno");

/***/ })
/******/ ]);