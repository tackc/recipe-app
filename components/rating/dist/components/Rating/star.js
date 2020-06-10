"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AssistiveText = _interopRequireDefault(require("../AssistiveText"));

var _utils = require("../../libs/utils");

var _starFill = _interopRequireDefault(require("./starFill"));

var _starBordered = _interopRequireDefault(require("./starBordered"));

var _starContainer = _interopRequireDefault(require("./styled/starContainer"));

var _starInput = _interopRequireDefault(require("./styled/starInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Star =
/*#__PURE__*/
function (_Component) {
  _inherits(Star, _Component);

  function Star(props) {
    var _this;

    _classCallCheck(this, Star);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Star).call(this, props));
    _this.starId = (0, _utils.uniqueId)('star');
    return _this;
  }

  _createClass(Star, [{
    key: "getAssitiveText",
    value: function getAssitiveText() {
      var value = this.props.value;

      if (value === 1) {
        return "".concat(value, " Star");
      }

      return "".concat(value, " Stars");
    }
  }, {
    key: "renderStar",
    value: function renderStar() {
      var filled = this.props.filled;

      if (filled) {
        return _react["default"].createElement(_starFill["default"], null);
      }

      return _react["default"].createElement(_starBordered["default"], null);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          value = _this$props.value,
          name = _this$props.name;
      return _react["default"].createElement(_starContainer["default"], null, _react["default"].createElement(_starInput["default"], {
        type: "radio",
        id: this.starId,
        value: value,
        name: name,
        onChange: onChange
      }), _react["default"].createElement("label", {
        htmlFor: this.starId
      }, this.renderStar(), _react["default"].createElement(_AssistiveText["default"], {
        text: this.getAssitiveText()
      })));
    }
  }]);

  return Star;
}(_react.Component);

exports["default"] = Star;
Star.propTypes = {
  value: _propTypes["default"].number,
  onChange: _propTypes["default"].func,
  filled: _propTypes["default"].bool.isRequired,
  name: _propTypes["default"].string
};
Star.defaultProps = {
  value: 1,
  onChange: function onChange() {},
  name: undefined
};

//# sourceMappingURL=star.js.map