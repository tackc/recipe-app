"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../../../styles/colors");

var _fontSizes = require("../../../styles/fontSizes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    border: 0;\n    padding: 0;\n    color: ", ";\n    font-size: ", ";\n    line-height: 1.5;\n    margin-bottom: 0.125rem;\n    align-self: center;\n\n    &:empty {\n        margin: 0;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledLabel = _styledComponents["default"].legend(_templateObject(), _colors.COLOR_GRAY_4, _fontSizes.FONT_SIZE_TEXT_MEDIUM);

var _default = StyledLabel;
exports["default"] = _default;

//# sourceMappingURL=label.js.map