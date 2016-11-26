(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-minimal-components"] = factory(require("react"));
	else
		root["react-minimal-components"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
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
	
	var _Input = __webpack_require__(5);
	
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//import omit from 'lodash/omit'
	//import {omit} from 'lodash'
	
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
	      var _state = this.state,
	          options = _state.options,
	          chosenOption = _state.chosenOption,
	          labelField = _state.labelField,
	          valueField = _state.valueField;
	
	      var defaultOptionValue = getValueFromOption(chosenOption);
	      //let actualProps = omit(this.props, ['onChange', 'options', 'defaultValue','labelField','valueField'])
	
	      var _props = this.props,
	          oc = _props.onChange,
	          op = _props.options,
	          dv = _props.defaultValue,
	          lf = _props.labelField,
	          vf = _props.valueField,
	          actualProps = _objectWithoutProperties(_props, ['onChange', 'options', 'defaultValue', 'labelField', 'valueField']);
	
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
	exports.indexOf = indexOf;
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
	
	function indexOf(arr, el) {
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i] == el) return i;
	  }
	  return -1;
	}

/***/ },
/* 5 */
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
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//mport omit from 'lodash/omit'
	//import indexOf from 'lodash/indexOf'
	//import {omit, indexOf} from 'lodash'
	
	function verifyType(typein) {
	  var ts = new Array('radio', 'checkbox');
	  //if(Array.indexOf(ts, typein) > -1){
	  if ((0, _utils.indexOf)(ts, typein) > -1) {
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
	      //let actualProps = omit(this.props, ['onChange', 'value'])
	
	      var _props = this.props,
	          _oc = _props.onChange,
	          _va = _props.value,
	          actualProps = _objectWithoutProperties(_props, ['onChange', 'value']);
	
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