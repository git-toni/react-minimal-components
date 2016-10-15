(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["react-minimal-components"] = factory(require("react"));
	else
		root["react-minimal-components"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Select = undefined;

	var _Select = __webpack_require__(2);

	var _Select2 = _interopRequireDefault(_Select);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rmc = {
	  Select: _Select2.default
	};

	exports.Select = _Select2.default;
	exports.default = rmc;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function getValueFromOption(option) {
	  (0, _utils.isObject)(option) ? option.value : option;
	}

	var Select = function (_React$Component) {
	  _inherits(Select, _React$Component);

	  function Select(props) {
	    _classCallCheck(this, Select);

	    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

	    _this.state = {
	      options: props.options,
	      chosenOption: props.defaultValue
	    };
	    _this._onSelect = _this._onSelect.bind(_this);
	    return _this;
	  }

	  _createClass(Select, [{
	    key: '_onSelect',
	    value: function _onSelect(e) {
	      var val = e.target.value;
	      var opt = (0, _utils.finder)('value')(val)(this.state.options);
	      this.setState({ chosenOption: opt });
	      if (this.props.onChange) this.props.onChange.call(null, opt);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state = this.state;
	      var options = _state.options;
	      var chosenOption = _state.chosenOption;

	      var defaultOptionValue = getValueFromOption(chosenOption);
	      return _react2.default.createElement(
	        'select',
	        _extends({}, this.props, { onChange: this._onSelect, value: defaultOptionValue }),
	        options.map(function (c) {
	          return _react2.default.createElement(
	            'option',
	            { key: c.value, value: c.value },
	            c.label
	          );
	        })
	      );
	    }
	  }]);

	  return Select;
	}(_react2.default.Component);

	Select.propTypes = {
	  options: _react2.default.PropTypes.array.isRequired,
	  defaultValue: _react2.default.PropTypes.any // can either be the 'value' field or the whole option object
	};
	Select.defaultProps = {
	  options: [],
	  defaultValue: ''
	};

	exports.default = Select;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isObject = isObject;
	exports.finder = finder;
	function isObject(who) {
	  return who === Object(who);
	}
	function finder(attr) {
	  return function (val) {
	    return function (collection) {
	      var el = void 0;
	      for (var i = 0; i < collection.length; i++) {
	        if (collection[i][attr] === val) {
	          el = collection[i];
	          break;
	        }
	      }
	      return el;
	    };
	  };
	}

/***/ }
/******/ ])
});
;