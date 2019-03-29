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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_mvc_mvc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/mvc/mvc */ "./src/js/mvc/mvc.js");
/* harmony import */ var _js_mvc_mvc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_mvc_mvc__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/mvc/mvc.js":
/*!***************************!*\
  !*** ./src/js/mvc/mvc.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Model =
/*#__PURE__*/
function () {
  function Model() {
    _classCallCheck(this, Model);
  }

  _createClass(Model, null, [{
    key: "getData",
    value: function getData() {
      View.createUserCityInfoField();
      var userCity = document.querySelector('.user-city').value;
      var url = "http://api.openweathermap.org/data/2.5/weather?q=".concat(userCity.toLowerCase(), "&appid=f49baef6b4984f869cda007be0df0833");
      var kelvinDegree = 273.15;
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (data) {
        var userCityTemp = document.querySelector('.city-temp');
        userCityTemp.innerHTML = "Temperature: ".concat(parseInt(data.main.temp) - kelvinDegree, " C\xB0");
      });
    }
  }]);

  return Model;
}();

var View =
/*#__PURE__*/
function () {
  function View() {
    _classCallCheck(this, View);
  }

  _createClass(View, null, [{
    key: "createSearchCityField",
    value: function createSearchCityField() {
      var app = document.querySelector('.app');
      var searchBlock = document.createElement('div');
      searchBlock.setAttribute('class', 'search-block');
      var userCityInput = document.createElement('input');
      userCityInput.setAttribute('class', 'user-city form-control');
      userCityInput.setAttribute('type', 'search');
      userCityInput.setAttribute('placeholder', 'Type your city');
      var submitButton = document.createElement('button');
      submitButton.setAttribute('class', 'submit-button btn btn-secondary');
      var searchIcon = document.createElement('i');
      searchIcon.setAttribute('class', 'fa fa-search');
      app.appendChild(searchBlock);
      searchBlock.appendChild(userCityInput);
      searchBlock.appendChild(submitButton);
      submitButton.appendChild(searchIcon);
    }
  }, {
    key: "createUserCityInfoField",
    value: function createUserCityInfoField() {
      var app = document.querySelector('.app');
      var infoBlock = document.createElement('div');
      infoBlock.setAttribute('class', 'info-block');
      var cityTemp = document.createElement('p');
      cityTemp.setAttribute('class', 'city-temp');
      app.appendChild(infoBlock);
      infoBlock.appendChild(cityTemp);
    }
  }]);

  return View;
}();

var Controller =
/*#__PURE__*/
function () {
  function Controller() {
    _classCallCheck(this, Controller);
  }

  _createClass(Controller, null, [{
    key: "viewData",
    value: function viewData() {
      View.createSearchCityField();
      var button = document.querySelector('.submit-button');
      button.addEventListener('click', Model.getData);
    }
  }]);

  return Controller;
}();

Controller.viewData();

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/scss/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=script.bundle.js.map