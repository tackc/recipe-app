"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ratingItems = _interopRequireDefault(require("./ratingItems"));

var _utils = require("../../libs/utils");

var _RenderIf = _interopRequireDefault(require("../RenderIf"));

var _container = _interopRequireDefault(require("./styled/container"));

var _label = _interopRequireDefault(require("./styled/label"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/** @category Form */
var Rating =
/*#__PURE__*/
function (_Component) {
  _inherits(Rating, _Component);

  function Rating(props) {
    var _this;

    _classCallCheck(this, Rating);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rating).call(this, props));
    _this.state = {
      value: props.value
    };
    _this.starGroupNameId = (0, _utils.uniqueId)('starGroup');
    _this.handleOnHover = _this.handleOnHover.bind(_assertThisInitialized(_this));
    _this.handleOnLeave = _this.handleOnLeave.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Rating, [{
    key: "getName",
    value: function getName() {
      var name = this.props.name;

      if (name) {
        return name;
      }

      return this.starGroupNameId;
    }
  }, {
    key: "handleOnHover",
    value: function handleOnHover(event) {
      if (event.target.value) {
        return this.setState({
          value: event.target.value
        });
      }

      return null;
    }
  }, {
    key: "handleOnLeave",
    value: function handleOnLeave() {
      return this.setState({
        value: this.props.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          className = _this$props.className,
          onChange = _this$props.onChange,
          label = _this$props.label;
      var value = this.state.value;
      return _react["default"].createElement(_container["default"], {
        onMouseOver: this.handleOnHover,
        onMouseLeave: this.handleOnLeave,
        className: className,
        style: style
      }, _react["default"].createElement(_RenderIf["default"], {
        isTrue: !!label
      }, _react["default"].createElement(_label["default"], null, label)), _react["default"].createElement(_ratingItems["default"], {
        onChange: onChange,
        value: value,
        name: this.getName()
      }));
    }
  }]);

  return Rating;
}(_react.Component);

exports["default"] = Rating;
Rating.propTypes = {
  /** The value of the rating stars. This value defaults to 0. */
  value: _propTypes["default"].string,

  /** The action triggered when a value attribute changes. */
  onChange: _propTypes["default"].func,

  /** An identifier for the group of radio items. */
  name: _propTypes["default"].string,

  /** The rating label */
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),

  /** A CSS class for the outer element, in addition to the component's base classes. */
  className: _propTypes["default"].string,

  /** An object with custom style applied for the outer element. */
  style: _propTypes["default"].object
};
Rating.defaultProps = {
  value: undefined,
  onChange: function onChange() {},
  name: undefined,
  label: null,
  className: undefined,
  style: undefined
};

//# sourceMappingURL=index.js.map