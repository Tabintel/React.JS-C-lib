"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Primary = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("./Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = {
  title: 'Button',
  component: _Button["default"]
};
exports["default"] = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_Button["default"], args);
};
var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  label: 'Click me!'
};