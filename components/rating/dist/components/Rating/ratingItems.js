"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RatingItems;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _star = _interopRequireDefault(require("./star"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function RatingItems(props) {
  var onChange = props.onChange,
      value = props.value,
      name = props.name;
  return Array(5).fill(0).map(function (item, index) {
    var key = "star-".concat(index);
    var filled = index < value;
    return _react["default"].createElement(_star["default"], {
      key: key,
      name: name,
      onChange: onChange,
      value: index + 1,
      filled: filled
    });
  });
}

RatingItems.propTypes = {
  value: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  name: _propTypes["default"].string
};
RatingItems.defaultProps = {
  value: undefined,
  onChange: function onChange() {},
  name: undefined
};

//# sourceMappingURL=ratingItems.js.map