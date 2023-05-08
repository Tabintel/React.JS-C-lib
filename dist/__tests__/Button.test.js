"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _Button = _interopRequireDefault(require("../Button"));
require("@testing-library/jest-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
test('renders button with label', function () {
  var _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      label: "Click me!"
    })),
    getByText = _render.getByText;
  var buttonElement = getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});