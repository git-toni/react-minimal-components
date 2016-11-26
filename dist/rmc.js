(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "_"], factory);
	else if(typeof exports === 'object')
		exports["react-minimal-components"] = factory(require("react"), require("lodash"));
	else
		root["react-minimal-components"] = factory(root["React"], root["_"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
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
	exports.Select = exports.Input = undefined;
	
	var _Select = __webpack_require__(2);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Input = __webpack_require__(6);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var rmc = {
	  Select: _Select2.default,
	  Input: _Input2.default
	};
	
	exports.Input = _Input2.default;
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
	
	var _lodash = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import omit from 'lodash/omit'
	
	
	function getValueFromOption(option) {
	  return (0, _utils.isObject)(option) ? option.value : option;
	}
	
	var Select = function (_React$Component) {
	  _inherits(Select, _React$Component);
	
	  function Select(props) {
	    _classCallCheck(this, Select);
	
	    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));
	
	    _this.state = {
	      options: props.options,
	      chosenOption: props.defaultValue,
	      labelField: props.labelField || 'label',
	      valueField: props.valueField || 'value'
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
	      var labelField = _state.labelField;
	      var valueField = _state.valueField;
	
	      var defaultOptionValue = getValueFromOption(chosenOption);
	      var actualProps = (0, _lodash.omit)(this.props, ['onChange', 'options', 'defaultValue', 'labelField', 'valueField']);
	      return _react2.default.createElement(
	        'select',
	        _extends({}, actualProps, { onChange: this._onSelect, value: defaultOptionValue }),
	        options.map(function (c) {
	          return _react2.default.createElement(
	            'option',
	            { key: c[valueField], value: c[valueField] },
	            c[labelField]
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

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
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
	
	var _lodash = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	//import omit from 'lodash/omit'
	//import indexOf from 'lodash/indexOf'
	
	
	function verifyType(typein) {
	  var ts = new Array('radio', 'checkbox');
	  if ((0, _lodash.indexOf)(ts, typein) > -1) {
	    throw 'Please use <CheckboxInput /> instead for this type of input.';
	  }
	}
	
	var Input = function (_React$Component) {
	  _inherits(Input, _React$Component);
	
	  function Input(props) {
	    _classCallCheck(this, Input);
	
	    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));
	
	    _this.state = {
	      value: props.value
	    };
	    _this._onChange = _this._onChange.bind(_this);
	    verifyType(props.type);
	    return _this;
	  }
	
	  _createClass(Input, [{
	    key: '_onChange',
	    value: function _onChange(e) {
	      var value = e.target.value;
	      this.setState({ value: value });
	      if (this.props.onChange) this.props.onChange.call(null, e.target);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var value = this.state.value;
	
	      var renderValue = value || '';
	      var actualProps = (0, _lodash.omit)(this.props, ['onChange', 'value']);
	      return _react2.default.createElement('input', _extends({}, actualProps, { onChange: this._onChange, value: renderValue }));
	    }
	  }]);
	
	  return Input;
	}(_react2.default.Component);
	
	Input.propTypes = {
	  value: _react2.default.PropTypes.any
	};
	Input.defaultProps = {
	  value: ''
	};
	
	exports.default = Input;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=rmc.js.map