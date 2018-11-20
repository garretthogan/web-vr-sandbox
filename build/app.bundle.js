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

/***/ "./src/components/back-up-on-hover.js":
/*!********************************************!*\
  !*** ./src/components/back-up-on-hover.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'back-up-on-hover',
  init: function () {
    const el = this.el;
    el.addEventListener('mouseenter', () => {
      this.isTargeted = true;
    });
    el.addEventListener('mouseleave', () => {
      this.isTargeted = false;
    });
  },
  tick: function () {
    if (!this.isTargeted) return;
    this.backUp();
  },
  backUp: function () {
    const el = this.el;
    const currentPosition = el.getAttribute('position');
    console.log({
      currentPosition
    });
    el.setAttribute('position', Object.assign({}, currentPosition, {
      z: currentPosition.z - 0.0025
    }));
  }
});

/***/ }),

/***/ "./src/components/change-color-on-hover.js":
/*!*************************************************!*\
  !*** ./src/components/change-color-on-hover.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'change-color-on-hover',
  schema: {
    color: {
      default: 'red'
    }
  },
  init: function () {
    const data = this.data;
    const el = this.el;
    const defaultColor = el.getAttribute('material').color;
    el.addEventListener('mouseenter', function () {
      el.setAttribute('color', data.color);
    });
    el.addEventListener('mouseleave', function () {
      el.setAttribute('color', defaultColor);
    });
  }
});

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _back_up_on_hover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./back-up-on-hover */ "./src/components/back-up-on-hover.js");
/* harmony import */ var _change_color_on_hover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-color-on-hover */ "./src/components/change-color-on-hover.js");


/* harmony default export */ __webpack_exports__["default"] = ([_back_up_on_hover__WEBPACK_IMPORTED_MODULE_0__["default"], _change_color_on_hover__WEBPACK_IMPORTED_MODULE_1__["default"]]);

/***/ }),

/***/ "./src/entities/actor.js":
/*!*******************************!*\
  !*** ./src/entities/actor.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Actor {
  constructor(props) {
    _defineProperty(this, "register", scene => {
      scene.appendChild(this.el);
    });

    const el = document.createElement('a-entity');
    el.setAttribute('position', props.position || {
      x: 0,
      y: 0,
      z: 0
    });
    el.setAttribute('rotation', props.rotation || {
      x: 0,
      y: 0,
      z: 0
    });
    this.el = el;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Actor);

/***/ }),

/***/ "./src/entities/mesh-actor.js":
/*!************************************!*\
  !*** ./src/entities/mesh-actor.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actor */ "./src/entities/actor.js");


class MeshActor extends _actor__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(props) {
    super(props);
    this.el.setAttribute('gltf-model', props.mesh);
    this.el.setAttribute('scale', props.scale || {
      x: 1,
      y: 1,
      z: 1
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MeshActor);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components/index.js");
/* harmony import */ var _entities_mesh_actor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities/mesh-actor */ "./src/entities/mesh-actor.js");


const TREE = '/assets/xmas-tree/xmas-tree.gltf';
const SNOWMAN = '/assets/snowman/snowman.gltf';
const CABIN = '/assets/winter-cabin/winter-cabin.gltf';

const createTree = (x, y, z) => {
  return new _entities_mesh_actor__WEBPACK_IMPORTED_MODULE_1__["default"]({
    position: {
      x,
      y,
      z
    },
    mesh: TREE
  }).el;
};

const createSnowman = (x, y, z, rot = 0) => {
  return new _entities_mesh_actor__WEBPACK_IMPORTED_MODULE_1__["default"]({
    position: {
      x,
      y,
      z
    },
    rotation: {
      x: 0,
      y: rot,
      z: 0
    },
    mesh: SNOWMAN
  }).el;
};

const createCabin = (x, y, z, rot = 0, scale = 1) => {
  return new _entities_mesh_actor__WEBPACK_IMPORTED_MODULE_1__["default"]({
    position: {
      x,
      y,
      z
    },
    rotation: {
      x: 0,
      y: rot,
      z: 0
    },
    scale: {
      x: scale,
      y: scale,
      z: scale
    },
    mesh: CABIN
  }).el;
};

_components__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(c => window.AFRAME.registerComponent(c.name, c));
window.addEventListener('load', () => {
  const scene = document.querySelector('a-scene');
  scene.appendChild(createTree(2, -1, -3));
  scene.appendChild(createSnowman(-1, 2, -2.2, -45));
  scene.appendChild(createCabin(-1, 4, -5, -180, 2));
});

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map